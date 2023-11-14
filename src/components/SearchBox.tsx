import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { search } from "../controller/chatController";

type searchResults = {
  id: string;
  username: string;
};

export default function SearchBox(): JSX.Element {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState<searchResults[]>([]);
  useEffect(() => {
    async function searchFriends() {
      if (name === "") {
        setSearchResults([]);
        return;
      }
      const results: searchResults[] = await search(name);
      setSearchResults(results);
      console.log(results);
    }
    searchFriends();
  }, [name]);

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
              className="w-full h-9 pl-3 cursor-pointer border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              key={result.id}
            >
              {result.username}
            </div>
          ))}
      </div>
    </div>
  );
}
