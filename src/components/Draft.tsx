import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getDraft, deleteDraft, createPost } from "@/controller/authController";
import useMyContext from "../store/useMyContext";

type Draft = {
  _id: string;
  post: string;
};

export default function Draft() {
  const { state } = useMyContext();
  const [drafts, setDrafts] = useState<Draft[]>([]);

  async function Drafts() {
    const result = await getDraft(state.userId);
    setDrafts(result.drafts);
  }

  const remove = async (id: string) => {
    try {
      const result = await deleteDraft(state.userId, id);
      console.log(result);
      await Drafts();
    } catch (err) {
      console.log(err);
    }
  };
  const postDraft = async (_id: string, post: string) => {
    //create post
    try {
      const result = await createPost(
        post,
        state.userId,
        state.user.username,
        _id
      );
      //delete draft
      if (result) {
        await remove(_id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Drafts();
  }, []);

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Draft Post</CardTitle>
        <CardDescription>All Draft posts are here </CardDescription>
      </CardHeader>
      <CardContent>
        {drafts.length > 0 &&
          drafts.map((draft) => {
            return (
              <div className="border p-5" key={draft._id}>
                <p>{draft.post}</p>
                <div className="flex w-full justify-evenly mt-2">
                  <Button
                    variant={"destructive"}
                    onClick={() => remove(draft._id)}
                  >
                    Delete{" "}
                  </Button>
                  <Button
                    variant={"secondary"}
                    onClick={() => postDraft(draft._id, draft.post)}
                  >
                    Post
                  </Button>
                </div>
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
}
