import type {Metadata} from "next";
import {Mulish} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import {ThemeProvider} from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
const font = Mulish({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "AI Agents as a Service - No Code AI AGENT BUILDER - Custom GPT CHATBOT",
    description: "NexAgents your Aaas and AI Agent builder",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark">
        <body className={font.className}>
        <ThemeProvider>
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
