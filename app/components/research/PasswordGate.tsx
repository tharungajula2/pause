'use client';

import React, { useState } from 'react';
import { CtaButton } from '../ui/CtaButton';

interface PasswordGateProps {
  onUnlock: (password: string) => boolean;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onUnlock(password);
    if (!success) {
      setError(true);
      setPassword('');
      // Shake effect or reset error after a delay
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <span className="text-accent/50 text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Master Study</span>
          <h2 className="text-4xl font-serif mb-4">Research Archive</h2>
          <p className="text-foreground/80 font-light leading-relaxed text-lg italic">
            This workspace contains working workbook layers and open questions. Access is restricted to founder study.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <input
              type="password"
              placeholder="Enter access key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-graphite/5 border ${error ? 'border-red-500/50' : 'border-foreground/10 group-hover:border-accent/30'} rounded-2xl px-6 py-5 text-center transition-all duration-300 outline-none placeholder:text-foreground/20 font-serif text-lg tracking-widest`}
              autoFocus
            />
            {error && (
              <p className="absolute -bottom-8 left-0 right-0 text-[10px] text-red-500/60 uppercase tracking-widest text-center font-bold">
                Invalid access key. Please retry.
              </p>
            )}
          </div>

          <CtaButton 
            type="submit" 
            variant="primary" 
            size="xl" 
            className="w-full"
          >
            Unlock Workbook
          </CtaButton>
        </form>

        <div className="mt-16 pt-8 border-t border-foreground/5 text-center">
          <p className="text-[9px] uppercase tracking-[0.4em] text-foreground/45 font-bold leading-relaxed">
            Unfinished research. Intentional mastery. <br/>
            PAUSE — Private Working Layer
          </p>
        </div>
      </div>
    </div>
  );
};
