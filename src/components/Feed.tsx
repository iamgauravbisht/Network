import PostBox from "./PostBox";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="flex-1">
      <PostBox />
      <Post />
    </div>
  );
}
