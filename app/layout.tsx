import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kallista Abigail',
  description: 'Kallista Abigail is a designer and developer who creates beautiful.',
  keywords: [
    'Kallista Abigail',
    'designer',
    'developer',
    'web design',
    'web development',
    'portfolio',
  ],
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
