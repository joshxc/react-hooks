import { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching3() {
  const [post, setPost] = useState({});
  const [id, setId] = useState('');
  const [idFromButtonClick, setIdFromButtonClick] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err.message));
    // Only want to fetch data on mount and when when button is clicked
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter post ID (1-100)"
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching3;
