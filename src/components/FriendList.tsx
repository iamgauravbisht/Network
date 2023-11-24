import { Button } from "@/components/ui/button";
import { MessageSquare, Undo, Search, XCircle, Check, X } from "lucide-react";
import {
  Card,
  CardContent,
  // CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useMyContext from "../store/useMyContext";
import { useEffect, useState } from "react";
import {
  sentFriendRequests,
  friends,
  recievedFriendRequests,
  acceptFriendRequest,
  rejectFriendRequest,
} from "@/controller/chatController";

type FriendList = {
  id: string;
  username: string;
};

export default function FriendList() {
  const { state, dispatch } = useMyContext();
  const [friendList, setFriendList] = useState<FriendList[]>([]);
  const [recievedList, setRecievedList] = useState<FriendList[]>([]);
  const [sentList, setSentList] = useState<FriendList[]>([]);

  const OpenChatList = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "chat" });
  };
  const closeChat = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "nothing" });
  };
  const acceptRequest = async (id: string) => {
    const result = await acceptFriendRequest(state.userId, id);
    if (result.message.includes("accepted")) {
      setRecievedList((prev) => prev.filter((item) => item.id !== id));
      const username: string =
        friendList.find((item) => item.id === id)?.username || "";

      if (username) {
        setFriendList((prev) => [...prev, { id, username }]);
      }
    } else {
      // console.log("error :", result.error);
    }
  };
  const rejectRequest = async (id: string) => {
    const result = await rejectFriendRequest(state.userId, id);
    if (result.message.includes("rejected")) {
      setRecievedList((prev) => prev.filter((item) => item.id !== id));
    } else {
      // console.log("error :", result.error);
    }
  };

  useEffect(() => {
    async function getFriends() {
      const data = await friends(state.userId);
      setFriendList(data.results);
    }
    async function getRecieved() {
      const data = await recievedFriendRequests(state.userId);
      setRecievedList(data.results);
    }
    async function getSent() {
      const data = await sentFriendRequests(state.userId);
      setSentList(data.results);
    }

    getFriends();
    getRecieved();
    getSent();
  }, [state.userId]);

  return (
    <Card className="w-full h-[500px] relative rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Network</CardTitle>
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="icon" onClick={closeChat}>
            <XCircle size={48} className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Search size={48} className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={OpenChatList}>
            <Undo size={48} className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-scroll h-[404px] cursor-pointer">
        <Tabs defaultValue="Friends" className="w-full">
          <TabsList>
            <TabsTrigger value="Friends">Friends</TabsTrigger>
            <TabsTrigger value="Recieved">Recieved</TabsTrigger>
            <TabsTrigger value="Sent">Sent</TabsTrigger>
          </TabsList>
          <TabsContent value="Friends">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-full text-left">
                    Friends Name
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {friendList.length > 0 &&
                  friendList.map((list) => (
                    <TableRow key={list?.id}>
                      <TableCell className="font-medium">
                        {list?.username}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="Recieved">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-full">Friends Name</TableHead>
                  <TableHead>Accept</TableHead>
                  <TableHead className="text-right">Reject</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recievedList.length > 0 &&
                  recievedList.map((list) => {
                    return (
                      <TableRow key={list?.id}>
                        <TableCell className="font-medium">
                          {list?.username}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="default"
                            size="iconSm"
                            onClick={() => acceptRequest(list?.id)}
                          >
                            <Check size={48} className="h-4 w-4" />
                          </Button>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="destructive"
                            size="iconSm"
                            onClick={() => rejectRequest(list?.id)}
                          >
                            <X size={48} className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="Sent">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-full">Friends Name</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sentList.length > 0 &&
                  sentList.map((list) => (
                    <TableRow key={list?.id}>
                      <TableCell className="font-medium">
                        {list?.username}
                      </TableCell>
                      <TableCell className="text-right">@Sent</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
      <Button className="absolute right-5 bottom-5">
        <MessageSquare className="h-4 w-4" />
      </Button>
    </Card>
  );
}
