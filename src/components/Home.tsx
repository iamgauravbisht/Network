import Dashboard from "./Dashboard";
import RightSidebar from "./RightSidebar";
import Feed from "./Feed";
import Chat from "./Chat";
import ChatBox from "./ChatBox";
import PeopleProfile from "./PeopleProfile";
import FriendList from "./FriendList";
import useMyContext from "../store/useMyContext";
import Draft from "./Draft";
import Settings from "./Setting";
import Profile from "./Profile";

export default function Home() {
  const { state } = useMyContext();

  return (
    <div className="w-full max-w-6xl ">
      <Dashboard />
      <div
        className="relative
      md:hidden"
      >
        {state.homeState === "feed" ? <Feed /> : null}
        {state.homeState === "profile" ? <Profile /> : null}
        {state.homeState === "settings" ? <Settings /> : null}
        {state.homeState === "draft" ? <Draft /> : null}

        <div className="w-[330px] absolute right-1 -bottom-60">
          {state.chatState === "chat" ? <Chat /> : null}
          {state.chatState === "chatroom" ? <ChatBox /> : null}
          {state.chatState === "profile" ? <PeopleProfile /> : null}
          {state.chatState === "friendList" ? <FriendList /> : null}
        </div>
      </div>

      <div className="hidden md:flex md:flex-row-reverse md:justify-between md:gap-5 mt-3 ">
        {state.homeState === "feed" ? <Feed /> : null}
        {state.homeState === "profile" ? <Profile /> : null}
        {state.homeState === "settings" ? <Settings /> : null}
        {state.homeState === "draft" ? <Draft /> : null}
        <RightSidebar />
      </div>
    </div>
  );
}
