import { useEffect, useState } from "react";

const Planet = () => {
  const emoji = "\u{1F468}";

  const [states, setStates] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(true);
    // if(e.target)
    console.log(filteredStates);
    console.log(searchTerm);
  };

  const filteredStates = searchTerm
    ? states.filter((state) => {
        const stateName = `${state.name}`;
        return (
          searchTerm === "" ||
          stateName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    : states;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets");
        const data = await response.json();
        console.log(data.results);
        setStates(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <div>Search for planets </div>
      <div>
        <input
          id="search"
          type="text"
          value={searchTerm || ""}
          onChange={handleChange}
        />
      </div>
      {/*
       * Replace the section below with the results of the search
       */}
      <div>
        {isSearching && (
          <section>
            <header>
              <div className="col">Name</div>
              <div className="col">Population</div>
            </header>
            {filteredStates.length === 0 && (
              <div className="error">No planet matching search term</div>
            )}
            {filteredStates.length > 0 &&
              filteredStates.map((state) => (
                <div key={state.created}>
                  <div className="col">{state.name}</div>
                  <div id={state.Population} className="col">
                    <div>{emoji.repeat(5)}</div>
                  </div>
                  <br />
                </div>
              ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default Planet;
