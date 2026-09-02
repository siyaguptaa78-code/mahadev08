'use client';

import React, { useState } from 'react';
import Reveal from '../../components/UI/Reveal';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const fullFaqs = [
  {
    q: "What is Mahadev Book?",
    a: "Mahadev Book is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
  },
  {
    q: "How does a Mahadev Book ID work?",
    a: "An account ID is generally used to identify a user account. Refer to Mahadev Book's current account instructions and terms for the exact process."
  },
  {
    q: "How can I access Mahadev Book?",
    a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
  },
  {
    q: "What sports are available on Mahadev Book?",
    a: "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
  },
  {
    q: "Does Mahadev Book provide live sports information?",
    a: "Check the site's current sports section for any live-event information and the terms that apply to its use."
  },
  {
    q: "How can I get help with my Mahadev Book account?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    q: "How do I find Mahadev Book login information?",
    a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    q: "What payment options are supported?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    q: "What should I do if I have trouble accessing my account?",
    a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    q: "Where can I find the latest Mahadev Book updates?",
    a: "Refer to Mahadev Book's current website information and terms for the most accurate answer."
  }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-white mb-4">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">Questions</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
              Clear answers to the most common queries about Mahadev Book account registration, rules, and withdrawals.
            </p>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
        </Reveal>

        {/* FAQs */}
        <div className="space-y-4">
          {fullFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <Reveal key={index} yOffset={25} delay={index * 0.05}>
                <div className="glass-card rounded-xl border border-zinc-850 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left text-white hover:text-amber-400 transition-colors"
                  >
                    <span className="font-semibold text-base font-serif flex items-center gap-2">
                      <HelpCircle className="w-4.5 h-4.5 text-amber-500 flex-shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? <Minus className="w-5 h-5 text-amber-500" /> : <Plus className="w-5 h-5 text-amber-500" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-zinc-405 text-sm font-light leading-relaxed border-t border-zinc-900 bg-zinc-950/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </div>
  );
}
