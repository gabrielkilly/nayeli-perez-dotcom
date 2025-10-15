"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProjectAuthContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
}

const ProjectAuthContext = createContext<ProjectAuthContextType | undefined>(undefined);

const CORRECT_PASSWORD = "Learn By Making";
const AUTH_KEY = "project_auth";

export function ProjectAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check sessionStorage on mount
    if (typeof window !== 'undefined') {
      const authStatus = sessionStorage.getItem(AUTH_KEY);
      if (authStatus === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const authenticate = (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(AUTH_KEY, 'true');
      }
      return true;
    }
    return false;
  };

  return (
    <ProjectAuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </ProjectAuthContext.Provider>
  );
}

export function useProjectAuth() {
  const context = useContext(ProjectAuthContext);
  if (context === undefined) {
    throw new Error('useProjectAuth must be used within a ProjectAuthProvider');
  }
  return context;
}
