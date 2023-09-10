import type { NextPage } from "next";
import Header from '../components/Header';
import Image from 'next/image';
import Download from '../components/Download';
import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';


const Main: NextPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="container md:mx-auto my-auto">
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Main;
