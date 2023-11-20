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
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imgSrc from "@/assets/vite.svg";
import useMyContext from "../store/useMyContext";

export default function ChatBox() {
  const { dispatch } = useMyContext();

  const OpenChatHandler = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "chatroom" });
  };
  const OpendFriendList = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "friendList" });
  };
  const closeChat = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "nothing" });
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
      <CardContent>
        <div
          className="overflow-y-scroll h-[404px] cursor-pointer"
          onClick={OpenChatHandler}
        >
          <div className="flex flex-row gap-2 items-center relative mb-7">
            <Avatar className="cursor-pointer">
              <AvatarImage src={imgSrc} alt="@accountImg" className="" />
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Friend Name</CardTitle>
              <CardDescription>last message</CardDescription>
            </div>
            <small className="absolute right-1 top-1">time</small>
          </div>
          {/* this is a message */}
        </div>
      </CardContent>
      <Button className="absolute right-5 bottom-5">
        <MessageSquare className="h-4 w-4" />
      </Button>
    </Card>
  );
}
