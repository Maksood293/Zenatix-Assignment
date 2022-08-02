import logo from "./pokedex.2800773d.png";
import "./App.css";
import Input from "./components/common/Input/Input";
import Dropdown from "./components/common/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import Card from "./components/common/Card/card";
import { getAllPokemons } from "./components/utills/apiCall";

function App() {
  const [searchData, setSearchData] = useState();
  const [data, setData] = useState();
  const [modal, setModal] = useState();
  const [details, setDetails] = useState();
  const [type, setType] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getAllPokemons(offset, 20, setData);
  }, [offset]);

  useEffect(() => {
    if (type && type !== "Select Type") {
      const filterData = data.filter(
        (item) => item.types[0].type.name === type
      );
      setData(filterData);
    }
  }, [type]);

  const handleModal = (data) => {
    setModal(data);
  };

  const handleDetails = (itemDetails) => {
    setDetails(itemDetails);
  };

  const handleDropdownChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const search = (row) => {
    return (
      row &&
      row.filter(
        (el) => el.name.toLowerCase().indexOf(searchData.toLowerCase()) > -1
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="header-logo" alt="logo" />
        <div className="header-inputs">
          <Input
            handleChange={handleSearch}
            type="text"
            label="Search"
            placeholder="Search By Name"
          />
          <Dropdown handleChange={handleDropdownChange} labelName="Type" />
        </div>
      </header>
      <section>
        {data && (
          <Card
            data={searchData ? search(data) : data}
            handleModal={handleModal}
            modal={modal}
            handleDetails={handleDetails}
            details={details}
          />
        )}
      </section>
      <footer className="App-footer">
        <button onClick={() => (offset > 0 ? setOffset(offset - 20) : null)}>
          Previous
        </button>
        <button onClick={() => setOffset(offset + 20)}>Next</button>
      </footer>
    </div>
  );
}

export default App;
