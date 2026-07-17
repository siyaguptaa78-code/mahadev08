'use client';

import React, { useState } from 'react';
import Reveal from '../../components/UI/Reveal';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What is El Clasico?",
    a: "El Clasico is the name given to the fixture in which Spanish football giants Real Madrid and FC Barcelona meet. It has long been the most-watched club match in the world."
  },
  {
    q: "Who won the last El Clasico?",
    a: "In the most recent (2025-26) La Liga season, FC Barcelona won the Clasico 2-0 against Real Madrid at Camp Nou on 10 May — a win that also clinched the league title."
  },
  {
    q: "When is the next El Clasico?",
    a: "The 2026-27 La Liga season fixture list has yet to be released; this page, however, will be updated with the date, venue, kick-off time and IST conversion as soon as it is announced."
  },
  {
    q: "Who has scored the most El Clasico goals?",
    a: "The all-time El Clasico top scorer is Lionel Messi, from his years at FC Barcelona."
  },
  {
    q: "Who has won more Clasicos overall?",
    a: "There is barely a difference between the number of victories for Real Madrid and Barcelona across all competitive encounters - the slight edge (depending on whether friendly matches are counted) goes to Real Madrid."
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-4 mt-8">
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;
        return (
          <Reveal key={index} yOffset={20} delay={index * 0.05}>
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
  );
}
