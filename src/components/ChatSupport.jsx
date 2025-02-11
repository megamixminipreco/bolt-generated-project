import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa'

const ChatSupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }])
      setMessage('')
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: 'Thanks for your message! Our AI support team will get back to you shortly.', 
          sender: 'bot' 
        }])
      }, 1000)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-gray-800 w-80 rounded-lg shadow-2xl mb-4"
          >
            <div className="bg-gray-900 p-4 flex justify-between items-center rounded-t-lg">
              <h3 className="text-white font-semibold flex items-center">
                <FaRobot className="mr-2" /> AI Support
              </h3>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-300"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-4 h-96 overflow-y-auto">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-2 ${
                    msg.sender === 'bot' 
                      ? 'text-left' 
                      : 'text-right'
                  }`}
                >
                  <span 
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === 'bot' 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-primary text-white'
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700 flex">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-grow bg-gray-700 text-white p-2 rounded-l-lg"
              />
              <button 
                onClick={handleSendMessage}
                className="bg-primary text-white p-2 rounded-r-lg"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-2xl"
      >
        {isChatOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>
    </div>
  )
}

export default ChatSupport
