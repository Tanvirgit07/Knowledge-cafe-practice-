// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"

const Blogs = ({bookHandler,timeHandler}) => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h2>Blogs : {blogs.length}</h2>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id}
            bookHandler = {bookHandler}
            timeHandler = {timeHandler}
           blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  bookHandler : PropTypes.func,
  timeHandler : PropTypes.func
}

export default Blogs;
