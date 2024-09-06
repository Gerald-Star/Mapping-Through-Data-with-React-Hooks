// to make this dynamic we need to use hooks - useState
// useState is a hook that allows us to use state in a functional component
// set onChange to update the state on the input field

import { useState } from "react";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {

    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("")
     
    //const location = "Seattle, WA";
    return (
        <div className="search-params">

            <form action="">
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)} id="location" value={location} placeholder="location" />
                </label>

                <label htmlFor="animal">
                    <select onChange={(e) => setAnimal(e.target.value)} name="animal" id="animal" value={animal}>
                        
                        <option /> {
                            Animals.map((animal) => {
                                return (
                                    <option key={animal}>{animal}</option>
                                )
                            })
                        }
                        
                       
                    </select>
                </label>

                <button>Submit</button>
            </form>


        </div>
        
    );
};

export default SearchParams;