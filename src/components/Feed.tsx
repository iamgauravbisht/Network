import { useEffect, useState, useRef } from "react";
import PostBox from "./PostBox";
import Post from "./Post";
import { getPosts } from "@/controller/authController";

type POST = {
  username: string;
  post: string;
  date: Date;
  time: string;
  venue: string;
  _id: string;
  likes: string[];
};
export default function Feed() {
  const [posts, setPosts] = useState<POST[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Add error state
  const [pageNumber, setPageNumber] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const result = await getPosts(pageNumber - 1, pageNumber + 2);
        if (result.posts.length === 0) {
          setError("No more posts to show.");
          return;
        }
        // Filter out duplicate posts based on the post ID
        const uniquePosts = result.posts.filter((newPost: POST) => {
          return !posts.some(
            (existingPost) => existingPost._id === newPost._id
          );
        });
        setPosts((prevPosts) => [...prevPosts, ...uniquePosts]);
        setPageNumber((prevPageNumber) => prevPageNumber + 2);
      } catch (error) {
        setError("Error fetching posts."); // Set the error state
      } finally {
        setLoading(false);
      }
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !loading && !error) {
          fetchData();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [error, loading, pageNumber, posts]); // Add dependencies to avoid unnecessary re-renders

  return (
    <div className="flex-1">
      <PostBox />
      {posts.length > 0 &&
        posts.map((post) => {
          // const time = new Date(post.date).toLocaleString();
          return (
            <Post
              key={post._id} // Add a key prop
              username={post.username}
              post={post.post}
              time={post.time}
              venue={post.venue}
              postId={post._id}
              likes={post.likes}
            />
          );
        })}

      <div ref={targetRef} className="p-4">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
