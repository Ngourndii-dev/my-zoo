import React, { useState } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Rechercher un animal..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
