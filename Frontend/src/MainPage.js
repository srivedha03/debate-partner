// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./App.css";
// export default function MainPage() {
//   const location = useLocation();
//   const { topic, stance } = location.state || {};
//   console.log(topic, stance);
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

// ----------------------------------------------------------------------------

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./App.css";

// export default function MainPage() {
//   const location = useLocation();
//   const { topic, stance } = location.state || {};
//   console.log(topic, stance);
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

// ----------------------------------------------------------------------------

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./App.css";
// export default function MainPage() {
//   const location = useLocation();
//   const { topic, stance } = location.state || {};
//   console.log(topic, stance);
//   const [userArgument, setUserArgument] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   const [factCheck, setFactCheck] = useState("");
//   const [scoreFeedback, setScoreFeedback] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleDebate = async () => {
//     console.log(userArgument);
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
//     <div>
//       <div>
//         <h1 className="home_heading">AI DEBATE PARTNER</h1>
//         <div className="container outerCon">
//           <div
//             className="chat-container debatebox"
//             style={{ width: "50rem", height: "40rem" }}
//           >
//             <div className="chat-messages d-flex flex-column">
//               <div class="chat-messages d-flex flex-column" id="chat-messages">
//                 <div class="message bot" id="bot-msg">
//                   <h3>🤖 AI's Response:</h3>
//                   {aiResponse && (
//                     <div
//                       style={{
//                         marginTop: "20px",
//                         padding: "10px",
//                         border: "1px solid #ddd",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <p>{aiResponse}</p>
//                     </div>
//                   )}
//                 </div>
//                 <div
//                   style={{
//                     alignSelf: "start",
//                   }}
//                 >
//                   <button class="volume-btn">🔊 Listen</button>
//                 </div>
//               </div>

//               <div class="chat-input">
//                 <div class="input-group">
//                   <button class="mic-btn" title="Speak">
//                     <span>🎤</span>
//                   </button>
//                   <textarea
//                     value={userArgument}
//                     onChange={(e) => setUserArgument(e.target.value)}
//                     placeholder="Enter your argument"
//                     class="form-control"
//                     id="exampleFormControlTextarea1"
//                     rows="2"
//                     style={{
//                       backgroundColor: "#efefef",
//                     }}
//                   />
//                   <button
//                     onClick={handleDebate}
//                     disabled={loading}
//                     class="btn"
//                     style={{
//                       color: "white",
//                       backgroundColor: "rgb(123, 109, 122)",
//                     }}
//                   >
//                     {loading ? "Analyzing..." : "Start Debate"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         {factCheck && (
//           <div
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           >
//             <h4>📚 Fact-Check:</h4>
//             <p>{factCheck}</p>
//           </div>
//         )}

//         {scoreFeedback && (
//           <div
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//             }}
//           >
//             <h4>📊 Argument Scores & Feedback:</h4>
//             <pre style={{ whiteSpace: "pre-wrap" }}>{scoreFeedback}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// ---------------------FINAL-WORKING-----------------------------------------
// Thinking.ai

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./App.css";
// import TextToSpeechButton from "./TextToSpeech";

// // Check if the browser supports the SpeechRecognition API
// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;

// export default function MainPage() {
//   const location = useLocation();
//   const { topic, stance } = location.state || {};
//   const [userArgument, setUserArgument] = useState("");
//   const [aiResponse, setAiResponse] = useState("");
//   // const [factCheck, setFactCheck] = useState("");
//   const [scoreFeedback, setScoreFeedback] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [generated, setGenerated] = useState(false);

//   // Initialize SpeechRecognition
//   const recognition = new SpeechRecognition();
//   recognition.continuous = true; // Keep listening until stopped
//   recognition.interimResults = true; // Get partial results
//   recognition.lang = "en-US"; // Set language for recognition

//   // Handle results when speech is recognized
//   recognition.onresult = (event) => {
//     let finalTranscript = "";
//     for (let i = event.resultIndex; i < event.results.length; i++) {
//       const result = event.results[i];
//       if (result.isFinal) {
//         // <-- Only add finalized results
//         finalTranscript += result[0].transcript + " ";
//       }
//     }
//     if (finalTranscript) {
//       setUserArgument(
//         (prevText) => prevText.trim() + " " + finalTranscript.trim()
//       );
//     }
//   };

//   // Handle state changes when recognition starts and stops
//   recognition.onstart = () => {
//     console.log("Voice recognition started");
//   };

//   recognition.onend = () => {
//     console.log("Voice recognition ended");
//   };

