// to make this dynamic we need to use hooks - useState
// useState is a hook that allows us to use state in a functional component
// set onChange to update the state on the input field

import { useState, useEffect } from "react";
//import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]); // Initialize pets as an empty array
  //const breeds = []; // Placeholder, add breed fetching logic if needed
  const [breeds] = useBreedList(animal); // Fetch breeds using custom hook

  // useEffect to fetch pets
  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Add animal, location, breed as dependencies

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets); // Update pets state with the fetched data
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission from refreshing the page
          requestPets(); // Fetch pets when form is submitted
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        {/* Animal dropdown */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed(""); // Reset breed when animal changes
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        {/* Breed dropdown */}
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
          </form>
          
          <Results pets={pets} />

      {/* Render fetched pets *
      {pets.length > 0 ? (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      ) : (
        <p>No pets found</p> // Show message if no pets are found
          )}
          
          */}
    </div>
  );
};

export default SearchParams;
