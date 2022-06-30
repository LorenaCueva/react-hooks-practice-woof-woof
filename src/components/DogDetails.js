import {useState} from "react";

function DogDetails({dog, onIsGoodDogChange}){

    if (!dog) return <h2>Select a doggo</h2>;

    const {name, image, isGoodDog, id} = dog;

    function handleGoodBoyClick(e){
        fetch(`http://localhost:3001/pups/${id}`, {
            method:"PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({"isGoodDog": !isGoodDog})
        })
        .then(r => r.json())
        .then(onIsGoodDogChange)
        .catch(error => console.error(error));
    }


    return (
        <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <button onClick={handleGoodBoyClick}>{isGoodDog ? "Good Dog" : "Bad Dog" }</button>
        </div>
      </div>
    );
}

export default DogDetails