//   // Start speech recognition
//   const startListening = () => {
//     recognition.start();
//   };

//   // Stop speech recognition
//   const stopListening = () => {
//     recognition.stop();
//   };

//   const handleDebate = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/debate", {
//         topic,
//         stance,
//         user_argument: userArgument,
//       });
//       setAiResponse(response.data.ai_response);
//       // setFactCheck(response.data.fact_check);
//       setScoreFeedback(response.data.score_feedback);
//       setGenerated(true);
//       setUserArgument(""); // <-- reset input box here
//     } catch (error) {
//       console.error("Error fetching debate response:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="home_heading">AI DEBATE PARTNER</h1>
//       </div>

//       <div className="relative flex mt-[3rem] text-gray-800 antialiased flex-col justify-center">
//         <div className="relative w-[50rem] mx-auto text-center">
//           <div className="shadow-2xl rounded-lg text-left blur_card">
//             {/* <div className="h-2 bg-purple-400 rounded-t-md"></div> */}
//             <div className="px-6 py-6 flex flex-col gap-6">
//               {/* AI's Response */}
//               <h3 className="text-lg font-semibold mb-2 text-white">
//                 🤖 AI's Response:
//               </h3>
//               {aiResponse && (
//                 <div className="mb-3">
//                   <div className="p-4 bg-gray-100 rounded-md border">
//                     <p>{aiResponse}</p>
//                     {generated && (
//                       <div className="mt-3">
//                         <TextToSpeechButton text={aiResponse} />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Input Section */}
//               <div className="flex flex-col gap-3 text-white">
//                 <div>
//                   <i>Debate by Voice 🎤</i>
//                   <div>
//                     <button
//                       className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-600 mt-2"
//                       onClick={startListening}
//                       title="Start Speaking"
//                     >
//                       <span style={{ fontSize: "1rem" }}>Start</span>
//                     </button>
//                     <button
//                       className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-600 mx-2 mt-2"
//                       onClick={stopListening}
//                       title="Stop Speaking"
//                     >
//                       <span style={{ fontSize: "1rem" }}>Stop</span>
//                     </button>
//                   </div>
//                 </div>
//                 <textarea
//                   value={userArgument}
//                   onChange={(e) => setUserArgument(e.target.value)}
//                   placeholder="Write your argument here..."
//                   rows="3"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
//                 />
//                 <button
//                   onClick={handleDebate}
//                   disabled={loading}
//                   className="mt-2 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 disabled:opacity-50"
//                 >
//                   {loading ? "Analyzing..." : "Start Debate"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {aiResponse && (
//         <div className="relative flex mt-[1rem] text-gray-800 antialiased flex-col justify-center">
//           <div className="relative w-[50rem] mx-auto text-center">
//             <div className="rounded-lg text-left ">
//               <div className="px-6 py-6 flex flex-col gap-6">
//                 <div className="text-white shadow-xl mb-3 p-4 bg-gray-100 rounded-md blur_card">
//                   {scoreFeedback && scoreFeedback.user_scores && (
//                     <div>
//                       <h4>📊 Argument Scores & Feedback:</h4>
//                       <br />
//                       <div className="text-black p-4 bg-gray-100 rounded-md border">
//                         <h5>
//                           <strong>User’s Scores</strong>
//                         </h5>
//                         <ul>
//                           {Object.entries(scoreFeedback.user_scores).map(
//                             ([key, { score, explanation }]) => (
//                               <li key={key}>
//                                 <strong>{key.replace(/_/g, " ")}:</strong>{" "}
//                                 {score}
//                                 <em>({explanation})</em>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                         <br />
//                         <h5>
//                           <strong>AI’s Scores</strong>
//                         </h5>
//                         <ul>
//                           {Object.entries(scoreFeedback.ai_scores).map(
//                             ([key, { score, explanation }]) => (
//                               <li key={key}>
//                                 <strong>{key.replace(/_/g, " ")}:</strong>{" "}
//                                 {score}
//                                 <em>({explanation})</em>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ---------------------FINAL-WORKING-----------------------------------------

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import TextToSpeechButton from "./TextToSpeech";

