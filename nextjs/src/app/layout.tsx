import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Gabriel Mendonça",
  description: "software engine - fullstack web develop",
};

import './global.css';

const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={ roboto.className }>
        <div className="App">
          {children}
        </div>  
      </body>
    </html>
  );
}
