import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Infrastructure Manager',
    description: 'A scalable solution for managing cloud resources across multiple providers.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    tech: ['React', 'Node.js', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'AI-Powered Code Assistant',
    description: 'An intelligent code completion and suggestion tool for developers.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Distributed System Monitor',
    description: 'Real-time monitoring and analytics for distributed systems.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop',
    tech: ['Vue.js', 'Go', 'Prometheus'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}