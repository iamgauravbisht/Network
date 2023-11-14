import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import useMyContext from "@/store/useMyContext";
import { Me } from "@/controller/authController";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { updateBio } from "@/controller/authController";
import { Separator } from "@/components/ui/separator";

type ME = {
  bio: string;
};

export default function Profile() {
  const { state } = useMyContext();
  const [me, setMe] = useState<ME>({ bio: "" });

  const bioUpdate = async () => {
    try {
      const newbio = await updateBio(state.userId, me.bio);
      console.log(newbio.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function getMe() {
      const data = await Me(state.userId);
      setMe({ bio: data.user.bio });
    }
    getMe();
  }, [state.userId]);

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          This is how others will see you on the site.
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className=" flex flex-col gap-4">
          <h3 className="text-lg font-medium">{state.user.username}</h3>
          <p className="text-sm text-muted-foreground">{state.user.email}</p>
          <Label>Bio:</Label>
          <Textarea
            value={me?.bio}
            onChange={(e) => setMe({ ...me, bio: e.target.value })}
          />
          <Button className="max-w-[100px]" onClick={bioUpdate}>
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
