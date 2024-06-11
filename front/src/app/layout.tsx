import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { Navbar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { metadata } from "./metadata";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
      </head>
      <body className={inter.className}>
      <ToastContainer />
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
