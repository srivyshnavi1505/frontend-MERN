import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {

  if (countries.length === 0) {
    return <p className="text-center">No countries found</p>;
  }

  return (

    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">

      {countries.map((country) => (

        <CountryCard
          key={country.name.common}
          country={country}
        />

      ))}

    </div>

  );
}