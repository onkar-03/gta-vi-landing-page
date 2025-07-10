import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavBar from './sections/NavBar.jsx';
import Hero from './sections/Hero.jsx';

// Register it once globally
// This is necessary to use ScrollTrigger in your project
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
