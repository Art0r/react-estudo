import './App.css';
import { useEffect, useState, useMemo, useRef } from 'react';
import P from 'prop-types';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const input = useRef(null);

  const handleClick = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    input.current.focus();
  }, [inputValue]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 2500);
  }, []);

  console.log('Pai renderizou');
  return (
    <div className="App">
      <p>
        <input ref={input} type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </p>
      {useMemo(
        () => posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />),
        [posts],
      )}

      {posts.length <= 0 && <p>Corregando posts</p>}
    </div>
  );
}

export default App;
