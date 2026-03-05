import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

export default function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {

    const fetchCountries = async () => {

      try {

        setLoading(true);

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        const data = await res.json();

        setCountries(data);

      } catch (err) {

        setError("Failed to fetch countries");

      } finally {

        setLoading(false);

      }
    };

    fetchCountries();

  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (

    <div className="p-6 bg-blue-200 min-h-screen ">

      <h1 className="text-3xl font-bold text-center mb-6">
         Country Explorer
      </h1>

      <SearchBar onSearch={setQuery} />

      <CountryList countries={filteredCountries} />

    </div>

  );
}