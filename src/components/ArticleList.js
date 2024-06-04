import Article from "./Article";
const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((p, i) => (
        <Article key={i} title={p.title} date={p.date} preview={p.preview} />
      ))}
    </main>
  );
};

export default ArticleList;