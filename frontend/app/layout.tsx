import { Roboto } from 'next/font/google'
import '@mantine/core/styles.css';
import { 
  ColorSchemeScript,
  MantineProvider,
  createTheme,
} from '@mantine/core';
import './globals.css';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin']
})


const theme = createTheme({
})


export default function RootLayout({ children }: {children: React.ReactNode})
{
  return (
    <html lang='en' className={roboto.className}>
      <head>
	<link rel='icon' href='./favicon.ico?v=1' sizes='any'/>
	<ColorSchemeScript/>
      </head>
      <body>
	<MantineProvider defaultColorScheme="dark" theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
