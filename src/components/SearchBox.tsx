import { Input } from "./ui/input";

export default function SearchBox(): JSX.Element {
  return (
    <div className=" max-w-[700px] min-w-[200px] flex justify-center items-center ">
      <Input
        type="search"
        className="max-w-[200px]"
        placeholder="Search Friends"
      />
    </div>
  );
}
