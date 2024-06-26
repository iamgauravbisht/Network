import {
  Card,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  //   CardHeader,
  //   CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { draft, createPost } from "@/controller/authController";
import useMyContext from "../store/useMyContext";

export default function PostBox({handleRefresh}:{handleRefresh:()=>void}) {
  const { state } = useMyContext();
  const [postValue, setPostValue] = useState("");


  const saveAsDraft = async () => {
    try {
      const result = await draft(postValue, state.userId);
      console.log(result);
      setPostValue("");
      handleRefresh();
    } catch (err) {
      console.log(err);
    }
  };
  function generateRandomString(length: number) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomString += chars.charAt(randomIndex);
    }

    return randomString;
  }
  const sendPost = async () => {
    try {
      const _id = generateRandomString(30);
      const result = await createPost(
        postValue,
        state.userId,
        state.user.username,
        _id
      );
      if (result) {
        setPostValue("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card className="mb-5">
      <CardContent className="mt-5">
        <Textarea
          value={postValue}
          onChange={(e) => setPostValue(e.target.value)}
        />
        <div className="flex flex-row-reverse gap-2 mt-2">
          <Button onClick={sendPost}>Post</Button>
          <Button variant={"secondary"} onClick={saveAsDraft}>
            Draft
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
