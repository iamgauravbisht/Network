import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imgSrc from "@/assets/vite.svg";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Link } from "lucide-react";

export default function Post() {
  return (
    <Card>
      <CardHeader>
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
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant={"ghost"}>
          <Heart className="h-4 w-4" />
        </Button>
        <Button variant={"ghost"}>
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button variant={"ghost"}>
          <Link className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
