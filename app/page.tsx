'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Average response < 1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues with competitive odds and real-time markets.", icon: "🏏" },
  { title: "Football Leagues", desc: "Bet on Premier League, Champions League, La Liga, and Indian Super League events.", icon: "⚽" },
  { title: "Live Casino", desc: "Enjoy live dealer streams of Teen Patti, Andar Bahar, Roulette, and Poker from home.", icon: "🃏" },
  { title: "Tennis Matches", desc: "Place real-time bets on Grand Slams, ATP tour, and WTA tour tournaments.", icon: "🎾" },
  { title: "Virtual Sports", desc: "Fast-paced digital cricket, football and racing simulations available 24 hours a day.", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe, and local bank transfers with 256-bit encryption.", icon: Shield },
  { title: "Fast Payouts", desc: "Direct bank transfer withdrawals processed in 5-10 minutes flat.", icon: Zap },
  { title: "Data Insights", desc: "Free prediction models, player stats, and historical head-to-head analysis.", icon: TrendingUp },
  { title: "24/7 WhatsApp help", desc: "Dedicated personal relationship managers to assist you instantly.", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best platform I've used.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Mahadev Book for all my betting.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer service! They resolved my issue in minutes via WhatsApp.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: Award },
  { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: Check },
  { title: "Authority", desc: "Recognized as India's leading betting platform by top industry awards.", icon: Shield },
  { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: Lock }
];

const faqs = [
  { q: "What is Mahadev Book Online Betting ID?", a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience." },
  { q: "How does Mahadev Book work?", a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account." },
  { q: "How do I register for a new Online Betting ID?", a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes." },
  { q: "What games can I play with my Mahadev Book ID?", a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos." },
  { q: "How do I deposit money into my Mahadev Book account?", a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID." },
  { q: "How do I withdraw my winnings?", a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes." },
  { q: "Is Mahadev Book legal in India?", a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations." },
  { q: "Is Mahadev Book safe and trusted?", a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker." }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/916026703858";

  return (
    <div className="relative min-h-screen bg-[#080203] text-white font-sans selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* Dynamic Background Blurs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-700/10 blur-[150px]"></div>
      </div>

      {/* Hero Section - Glassmorphism Card Style */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-rose-500/20 text-rose-400 rounded-full text-sm font-bold tracking-wide border border-rose-500/30">
              INDIA'S #1 BETTING HUB
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1]">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">Game Experience</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Join the most trusted community of players. Fast payouts, secure transactions, and 60K+ live events waiting for you.
            </p>
            <a href={whatsappUrl} className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(225,29,72,0.3)]">
              <MessageSquare className="w-5 h-5" /> Claim Your ID
            </a>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-6 w-full">
            {stats.map((s, i) => (
              <div key={i} className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:border-rose-500/50 transition-colors">
                <div className="text-4xl font-black text-rose-500 w-24">{s.value}</div>
                <div>
                  <div className="font-bold text-lg">{s.label}</div>
                  <div className="text-zinc-500 text-sm">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="relative z-10 bg-black/50 border-y border-white/5 backdrop-blur-md py-4 overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-ticker text-rose-200/80 font-semibold tracking-widest text-sm uppercase">
          {[...tickerItems, ...tickerItems].map((item, idx) => <span key={idx}>{item}</span>)}
        </div>
      </div>

      {/* What is Mahadev - ZigZag Layout */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">WHAT IS <span className="text-rose-500">MAHADEV BOOK?</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">We bridge the gap between players and premier sportsbooks. Experience top-tier betting with the most trusted platform.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            {features.slice(0,2).map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <f.icon className="w-10 h-10 text-rose-500 mb-6" />
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-8 md:mt-16">
            {features.slice(2,4).map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <f.icon className="w-10 h-10 text-rose-500 mb-6" />
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games - Staggered Grid */}
      <section className="relative z-10 py-24 bg-rose-950/20 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black mb-4">POPULAR <span className="text-rose-500">MARKETS</span></h2>
              <p className="text-zinc-400">Your single verified ID to play all sports.</p>
            </div>
            <a href={whatsappUrl} className="text-rose-400 font-bold hover:text-rose-300 flex items-center gap-2">
              View All Games <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((g, i) => (
              <div key={i} className={`bg-black/60 backdrop-blur-sm border border-rose-500/20 p-8 rounded-[2rem] hover:scale-[1.02] transition-transform ${i === 1 ? 'md:-translate-y-6' : ''} ${i === 4 ? 'lg:col-span-2' : ''}`}>
                <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6">{g.icon}</div>
                <h3 className="text-xl font-bold mb-3">{g.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Reviews - Side by Side UI */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black mb-10 border-b border-white/10 pb-6">Trust Pillars</h2>
            <div className="space-y-6">
              {trustPoints.map((tp, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/20 group-hover:border-rose-500/50 transition-colors">
                    <tp.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{tp.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{tp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black mb-10 border-b border-white/10 pb-6">User Feedback</h2>
            <div className="grid gap-4">
              {reviews.slice(0, 4).map((rev, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-bold">{rev.name} <span className="text-xs text-zinc-500 font-normal ml-2">{rev.location}</span></div>
                    <div className="flex text-rose-500">{[...Array(rev.rating)].map((_,j)=><Star key={j} className="w-3 h-3 fill-current"/>)}</div>
                  </div>
                  <p className="text-zinc-300 text-sm">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Elegant Accordions */}
      <section className="relative z-10 py-24 px-6 bg-black/40 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Questions?</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden transition-all">
                <button onClick={() => setOpenFaq(openFaq===i?null:i)} className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5">
                  <span className="font-bold pr-4">{f.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 transition-transform ${openFaq===i ? 'rotate-180 bg-rose-500/20 text-rose-400' : ''}`}>
                    {openFaq === i ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
                  </div>
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-4 pointer-events-none">
        <div className="max-w-fit mx-auto bg-black/80 backdrop-blur-xl border border-white/10 p-2 rounded-full pointer-events-auto flex items-center gap-4 pr-6">
          <a href={whatsappUrl} className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg shadow-rose-600/30">
            <MessageSquare className="w-5 h-5 fill-current" />
          </a>
          <span className="font-bold text-sm">24/7 Support Available</span>
        </div>
      </div>
    </div>
  );
}
