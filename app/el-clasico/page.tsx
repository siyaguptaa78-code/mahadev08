import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '../../lib/siteConfig';
import FaqSection from './FaqSection';

export const metadata: Metadata = {
  title: "El Clasico: The Rivalry, Recent Results & What's Next",
  description: "El Clasico explained — Real Madrid vs Barcelona's history, the 2025-26 results including Barca's title-clinching win, and when the next Clasico is played.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/el-clasico/`,
  },
  openGraph: {
    title: "El Clasico: The Rivalry, Recent Results & What's Next",
    description: "El Clasico explained — Real Madrid vs Barcelona's history, the 2025-26 results including Barca's title-clinching win, and when the next Clasico is played.",
    url: `${SITE_CONFIG.url}/el-clasico/`,
    type: "article",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "El Clasico: The Rivalry, Recent Results & What's Next",
    description: "El Clasico explained — Real Madrid vs Barcelona's history, the 2025-26 results including Barca's title-clinching win, and when the next Clasico is played.",
  },
};

const sportsEventSchema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "El Clasico: Real Madrid vs FC Barcelona",
  "startDate": "2026-10-25T19:00:00+02:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "sport": "https://en.wikipedia.org/wiki/Association_football",
  "homeTeam": {
    "@type": "SportsTeam",
    "name": "Real Madrid CF",
    "url": "https://www.realmadrid.com"
  },
  "awayTeam": {
    "@type": "SportsTeam",
    "name": "FC Barcelona",
    "url": "https://www.fcbarcelona.com"
  },
  "description": "The first El Clasico of the 2026-27 La Liga season.",
  "about": "La Liga fixture between Real Madrid and FC Barcelona"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is El Clasico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El Clasico is the name given to the fixture in which Spanish football giants Real Madrid and FC Barcelona meet. It has long been the most-watched club match in the world."
      }
    },
    {
      "@type": "Question",
      "name": "Who won the last El Clasico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the most recent (2025-26) La Liga season, FC Barcelona won the Clasico 2-0 against Real Madrid at Camp Nou on 10 May — a win that also clinched the league title."
      }
    },
    {
      "@type": "Question",
      "name": "When is the next El Clasico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 2026-27 La Liga season fixture list has yet to be released; this page, however, will be updated with the date, venue, kick-off time and IST conversion as soon as it is announced."
      }
    },
    {
      "@type": "Question",
      "name": "Who has scored the most El Clasico goals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The all-time El Clasico top scorer is Lionel Messi, from his years at FC Barcelona."
      }
    },
    {
      "@type": "Question",
      "name": "Who has won more Clasicos overall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is barely a difference between the number of victories for Real Madrid and Barcelona across all competitive encounters - the slight edge (depending on whether friendly matches are counted) goes to Real Madrid."
      }
    }
  ]
};

