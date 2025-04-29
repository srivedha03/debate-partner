// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function DebateHomePage() {
//   const [topic, setTopic] = useState("");
//   const [stance, setStance] = useState("For");
//   const navigate = useNavigate();
//   const handleDebate = async (e) => {
//     e.preventDefault();
//     navigate("/main", { state: { topic: topic, stance: stance } });
//   };
//   return (
//     <div className="container" style={{ textAlign: "center" }}>
//       <div>
//         <h1 className="home_heading">AI DEBATE PARTNER</h1>{" "}
//         <p className="home_sub_heading">
//           Argue with a machine not to prove it wrong, but to understand yourself
//           better.
//         </p>
//       </div>
//       <div
//         className="card debatebox"
//         style={{ border: "none", backgroundColor: "#F5F5F5" }}
//       ></div>
//       <input
//         type="text"
//         value={topic}
//         onChange={(e) => setTopic(e.target.value)}
//         placeholder="Enter a debate topic"
//         style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
//       />
//       <select
//         value={stance}
//         onChange={(e) => setStance(e.target.value)}
//         style={{ width: "100%", padding: "5px" }}
//       >
//         <option value="For">For</option>
//         <option value="Against">Against</option>
//       </select>

//       <button
//         onClick={handleDebate}
//         // disabled={loading}
//         style={{
//           width: "100%",
//           padding: "10px",
//           backgroundColor: "#4CAF50",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {/* {loading ? "Analyzing..." : "Start Debate"} */}
//       </button>
//     </div>
//   );
// }

// ---------------------------------------------------------------------------

// import React from "react";
// import "./App.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MainPage from "../src/MainPage";
// export default function DebateHomePage() {
//   const navigate = useNavigate();
//   const [topic, setTopic] = useState("");
//   const [stance, setStance] = useState("For");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(topic, stance);
//     navigate("/main", { state: { topic: topic, stance: stance } });
//   };
//   return (
//     <div className="container" style={{ textAlign: "center" }}>
//       <div>
//         <h1 className="home_heading">AI DEBATE PARTNER</h1>
//         <p className="home_sub_heading">
//           Argue with a machine not to prove it wrong, but to understand yourself
//           better.
//         </p>
//       </div>
//       <div
//         className="card debatebox"
//         style={{ border: "none", backgroundColor: "#F5F5F5" }}
//       >
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginLeft: "5rem" }}>
//             <div style={{ padding: "1rem" }}>
//               <input
//                 type="text"
//                 value={topic}
//                 onChange={(e) => setTopic(e.target.value)}
//                 placeholder="Enter a debate topic"
//                 className="form-control-lg radioFontSize"
//                 style={{ width: "80%", fontSize: "1.2rem" }}
//                 //   aria-label=".form-control-lg example"
//               />
//             </div>
//             <div style={{ padding: "1rem", fontSize: "1.2rem" }}>
//               <input
//                 type="radio"
//                 className="btn-check"
//                 name="stance"
//                 id="option1"
//                 autoComplete="off"
//                 value={stance}
//                 onChange={(e) => setStance(e.target.value)}
//               />
//               <label className="btn radioFontSize" htmlFor="option1">
//                 For
//               </label>
//               <input
//                 type="radio"
//                 className="btn-check"
//                 name="stance"
//                 id="option2"
//                 autoComplete="off"
//                 value={stance}
//                 onChange={(e) => setStance(e.target.value)}
//               />
//               <label className="btn radioFontSize" htmlFor="option2">
//                 Against
//               </label>
//             </div>
//             <div style={{ padding: "1rem" }}>
//               <button
//                 type="submit"
//                 class="btn btn-lg btn-outline-primary"
//                 style={{ width: "20%" }}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// ---------------------------------------------------------------------------

import React from "react";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "../src/MainPage";
export default function DebateHomePage() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [stance, setStance] = useState("For");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(topic, stance);
    navigate("/main", { state: { topic: topic, stance: stance } });
  };
  return (
    <div>
      <div>
        <h1 className="home_heading">AI DEBATE PARTNER</h1>
        <p className="home_sub_heading">
          Argue with a machine not to prove it wrong, but to understand yourself
          better.
        </p>
      </div>
      <div class="relative flex mt-[3rem] text-gray-800 antialiased flex-col justify-center">
        <div class="relative w-[35rem] mx-auto text-center">
          <div class="shadow-2xl rounded-lg text-left blur_card">
            {/* <div class="h-2 bg-purple-400 rounded-t-md"></div> */}
            <div class="px-3 py-6 ">
              <form onSubmit={handleSubmit}>
                <label class="block text-sm font-medium text-white mb-1">
                  Enter Your Debate Topic
                </label>
                <textarea
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="For eg. Is artificial intelligence dangerous"
                  rows="2"
                  class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                />
                <label
                  class="block text-sm font-medium text-white mb-1"
                  style={{ color: "white" }}
                >
                  Select Stance
                </label>
                <select
                  class="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={stance}
                  onChange={(e) => setStance(e.target.value)}
                >
                  <option value="For">For</option>
                  <option value="Against">Against</option>
                </select>
                <button class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
