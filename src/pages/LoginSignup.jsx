import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Flame, LogIn, UserPlus, Key, Info, HelpCircle } from 'lucide-react';

const LoginSignup = () => {
  const { login, signup, user } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  // Mode state: 'login' or 'signup'
  const [mode, setMode] = useState('login');

  // Input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (mode === 'login') {
      const res = login(email, password);
      if (res.success) {
        // Redirect to homepage or previous location
        const origin = location.state?.from?.pathname || '/';
        navigate(origin);
      } else {
        setErrorMsg(res.error || 'Login failed. Please check your credentials.');
      }
    } else {
      if (!name || !email || !mobile || !password) {
        setErrorMsg('Please fill in all registration fields.');
        return;
      }
      const res = signup(name, email, mobile, password);
      if (res.success) {
        navigate('/');
      } else {
        setErrorMsg(res.error || 'Signup failed.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 font-sans">
      <div className="bg-white rounded-3xl border border-marigold/15 shadow-md p-6 md:p-8 flex flex-col items-center">
        {/* Branding header */}
        <div className="flex items-center gap-2 mb-6 text-center">
          <div className="bg-saffron text-white p-2 rounded-xl">
            <Flame className="w-5 h-5" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-wider bg-gradient-to-r from-deepred to-saffron bg-clip-text text-transparent">
            PujaSewa
          </span>
        </div>

        {/* Form selection tabs */}
        <div className="grid grid-cols-2 gap-2 border-b border-marigold/10 pb-3 mb-6 w-full text-center">
          <button
            onClick={() => {
              setMode('login');
              setErrorMsg('');
            }}
            className={`py-2 text-sm font-bold transition-colors cursor-pointer ${
              mode === 'login'
                ? 'text-deepred border-b-2 border-deepred'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setMode('signup');
              setErrorMsg('');
            }}
            className={`py-2 text-sm font-bold transition-colors cursor-pointer ${
              mode === 'signup'
                ? 'text-deepred border-b-2 border-deepred'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Register
          </button>
        </div>

        {/* Inputs Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-xs font-medium text-gray-700">
          
          {mode === 'signup' && (
            <>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="regName">Full Name</label>
                <input
                  type="text"
                  id="regName"
                  required
                  placeholder="Enter full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="regMobile">Mobile Number</label>
                <input
                  type="tel"
                  id="regMobile"
                  required
                  placeholder="10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
                />
              </div>
            </>
          )}

          <div className="flex flex-col gap-1.5">
            <label htmlFor="authEmail">Email Address</label>
            <input
              type="email"
              id="authEmail"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="authPassword">Password</label>
            <input
              type="password"
              id="authPassword"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-marigold/45 focus:border-saffron rounded-lg py-2.5 px-3 outline-none text-gray-800 font-sans"
            />
          </div>

          {errorMsg && (
            <p className="text-[10px] text-rose-500 font-semibold pl-1">
              {errorMsg}
            </p>
          )}

          {/* Submit Trigger */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-deepred to-saffron hover:from-saffron hover:to-deepred text-white py-3 rounded-xl font-bold transition shadow active:scale-95 flex items-center justify-center gap-2 mt-2 cursor-pointer text-xs uppercase tracking-wider"
          >
            {mode === 'login' ? (
              <>
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Create Account</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Alert Box (helpful for tester) */}
        {mode === 'login' && (
          <div className="bg-cream-light border border-marigold/20 rounded-2xl p-4 mt-6 text-[10px] text-gray-500 font-light flex gap-2.5 w-full">
            <Info className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-700">📌 Demo Testing Credentials:</p>
              <p className="mt-1">Email: <span className="font-bold text-deepred">demo@pujasewa.com</span></p>
              <p>Password: <span className="font-bold text-deepred">demo123</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
