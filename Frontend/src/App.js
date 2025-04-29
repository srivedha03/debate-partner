// import React, { useState } from "react";
// import axios from "axios";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

// function App() {
//   const [topic, setTopic] = useState("");
//   const [userInput, setUserInput] = useState("");
//   const [response, setResponse] = useState("");
//   const [score, setScore] = useState(null);

//   const { transcript, listening, resetTranscript } = useSpeechRecognition();

//   const handleDebate = async () => {
//     const res = await axios.post("http://127.0.0.1:5000/debate", {
//       topic,
//       user_input: userInput || transcript,
//     });
//     setResponse(res.data.response);
//     setScore(res.data.score);
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         maxWidth: "500px",
//         margin: "auto",
//         textAlign: "center",
//       }}
//     >
//       <h1>🗣 AI Debate Partner</h1>
//       <input
//         type="text"
//         placeholder="Enter Debate Topic"
//         onChange={(e) => setTopic(e.target.value)}
//       />
//       <textarea
//         placeholder="Your Argument"
//         value={userInput || transcript}
//         onChange={(e) => setUserInput(e.target.value)}
//       />

//       <button onClick={handleDebate}>Debate!</button>
//       <button onClick={SpeechRecognition.startListening}>
//         {listening ? "Listening..." : "🎤 Speak Argument"}
//       </button>
//       <button onClick={resetTranscript}>Reset Speech</button>

//       {response && (
//         <>
//           <h3>AI's Counterargument:</h3>
//           <p>{response}</p>
//           <h4>Your Argument Score: {score} / 10</h4>
//         </>
//       )}
//     </div>
//   );
// }
// export default App;

// WORKING!!

// import React, { useState } from "react";
// import axios from "axios";
// function App() {
//   const [topic, setTopic] = useState("");
//   const [stance, setStance] = useState("For");
//   const [userArgument, setUserArgument] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [factCheck, setFactCheck] = useState("");

//   const handleDebate = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/debate", {
//         topic,
//         stance,
//         user_argument: userArgument,
//       });

//       setAiResponse(response.data.ai_response);
//       setFactCheck(response.data.fact_check);
//     } catch (error) {
//       console.error("Error fetching debate response:", error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
//       <h2>AI Debate Partner</h2>
//       <label>Topic:</label>
//       <input
//         type="text"
//         value={topic}
//         onChange={(e) => setTopic(e.target.value)}
//         placeholder="Enter a debate topic"
//       />
//       <br />
//       <label>Stance:</label>
//       <select value={stance} onChange={(e) => setStance(e.target.value)}>
//         <option value="For">For</option>
//         <option value="Against">Against</option>
//       </select>
//       <br />
//       <label>Your Argument:</label>
//       <textarea
//         value={userArgument}
//         onChange={(e) => setUserArgument(e.target.value)}
//         placeholder="Enter your argument"
//       />
//       <br />
//       <button onClick={handleDebate}>Debate</button>

//       {aiResponse && (
//         <div>
//           <h3>AI's Response:</h3>
//           <p>{aiResponse}</p>
//           <h4>Fact-Check:</h4>
//           <p>{factCheck}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;

// ---------------WORKING (ABOVE)---------------

// import React, { useState } from "react";
// import axios from "axios";
// function App() {
//   const [topic, setTopic] = useState("");
//   const [stance, setStance] = useState("For");
//   const [userArgument, setUserArgument] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [factCheck, setFactCheck] = useState("");
//   const [scoreFeedback, setScoreFeedback] = useState("");

//   const handleDebate = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/debate", {
//         topic,
//         stance,
//         user_argument: userArgument,
//       });

//       setAiResponse(response.data.ai_response);
//       setFactCheck(response.data.fact_check);
//       setScoreFeedback(response.data.score_feedback);
//     } catch (error) {
//       console.error("Error fetching debate response:", error);
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "700px",
//         margin: "auto",
//         padding: "20px",
//         fontFamily: "Arial",
//       }}
//     >
//       <h2>🧠 AI Debate Partner</h2>

//       <label>Topic:</label>
//       <input
//         type="text"
//         value={topic}
//         onChange={(e) => setTopic(e.target.value)}
//         placeholder="Enter a debate topic"
//         style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
//       />

