import React, { useState, useEffect } from "react";

// Check if the browser supports the SpeechRecognition API
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const VoiceToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

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
      finalTranscript += result[0].transcript;
    }
    setTranscript(finalTranscript); // Update the transcript state with the result
  };

  // Handle state changes when recognition starts and stops
  recognition.onstart = () => {
    setIsListening(true); // Set listening state to true when recognition starts
  };

  recognition.onend = () => {
    setIsListening(false); // Set listening state to false when recognition ends
  };

  // Function to start speech recognition
  const startListening = () => {
    setTranscript(""); // Reset the transcript when starting
    recognition.start(); // Start speech recognition
  };

  // Function to stop speech recognition
  const stopListening = () => {
    recognition.stop(); // Stop speech recognition
  };

  return (
    <div>
      <h1>Voice to Text</h1>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Start speaking..."
        rows="10"
        cols="30"
      />
      <br />
      <button
        onClick={startListening}
        disabled={isListening}
        style={{ color: "white" }}
      >
        Start Listening
      </button>
      <button
        onClick={stopListening}
        disabled={!isListening}
        style={{ color: "white" }}
      >
        Stop Listening
      </button>
      <p style={{ color: "white" }}>
        Status: {isListening ? "Listening..." : "Not Listening"}
      </p>
    </div>
  );
};

export default VoiceToText;
