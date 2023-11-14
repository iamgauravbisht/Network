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
import { MessageSquare, Copy, Ban, Heart } from "lucide-react";
import useMyContext from "../store/useMyContext";

export default function PeopleProfile() {
  const { dispatch } = useMyContext();

  const goToChatBox = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "chatroom" });
  };
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
            <CardTitle>Name of person</CardTitle>
            <CardDescription>@User_Id</CardDescription>
          </div>
          <small className="absolute right-1 top-1">time</small>
        </div>
      </CardHeader>
      <CardContent className="h-[325px] flex flex-col gap-2 ">
        <div className="flex flex-row justify-between">
          <Button variant={"default"}>Send Friend Request</Button>
        </div>
        <div className="flex flex-row justify-between">
          <Button variant={"outline"}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant={"outline"}>
            <Ban className="h-4 w-4" />
          </Button>
          <Button variant={"outline"}>
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant={"outline"} onClick={goToChatBox}>
            <MessageSquare className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-y-scroll h-full mt-2">
          <ul className="list-none text-justify leading-5  ">
            <li className="mb-1">Details</li>
            <li className="mb-1">
              Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque laboriosam quae
            </li>
            <li className="mb-1">No.of freinds: 45</li>
            <li className="mb-1">No.of posts: 45</li>
            <li className="mb-1">Details</li>
            <li className="mb-1">
              Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque laboriosam quae
            </li>
            <li className="mb-1">No.of freinds: 45</li>
            <li className="mb-1">No.of posts: 45</li>
            <li className="mb-1">Details</li>
            <li className="mb-1">
              Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque laboriosam quae
            </li>
            <li className="mb-1">No.of freinds: 45</li>
            <li className="mb-1">No.of posts: 45</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
