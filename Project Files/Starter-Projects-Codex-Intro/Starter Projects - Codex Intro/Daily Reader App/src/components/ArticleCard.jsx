import styles from './ArticleCard.module.css';

const ArticleCard = ({ article, onSelect }) => {
  return (
    <article className={styles.card} onClick={() => onSelect(article)}>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.meta}>
        {article.author} &middot; {article.date}
      </p>
      <p className={styles.summary}>{article.summary}</p>
      <button className={styles.button} aria-label={`Read ${article.title}`}>
        Read article
      </button>
    </article>
  );
};

export default ArticleCard;
