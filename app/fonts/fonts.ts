
import { 
  Beth_Ellen, 
  Bigshot_One, 
  Unna, 
  Azeret_Mono 
} from 'next/font/google';

export const bethEllen = Beth_Ellen({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-beth-ellen', 
});

export const bigshotOne = Bigshot_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bigshot-one',
});

export const unna = Unna({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-unna',
});

export const azaretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-azeret-mono',
});
