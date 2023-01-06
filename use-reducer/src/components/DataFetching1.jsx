//! This example shows data fetching using useState and useEffect
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setPost(response.data);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError('Something went wrong!');
      });
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : [post.title]}
      {error ? error : null}
    </div>
  );
}

export default DataFetching1;
