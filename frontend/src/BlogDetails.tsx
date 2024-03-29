import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { BlogModel } from "./models/blog.model";

interface BlogDetailsProps {}

const BlogDetails: React.FunctionComponent<BlogDetailsProps> = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch<BlogModel>("http://localhost:8080/blogs/" + id);
  const history = useNavigate();
  const handleClick = () => {
    if (blog) {
      fetch("http://localhost:8080/blogs/" + blog._id, {
        method: "DELETE",
      }).then(() => {
        history("/");
      });
    } else {
      console.log("Blog detail page is empty!");
    }
  };
  return (
    <div className="blog-details">
      {error && <h2>error.message</h2>}
      {isPending && <h2>Loading...</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          {blog.author && <p>Written by - {blog.author}</p>}
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
