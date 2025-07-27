import { BlogPosts } from "../components/posts";

export default function Page() {
  // const [query, setQuery] = useState<string>("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setQuery(event.target.value);
  // };

  return (
    <section>
      <h1>Blog</h1>
      <div>
        {/* <input placeholder="Search..." value={query} onChange={handleChange} /> */}
      </div>
      <BlogPosts />
    </section>
  );
}
