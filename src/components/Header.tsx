import { ModeToggle } from "@/components/mode-toggle";
import { Account } from "@/components/Account";
import SearchBox from "./SearchBox";
import useMyContext from "@/store/useMyContext";

const Header = (): JSX.Element => {
  const { state } = useMyContext();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur ">
      <div className="container px-1 sm:px-2 flex h-14 items-center justify-between max-w-7xl gap-2">
        {/* if user not logged in */}
        {state.appState === "auth" ? (
          <>
            <h2 className="text-xl font-bold tracking-tight ">-+-Network-+-</h2>
            <ModeToggle />
          </>
        ) : null}

        {/* logedin state  */}
        {state.appState === "home" ? (
          <>
            <h2 className="text-xl font-bold tracking-tight hidden md:block">
              -+-Network-+-
            </h2>

            <SearchBox />
            <div className="flex items-center justify-between gap-2">
              <ModeToggle />
              <Account />
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
};
export default Header;
