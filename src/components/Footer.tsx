import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface/50 mt-12">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient mb-2 block">
              HARIHARAN
            </a>
            <p className="text-gray-400 text-sm">
              Building scalable web and mobile applications.
            </p>
          </div>

          <div className="flex gap-4">
            <a href={profileInfo.github} className="p-2 text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={profileInfo.linkedin} className="p-2 text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${profileInfo.email}`} className="p-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} {profileInfo.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
