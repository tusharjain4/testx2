import './globals.css';
import type { Metadata } from 'next';
import { DotGothic16, Manrope, Archivo, Archivo_Narrow, Source_Serif_4 } from 'next/font/google';

const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dot-gothic-16',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const archivo = Archivo({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mihir Sharma - Full-Stack & Mobile Engineer Portfolio',
  description: 'Explore Mihir Sharma\'s portfolio featuring full-stack web and cross-platform mobile applications, expertise, and professional journey.',
  keywords: 'full-stack engineer, mobile engineer, web development, React, Next.js, Node.js, React Native, portfolio, Mihir Sharma',
  openGraph: {
    type: 'website',
    title: 'Mihir Sharma - Full-Stack & Mobile Engineer Portfolio',
    description: 'Explore Mihir Sharma\'s portfolio featuring full-stack web and cross-platform mobile applications, expertise, and professional journey.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Manrope:wght@400;600;700&family=Archivo:wght@400;800&family=Archivo+Narrow:wght@500&family=Source+Serif+4:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} ${dotGothic16.variable} ${archivo.variable} ${archivoNarrow.variable} ${sourceSerif4.variable}`}>
        {children}
      </body>
    </html>
  );
}