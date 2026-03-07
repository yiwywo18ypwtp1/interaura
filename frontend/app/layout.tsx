import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
    variable: '--font-sans-jakarta',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Interaura - AI mock interviews",
    description: "Simulate technical interviews with an AI interviewer and get structured feedback to improve your skills.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={jakartaSans.variable} data-theme="light">
            <body
                className=""
            >
                {children}
            </body>
        </ html >
    );
}
