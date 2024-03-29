import { Link } from "react-router-dom";
import { BlogModel } from "./models/blog.model";
interface BlogListProps {
  blogs: BlogModel[];
  title: string;
}

const BlogList: React.FunctionComponent<BlogListProps> = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog: BlogModel) => (
        <div className="blog-preview">
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            {blog.snippet && <p>{blog.snippet}</p>}
            {blog.author && <p>Written by - {blog.author}</p>}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
