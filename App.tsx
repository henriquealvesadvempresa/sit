import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Industries from './components/Industries';
import VideoGenerator from './components/VideoGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 min-h-screen text-gray-800 dark:text-gray-200">
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <Contact />
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default App;