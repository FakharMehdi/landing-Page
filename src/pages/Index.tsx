
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AudienceSection from '@/components/AudienceSection';
import HowItWorks from '@/components/HowItWorks';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AudienceSection audience="cafe" />
        <HowItWorks />
        <AudienceSection audience="attendee" />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
