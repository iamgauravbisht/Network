import "./App.css";
// import Auth from "@/components/Auth";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className="w-full pb-12 pt-2 border-b flex flex-col justify-start items-center flex-1">
        {/* if not logged in display this component */}
        {/* <Auth /> */}

        {/* if looged in display this component */}
        <Home />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
