import { useTheme } from './ProviderExample.jsx';

export default function Toggle() {
  const { mode, toggleTheme, theme } = useTheme();
  const isDark = mode === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{
        ...styles.button,
        backgroundColor: theme.accent,
        color: theme.surface,
      }}
    >
      {isDark ? '라이트 모드로' : '다크 모드로'} 전환
    </button>
  );
}

const styles = {
  button: {
    border: 'none',
    borderRadius: '999px',
    padding: '0.6rem 1.2rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
  },
};
