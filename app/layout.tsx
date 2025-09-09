import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTop from '../components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mukul Jangid - Full Stack Developer & Software Engineer',
  description: 'Portfolio of Mukul Jangid - MS Computer Science graduate from Boston University, Full Stack Developer with expertise in React, Node.js, Python, Java, AWS, and DevOps.',
  keywords: 'Mukul Jangid, Full Stack Developer, Software Engineer, React, Node.js, Python, Java, AWS, DevOps, Boston University',
  authors: [{ name: 'Mukul Jangid' }],
  openGraph: {
    title: 'Mukul Jangid - Full Stack Developer',
    description: 'Portfolio showcasing full-stack development skills, projects, and professional experience.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukul Jangid - Full Stack Developer',
    description: 'Portfolio showcasing full-stack development skills, projects, and professional experience.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
