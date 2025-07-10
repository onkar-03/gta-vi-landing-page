import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register it once globally
// This is necessary to use ScrollTrigger in your project
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <h1 className='text-3xl text-indigo-600'>
        GTA VI Landing Page using GSAP
      </h1>
    </div>
  );
};

export default App;
