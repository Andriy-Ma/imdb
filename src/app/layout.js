import './globals.css'

export const metadata = {
  title: 'IMDB CLONE',
  description: 'This is imdb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
