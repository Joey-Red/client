import React from "react";
import "./index.css";
import MobileNav from "./Components/MobileNav";
import MobilePost from "./Components/MobilePost";
import MobileFooter from "./Components/MobileFooter";
import PostButton from "./Components/PostButton";
import MobileCreatePost from "./Components/MobileCreatePost";
import MobileViewPost from "./Components/MobileViewPost";
function App() {
  return (
    // flex flex-col sm:flex-row
    <div className="w-full">
      {/* <MobileNav /> */}
      {/* This mb div goes on when mobile nav is on */}
      {/* <div className="mb-[53px]"></div> */}
      {/* <MobilePost /> */}
      <MobileCreatePost />
      {/* <MobileViewPost /> */}
      {/* <MobileFooter /> */}
    </div>
  );
}

export default App;
