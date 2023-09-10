import { useState } from 'react';
import Image from 'next/image';
import Download from './Download';

const Home = () => {

    return (
        <section className="min-h-screen flex items-center justify-center w-screen p-10 py-40" id="home">
          <div className="mx-auto grid lg:px-20 md:grid-cols-2 md:gap-10">
            <div className="mx-auto">
              <Image 
                src="/../public/images/headshot.jpg" 
                alt="Janelle's Headshot"
                width={500}
                height={500}
                className="rounded-md"></Image>
              <p className="py-1">
                Photo by <a className="underline" href="https://jvmonday.myportfolio.com/">Van Monday</a>.
              </p>
            </div>
            <div className="leading-relaxed text-center md:text-left space-y-2 md:mt-0 mt-5">
              <h2 className="font-bold text-3xl">Hi!</h2>
              <h2 className="font-bold text-2xl">I'm <span className="text-burnt-orange">Janelle Krupicka</span>.</h2>
              <p className="text-xl">
                I love developing software that puts people first.
              </p>
              <p>
                I'm a senior at the College of William & Mary studying Computer Science and Sociology.
              </p>
              <p className="font-bold text-burnt-orange text-xl">
              I'm currently looking for a post-grad software engineering position!
              </p>
              <Download />
            </div>
          </div>
          <p className="py-5">
          </p>
        </section>
    )
}

export default Home;