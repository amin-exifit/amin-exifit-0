import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import FutureSection from '../components/Home/FutureSection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'مدیریت سلامت نقره‌ای';
  }, []);

  return (
    <div>
      <Hero />
      <FutureSection />
    </div>
  );
};

export default Home;