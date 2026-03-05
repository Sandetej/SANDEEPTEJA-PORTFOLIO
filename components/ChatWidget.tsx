import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Brain, Sparkles, ChevronDown } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { Message } from '../types';
import { GenerateContentResponse } from "@google/genai";

// Renders **bold**, bullet lists (- item), and paragraphs from plain markdown text
const renderInline = (text: string): React.ReactNode =>
  text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold text-slate-100">{part.slice(2, -2)}</strong>
      : part
  );

const renderMarkdown = (text: string): React.ReactNode => {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  const bullets: string[] = [];

  const flushBullets = (key: string) => {
    if (bullets.length === 0) return;
    elements.push(
      <ul key={key} className="list-disc list-inside space-y-0.5 mt-1">
        {bullets.map((b, i) => <li key={i}>{renderInline(b)}</li>)}
      </ul>
    );
    bullets.length = 0;
  };

  lines.forEach((line, i) => {
    const isBullet = line.startsWith('- ') || line.startsWith('• ');
    if (isBullet) {
      bullets.push(line.slice(2));
    } else {
      flushBullets(`ul-${i}`);
      if (line.trim() !== '') {
        elements.push(<p key={i} className="leading-relaxed">{renderInline(line)}</p>);
      } else if (elements.length > 0) {
        elements.push(<div key={`gap-${i}`} className="h-1" />);
      }
    }
  });
  flushBullets('ul-end');

  return <div className="space-y-1 text-sm">{elements}</div>;
};

const SUGGESTED_QUESTIONS = [
  "Walk me through his career journey",
  "Why did he go back for a Master's?",
  "What are his top skills?",
  "Tell me about his projects",
  "What's his career goal?",
  "What's he like to work with?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'model',
      text: "Hi! I'm Sandeepteja's resume assistant. Ask me anything about his skills, experience, projects, or education — I'll answer based strictly on his resume.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    setShowSuggestions(false);
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const stream = await sendMessageToGemini(text);
      let fullResponse = '';
      const botMsgId = (Date.now() + 1).toString();

      setMessages(prev => [
        ...prev,
        { id: botMsgId, role: 'model', text: '', isLoading: true },
      ]);

      for await (const chunk of stream) {
        const content = chunk as GenerateContentResponse;
        fullResponse += content.text || '';
        setMessages(prev =>
          prev.map(msg =>
            msg.id === botMsgId
              ? { ...msg, text: fullResponse, isLoading: false }
              : msg
          )
        );
      }
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: "Sorry, I couldn't connect to the AI service. Please make sure the API key is configured.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => sendMessage(input);

  const handleSuggestion = (q: string) => sendMessage(q);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={`bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/40 w-[360px] sm:w-[400px] mb-4 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto max-h-[600px]'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none max-h-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-800/90 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="p-2 bg-primary-500/20 rounded-xl border border-primary-500/30">
                <Brain size={18} className="text-primary-400" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-slate-800" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 text-sm leading-tight">Chat with my Resume</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <Sparkles size={10} className="text-primary-400" />
                Powered by Gemini 2.5 Flash
              </p>
            </div>
          </div>
          <button
            type="button"
            title="Minimize chat"
            aria-label="Minimize chat"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white hover:bg-slate-700/60 rounded-lg p-1.5 transition-all"
          >
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900/95 min-h-0 h-[380px]">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="w-7 h-7 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Brain size={13} className="text-primary-400" />
                </div>
              )}
              <div
                className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-tr-sm'
                    : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-tl-sm'
                }`}
              >
                {msg.role === 'user' ? msg.text : renderMarkdown(msg.text)}
                {msg.isLoading && (
                  <span className="inline-flex gap-0.5 ml-1 align-middle">
                    <span className="w-1 h-1 bg-primary-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1 h-1 bg-primary-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1 h-1 bg-primary-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                )}
              </div>
            </div>
          ))}

          {isTyping && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex gap-2 justify-start">
              <div className="w-7 h-7 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                <Brain size={13} className="text-primary-400" />
              </div>
              <div className="bg-slate-800 px-3.5 py-2.5 rounded-2xl rounded-tl-sm border border-slate-700/60 flex items-center gap-1">
                <Loader2 size={14} className="animate-spin text-primary-400" />
                <span className="text-slate-400 text-xs">Thinking...</span>
              </div>
            </div>
          )}

          {/* Suggested Questions */}
          {showSuggestions && (
            <div className="pt-2">
              <p className="text-xs text-slate-500 mb-2 font-medium">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map(q => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSuggestion(q)}
                    className="text-xs bg-slate-800 hover:bg-primary-600/20 border border-slate-700 hover:border-primary-500/50 text-slate-300 hover:text-primary-300 px-3 py-1.5 rounded-full transition-all duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-slate-800/80 border-t border-slate-700/80 flex-shrink-0">
          <div className="flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Sandeep's resume..."
              disabled={isTyping}
              className="flex-1 bg-slate-900 border border-slate-600 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-all disabled:opacity-50"
            />
            <button
              type="button"
              title="Send message"
              aria-label="Send message"
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="bg-primary-600 hover:bg-primary-500 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-2 text-center">Only answers questions about Sandeep's resume</p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        aria-label={isOpen ? 'Close chat' : 'Chat with my Resume'}
        title={isOpen ? 'Close chat' : 'Chat with my Resume'}
        onClick={() => setIsOpen(prev => !prev)}
        className={`group relative p-4 rounded-2xl shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen
            ? 'bg-slate-700 text-slate-300'
            : 'bg-gradient-to-br from-primary-500 to-primary-600 text-white hover:from-primary-400 hover:to-primary-500'
        }`}
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <>
            <Brain size={22} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-950 animate-pulse" />
          </>
        )}
        {!isOpen && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat with my Resume
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
