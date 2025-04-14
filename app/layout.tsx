import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";


export const metadata: Metadata = {
    title: "URL Shortener App",
    description: "Shortens URLs",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="bg-rose-200">
            <Header />
            {children}
        </body>
        </html>
    );
}
