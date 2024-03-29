import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import imgSrc from "@/assets/vite.svg";
import { MessageSquare, Ban } from "lucide-react";
import useMyContext from "../store/useMyContext";
import { useEffect, useState } from "react";
import { getBio } from "@/controller/authController";

export default function PeopleProfile() {
  const { state, dispatch } = useMyContext();
  const [bio, setBio] = useState<string>("");
  const goToChatBox = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "chatroom" });
  };
  const friendId =
    state.userId == state.chatDocument?.user1
      ? state.chatDocument?.user2
      : state.chatDocument?.user1;

  useEffect(() => {
    async function Bio() {
      const response = await getBio(friendId);
      setBio(response.bio);
    }
    Bio();
  }, [friendId]);

  return (
    <Card className="w-full h-[500px] relative rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="w-full h-[100px] rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <Separator />
      <CardHeader className="py-3">
        <div className="flex flex-row gap-2 items-center relative ">
          <Avatar className="cursor-pointer">
            <AvatarImage src={imgSrc} alt="@accountImg" className="" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{state.chatName}</CardTitle>
            <CardDescription>@{friendId}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[325px] flex flex-col gap-2 ">
        <div className="flex flex-row gap-4">
          <Button variant={"outline"}>
            <Ban className="h-4 w-4" />
          </Button>
          <Button variant={"outline"} onClick={goToChatBox}>
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-y-scroll h-full mt-2">
          <ul className="list-none text-justify leading-5  ">
            <li className="mb-1">Bio</li>
            <li className="mb-1">{bio}</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
