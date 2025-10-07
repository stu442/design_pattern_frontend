export default function PageLayout({ title, description, children }) {
  return (
    <article style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>{title}</h2>
        {description ? <p style={styles.description}>{description}</p> : null}
      </header>
      {children}
    </article>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '760px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  title: {
    margin: 0,
  },
  description: {
    margin: 0,
    color: '#475569',
    lineHeight: 1.6,
  },
};
