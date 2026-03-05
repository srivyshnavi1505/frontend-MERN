import { useEffect, useRef } from "react";

export default function SearchBar({ onSearch }) {

  const inputRef = useRef(null);

  useEffect(() => {

    inputRef.current.focus();

  }, []);

  const handleChange = (e) => {

    onSearch(e.target.value);

  };

  return (

    <div className="flex justify-center mb-6">

      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={handleChange}
        className="border p-2 rounded w-80"
      />

    </div>
  );
}