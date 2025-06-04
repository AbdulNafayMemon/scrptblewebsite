import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SCRPTBLE - Build Fast. Scale Smarter.',
  description: 'We build custom software solutions that help businesses grow and scale efficiently.',
  icons: { // <--- ADD THIS 'icons' PROPERTY
    icon: '/favicon.ico', // This will be your default favicon
    shortcut: '/favicon.ico', // Optional: for older browsers/devices
    apple: '/apple-icon.png', // For Apple touch icons
    other: [ // For other specific icons if needed
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      // You can add more sizes/types here, e.g., for SVG:
      // {
      //   rel: 'icon',
      //   type: 'image/svg+xml',
      //   url: '/icon.svg',
      // },
    ],
  },
  // You can also add manifest for PWA:
  // manifest: '/site.webmanifest',
};
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 