//       <label>Stance:</label>
//       <select
//         value={stance}
//         onChange={(e) => setStance(e.target.value)}
//         style={{ width: "100%", padding: "5px" }}
//       >
//         <option value="For">For</option>
//         <option value="Against">Against</option>
//       </select>

//       <label>Your Argument:</label>
//       <textarea
//         value={userArgument}
//         onChange={(e) => setUserArgument(e.target.value)}
//         placeholder="Enter your argument"
//         style={{
//           width: "100%",
//           height: "100px",
//           padding: "5px",
//           marginBottom: "10px",
//         }}
//       />

//       <button
//         onClick={handleDebate}
//         style={{
//           width: "100%",
//           padding: "10px",
//           backgroundColor: "#4CAF50",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Start Debate
//       </button>

//       {aiResponse && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         >
//           <h3>🤖 AI's Response:</h3>
//           <p>{aiResponse}</p>
//         </div>
//       )}

//       {factCheck && (
//         <div
//           style={{
//             marginTop: "10px",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         >
//           <h4>📚 Fact-Check:</h4>
//           <p>{factCheck}</p>
//         </div>
//       )}

//       {scoreFeedback && (
//         <div
//           style={{
//             marginTop: "10px",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         >
//           <h4>📊 Argument Scores & Feedback:</h4>
//           <pre style={{ whiteSpace: "pre-wrap" }}>{scoreFeedback}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// // WORKING!! - COUNTER ARG + SCORE

// import React, { useState } from "react";
// import axios from "axios";
// function App() {
//   const [topic, setTopic] = useState("");
//   const [stance, setStance] = useState("For");
//   const [userArgument, setUserArgument] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [factCheck, setFactCheck] = useState("");
//   const [scoreFeedback, setScoreFeedback] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleDebate = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:5000/debate",
//         {
//           topic: topic,
//           stance,
//           user_argument: userArgument,
//         }
//         // {
//         //   headers: { "Content-Type": "application/json" }, // Ensure JSON format
//         // }
//       );

//       setAiResponse(response.data.ai_response);
//       setFactCheck(response.data.fact_check);
//       setScoreFeedback(response.data.score_feedback);
//     } catch (error) {
//       console.error("Error fetching debate response:", error);
//     }
//     console.log({
//       topic,
//       stance,
//       userArgument,
//     });
//     setLoading(false);
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "700px",
//         margin: "auto",
//         padding: "20px",
//         fontFamily: "Arial",
//       }}
//     >
//       <h2>🧠 AI Debate Partner</h2>

//       <label>Topic:</label>
//       <input
//         type="text"
//         value={topic}
//         onChange={(e) => setTopic(e.target.value)}
//         placeholder="Enter a debate topic"
//         style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
//       />

//       <label>Stance:</label>
//       <select
//         value={stance}
//         onChange={(e) => setStance(e.target.value)}
//         style={{ width: "100%", padding: "5px" }}
//       >
//         <option value="For">For</option>
//         <option value="Against">Against</option>
//       </select>

//       <label>Your Argument:</label>
//       <textarea
//         value={userArgument}
//         onChange={(e) => setUserArgument(e.target.value)}
//         placeholder="Enter your argument"
//         style={{
//           width: "100%",
//           height: "100px",
//           padding: "5px",
//           marginBottom: "10px",
//         }}
//       />

//       <button
//         onClick={handleDebate}
//         disabled={loading}
//         style={{
//           width: "100%",
//           padding: "10px",
//           backgroundColor: "#4CAF50",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {loading ? "Analyzing..." : "Start Debate"}
//       </button>

//       {aiResponse && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         >
//           <h3>🤖 AI's Response:</h3>
//           <p>{aiResponse}</p>
//         </div>
//       )}

//       {factCheck && (
//         <div
//           style={{
//             marginTop: "10px",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         >
//           <h4>📚 Fact-Check:</h4>
//           <p>{factCheck}</p>
//         </div>
//       )}

//       {scoreFeedback && (
//         <div
//           style={{
//             marginTop: "10px",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//           }}
//         >
//           <h4>📊 Argument Scores & Feedback:</h4>
//           <pre style={{ whiteSpace: "pre-wrap" }}>{scoreFeedback}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// -----------------------========ROUNDS + word limit======----------------------------
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import DebateHomePage from "./DebateHomePage";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DebateHomePage></DebateHomePage>} />
      <Route path="/main" element={<MainPage></MainPage>} />
    </Routes>
  );
}
