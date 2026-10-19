import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';

const renderApp = (path = '/') => {
  window.history.pushState({}, '', path);
  return render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
};

beforeEach(() => {
  localStorage.clear();
  document.documentElement.setAttribute('data-theme', 'light');
});

test('renders the hero, every section, and the résumé link', () => {
  renderApp('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/feels effortless/i);
  ['work', 'about', 'experience', 'skills', 'contact'].forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });
  const resumeLinks = screen.getAllByRole('link', { name: /résumé/i });
  expect(resumeLinks.length).toBeGreaterThan(0);
  resumeLinks.forEach((link) => {
    expect(link.getAttribute('href')).toMatch(/^https:\/\/drive\.google\.com\/file\/d\//);
  });
});

test('theme toggle switches theme and remembers the choice', () => {
  renderApp('/');
  fireEvent.click(screen.getByRole('button', { name: /switch to dark theme/i }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(localStorage.getItem('sm-theme')).toBe('dark');
  expect(screen.getByRole('button', { name: /switch to light theme/i })).toBeInTheDocument();
});

test('case study route renders its sections', () => {
  renderApp('/work/video-boilerplate');
  expect(screen.getByRole('heading', { level: 1, name: 'Video Boilerplate' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /technical approach/i })).toBeInTheDocument();
});
