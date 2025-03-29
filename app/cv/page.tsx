import CV from '@/components/sections/CV';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ali Olkaç | Özgeçmiş',
  description: 'Ali Olkaç - Bilgisayar Mühendisliği öğrencisi, Full-Stack Geliştirici. Eğitim, deneyim ve yeteneklerimin yer aldığı özgeçmişim.',
};

export default function CVPage() {
  return (
    <main className="min-h-screen">
      <CV />
    </main>
  );
} 