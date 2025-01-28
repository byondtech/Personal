import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from './components/Navbar'; // Import the Navbar component
import AnimatedImage from './components/AnimatedImage';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import HorizontalScroll from './components/HorizontalScroll';
import ContactCard from './components/ContentCard';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const socialLinks = [
  { name: 'Twitter', href: '#', icon: FaTwitter },
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
  { name: 'YouTube', href: '#', icon: FaYoutube },
];


export default function Home() {
  return (
    <main className={`min-h-screen relative ${inter.className}`}>
      {/* Background color */}
      <div className="absolute inset-0 bg-white dark:bg-black -z-10" />
      
      {/* Use Navbar component */}
      <Navbar />

      {/* Content container */}
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pt-32 pb-20 gap-16 sm:p-20 sm:pt-32">
        {/* Hero section */}
        <div className="max-w-4xl text-left mt-16">
          <h1 className={`text-8xl sm:text-7xl text-black dark:text-white mb-6 tracking-tight ${playfair.className}`}>
            <span style={{ fontWeight: 50 }}>Hi, I'm</span>{" "}
            <span className="inline-flex items-center gap-4">
                      <AnimatedImage
                      src="/profile1.png"
                      alt="Shiva Panda"
                      width={56}
                      height={56}
                      className="hover:shadow-3xl"
                    />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Shiva Panda
            </span>
            </span>
            <br />
            <span style={{ fontWeight: 500 }}>
              Cybersecurity Engineer & Developer
            </span>
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-400 mb-8 leading-relaxed font-light">
            A passionate developer who loves to create beautiful and functional websites.
            I spend most of my time coding and designing digital experiences.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-yellow-400 transition-colors"
              >
                <item.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-lg font-medium">{item.name}</span>
              </a>
            ))}
          </div>
            {/* Work Experiences Section */}
          <div className="mt-16 w-full">
          <div className="text-gray-600 dark:text-gray-400 text-xl font-medium transition-colors mb-6 max-w-4xl mx-auto">
          Work Experiences
          </div>
          <div className=" pl-1 w-full"> {/* Match hero section padding */}
            <HorizontalScroll />
            </div>
          <div className="mt-16 w-full">
              <ContactCard />
          </div>

          </div>
          </div>

        {/* Footer area */} 
        <div className="w-full ">
          {/* Add your social links or other footer content here */}
        </div>
      </div>
    </main>
  );
}
