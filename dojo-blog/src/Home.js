
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    
    return ( 
        <div className="home">
            {/* A prop is a dynamic value data type so it can be reusable, that's why we use a curly brace to surround it. */}
            {isPending && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;