import styles from './PageHeader.module.css';

export default function PageHeader({ 
  title, 
  subtitle,
  highlight 
}) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {title.split(' ').map((word, i, arr) => {
            const isHighlight = highlight && word.toLowerCase() === highlight.toLowerCase();
            return (
              <span key={i}>
                {isHighlight ? (
                  <span className={styles.highlight}>{word}</span>
                ) : (
                  word
                )}
                {i < arr.length - 1 && ' '}
              </span>
            );
          })}
        </h1>
        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>
    </header>
  );
}