// Check if the browser supports the SpeechRecognition API
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export default function MainPage() {
  const location = useLocation();
  const { topic, stance } = location.state || {};
  const [userArgument, setUserArgument] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [scoreFeedback, setScoreFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [round, setRound] = useState(0); // Track rounds

  // Initialize SpeechRecognition
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // Keep listening until stopped
  recognition.interimResults = true; // Get partial results
  recognition.lang = "en-US"; // Set language for recognition

  // Handle results when speech is recognized
  recognition.onresult = (event) => {
    let finalTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      if (result.isFinal) {
        finalTranscript += result[0].transcript + " ";
      }
    }
    if (finalTranscript) {
      setUserArgument(
        (prevText) => prevText.trim() + " " + finalTranscript.trim()
      );
    }
  };

  // Handle state changes when recognition starts and stops
  recognition.onstart = () => {
    console.log("Voice recognition started");
  };

  recognition.onend = () => {
    console.log("Voice recognition ended");
  };

  // Start speech recognition
  const startListening = () => {
    recognition.start();
  };

  // Stop speech recognition
  const stopListening = () => {
    recognition.stop();
  };

  const handleDebate = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/debate", {
        topic,
        stance,
        user_argument: userArgument,
      });

      setAiResponse(response.data.ai_response);
      setScoreFeedback(response.data.score_feedback);
      setGenerated(true);

      // Increment the round number after each round
      setUserArgument(""); // Reset input box here
      setRound((prevRound) => prevRound + 1); // Increment round number
    } catch (error) {
      console.error("Error fetching debate response:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <h1 className="home_heading">AI DEBATE PARTNER</h1>
      </div>

      <div className="relative flex mt-[3rem] text-gray-800 antialiased flex-col justify-center">
        <div className="relative w-[50rem] mx-auto text-center">
          <div className="shadow-2xl rounded-lg text-left blur_card">
            <div className="px-6 py-6 flex flex-col gap-6">
              {/* AI's Response */}
              <h3 className="text-lg font-semibold mb-2 text-white">
                🤖 AI's Response (Round {round}):
              </h3>
              {aiResponse && (
                <div className="mb-3">
                  <div className="p-4 bg-gray-100 rounded-md border">
                    <p>{aiResponse}</p>
                    {generated && (
                      <div className="mt-3">
                        <TextToSpeechButton text={aiResponse} />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Input Section */}
              {round < 3 && (
                <div className="flex flex-col gap-3 text-white">
                  <div>
                    <i>Debate by Voice 🎤</i>
                    <div>
                      <button
                        className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-600 mt-2"
                        onClick={startListening}
                        title="Start Speaking"
                      >
                        <span style={{ fontSize: "1rem" }}>Start</span>
                      </button>
                      <button
                        className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-600 mx-2 mt-2"
                        onClick={stopListening}
                        title="Stop Speaking"
                      >
                        <span style={{ fontSize: "1rem" }}>Stop</span>
                      </button>
                    </div>
                  </div>
                  <textarea
                    value={userArgument}
                    onChange={(e) => setUserArgument(e.target.value)}
                    placeholder="Write your argument here..."
                    rows="3"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <button
                    onClick={handleDebate}
                    disabled={loading}
                    className="mt-2 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 disabled:opacity-50"
                  >
                    {loading ? "Analyzing..." : "Start Debate"}
                  </button>
                </div>
              )}

              {/* Show "No more rounds" after Round 3 */}
              {round >= 3 && (
                <div
                  className="bg-purple-500 text-white py-2 px-4 rounded
                  hover:bg-purple-600"
                >
                  <h4>Debate Complete! No more rounds available.</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Show only the scores for the current round */}
      {aiResponse && scoreFeedback && round <= 3 && (
        <div className="relative flex mt-[1rem] text-gray-800 antialiased flex-col justify-center">
          <div className="relative w-[50rem] mx-auto text-center">
            <div className="rounded-lg text-left ">
              <div className="px-6 py-6 flex flex-col gap-6">
                <div className="text-white shadow-xl mb-3 p-4 bg-gray-100 rounded-md blur_card">
                  <h4>📊 Argument Scores & Feedback (Round {round})</h4>
                  <br />
                  <div className="text-black p-4 bg-gray-100 rounded-md border">
                    {scoreFeedback.user_scores && (
                      <>
                        <h5>
                          <strong>User’s Scores</strong>
                        </h5>
                        <br />
                        <ul>
                          {Object.entries(scoreFeedback.user_scores).map(
                            ([key, { score, explanation }]) => (
                              <li key={key}>
                                <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                                {score}
                                <em>({explanation})</em>
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                    <br />
                    {scoreFeedback.ai_scores && (
                      <div>
                        <h5>
                          <strong>AI’s Scores</strong>
                        </h5>
                        <br />
                        <ul>
                          {Object.entries(scoreFeedback.ai_scores).map(
                            ([key, { score, explanation }]) => (
                              <li key={key}>
                                <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                                {score}
                                <em>({explanation})</em>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
