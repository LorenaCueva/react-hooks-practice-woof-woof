import React, {useState, useEffect} from "react";
import DogBar from "./DogBar";
import DogDetails from "./DogDetails";
import Filter from "./Filter";

function App() {

  const [dogs, setDogs] = useState([]);
  const [selectedDogID, setSelectedDogID] = useState(null);
  const [filterGood, setFilterGood] = useState(false);

  useEffect( ()=> {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(pups => setDogs(pups))
    .catch(error => console.error(error));
  },[]);

  function handeDogClick(id){
    setSelectedDogID(id);
  }

  function handeGoodDogChange(updatedDog){
    const updatedDogs = dogs.map(dog => dog.name === updatedDog.name ? updatedDog : dog);
    setDogs(updatedDogs);
  }

  function handleFilterGoodChange(){
    setFilterGood((filterGood) => !filterGood);
  }

  const dogsToDisplay = filterGood ? dogs.filter(dog => dog.isGoodDog === true) : dogs;
  const selectedDog = dogsToDisplay.find(dog => dog.id === selectedDogID);

  return (
    <div className="App">
      <Filter filterGood={filterGood} onFilterGoodChange={handleFilterGoodChange}/>
      <DogBar dogs={dogsToDisplay} onDogClick={handeDogClick}/>
      <DogDetails dog={selectedDog} onIsGoodDogChange={handeGoodDogChange}/>
    </div>
  );
}

export default App;
