import "./globals.css";

import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
