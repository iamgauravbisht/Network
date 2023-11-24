import { Button } from "@/components/ui/button";
import { MessageSquare, Contact, Search, XCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imgSrc from "@/assets/vite.svg";
import useMyContext from "../store/useMyContext";
import { useEffect, useState } from "react";
import { friends } from "@/controller/chatController";
type FriendList = {
  id: string;
  username: string;
};

export default function ChatBox() {
  const { state, dispatch } = useMyContext();
  const [friendList, setFriendList] = useState<FriendList[]>([]);

  useEffect(() => {
    async function getFriends() {
      const data = await friends(state.userId);
      setFriendList(data.results);
    }
    getFriends();
  }, [state.userId]);

  const OpendFriendList = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "friendList" });
  };
  const closeChat = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "nothing" });
  };

  const OpenChatHandler = (id: string, username: string) => {
    dispatch({
      type: "SET_CHAT_DOCUMENT",
      payload: { user1: state.userId, user2: id },
    });
    dispatch({ type: "SET_CHAT_NAME", payload: username });
    dispatch({ type: "SET_CHAT_STATE", payload: "chatroom" });
  };

  return (
    <Card className="w-full h-[500px] relative rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Network</CardTitle>
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="icon" onClick={closeChat}>
            <XCircle size={48} className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Search size={48} className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={OpendFriendList}>
            <Contact size={48} className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-scroll h-[404px]">
        {friendList.length > 0 &&
          friendList.map((friend) => {
            return (
              <div
                className=" cursor-pointer"
                onClick={() => OpenChatHandler(friend.id, friend.username)}
                key={friend.id}
              >
                <div className="flex flex-row gap-2 items-center relative mb-7">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={imgSrc} alt="@accountImg" className="" />
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{friend.username}</CardTitle>
                    <CardDescription>message....</CardDescription>
                  </div>
                </div>
              </div>
            );
          })}

        {/*  */}
      </CardContent>
      <Button className="absolute right-5 bottom-5">
        <MessageSquare className="h-4 w-4" />
      </Button>
    </Card>
  );
}
