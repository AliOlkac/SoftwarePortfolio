import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ali Olkaç | Projeler & Sertifikalar',
  description: 'Ali Olkaç - Yazılım Geliştiricisi, FullStack Developer, Bilgisayar Mühendisliği öğrencisi. Projelerim, sertifikalarım ve çalışmalarım hakkında bilgi edinebilirsiniz.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Projects />
      <Certificates />
    </main>
  );
} 