export default function ElClasicoPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-500 text-sm font-semibold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-10 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Football
            </span>
            <span className="text-2xl">⚽</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
            El Clasico: The Rivalry, Recent Results & What's Next
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>July 14, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
            <div className="text-zinc-600">By Mahadev Book Analyst</div>
          </div>
        </div>

        {/* Jump To Navigation */}
        <div className="mb-8 p-4 bg-zinc-950/40 border border-zinc-900 rounded-xl text-sm text-zinc-400 font-light flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-semibold text-zinc-300">Jump to:</span>
          <a href="#what-is-el-clasico" className="hover:text-amber-400 transition-colors underline decoration-amber-500/20">What Is El Clasico</a>
          <span>|</span>
          <a href="#last-seasons-clasicos" className="hover:text-amber-400 transition-colors underline decoration-amber-500/20">Last Season's Clasicos</a>
          <span>|</span>
          <a href="#the-rivalry-in-numbers" className="hover:text-amber-400 transition-colors underline decoration-amber-500/20">The Rivalry in Numbers</a>
          <span>|</span>
          <a href="#the-next-clasico" className="hover:text-amber-400 transition-colors underline decoration-amber-500/20">The Next Clasico</a>
          <span>|</span>
          <a href="#faqs" className="hover:text-amber-400 transition-colors underline decoration-amber-500/20">FAQs</a>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none prose-amber prose-headings:font-serif prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-350 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:text-zinc-350 prose-li:font-light prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4">
          <p>
            No other fixture in club football has such a rich history, heated rivalries or globalised appeal. El Clasico - the encounters between Real Madrid and Barcelona - has seen league titles decided, managerial careers ended, and entire eras defined. And, incredibly, the 2025-26 season produced the most unique twist of all: Barca winning the league in the Clasico itself, with a 2-0 win over Madrid in May with three matches to spare.
          </p>

          <h3 id="what-is-el-clasico">What Is El Clasico</h3>
          <p>
            The fixture, which rages across more than a century, usually sees the Spanish giants face each other at least twice per La Liga season, with further meetings typically coming in the cup or Supercopa. A political, social, and footballing clash, the fixture unites the country's two most successful clubs and has long attracted wider cultural attention. El Clasico is the most-watched club match in the world. The 2009-14 era, when <Link href="/messi-vs-ronaldo/">Lionel Messi and Cristiano Ronaldo</Link> were at their peaks, saw the fixture become a genuine twice-yearly worldwide event, while the new rivals Yamal and Mbappe promise to bring the heat to the 2026-27 fixtures.
          </p>

          <h3 id="last-seasons-clasicos">The 2025-26 Clasicos</h3>
          <p>
            Two league matches, split between the rivals: Real Madrid won the early encounter at the Bernabéu in October, before a dramatic title-clinching win for Barca in the return fixture. The 10 May match at Camp Nou saw Hansi Flick's men seal their second successive league title and claim their 29th La Liga triumph. The two teams have also met across the cup competitions, with this page being updated to include the latest fixture(s) every season. Here, you can see all of the matches between the Spanish rivals that have taken place this season.
          </p>

          <h3 id="the-rivalry-in-numbers">The Rivalry in Numbers</h3>
          <p>
            Over 260 competitive fixtures, making El Clasico a relatively frequent meeting in the footballing calendar. Real Madrid have an incredibly slight advantage over their great rivals in terms of overall wins, although the balance frequently shifts depending on whether friendly matches are included or not, with this list being updated every season to reflect the latest meetings. Note the goalscoring record of Lionel Messi, the fixture's all-time top scorer, as well as the unique 2011 stretch in which both teams faced one another four times across eighteen days (Guardiola vs. Mourinho) — the rivalry's most feverish period.
          </p>

          <h3 id="the-next-clasico">When Is the Next El Clasico</h3>
          <p>
            The first Clasico of the 2026-27 La Liga season will take place when the league's fixture list is announced in July. When the date, venue, kick-off time (and IST conversion) are released, this page will be updated accordingly. In the meantime, once the first 2026-27 match has been played, this section will switch to showing the result and report.
          </p>

          <h3 id="faqs" className="border-t border-zinc-900 pt-8 mt-12 mb-4">El Clasico FAQs</h3>
          <FaqSection />

          <h3 className="border-t border-zinc-900 pt-8 mt-12 mb-4">Related Football Insights</h3>
          <ul className="space-y-2">
            <li>
              Track the latest standings in the <Link href="/premier-league-table/" className="text-amber-400 hover:text-amber-300 font-medium">Premier League table</Link>
            </li>
            <li>
              See the historical list of <Link href="/ballon-dor-winners/" className="text-amber-400 hover:text-amber-300 font-medium">Ballon d'Or winners</Link>
            </li>
          </ul>
        </article>

        {/* Call to Action Box */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-amber-500/10 text-center space-y-4">
          <h3 className="text-xl font-serif font-bold text-white">Want to put these insights into action?</h3>
          <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
            Get your verified Mahadev Book ID on WhatsApp in under 5 minutes and start placing smart bets now.
          </p>
          <div className="pt-2">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
            >
              Get Your ID Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
