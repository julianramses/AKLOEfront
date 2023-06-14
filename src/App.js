import React, { useEffect, useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  { Route, Link, BrowserRouter, Routes } from 'react-router-dom';



function MyComponent() {
  
  const styles = {
    mainPage: {
      textAlign: 'center',
      paddingTop: '50px',
    },
    logoContainer: {
      marginBottom: '20px',
    },
    logo: {
      width: '200px',
      height: 'auto',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
    },
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
 
  const logoUrl = 'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png';
  const fetchData = async () => {
    try {
      const response = await fetch('https://akloeapi.fly.dev/pokemon/');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const countTotalPokemons = () => {
    return data.length;
  };
  return (
    <div style={{ textAlign: 'center' }}>
        <div style={styles.mainPage}>
        <div style={styles.logoContainer}>
          <img src={logoUrl} alt="Pokemon Logo" style={styles.logo} />
        </div>
        <h1 style={styles.title}>Welcome to the Pokemon API</h1>
        <p>Total Pokemons: {countTotalPokemons()}</p>
        <div style={styles.mainPage}></div>
        <h1>Pokemon List with the Letter C</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#f2f2f2',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                width: '200px',
                textAlign: 'center',
              }}
            >
              <img
                src={item.image_url}
                alt={item.name}
                style={{ width: '100px', height: '100px', marginBottom: '10px' }}
              />
              <h3>{item.name}</h3>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function Component1() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
  const logoUrl = 'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png';
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        POKE-MENU
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={'/'} > <MenuItem >Main Menu </MenuItem> </Link>
        <Link to={'/letterfilter'} > <MenuItem > Pokemon Filter by the letter C </MenuItem> </Link>
        <Link to={'/typefilter'} > <MenuItem > Pokemon Filter by Type </MenuItem> </Link>
        <Link to={'/wheretofind'} > <MenuItem > Where can i find? </MenuItem> </Link>
        <Link to={'/bymachines'} > <MenuItem >Pokemon Filter by Hidden Machines! </MenuItem> </Link>

      </Menu>
    </div>


  /*<div>
     <Link to={'/asdasd'} > <Button> One </Button> </Link>
  </div>
  )
  */
  )
}

function PokemonByType() {
  const styles = {
    mainPage: {
      textAlign: 'center',
      paddingTop: '50px',
    },
    logoContainer: {
      marginBottom: '20px',
    },
    logo: {
      width: '200px',
      height: 'auto',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
    },
  };

  const [type, setType] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const logoUrl = 'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png';

  const fetchTypes = async () => {
    try {
      const response = await fetch('https://akloeapi.fly.dev/types/');
      const jsonData = await response.json();
      setTypes(jsonData);
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  };

  const fetchPokemonsByType = async () => {
    try {
      const response = await fetch(`https://akloeapi.fly.dev/type/${type}/`);
      const jsonData = await response.json();
      setPokemons(jsonData);
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchPokemonsByType();
  };

  // Fetch the types when the component mounts
  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div>
      <div style={styles.mainPage}>
      <div style={styles.logoContainer}>
        <img src={logoUrl} alt="Pokemon Logo" style={styles.logo} />
      </div>
      <h1 style={styles.title}>Welcome to the Pokemon API</h1>
      <h1>Pokemons by Type</h1>
      <div style={styles.mainPage}></div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="type">Select a type:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
      <div>
        {pokemons.length > 0 ? (
          <ul>
            {pokemons.map((pokemon) => (
              <li>{pokemon}</li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
      </div>
    </div>
  );
}


const PokemonByLocation = () => {
  const styles = {
    mainPage: {
      textAlign: 'center',
      paddingTop: '50px',
    },
    logoContainer: {
      marginBottom: '20px',
    },
    logo: {
      width: '200px',
      height: 'auto',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
    },
  };

  const logoUrl = 'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png';
  const [pokemonName, setPokemonName] = useState('');
  const [locationAreas, setLocationAreas] = useState([]);

  const countTotalAreas = () => {
    return locationAreas.length;
  };

  const fetchPokemonByLocation = async () => {
    try {
      const response = await fetch(`https://akloeapi.fly.dev/location/${pokemonName}/`);
      const jsonData = await response.json();
      setLocationAreas(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPokemonByLocation();
  };

  return (
    <div style={styles.mainPage}>
      <div style={styles.logoContainer}>
        <img src={logoUrl} alt="Pokemon Logo" style={styles.logo} />
      </div>
      <h1 style={styles.title}>Welcome to the Pokemon API</h1>
      <div style={styles.mainPage}>
      <h1 style={styles.title}>Look for a Pokemon!</h1>
      <p>Total Areas: {countTotalAreas()}</p>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={pokemonName.toString().toLowerCase()} onChange={handleInputChange} />
        <button type="submit" style={{ textTransform: 'none' }}>
        Search
      </button>
      </form>

      <div>
        {locationAreas.length > 0 ? (
          <ul>
            {locationAreas.map((location_areas) => (
              <li>{location_areas}</li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

const MainPage = () => {
  const styles = {
    mainPage: {
      textAlign: 'center',
      paddingTop: '50px',
    },
    logoContainer: {
      marginBottom: '20px',
    },
    logo: {
      width: '200px',
      height: 'auto',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
    },
  };

  const logoUrl = 'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png';

  return (
    <div style={styles.mainPage}>
      <div style={styles.logoContainer}>
        <img src={logoUrl} alt="Pokemon Logo" style={styles.logo} />
      </div>
      <h1 style={styles.title}>Welcome to the Pokemon API</h1>
      <p style={styles.description}>Explore the world of Pokemon!</p>
    </div>
  );
};




const MoveSearch = () => {
  const styles = {
    mainPage: {
      textAlign: 'center',
      paddingTop: '50px',
    },
    logoContainer: {
      marginBottom: '20px',
    },
    logo: {
      width: '200px',
      height: 'auto',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
    },
  };

  const [moveId, setMoveId] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const logoUrl = 'https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png';
  const handleInputChange = (event) => {
    setMoveId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://akloeapi.fly.dev/hm/${moveId}/`);
      const jsonData = await response.json();
      setPokemons(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={styles.mainPage}>
      <div style={styles.logoContainer}>
        <img src={logoUrl} alt="Pokemon Logo" style={styles.logo} />
      </div>
      <h1 style={styles.title}>Welcome to the Pokemon API</h1>
      <p style={styles.description}>Explore the world of Pokemon!</p>
      <h1>Pokemon Search by Hidden Machine</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={moveId} onChange={handleInputChange} placeholder="Enter Move ID" />
        <button type="submit">Search</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        {pokemons.length > 0 ? (
          <div>
            <h2>Pokemon List</h2>
            <ul>
              {pokemons.map((pokemon) => (
                <li>{pokemon}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No Pokemon found for the given Hidden Machine ID.</p>
        )}
      </div>
    </div>
    </div>
  );
};




function App() {
  return (
    <div>
      <BrowserRouter>
      {/* Render the Component1 */}
      <Component1 />
        <Routes>
          <Route exact path='/' element={<MainPage/>}/>  
          <Route exact path='/typefilter' element={<PokemonByType/>}/>  
          <Route exact path='/letterfilter' element={<MyComponent/>}/>
          <Route exact path='/wheretofind' element={<PokemonByLocation/>}/>
          <Route exact path='/bymachines' element={<MoveSearch/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
