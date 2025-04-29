
# ===================================================
# WORKING  - OPEN AI KEY

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import openai

# app = Flask(__name__)

# # Enable CORS for React frontend
# CORS(app, resources={r"/debate": {"origins": "http://localhost:3000"}})

# # Set OpenAI API Key
# openai.api_key = ""

# # Keep a list to store chat history
# chat_history = [
#     {"role": "system", "content": "You are a highly skilled debater. Always give a direct, strong counter-argument within 100 words. Do not agree with the user."}
# ]

# def generate_debate_response(topic, stance, user_argument):
#     global chat_history

#     # Add the user message formatted for maximum clarity
#     chat_history.append({
#         "role": "user",
#         "content": f"""
# Debate Topic: {topic}
# User Stance: {stance}
# User Argument: {user_argument}

# Your task:
# - Strongly oppose the user's argument.
# - Provide a clear, logical, factual counter-argument.
# - Your reply must be direct and within 100 words.
# - Avoid agreeing or softening the counter.
# Start now.
# """
#     })

#     response = openai.chat.completions.create(
#         model="gpt-4o-mini",
#         messages=chat_history
#     )

#     ai_message = response.choices[0].message.content.strip()

#     # Add AI's reply to history
#     chat_history.append({"role": "assistant", "content": ai_message})

#     return ai_message

# def analyze_scores(user_argument, ai_response):
#     """Generate AI-based scores separately for User and AI."""
#     prompt = f"""
#     Evaluate both the user's argument and the AI's rebuttal separately based on these:

#     For each:
#     1. Logical Strength (0-10) - How well-reasoned and structured?
#     2. Relevance (0-10) - How directly related to the topic?
#     3. Persuasiveness (0-10) - How convincing?

#     Output in this clear format:

#     USER:
#     Logical Strength: X/10 - Explanation
#     Relevance: X/10 - Explanation
#     Persuasiveness: X/10 - Explanation

#     AI:
#     Logical Strength: X/10 - Explanation
#     Relevance: X/10 - Explanation
#     Persuasiveness: X/10 - Explanation

#     User Argument: {user_argument}
#     AI Rebuttal: {ai_response}
#     """

#     response = openai.chat.completions.create(
#         model="gpt-4o-mini",
#         messages=[
#             {"role": "system", "content": "You are a very strict, logical debate judge."},
#             {"role": "user", "content": prompt}
#         ]
#     )

#     return response.choices[0].message.content.strip()
# @app.route("/debate", methods=["POST"])
# def debate():
#     """Handle debate requests."""
#     data = request.json
#     topic = data.get("topic")
#     stance = data.get("stance")
#     user_argument = data.get("user_argument")

#     if not topic or not stance or not user_argument:
#         return jsonify({"error": "Missing required fields"}), 400

#     try:
#         ai_response = generate_debate_response(topic, stance, user_argument)
#         score_feedback = analyze_scores(user_argument, ai_response)

#         return jsonify({
#             "ai_response": ai_response,
#             "score_feedback": score_feedback,
#         })
    
#     except openai.OpenAIError as e:
#         print(f"Error: {str(e)}")
#         return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

# if __name__ == "__main__":
#     app.run(debug=True)

# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# THINKING.AI KEY 

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import time
import requests
import json

app = Flask(__name__)
CORS(app, resources={r"/debate": {"origins": "http://localhost:3000"}})

# Together.ai API settings
TOGETHER_API_KEY = os.getenv("TOGETHER_API_KEY", "")
TOGETHER_API_URL = ""
MODEL_NAME = ""

# Retry/back-off settings
MAX_RETRIES = 5
INITIAL_BACKOFF = 1  # seconds

debate_history = []

def call_with_backoff(payload):
    """POST to Together API, retry on 429 with exponential back-off."""
    headers = {
        "Authorization": f"Bearer {TOGETHER_API_KEY}",
        "Content-Type": "application/json"
    }
    backoff = INITIAL_BACKOFF
    for attempt in range(1, MAX_RETRIES + 1):
        resp = requests.post(TOGETHER_API_URL, headers=headers, json=payload)
        if resp.status_code == 200:
            return resp.json()
        elif resp.status_code == 429:
            # Honor Retry-After if given
            retry_after = resp.headers.get("Retry-After")
            wait = int(retry_after) if retry_after and retry_after.isdigit() else backoff
            app.logger.warning(f"Rate-limited (429). Retrying in {wait}s (attempt {attempt}/{MAX_RETRIES})")
            time.sleep(wait)
            backoff *= 2
        else:
            # other error
            raise Exception(f"Together API error {resp.status_code}: {resp.text}")
    raise Exception("Rate limit exceeded after retries.")

def generate_debate_response(topic, stance, user_argument):
    """Generate a counter-argument via Together API."""
    opposite = "Against" if stance == "For" else "For"
    prompt = (
        f"Topic: {topic}\n"
        f"The user is arguing {stance}:\n{user_argument}\n\n"
        f"Your task: Argue from the {opposite} side with strong logic and persuasive language. "
        f"Keep it concise (under 100 words)."
    )
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": "You are a highly skilled debater. Never agree with the user's argument."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7,
        "max_tokens": 150
    }
    result = call_with_backoff(payload)
    return result["choices"][0]["message"]["content"].strip()

def analyze_scores(user_arg, ai_resp):
    """Score both user and AI arguments on logic, relevance, persuasiveness."""
    judge_prompt = (
        "You are a very strict debate judge.\n\n"
        "Evaluate separately:\n"
        "- Logical Strength (0-10): Reasoning, structure, clarity\n"
        "- Relevance (0-10): Direct connection to the debate topic\n"
        "- Persuasiveness (0-10): How convincing and forceful\n\n"
        f"User's Argument:\n{user_arg}\n\n"
        f"AI's Rebuttal:\n{ai_resp}\n\n"
        "Output valid JSON like:\n"
        "{\n"
        '  "user_scores": {\n'
        '    "logical_strength": {"score": X, "explanation": "..."},\n'
        '    "relevance":         {"score": X, "explanation": "..."},\n'
        '    "persuasiveness":    {"score": X, "explanation": "..."}\n'
        '  },\n'
        '  "ai_scores": {\n'
        '    "logical_strength": {"score": X, "explanation": "..."},\n'
        '    "relevance":         {"score": X, "explanation": "..."},\n'
        '    "persuasiveness":    {"score": X, "explanation": "..."}\n'
        '  }\n'
        "}"
    )
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": "You are a strict and objective debate judge."},
            {"role": "user", "content": judge_prompt}
        ],
        "temperature": 0.2,
        "max_tokens": 500
    }
    result = call_with_backoff(payload)
    content = result["choices"][0]["message"]["content"].strip()
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        return {
            "error": "Could not parse JSON scores",
            "raw_response": content
        }

@app.route("/debate", methods=["POST"])
def debate():
    data = request.json or {}
    topic = data.get("topic")
    stance = data.get("stance")
    user_arg = data.get("user_argument")
    if not (topic and stance and user_arg):
        return jsonify({"error": "Missing required fields"}), 400

    try:
        ai_resp = generate_debate_response(topic, stance, user_arg)
        debate_history.append({"user_argument": user_arg, "ai_response": ai_resp})
        score_feedback = analyze_scores(user_arg, ai_resp)
        return jsonify({
            "ai_response": ai_resp,
            "score_feedback": score_feedback,
            "debate_history": debate_history
        })
    except Exception as e:
        msg = str(e)
        if "Rate limit exceeded" in msg or "429" in msg:
            return jsonify({"error": "Too many requests — please wait and try again."}), 429
        return jsonify({"error": f"Internal error: {msg}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
