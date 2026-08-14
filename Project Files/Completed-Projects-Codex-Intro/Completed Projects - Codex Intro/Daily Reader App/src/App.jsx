import { useState } from 'react';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import articles from './data/articles';
import styles from './App.module.css';

const App = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className={styles.app}>
      <header className={styles.siteHeader}>
        <span className={styles.siteName}>The Daily Read</span>
      </header>
      <main>
        {selectedArticle ? (
          <ArticleDetail
            article={selectedArticle}
            onBack={() => setSelectedArticle(null)}
          />
        ) : (
          <ArticleList articles={articles} onSelect={setSelectedArticle} />
        )}
      </main>
    </div>
  );
};

export default App;
