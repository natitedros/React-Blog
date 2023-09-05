import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch('http://localhost:8080/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8080/blogs/' + blog._id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
    }
    
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
}
 
export default BlogDetails;