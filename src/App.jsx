import { useState } from 'react'
import { motion } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'

export default function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  const handleDecrypt = () => {
    setResult(text.split('').reverse().join(''))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4">
      <motion.div 
        className="max-w-md w-full space-y-6 bg-white/5 p-8 rounded-2xl shadow-lg backdrop-blur"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center text-cyan-400">Forgotten Decryptor</h1>
        <textarea
          placeholder="Enter encrypted text..."
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full p-3 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          rows={4}
        />
        <button
          onClick={handleDecrypt}
          className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition"
        >
          Decrypt
        </button>
        {result && (
          <motion.div 
            className="bg-gray-700 p-4 rounded-lg border border-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {result}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
