"use client";

import React, { useState, FormEvent } from 'react';
import { fontWorkSans, fontFamiljenGrotesk } from './Fonts';

interface PasswordPromptProps {
  onSubmit: (password: string) => void;
  error?: boolean;
}

export default function PasswordPrompt({ onSubmit, error }: PasswordPromptProps) {
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(error);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(password);
    setShowError(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-neutral-1 rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl border border-border-subtle">
        <h2 className={`text-type-2 text-2xl font-semibold mb-2 ${fontWorkSans.className}`}>
          Password Required
        </h2>
        <p className={`text-type-2 text-base mb-6 ${fontFamiljenGrotesk.className}`}>
          Please enter the password to view project pages.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setShowError(false);
            }}
            placeholder="Enter password"
            autoFocus
            className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-700 bg-white text-type-2 ${
              showError ? 'border-red-500' : 'border-border-subtle'
            } ${fontWorkSans.className}`}
          />
          {showError && (
            <p className={`text-red-500 text-sm ${fontWorkSans.className}`}>
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className={`bg-olive-700 text-type-alt px-6 py-3 rounded-lg hover:bg-olive-800 transition-colors font-semibold uppercase ${fontWorkSans.className}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
