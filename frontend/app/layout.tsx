import { Roboto } from 'next/font/google'
import './globals.css';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={roboto.className}>
      <head>
	<link rel='icon' href='./favicon.ico?v=1' sizes='any'/>
      </head>
      <body className='flex w-screen h-screen'>{children}</body>
    </html>
  );
}
