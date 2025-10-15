"use client";

import React, { useState } from 'react';
import { useProjectAuth } from '@/contexts/ProjectAuthContext';
import PasswordPrompt from './PasswordPrompt';

interface ProjectPageWrapperProps {
  children: React.ReactNode;
}

export default function ProjectPageWrapper({ children }: ProjectPageWrapperProps) {
  const { isAuthenticated, authenticate } = useProjectAuth();
  const [showError, setShowError] = useState(false);

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
