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

type Post = {
  username: string;
  post: string;
  time: string;
  venue: string;
  postId: string;
};

export default function Post({ username, post, time, venue, postId }: Post) {
  return (
    <Card key={postId} className="mb-4">
      <CardHeader>
        <div className="flex flex-row gap-2 items-center relative mb-7">
          <Avatar className="cursor-pointer">
            <AvatarImage src={imgSrc} alt="@accountImg" className="" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{username}</CardTitle>
            <CardDescription>{venue}</CardDescription>
          </div>
          <small className="absolute right-1 top-1">{time}</small>
        </div>
      </CardHeader>
      <CardContent>
        <p>{post}</p>
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
