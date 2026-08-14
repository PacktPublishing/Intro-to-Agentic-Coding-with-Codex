import ArticleCard from './ArticleCard';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles, onSelect }) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Latest Articles</h1>
        <p className={styles.subheading}>
          {articles.length} article{articles.length !== 1 ? 's' : ''}
        </p>
      </header>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
