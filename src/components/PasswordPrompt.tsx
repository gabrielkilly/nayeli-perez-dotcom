"use client";

import React, { useState, FormEvent } from 'react';
import { fontFamiljenGrotesk, fontWorkSans, fontYarndings12 } from './Fonts';
import { SvgArrowLeft } from './Svg';
import Link from 'next/link';

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
    <div className="fixed inset-0 bg-neutral-1 flex items-center justify-center z-50">
      <Link
        href="/"
        className="absolute top-8 left-8 w-12 h-12 rounded-full bg-neutral-3 bg-opacity-60 hover:bg-opacity-80 flex items-center justify-center transition-colors"
        aria-label="Go back"
      >
        <SvgArrowLeft colorCssValue="#000000" width="20" height="20" />
      </Link>

      <div className="flex flex-col items-center max-w-md w-full mx-4">
        <span className={`text-[#85934E] text-4xl font-normal leading-10 mb-5 ${fontYarndings12.className}`}>f</span>

        <h2 className={`text-type-1 text-4xl font-normal leading-10 mb-6 ${fontFamiljenGrotesk.className}`}>
          Password, please!
        </h2>

        <p className={`text-type-2 text-center text-base mb-12 ${fontWorkSans.className} leading-normal`}>
          Work section is password protected. If you&apos;d like to<br />learn more, please reach out to me!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
          <input
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setShowError(false);
            }}
            placeholder="Input password"
            autoFocus
            className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-700 bg-white text-type-2 ${
              showError ? 'border-red-500' : 'border-border-subtle'
            } ${fontWorkSans.className}`}
          />
          {showError && (
            <p className={`text-red-500 text-sm text-center ${fontWorkSans.className}`}>
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className={`bg-neutral-3 text-type-2 px-6 py-3 rounded border-b-2 border-[#9EA18A] hover:bg-neutral-300 transition-colors font-semibold uppercase tracking-wider ${fontWorkSans.className}`}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
