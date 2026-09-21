import './globals.css'

export const metadata = {
  title: 'Maryland Hotel - Luxury Redefined',
  description: 'Experience world-class luxury in Port Harcourt',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
