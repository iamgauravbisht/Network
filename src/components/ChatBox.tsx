import { Send, BadgeInfo, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imgSrc from "@/assets/vite.svg";
import useMyContext from "../store/useMyContext";

export default function ChatBox() {
  const { dispatch } = useMyContext();

  const goBackToChat = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "chat" });
  };
  const goToProfile = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "profile" });
  };

  return (
    <Card className="w-full h-[500px] rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Avatar className="cursor-pointer">
            <AvatarImage src={imgSrc} alt="@accountImg" className="" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Friend Name</CardTitle>
            <CardDescription>@Freind_Id</CardDescription>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="icon" onClick={goBackToChat}>
            <Undo2 size={48} className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToProfile}>
            <BadgeInfo size={48} fill="green" className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 overflow-y-scroll h-[320px]">
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
            Hi, how can I help you today?
          </div>
          <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            Hey, I'm having trouble with my account.
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between">
        <Input />
        <Button>
          <Send className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
