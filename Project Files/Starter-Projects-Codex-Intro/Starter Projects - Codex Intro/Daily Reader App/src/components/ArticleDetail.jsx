import styles from './ArticleDetail.module.css';

const ArticleDetail = ({ article, onBack }) => {
  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={onBack}>
        &larr; Back to articles
      </button>
      <article className={styles.article}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.meta}>
          {article.author} &middot; {article.date}
        </p>
        <div className={styles.content}>
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
