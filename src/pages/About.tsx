import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate computer engineer with over 5 years of experience in developing scalable software solutions. My journey in technology began during my university years, where I discovered my love for problem-solving through code.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Currently, ı am working on my projects and improve my skills. I am also a student at the Computer Engineering Department of the University of Çukurova.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, you can find me contributing to open-source projects, mentoring aspiring developers, or exploring new technologies.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Expertise</h2>
              <div className="space-y-4">
                {[
                  { category: 'Languages', skills: 'JavaScript, TypeScript, Python, C, C#' },
                  { category: 'Frontend', skills: 'React, JavaScript, HTML5, CSS3' },
                  { category: 'Backend', skills: 'Node.js, Django, Spring Boot' },
                  { category: 'Database', skills: 'PostgreSQL, MongoDB, Redis' },
                  
                ].map((item) => (
                  <div key={item.category}>
                    <h3 className="text-lg font-medium text-gray-900">{item.category}</h3>
                    <p className="text-gray-600">{item.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}