import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ isLogin, onSubmit }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {isLogin ? 'Welcome Back!' : 'Join HabitFlow!'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="JakeFun123"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>
        )}

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg"
            placeholder="jameshift@gmail.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            {isLogin ? 'Password' : 'Create Password'}
          </label>
          <input
            type="password"
            className="w-full p-3 border rounded-lg"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#FF7423] text-white p-3 rounded-lg hover:bg-[#e06620] transition-colors"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="text-[#FF7423] hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <button 
          className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => alert('Google login coming soon!')}
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          {isLogin ? 'Login with Google' : 'Sign Up with Google'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;