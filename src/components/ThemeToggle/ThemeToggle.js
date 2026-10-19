import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <span className="theme-toggle__icon" data-active={!isDark} aria-hidden="true">
        <FiSun />
      </span>
      <span className="theme-toggle__icon" data-active={isDark} aria-hidden="true">
        <FiMoon />
      </span>
    </button>
  );
}

export default ThemeToggle;
