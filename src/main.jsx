import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes.jsx";
import "./index.css";
import "./styles/HomeAnimation.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/Nav/NavigationBar.jsx";
import { Footer} from "./components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <NextUIProvider>
      <BrowserRouter>
      <main className="dark:dark text-foreground bg-background bg-[url('/images/blur_bg.png')] bg-cover">
        <NavigationBar />
        <Path />  {/* Router */}
        <Footer/>
      </main>
  </BrowserRouter>
    </NextUIProvider>
);
