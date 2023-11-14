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
import { draft } from "@/controller/authController";
import useMyContext from "../store/useMyContext";

export default function PostBox() {
  const { state } = useMyContext();
  const [postValue, setPostValue] = useState("");

  const saveAsDraft = async () => {
    try {
      const result = await draft(postValue, state.userId);
      console.log(result);
      setPostValue("");
    } catch (err) {
      console.log(err);
    }
  };
  const sendPost = async () => {};
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
