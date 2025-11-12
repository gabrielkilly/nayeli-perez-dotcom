"use client";

import React, { useState, useEffect } from 'react';
import { useProjectAuth } from '@/contexts/ProjectAuthContext';
import PasswordPrompt from './PasswordPrompt';

interface ProjectPageWrapperProps {
  children: React.ReactNode;
}

export default function ProjectPageWrapper({ children }: ProjectPageWrapperProps) {
  const { isAuthenticated, authenticate } = useProjectAuth();
  const [showError, setShowError] = useState(false);

  // Handle hash navigation on mount and when hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');

        // Try multiple times with increasing delays to ensure content is loaded
        const attemptScroll = (attempt = 0) => {
          const element = document.getElementById(id);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 80; // 80px offset from top

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else if (attempt < 5) {
            // Retry if element not found yet (page still loading)
            setTimeout(() => attemptScroll(attempt + 1), 200);
          }
        };

        // Initial delay to let page render
        setTimeout(() => attemptScroll(), 300);
      }
    };

    // Only scroll if authenticated, otherwise wait for auth
    if (isAuthenticated) {
      scrollToHash();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [isAuthenticated]);

  const handlePasswordSubmit = (password: string) => {
    const success = authenticate(password);
    if (!success) {
      setShowError(true);
    }
  };

  if (!isAuthenticated) {
    return <PasswordPrompt onSubmit={handlePasswordSubmit} error={showError} />;
  }

  return <>{children}</>;
}
