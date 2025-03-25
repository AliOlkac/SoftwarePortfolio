import Projects from '@/components/sections/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ali Olkaç | Projeler',
  description: 'Ali Olkaç - Yazılım Geliştiricisi, FullStack Developer, Bilgisayar Mühendisliği öğrencisi. Projelerim ve çalışmalarım hakkında bilgi edinebilirsiniz.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Projects />
    </main>
  );
} 