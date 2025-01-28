import { FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function ContactCard() {
  return (
    <div className="relative max-w-md mx-auto bg-white dark:bg-black rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-3xl font-bold text-black dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Say hi!</span>
      </h2>
      <div className="space-y-2">
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <FaEnvelope className="mr-2" />
          <a href="mailto:shivapanda56@gmail.com" className="hover:underline">shivapanda56@gmail.com</a>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <FaTwitter className="mr-2" />
          <a href="https://twitter.com/shivapanda15" target="_blank" rel="noopener noreferrer" className="hover:underline">@Shivapanda15</a>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        Want to create something awesome? Or, you have any query? Drop an email or tweet.
      </p>
      <button className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white rounded-full py-3 px-8 font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300">
          Send Enquiry
        </button>
      <div className="absolute bottom-4 right-4 transform scale-125 opacity-50 dark:opacity-80">
        {/* Add image bubbles here */}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fbc2eb" />
              <stop offset="100%" stopColor="#a6c1ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
