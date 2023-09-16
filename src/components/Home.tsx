import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Feed from "./Feed";

export default function Home() {
  return (
    <div className="w-full max-w-6xl flex justify-between gap-5">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}
