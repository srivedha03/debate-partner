import React, { useState } from "react";

export default function TextToSpeechButton({ text }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    // console.log(synth);
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        utterance.onend = () => setIsSpeaking(false); // After speaking, reset state
        synth.speak(utterance);
        setIsSpeaking(true);
      } else {
        alert("Sorry, your browser doesn't support text-to-speech!");
      }
    }
  };

  return (
    <button
      onClick={handleSpeak}
      className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
    >
      {isSpeaking ? "🟪 Restart" : "🔊 Listen"}
    </button>
  );
}
