import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

function Search() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <h1>Search with Debouncing</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Typing: {search}</p>

      <p>Searching for: {debouncedSearch}</p>
    </div>
  );
}

export default Search;