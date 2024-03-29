import { Link } from "react-router-dom";
interface PageNotFoundProps {}

const PageNotFound: React.FunctionComponent<PageNotFoundProps> = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
