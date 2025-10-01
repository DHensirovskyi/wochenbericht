import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { MantineProvider } from "@mantine/core";

import '@mantine/dates/styles.css';
import '@mantine/core/styles.css';
import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WochenBericht",
  description: "Wöchentlichen Bericht mit KI erstellen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
