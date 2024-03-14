import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks,setBookMarks] = useState([])
  const [spentTimes,setSpentTime] = useState(0);

  const bookHandler = blog =>{
    const newBookmarks = [...bookMarks,blog]
    setBookMarks(newBookmarks);
  }

  const timeHandler = (time,id) =>{
    const newTime = spentTimes + time;
    setSpentTime(newTime);
    const remainingBookmarks = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks);
    console.log('click id',id)
  }
  return (
    <>
      <Header></Header>
      <div className="flex justify-between gap-5 container mx-auto">
        <div className="w-2/3">
          <Blogs
           bookHandler={bookHandler}
           timeHandler={timeHandler}
           ></Blogs>
        </div>
        <div className="w-1/3">
          <Bookmarks 
          bookMarks = {bookMarks}
          spentTimes = {spentTimes}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
