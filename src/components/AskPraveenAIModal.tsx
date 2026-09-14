import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, ExternalLink, ArrowRight } from 'lucide-react';
import { PersonalInfo } from '../types';

interface AskPraveenAIModalProps {
  personal: PersonalInfo;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}

export const AskPraveenAIModal: React.FC<AskPraveenAIModalProps> = ({ personal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Praveen's AI Portfolio Assistant. Ask me anything about his B.Tech + MBA studies, Aspire Leaders Program, Vidvadhan Fellowship, Fintech research, or national honors!`,
    },
  ]);

  const quickQuestions = [
    "What is Praveen's degree & university?",
    "Tell me about the Aspire Leaders Program",
    "What are Praveen's top skills & achievements?",
    "How can I contact Praveen?",
  ];

  const handleAsk = (userText: string) => {
    if (!userText.trim()) return;

    const newMsg: Message = { id: Date.now().toString(), sender: 'user', text: userText };
    setMessages((prev) => [...prev, newMsg]);
    setQuery('');

    // Generate accurate contextual answers based on user's portfolio data
    setTimeout(() => {
      let reply = '';
      const lower = userText.toLowerCase();

      if (lower.includes('degree') || lower.includes('university') || lower.includes('education') || lower.includes('college') || lower.includes('study')) {
        reply = `Praveen is pursuing an Integrated B.Tech + MBA in Computer Science & Business Systems (CSBS) at Pondicherry University. His curriculum bridges software engineering, enterprise algorithms, financial analytics, and strategic business management.`;
      } else if (lower.includes('techfest') || lower.includes('iit bombay') || lower.includes('offer letter')) {
        reply = `Praveen received an official Offer Letter as College Ambassador for Techfest, IIT Bombay (2026-27), Asia's Largest Science & Technology Festival, driving campus innovation and outreach!`;
      } else if (lower.includes('aspire') || lower.includes('harvard') || lower.includes('leader')) {
        reply = `Praveen was selected for the prestigious Aspire Leaders Program 2026, an international leadership program founded by Harvard University faculty, developing cross-cultural leadership and communication skills.`;
      } else if (lower.includes('composit') || lower.includes('iit kharagpur') || lower.includes('ideathon')) {
        reply = `Praveen was an Ideathon Finalist at the 31st Edition of COMPOSIT, organized by the Society of Metallurgical Engineers at IIT Kharagpur, demonstrating innovative problem-solving and tech solutions.`;
      } else if (lower.includes('isro') || lower.includes('space') || lower.includes('quiz')) {
        reply = `Praveen ranked in the Top 100 nationwide winners of the ISRO National Space Day Quiz in November 2025! As part of this national honor, he was invited for an official delegation visit to the Indian Space Research Organisation (ISRO) facility and launch complex, touring rocket launch vehicles including PSLV and GSLV models.`;
      } else if (lower.includes('tata') || lower.includes('crucible')) {
        reply = `Praveen served as a Tata Crucible Campus Ambassador representing Pondicherry University under the Tata Crucible Campus Ambassador Programme, earning an official Certificate of Appreciation.`;
      } else if (lower.includes('certif') || lower.includes('credential') || lower.includes('forage') || lower.includes('sebi') || lower.includes('mastercard') || lower.includes('offer')) {
        reply = `Praveen holds verified credentials including: 1) Techfest IIT Bombay College Ambassador Offer Letter; 2) ISRO Space Day Quiz Top 100 Winner & ISRO Delegation Visit (November 2025); 3) Tata Crucible Campus Ambassador Certificate; 4) IIT Kharagpur COMPOSIT Ideathon Finalist; 5) Vodafone Idea & VOIS Data Visualization (ID: VFLMS26_163709); 6) Aspire Leaders Program Certificate (Harvard faculty–founded); 7) Internshala Student Partner (ISP) Appointment Letter; 8) AICTE Data Analytics Virtual Internship; 9) SEBI & NISM Investor Awareness (NISM20260000378433-001); 10) Mastercard Cybersecurity Job Simulation; 11) PNC Bank Financial Services Simulation.`;
      } else if (lower.includes('project') || lower.includes('github') || lower.includes('repo') || lower.includes('code')) {
        reply = `Praveen has 4 active open-source repositories on GitHub (@praveenprajapati7850):
1. ask-praveen-ai: AI portfolio assistant built with Google Gemini 2.5 Flash, React 19, TypeScript, and Express.
2. SEASONAL-AGRICULTURE-PERFORMANCE-ANALYSIS: Data analytics model analyzing seasonal crop yields and monsoon patterns using Python, Pandas, and Matplotlib.
3. Airbnb-Hotel-Booking-Analysis: Exploratory data analysis (EDA) investigating booking lead times, cancellation risk, and pricing elasticity.
4. praveenprajapati7850.github.io: Interactive developer portfolio and deployment architecture.
You can view the interactive charts and clone commands in the Projects & Code Repositories section!`;
      } else if (lower.includes('skill') || lower.includes('python') || lower.includes('fintech') || lower.includes('tools')) {
        reply = `Praveen specializes in Python programming, SQL & databases, Pandas, Matplotlib, Power BI analytics, FinTech modeling, and AI/LLM applications.`;
      } else if (lower.includes('qr') || lower.includes('scan') || lower.includes('vcard') || lower.includes('card') || lower.includes('whatsapp')) {
        reply = `Praveen's portfolio features an interactive "Scan to Connect Hub" in the Contact section with live QR codes for: 1) LinkedIn Profile, 2) Digital vCard (1-tap Save Contact with phone & email), 3) Instant WhatsApp Chat (+91 7850909557), 4) GitHub profile, 5) Direct Email dispatch, and 6) ATS Resume PDF download. You can point your phone camera to scan or download high-resolution PNGs!`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('hire') || lower.includes('reach')) {
        reply = `You can reach Praveen directly via email at ${personal.email} or call at ${personal.phone}. You can also connect on LinkedIn at https://www.linkedin.com/in/praveen-kumar-907443384, or use the interactive "Scan to Connect Hub" in the Contact section to scan QR codes for WhatsApp and vCard!`;
      } else {
        reply = `Praveen Kumar is an Integrated B.Tech + MBA (CSBS) student at Pondicherry University, College Ambassador for Techfest IIT Bombay 2026-27, ISRO National Space Day Quiz Top 100 Winner (November 2025), Ideathon Finalist at IIT Kharagpur COMPOSIT, and Aspire Leader. Check out his verified credentials in the Works section!`;
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'ai', text: reply },
      ]);
    }, 400);
  };

  return (
    <>
      {/* Floating Action Pill */}
      <div className="fixed bottom-6 right-6 z-40 no-print">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-neutral-950 text-white font-medium text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-neutral-800"
        >
          <span className="w-2 h-2 rounded-full bg-[#fe4300] animate-ping" />
          <Sparkles className="w-4 h-4 text-[#fe4300]" />
          <span>Ask Praveen AI</span>
        </button>
      </div>

      {/* Interactive AI Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#fe4300]/10 flex items-center justify-center text-[#fe4300]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-neutral-900 flex items-center gap-2">
                    Ask Praveen AI
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                      Online
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500">
                    B.Tech + MBA (CSBS) · Fintech Enthusiast
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick action banner to open dedicated studio app */}
            <div className="bg-orange-50/80 px-4 py-2 border-b border-orange-200/60 flex items-center justify-between text-xs text-orange-900">
              <span>Full AI Agent deployed on Google AI Studio</span>
              <a
                href="https://ask-praveen-ai.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#fe4300] hover:underline"
              >
                Open ask-praveen-ai <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 min-h-[250px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-lg bg-[#fe4300] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                      AI
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#fe4300] text-white rounded-br-xs'
                        : 'bg-neutral-100 text-neutral-900 rounded-bl-xs border border-neutral-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Prompt Suggestions */}
            <div className="p-3 border-t border-neutral-100 bg-neutral-50/50">
              <p className="text-[11px] font-medium text-neutral-400 mb-2">
                Suggested questions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAsk(q)}
                    className="text-xs px-2.5 py-1 rounded-full bg-white text-neutral-700 border border-neutral-200 hover:border-[#fe4300] hover:text-[#fe4300] transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAsk(query);
              }}
              className="p-3 sm:p-4 border-t border-neutral-200 flex items-center gap-2 bg-white"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about Praveen's projects, experience, education..."
                className="flex-1 bg-neutral-100 text-sm px-4 py-2.5 rounded-full border border-neutral-200 focus:outline-none focus:border-[#fe4300] text-neutral-900"
              />
              <button
                type="submit"
                disabled={!query.trim()}
                className="p-2.5 rounded-full bg-[#fe4300] hover:bg-[#ea3e00] text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
