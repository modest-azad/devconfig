import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import Path from "./routes.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Footer} from "./components/Footer.jsx";

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
