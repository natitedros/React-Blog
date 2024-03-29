import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { BlogModel } from "./models/blog.model";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch<BlogModel[]>("http://localhost:8080/");
  return (
    <div className="home">
      {/* A prop is a dynamic value data type so it can be reusable, that's why we use a curly brace to surround it. */}
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
