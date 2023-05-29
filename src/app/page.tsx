import Logo from '@/components/Logo';
import Hamburger from '@/components/Hamburger';
import HomeCards from '@/components/HomeCards/HomeCards';

export default function Home() {
  return (
    <main className="bg-[#0F1320]">
      <Logo />
      <Hamburger />
      <HomeCards />
    </main>
  );
}
