import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Setting() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          There is only one option in settings which is deleting your account,
          if you like you can do it.😈😈😈
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Delete you account</p>
        <p>
          to delete type your <strong>Name</strong> in the input and click on
          delete.
        </p>
        <Input className="my-5" />
        <Button variant="destructive">Delete</Button>
      </CardContent>
    </Card>
  );
}
