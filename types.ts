
// Import React to fix "Cannot find namespace 'React'" error on line 6
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  useCase: string;
  output: string;
}

export interface Project {
  id: number;
  title: { en: string; gu: string };
  location: { en: string; gu: string };
  type: { en: string; gu: string };
  images: string[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
