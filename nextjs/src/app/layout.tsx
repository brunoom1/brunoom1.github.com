import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Gabriel Mendonça",
  description: "software engine - fullstack web develop",
};

import './global.css';
import { Header } from "@/components/Header";
import Script from "next/script";

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
      <head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KWB57XDB');`
          }}
          id="gtm" /> 
      </head>
      <body className={ roboto.className }>
        <div className="App">
          <Header />
          {children}
        </div>  
      </body>
    </html>
  );
}
