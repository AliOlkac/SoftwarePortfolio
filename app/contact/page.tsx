import Contact from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ali Olkaç | İletişim',
  description: 'Ali Olkaç ile iletişime geçin. E-posta, sosyal medya ve diğer iletişim kanalları ile bana ulaşabilirsiniz.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  );
} 