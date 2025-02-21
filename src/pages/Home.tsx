import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Bulletin from '../components/Bulletin';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Bulletin />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img
            src="/Users/onderkabadayi/Desktop/selfi.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hüsnü Önder Kabadayı
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Computer Engineer Student
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Hsnnder" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/%C3%B6nder-kabadayi-69a81a255/" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="gmail:husnuonde7@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Vue, Angular</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Python, Java</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-gray-600">AWS, Azure, GCP</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}