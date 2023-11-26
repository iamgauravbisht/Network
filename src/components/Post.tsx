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
import { Input } from "@/components/ui/input";
import { MessageSquare, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import {
  likePost,
  unlikePost,
  postComment,
  getComment,
} from "@/controller/chatController";
import useMyContext from "../store/useMyContext";

type Post = {
  username: string;
  post: string;
  time: string;
  venue: string;
  postId: string;
  likes: string[];
};

type Comment = {
  userId: string;
  username: string;
  comment: string;
  date: Date;
  time: string;
};

export default function Post({
  username,
  post,
  time,
  venue,
  postId,
  likes,
}: Post) {
  const { state } = useMyContext();
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [noOfLikes, setNoOfLikes] = useState<number>(likes.length || 0);

  useEffect(() => {
    if (likes.includes(state.userId)) {
      setIsLiked(true);
    }
  }, [likes, state.userId]);

  const like = async (postId: string) => {
    try {
      const res = await likePost(postId, state.userId);
      if (res?.message && res.message.includes("liked")) {
        setIsLiked(true);
        setNoOfLikes((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const unlike = async (postId: string) => {
    try {
      const res = await unlikePost(postId, state.userId);
      if (res?.message && res.message.includes("unliked")) {
        setIsLiked(false);
        setNoOfLikes((prev) => prev - 1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const postComments = async (postId: string) => {
    try {
      const res = await postComment(
        postId,
        state.userId,
        state.user.username,
        commentText
      );
      if (res?.message && res.message.includes("successfully")) {
        setComments((prev) => [
          {
            userId: state.userId,
            username: state.user.username,
            comment: commentText,
            date: new Date(),
            time: "",
          },
          ...prev,
        ]);
        setCommentText("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getComments = async (postId: string) => {
    try {
      const res = await getComment(postId);
      setComments(res.comments);
    } catch (error) {
      console.error(error);
    }
  };

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
      <CardFooter className="flex flex-col gap-3">
        <div className="flex gap-2 w-full">
          {isLiked ? (
            <Button variant={"ghost"} onClick={() => unlike(postId)}>
              {noOfLikes}
              <Heart className="h-4 w-4" fill="red" />
            </Button>
          ) : (
            <Button variant={"ghost"} onClick={() => like(postId)}>
              {noOfLikes}
              <Heart className="h-4 w-4" />
            </Button>
          )}
          <Button variant={"ghost"} onClick={() => getComments(postId)}>
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Input
            type="text"
            placeholder="Comment"
            className="flex-1"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button onClick={() => postComments(postId)}>
            <small>Post</small>
          </Button>
        </div>
        {comments.length > 0 ? (
          <div className="w-full max-h-[250px] h-fit overflow-y-scroll">
            {comments.map((comment) => {
              return (
                //create a comment component ui like in social media apps
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center relative mb-7">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={imgSrc}
                        alt="@accountImg"
                        className=""
                      />
                      <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{comment.username}</CardTitle>
                      <CardDescription>{comment.comment}</CardDescription>
                    </div>
                    <small className="absolute right-1 top-1">
                      {comment.time}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
}
