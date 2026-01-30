import { useEffect, useState } from 'react';
import { getPosts } from '../contentful';
import PostCard from './PostCard';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="posts">
        <p>Loading posts...</p>
      </section>
    );
  }

  return (
    <section className="posts">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  );
}
