import { createContext, useContext, useState } from 'react';
import Toggle from './Toggle.jsx';

export const ThemeContext = createContext(null);

const THEMES = {
  light: {
    label: '라이트 모드',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#0f172a',
    accent: '#2563eb',
  },
  dark: {
    label: '다크 모드',
    background: '#0f172a',
    surface: '#111827',
    text: '#e2e8f0',
    accent: '#60a5fa',
  },
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeContext.Provider');
  }
  return context;
}

function ThemePreview() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        ...styles.preview,
        backgroundColor: theme.surface,
        color: theme.text,
        borderColor: theme.accent,
      }}
    >
      <h4 style={styles.previewTitle}>{theme.label}</h4>
      <p style={styles.previewBody}>
        Provider를 사용하면 트리 깊숙한 곳의 컴포넌트도 공통 상태를 쉽게 공유할 수 있습니다.
      </p>
    </div>
  );
}

export default function ProviderExample() {
  const [mode, setMode] = useState('light');
  const theme = THEMES[mode];

  const value = {
    mode,
    theme,
    toggleTheme: () => setMode((current) => (current === 'light' ? 'dark' : 'light')),
  };

  return (
    <ThemeContext.Provider value={value}>
      <section
        style={{
          ...styles.container,
          backgroundColor: theme.background,
        }}
      >
        <header style={styles.header}>
          <h3 style={styles.title}>Context Provider 예제</h3>
          <Toggle />
        </header>
        <ThemePreview />
      </section>
    </ThemeContext.Provider>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    padding: '1.75rem',
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.4)',
    transition: 'background-color 0.3s ease',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
  },
  preview: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '12px',
    padding: '1.25rem',
    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
  },
  previewTitle: {
    margin: '0 0 0.75rem 0',
  },
  previewBody: {
    margin: 0,
    lineHeight: 1.5,
  },
};
