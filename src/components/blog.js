import '../styles/global.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { blog } from "../portfolio";
import { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown'
function Blog() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');

  const blogPost = blog.data.find(post => post.id === id);
  useEffect(() => {
    const url = `https://raw.githack.com/${blogPost.url.split('github.com/')[1].replace('blob/', '')}`;

    fetch(url)
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, [blogPost]);
    return (
      <div className="App">
        <h1>Blog</h1>
        <p>This is the blog page of the index : </p>
        <p>{id}</p>

        {blogPost ? (
        <div>
          <p>The URL of the blog post is: </p>
          <p>{blogPost.url}</p>
          <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>

          <ReactMarkdown>{markdown}</ReactMarkdown>

        </div>
      ) : (
        <p>No blog post found with the provided id.</p>
      )}


      </div>
    );
  }

  export default Blog;