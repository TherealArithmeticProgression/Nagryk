import React, { useState } from 'react'
import { Mic, Send, Search, Building2 } from 'lucide-react'

const NGOInterface = () => {
  const [query, setQuery] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<any>(null)

  // Mock function for the AI + Darpan Lookup
  const handleContextSubmit = async () => {
    setIsProcessing(true)
    // 1. Send query to AI to extract NGO intent
    // 2. Query NGO Darpan Database
    // 3. Return NGO details + a draft message
    setTimeout(() => {
      setResult({
        name: 'Rural Development Foundation',
        id: 'KA/2023/03456',
        suggestedMessage: 'The message appears here...',
      })
      setIsProcessing(false)
    }, 1500)
  }

  return (
    <div className="max-w-2xl mx-auto p-8 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">NGO Connect Portal</h1>
        <p className="text-gray-500">
          State your context in any language to find and contact NPOs
        </p>
      </header>

      {/* Multimodal Input Section */}
      <div className="relative group">
        <textarea
          className="w-full p-4 pr-24 border-2 border-blue-100 rounded-2xl focus:border-blue-400 focus:outline-none transition-all shadow-sm"
          placeholder="e.g., I want to help orphans in Delhi with education..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={3}
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
            <Mic size={20} />
          </button>
          <button
            onClick={handleContextSubmit}
            className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
          >
            {isProcessing ? (
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Search size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Generative Result Area */}
      {result && (
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-gray-50 p-6 border-b border-gray-100 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{result.name}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  Darpan ID: {result.id}
                </p>
              </div>
            </div>

            <div className="p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Refine your message:
              </label>
              <textarea
                className="w-full p-4 bg-blue-50/50 border border-blue-100 rounded-xl focus:outline-none text-gray-700"
                defaultValue={result.suggestedMessage}
                rows={4}
              />
              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all">
                <Send size={18} />
                Transmit to NPO
              </button>
              <p className="mt-3 text-center text-xs text-gray-400 italic">
                * Transmission is simulated for architecture demonstration.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NGOInterface
