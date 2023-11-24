import { Send, BadgeInfo, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import imgSrc from "@/assets/vite.svg";
import useMyContext from "../store/useMyContext";
import { io, Socket } from "socket.io-client";
import { useEffect, useState, useRef } from "react";

type ARRAYOFCHATDOCUMENT = {
  userId: string;
  text: string;
};
interface ServerToClientEvents {
  receiveMessage: (messageObject: ARRAYOFCHATDOCUMENT) => void;
  loadChat: (arrayOfChat: ARRAYOFCHATDOCUMENT[]) => void;
}
interface ClientToServerEvents {
  sendMessage: (messageObject: ARRAYOFCHATDOCUMENT) => void;
  getChat: (chatObject: object) => void;
}

export default function ChatBox() {
  const { state, dispatch } = useMyContext();
  const [socket, setSocket] = useState<Socket<
    ServerToClientEvents,
    ClientToServerEvents
  > | null>(null);
  const [InputValue, setInputValue] = useState<string>("");
  const [chat, setChat] = useState<ARRAYOFCHATDOCUMENT[]>([]);
  const [sendMessage, setSendMessage] = useState<boolean>(false);

  const goBackToChat = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "chat" });
  };
  const goToProfile = () => {
    dispatch({ type: "SET_CHAT_STATE", payload: "profile" });
  };
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    const s: Socket<ServerToClientEvents, ClientToServerEvents> = io(
      "http://localhost:3000"
    );
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;
    socket.once("loadChat", (arrayOfChat: ARRAYOFCHATDOCUMENT[]) => {
      setChat(arrayOfChat);
    });

    socket.emit("getChat", state.chatDocument);
  }, [socket, state.chatDocument]);

  useEffect(() => {
    if (socket == null) return;
    socket.on("receiveMessage", (messageObject: ARRAYOFCHATDOCUMENT) => {
      setChat((prev) => [...prev, messageObject]);
    });
  }, [socket]);

  useEffect(() => {
    if (socket == null || InputValue == "" || !sendMessage) return;

    setChat((prev) => [...prev, { userId: state.userId, text: InputValue }]);
    socket?.emit("sendMessage", { userId: state.userId, text: InputValue });
    setInputValue("");
    setSendMessage(false);
  }, [socket, InputValue, state.userId, sendMessage]);

  return (
    <Card className="w-full h-[500px] rounded-lg border bg-card text-card-foreground shadow-sm">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Avatar className="cursor-pointer">
            <AvatarImage src={imgSrc} alt="@accountImg" className="" />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{state.chatName}</CardTitle>
            <CardDescription>@Freind_Id</CardDescription>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="icon" onClick={goBackToChat}>
            <Undo2 size={48} className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToProfile}>
            <BadgeInfo size={48} fill="green" className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="space-y-4 overflow-y-scroll h-[320px]"
          ref={chatContainerRef}
        >
          {chat.length > 0 &&
            chat.map((item, i) => {
              if (item.userId === state.userId) {
                return (
                  <div
                    className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-primary ml-auto"
                    key={i}
                  >
                    {item.text}
                  </div>
                );
              } else {
                return (
                  <div
                    className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted text-primary"
                    key={i}
                  >
                    {item.text}
                  </div>
                );
              }
            })}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between">
        <Input
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={() => setSendMessage(true)}>
          <Send className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
