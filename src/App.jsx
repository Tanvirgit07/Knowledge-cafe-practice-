import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks,setBookMarks] = useState([])

  const bookHandler = blog =>{
    const newBookmarks = [...bookMarks,blog]
    setBookMarks(newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className="flex justify-between container mx-auto">
        <div className="w-2/3">
          <Blogs bookHandler={bookHandler}></Blogs>
        </div>
        <div className="w-1/3">
          <Bookmarks bookMarks = {bookMarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
