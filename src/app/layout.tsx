import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatApplication-with-ChatGPT',
  description: 'ChatApplication-with-ChatGPT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
