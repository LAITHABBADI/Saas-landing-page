import type {Metadata} from "next";
import {Mulish} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import {ThemeProvider} from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
const font = Mulish({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "free ai chatbot - Agents as a Service - No Code AI AGENT BUILDER - Custom GPT CHATBOT",
    description: "NexAgents your Aaas and AI Agent builder",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="en" className="dark">
        <head>
          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="Business Chatbots & GPT-Powered AI Agents: Custom Solutions for Healthcare & Enterprise"
          />
          <meta
            property="og:description"
            content="Discover how chatbots for business and AI automation are transforming enterprises. Featuring GPT-4 agents, GPT-3 agents, and custom healthcare AI solutions."
          />
          <meta
            property="og:image"
            content="https://www.nexagents.cloud/images/chat1.webp"
          />
          <meta
            property="og:image"
            content="https://www.nexagents.cloud/images/chat2.webp"
          />
          <meta
            property="og:image"
            content="https://www.nexagents.cloud/images/chat3.webp"
          />
          <meta
            property="og:image"
            content="https://www.nexagents.cloud/images/chat4.webp"
          />
          <meta
            property="og:image"
            content="https://www.nexagents.cloud/images/chat5.webp"
          />
          <meta
            property="og:url"
            content="https://www.nexagents.cloud/blog/The%20Evolution%20of%20AI%20Chatbots:%20Transforming%20Digital%20Communication%20in%202024"
          />
          <meta
            property="og:url"
            content="https://www.nexagents.cloud/blog/AI%20Automation:%20Revolutionizing%20Business%20Operations%20in%202024"
          />
          <meta
            property="og:url"
            content="https://www.nexagents.cloud/blog/The%20Evolution%20of%20AI%20Agents:%20From%20General%20to%20Vertical%20Applications"
          />
          <meta
            property="og:url"
            content="https://www.nexagents.cloud/blog/Build%20and%20Sell%20AI%20Agents%20Without%20Writing%20a%20Single%20Line%20of%20Code"
          />
          <meta
            property="og:url"
            content="https://www.nexagents.cloud/blog/The%20Rise%20of%20AI%20Agent%20Builders:%20Transforming%20Business%20and%20Healthcare%20Through%20Intelligent%20Automation"
          />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Business Chatbots & AI Agents: GPT-Powered Enterprise Solutions"
          />
          <meta
            name="twitter:description"
            content="Transform your business with custom AI solutions: GPT-4 agents, GPT-3 agents, healthcare AI, and chatbots for business automation."
          />
          <meta
            name="twitter:image"
            content="https://www.nexagents.cloud/images/chat1.webp"
          />
          <meta
            name="twitter:image"
            content="https://www.nexagents.cloud/images/chat2.webp"
          />
          <meta
            name="twitter:image"
            content="https://www.nexagents.cloud/images/chat3.webp"
          />
          <meta
            name="twitter:image"
            content="https://www.nexagents.cloud/images/chat4.webp"
          />
          <meta
            name="twitter:image"
            content="https://www.nexagents.cloud/images/chat5.webp"
          />

          {/* Additional SEO Tags */}
          <meta name="author" content="[Your Name]" />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.nexagents.cloud/blog/The%20Evolution%20of%20AI%20Chatbots:%20Transforming%20Digital%20Communication%20in%202024"
          />
          <link
            rel="canonical"
            href="https://www.nexagents.cloud/blog/AI%20Automation:%20Revolutionizing%20Business%20Operations%20in%202024"
          />
          <link
            rel="canonical"
            href="https://www.nexagents.cloud/blog/The%20Evolution%20of%20AI%20Agents:%20From%20General%20to%20Vertical%20Applications"
          />
          <link
            rel="canonical"
            href="https://www.nexagents.cloud/blog/Build%20and%20Sell%20AI%20Agents%20Without%20Writing%20a%20Single%20Line%20of%20Code"
          />
          <link
            rel="canonical"
            href="https://www.nexagents.cloud/blog/The%20Rise%20of%20AI%20Agent%20Builders:%20Transforming%20Business%20and%20Healthcare%20Through%20Intelligent%20Automation"
          />
        </head>
        <body className={font.className}>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    );
}
