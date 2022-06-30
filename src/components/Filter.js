function Filter({filterGood, onFilterGoodChange}){
    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onFilterGoodChange}>Filter good dogs: {filterGood? "ON" : "OFF"}</button>
      </div>
    );
}

export default Filter;