import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';
import { GenerateContentResponse } from "@google/genai";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'model', text: "Hi! I'm Sandeepteja's AI Assistant. Ask me anything about his projects, experience, or skills." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const stream = await sendMessageToGemini(userMsg.text);
      let fullResponse = "";
      const botMsgId = (Date.now() + 1).toString();
      
      // Add placeholder bot message
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '', isLoading: true }]);

      for await (const chunk of stream) {
        const content = chunk as GenerateContentResponse;
        const text = content.text || "";
        fullResponse += text;
        
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId ? { ...msg, text: fullResponse, isLoading: false } : msg
        ));
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Sorry, I encountered an error connecting to the AI service. Please ensure the API Key is set." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-[350px] sm:w-[400px] mb-4 transition-all duration-300 origin-bottom-right overflow-hidden ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none h-0'}`}
      >
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary-500/20 rounded-lg">
              <Bot size={20} className="text-primary-400" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">AI Assistant</h3>
              <p className="text-xs text-slate-400">Powered by Gemini 2.5 Flash</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-900/95 backdrop-blur">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                }`}
              >
                {msg.text}
                {msg.isLoading && <span className="inline-block w-2 h-4 ml-1 align-middle bg-primary-400 animate-pulse"></span>}
              </div>
            </div>
          ))}
          {isTyping && messages[messages.length - 1]?.role === 'user' && (
             <div className="flex justify-start">
               <div className="bg-slate-800 p-3 rounded-xl rounded-bl-none border border-slate-700">
                 <Loader2 size={16} className="animate-spin text-primary-400" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-800 border-t border-slate-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Sandeep's skills..."
              className="flex-1 bg-slate-900 border border-slate-600 text-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-slate-700 text-slate-300 rotate-90' : 'bg-primary-600 text-white hover:bg-primary-500'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
