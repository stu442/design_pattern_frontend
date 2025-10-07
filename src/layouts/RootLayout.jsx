import { NavLink, Outlet } from 'react-router-dom';
import { EXAMPLES } from '../data/examples.js';

const NAV_ITEMS = [
  {
    id: 'home',
    title: '홈',
    description: '학습을 시작하려면 패턴을 선택하세요.',
    to: '/',
  },
  ...EXAMPLES,
];

export default function RootLayout() {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h1 style={styles.title}>React Design Patterns</h1>
        <nav>
          <ul style={styles.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id} style={styles.listItem}>
                <NavLink
                  to={item.to}
                  end
                  style={({ isActive }) => ({
                    ...styles.link,
                    ...(isActive ? styles.activeLink : undefined),
                  })}
                >
                  <span style={styles.linkTitle}>{item.title}</span>
                  <span style={styles.linkDescription}>{item.description}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section style={styles.content}>
        <Outlet />
      </section>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '320px 1fr',
    minHeight: '100vh',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#f4f6fb',
  },
  sidebar: {
    padding: '2rem 1.5rem',
    backgroundColor: '#1f2937',
    color: '#f9fafb',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  title: {
    margin: 0,
    fontSize: '1.75rem',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  listItem: {
    margin: 0,
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
    textDecoration: 'none',
    padding: '1rem',
    borderRadius: '12px',
    color: '#e2e8f0',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  },
  activeLink: {
    backgroundColor: '#2563eb',
    color: '#f8fafc',
    transform: 'translateX(4px)',
  },
  linkTitle: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },
  linkDescription: {
    fontSize: '0.95rem',
    color: 'inherit',
    opacity: 0.85,
  },
  content: {
    padding: '2.5rem 3rem',
  },
};
