import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const HomePage = () => {
  const [joinCode, setJoinCode] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const handleJoinRoom = () => {
    if (joinCode.length !== 4) {
      setError("Invalid join code! It must be exactly 4 characters.");
    } else {
      setError("");
      navigate(`/room/${joinCode}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pl-5 pr-5">
      <motion.div
        className="w-full max-w-lg p-8 bg-gray-800 bg-opacity-90 rounded-3xl shadow-2xl backdrop-blur-md"
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }} // Fade-in effect
        transition={{ duration: 0.5 }} // Animation duration
      >
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: -50 }} // Initial state (slide-in and fade)
          animate={{ opacity: 1, y: 0 }} // Final state (visible and normal position)
          transition={{ duration: 0.6, delay: 0.2 }} // Delay the animation slightly
        >
          <motion.div
            className="bg-blue-600 p-4 rounded-full shadow-lg animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }} // Delay for the icon animation
          >
            <FaVideo className="text-white text-3xl" />
          </motion.div>
          <motion.h1
            className="text-3xl font-extrabold mt-4 tracking-tight text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }} // Delay the heading animation a little more
          >
            Join Video Conference
          </motion.h1>
        </motion.div>

        {/* Form Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleJoinRoom();
          }}
          className="space-y-6"
        >
          {/* Input Field */}
          <div className="relative">
            <label htmlFor="joinCode" className="block text-lg font-medium mb-2">
              Join Code
            </label>
            <motion.input
              type="text"
              id="joinCode"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.trim())}
              placeholder="Enter Meeting Code"
              maxLength={4} // Restrict input to 4 characters
              className="w-full px-6 py-4 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-600 transition-transform transform hover:scale-105 text-xl"
              initial={{ scale: 0.98 }} // Slightly smaller at first
              animate={{ scale: 1 }} // Normal size
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.6,
              }} // Delay the input field animation
            />
            {/* Inline Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold text-lg flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 shadow-lg"
            initial={{ scale: 0.95 }} // Initial state for button
            animate={{ scale: 1 }} // Normal size
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.8,
            }} // Delay for button animation
            whileHover={{ scale: 1.05 }} // Slightly grow when hovered
            whileTap={{ scale: 0.95 }} // Slightly shrink when clicked
          >
            <FaVideo className="text-xl" />
            <span>Join Meeting</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default HomePage;
