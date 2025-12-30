import "./globals.css"
import { bethEllen, bigshotOne, unna } from '@/app/fonts/fonts';

export const metadata = {
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${bethEllen.variable} ${bigshotOne.variable} ${unna.variable}`}>
      <body>{children}</body>
    </html>
  );
}
