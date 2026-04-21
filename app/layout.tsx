import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Soapdaxverse | Affiliate Anniversary Recap',
  description: 'Celebrating 3 years of amazing streams, incredible moments, and an unforgettable community.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/h.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/h.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/h.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/h.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
