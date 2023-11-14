import { Button } from "@/components/ui/button";
import { Baby, MessagesSquare, Bell, Settings, PenSquare } from "lucide-react";
import useMyContext from "../store/useMyContext";

export default function Dashboard() {
  const { state, dispatch } = useMyContext();

  const handleChatState = () => {
    if (state.chatState === "nothing") {
      dispatch({ type: "SET_CHAT_STATE", payload: "chat" });
    } else {
      dispatch({ type: "SET_CHAT_STATE", payload: "nothing" });
    }
  };
  const displayProfile = () => {
    dispatch({ type: "SET_HOME_STATE", payload: "profile" });
  };
  const displayFeed = () => {
    dispatch({ type: "SET_HOME_STATE", payload: "feed" });
  };
  const displaySettings = () => {
    dispatch({ type: "SET_HOME_STATE", payload: "settings" });
  };
  const displayDraft = () => {
    dispatch({ type: "SET_HOME_STATE", payload: "draft" });
  };

  return (
    <div
      className="border rounded-lg  flex overflow-scroll
  w-full h-fit
     "
    >
      <Button className="md:w-full" variant={"ghost"} onClick={displayProfile}>
        <Baby className="h-5 w-5 mr-2" />
        <p className="w-full text-left text-lg">Profile</p>
      </Button>
      <Button
        className="w-full messages"
        variant={"ghost"}
        onClick={handleChatState}
      >
        <MessagesSquare className="h-5 w-5 mr-2" />
        <p className="w-full text-left text-lg">Messages</p>
      </Button>
      <Button className="md:w-full" variant={"ghost"} onClick={displayDraft}>
        <PenSquare className="h-5 w-5 mr-2" />
        <p className="w-full text-left text-lg">Draft</p>
      </Button>
      <Button className="w-full" variant={"ghost"} onClick={displayFeed}>
        <Bell className="h-5 w-5 mr-2" />
        <p className="w-full text-left text-lg">Feed</p>
      </Button>
      <Button className="w-full" variant={"ghost"} onClick={displaySettings}>
        <Settings className="h-5 w-5 mr-2" />
        <p className="w-full text-left text-lg"> Settings</p>
      </Button>
    </div>
  );
}
