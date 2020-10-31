import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getBestStories() {
      const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
      try {
        const response =  await axios(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
       
        const json = await response.data;
        const promises = json
          .slice(0, 100)
          .map(id =>
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.data
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    getBestStories();
  }, []);
  
  function HackerBestPosts({ posts }) {
    if (posts.length === 0) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>HackerNews Best Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a href={post.url}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  return (
    <div >
      <HackerBestPosts posts={posts} />
    </div>
  );
}
