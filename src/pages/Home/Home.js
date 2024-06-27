import React, { useEffect, useState } from 'react';
import './index.css'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 5))); 
  }, []);

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
