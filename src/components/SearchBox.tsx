import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  search,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
} from "../controller/chatController";
import { Button } from "./ui/button";
import { HeartHandshake, X, Check, UserPlus, Send } from "lucide-react";
import useMyContext from "@/store/useMyContext";

type searchResults = {
  id: string;
  username: string;
  isFriend: "true" | "sent" | "received" | "false";
};

export default function SearchBox(): JSX.Element {
  const { state } = useMyContext();

  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState<searchResults[]>([]);

  async function sendFriendsRequest(id: string) {
    const result = await sendFriendRequest(state.userId, id);
    if (result) {
      setSearchResults((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isFriend: "sent" } : item
        )
      );
    }
  }
  const acceptRequest = async (id: string) => {
    const result = await acceptFriendRequest(state.userId, id);
    if (result.message.includes("accepted")) {
      const username: string =
        searchResults.find((item) => item.id === id)?.username || "";

      if (username) {
        setSearchResults((prev) => prev.filter((item) => item.id !== id));
        setSearchResults((prev) => [
          ...prev,
          { id, username, isFriend: "true" },
        ]);
      }
    } else {
      console.log("error :", result.error);
    }
  };
  const rejectRequest = async (id: string) => {
    const result = await rejectFriendRequest(state.userId, id);
    if (result.message.includes("rejected")) {
      const username: string =
        searchResults.find((item) => item.id === id)?.username || "";

      if (username) {
        setSearchResults((prev) => prev.filter((item) => item.id !== id));
        setSearchResults((prev) => [
          ...prev,
          { id, username, isFriend: "false" },
        ]);
      }
    } else {
      console.log("error :", result.error);
    }
  };

  useEffect(() => {
    async function searchFriends() {
      if (name === "") {
        setSearchResults([]);
        return;
      }
      const results: searchResults[] = await search(name, state.userId);
      setSearchResults(results);
    }
    searchFriends();
  }, [name, state.userId]);

  return (
    <div className=" max-w-[600px] flex-1 min-w-[200px] flex justify-center items-center flex-col relative">
      <Input
        type="search"
        className="w-full"
        placeholder="Search Friends"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="w-full absolute top-12 ">
        {searchResults.length > 0 &&
          searchResults.map((result) => (
            <div
              className="w-full h-9  p-5 cursor-pointer border border-input bg-background hover:bg-accent hover:text-accent-foreground flex justify-between items-center"
              key={result.id}
            >
              <p>{result.username}</p>
              {result?.isFriend == "false" ? (
                <Button
                  variant={"default"}
                  className="h-8"
                  onClick={() => sendFriendsRequest(result.id)}
                >
                  <UserPlus /> &nbsp; Add Friend
                </Button>
              ) : null}
              {result?.isFriend == "sent" ? (
                <Button variant={"default"} className="h-8">
                  <Send /> &nbsp; request sent
                </Button>
              ) : null}
              {result?.isFriend == "received" ? (
                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="iconSm"
                    onClick={() => acceptRequest(result?.id)}
                  >
                    <Check size={48} className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="iconSm"
                    onClick={() => rejectRequest(result?.id)}
                  >
                    <X size={48} className="h-4 w-4" />
                  </Button>
                </div>
              ) : null}
              {result?.isFriend == "true" ? (
                <Button variant={"default"} className="h-8">
                  <HeartHandshake /> &nbsp; Friends
                </Button>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
}
