const Article = ({ title, content,className }) => {
  return (
    <article className={`text-center space-y-3 ${className}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Article;
