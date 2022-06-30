function DogBar({dogs, onDogClick}){

    const dogsNames = dogs.map(dog => <span key={dog.id} onClick={() => onDogClick(dog.id)}>{dog.name}</span>);

    return (
        <div id="dog-bar">
            {dogsNames}
        </div>
    );
}
export default DogBar;