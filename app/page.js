'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Chef from '@/components/Chef';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import ReservationModal from '@/components/ReservationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#0b0b0b] text-[#f4f4f0] min-h-screen selection:bg-[#c5a880] selection:text-black">
      <Navbar onOpenReservation={() => setIsModalOpen(true)} />
      <Hero onOpenReservation={() => setIsModalOpen(true)} />
      <Story />
      <Menu />
      <Chef />
      <Gallery />
      <Reviews />
      <Footer onOpenReservation={() => setIsModalOpen(true)} />
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}