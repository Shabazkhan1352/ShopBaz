import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../lib/auth';
import SessionProvider from '../components/SessionProvider';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShopBaz - Aesthetic Clothing Store',
  description: 'Discover the latest in aesthetic fashion. Shop trendy clothes, accessories, and more at ShopBaz.',
  keywords: 'aesthetic clothing, fashion, trendy clothes, online shopping, style',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="min-h-screen bg-aesthetic-cream">
            {children}
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#374151',
                borderRadius: '12px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              },
            }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}