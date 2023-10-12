import "./App.css";
import Auth from "@/components/Auth";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import useMyContext from "./store/useMyContext";
import { verifyAuth } from "@/controller/authController";
import { useEffect } from "react";

function App() {
  const { state, dispatch } = useMyContext();

  useEffect(() => {
    verifyAuth().then((data) => {
      if (data.errors) {
        dispatch({ type: "SET_APPSTATE", payload: "auth" });
      } else {
        dispatch({
          type: "SET_USER",
          payload: { username: data.user.username, email: data.user.email },
        });
        dispatch({ type: "SET_USER_ID", payload: data.user._id });
        dispatch({ type: "SET_APPSTATE", payload: "home" });
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="w-full pb-12 pt-2 border-b flex flex-col justify-start items-center flex-1">
        {/* if not logged in Display this component */}
        {state.appState === "auth" ? <Auth /> : null}
        {/* if logged in Display this component */}
        {state.appState === "home" ? <Home /> : null}
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
