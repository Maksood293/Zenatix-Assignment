import logo from './pokedex.2800773d.png';
import './App.css';
import Input from './components/common/Input/Input';
import Dropdown from './components/common/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/common/Card/card'

function App() {
  const [searchData, setSearchData] = useState();
  const [data, setData]=useState();
  const [modal, setModal]= useState()
  const [details,setDetails]=useState()

  useEffect(()=>{
    getAllPokemons(0, 20);
  },[])

  

 
  
const getPokemonData = async (result) => {
  const pokemonArr = []

  await Promise.all(
      result.map((pokemonItem) => {
          return axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
              .then((result) => {
                  pokemonArr.push(result.data);
              });
      })
  );

  pokemonArr.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))

  setData(pokemonArr)

  

}
const getAllPokemons = async (offset, limit) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).catch((err) => console.log("Error:", err));
  getPokemonData(response.data.results);

}

const handleModal=(data)=>{
   setModal(data)
}
const handleDetails=(itemDetails)=>{
  setDetails(itemDetails)
}
const handleDropdownChange=(e)=>{
  console.log(e.target.value)
}
const handleSearch=(e)=>{
  setSearchData(e.target.value)
}

const search=(row)=> {
  return row && row.filter(
        (el) =>
          el.name.toLowerCase().indexOf(searchData.toLowerCase()) > -1 
      )
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="header-logo" alt="logo" />
        <div className='header-inputs'>
          <Input handleChange={handleSearch} type="text" label="Search" placeholder="Search By Name" />
          <Dropdown handleChange={handleDropdownChange} labelName="Type"/>
        </div>
        
      </header>
      <section>
      {data && <Card data={searchData? search(data):data} handleModal={handleModal} modal={modal} handleDetails={handleDetails} details={details}/>}
      </section>
    </div>
  );
}

export default App;
