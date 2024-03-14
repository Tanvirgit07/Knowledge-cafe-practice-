import PropTypes from "prop-types";
import icon from "../../images/Frame.png";
const Blog = ({ blog , bookHandler}) => {
  return (
    <div className="">
      <div className="my-6">
        <div className="">
          <img
            className="w-[850px] h-[400px] rounded-md"
            src={blog.cover_img}
            alt=""
          />
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-4 items-center">
            <div className="">
              <img
                className="w-14 h-14 rounded-full object-center"
                src={blog.author_img}
                alt=""
              />
            </div>
            <div className="">
              <h4 className="">{blog.author}</h4>
              <p>{blog.posted_date}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <p>{blog.reading_time} min read</p>
            <button onClick={() => bookHandler(blog)}>
              <img src={icon} alt="" />
            </button>
          </div>
        </div>
        <h3>{blog.title}</h3>
        <div className="flex gap-5">
          <p>{blog.hashtags[0]}</p>
          <p>{blog.hashtags[1]}</p>
        </div>
        <h4>
          <a href="">Mark as read</a>
        </h4>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  bookHandler : PropTypes.func
};

export default Blog;
