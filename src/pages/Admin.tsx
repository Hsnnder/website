import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminBulletin from '../components/AdminBulletin';
import { supabase } from '../lib/supabase';

export default function Admin({ session }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      alert(error.message);
    }
  }

  if (session) {
    return (
      <div className="min-h-screen pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AdminBulletin />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h1>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
      </main>
    </div>
  );
}