import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface BulletinItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export default function Bulletin() {
  const [bulletins, setBulletins] = useState<BulletinItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchBulletins();
    const subscription = supabase
      .channel('bulletins')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'bulletins' }, fetchBulletins)
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bulletins.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bulletins.length]);

  async function fetchBulletins() {
    const { data } = await supabase
      .from('bulletins')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setBulletins(data);
    }
  }

  if (bulletins.length === 0) {
    return null;
  }

  return (
    <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-2">{bulletins[currentIndex].title}</h2>
          <p className="text-lg opacity-90">{bulletins[currentIndex].content}</p>
        </motion.div>
      </div>
    </div>
  );
}