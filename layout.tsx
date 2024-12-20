import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '重生之-股神归来',
  description: '股票交易追踪系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
} 