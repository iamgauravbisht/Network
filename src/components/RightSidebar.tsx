import Chat from "./Chat";
import ChatBox from "./ChatBox";
import PeopleProfile from "./PeopleProfile";
import TrendingNews from "./TrendingNews";
import useMyContext from "../store/useMyContext";

export default function RightSidebar() {
  const { state } = useMyContext();

  return (
    <div className="w-[350px] h-fit ">
      {state.chatState === "chat" ? <Chat /> : null}
      {state.chatState === "chatroom" ? <ChatBox /> : null}
      {state.chatState === "profile" ? <PeopleProfile /> : null}
      <TrendingNews />
    </div>
  );
}
