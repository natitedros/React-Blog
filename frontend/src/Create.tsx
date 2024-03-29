import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
interface CreateProps {}

const Create: React.FunctionComponent<CreateProps> = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Nati");
  const history = useNavigate();
  const newBlog = { title, body, author };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("http://localhost:8080/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then(() => history("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <input
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nati">Nati</option>
          <option value="Jegnaw">Jegnaw</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
