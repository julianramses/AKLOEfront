#FRONT DE AKLOEapi
El front de AKLOEapi está hecho en React.js, suponiendo que está instalado React
La solución se hizo de la siguiente manera:
- El front más que nada consume las request hechas en base a las funcionalidades requeridas para este proyecto, ya que la lógica se realizó primordialmente en los endpoints de la API.
- Se utilizó mui.com
- La instalación está en la página https://mui.com/material-ui/getting-started/installation/#npm.
- El Front se realizó realizando fetches a la API
- La aplicación hecha tiene un menú en el lado izquierdo, el cual contiene las funcionalidades exigidas en el desafío.
  - En Main Menu se muestra el logo y el nombre de la aplicación
  - ✨Pokemon Filter by letter C✨ es la funcionalidad que muestra los pokemones filtrados con la letra C y un conteo de éstos.
  - ✨Pokemon Filter by Type✨ es la funcionalidad que muestra los pokemones filtrados por el tipo de pokemon.
  - ✨Where can i find?✨ es la funcionalidad de dónde puedo encontrar un pokemon, para ésto se ingresa por user input el nombre del pokemon y se muestran las locaciones para encontrarlos. (En un comienzo sólo era pikachu pero se adaptó para todos los pokemones)
  - ✨Pokemon filter by Hidden Machines!✨ es la funcionalidad que filtra pokemones por Hidden machines.

Para el uso de la aplicación, se debe clonar el repositorio con:

```sh
git clone https://github.com/nombre-de-usuario/akloe-frontend.git](https://github.com/julianramses/AKLOEfront.git
```

Navega hacia el directorio del proyecto
```sh
cd akloe-frontend
```
Instala las dependencias del proyecto
```sh
npm install
```
Después de instalar, ejecuta la aplicación.
```sh
npm start
```


Una breve explicación del codigo sería:
```sh
 const response = await fetch('https://akloeapi.fly.dev/pokemon/');
```
Siendo 
```sh
 'https://akloeapi.fly.dev/pokemon/' 
```
La url del la API Realizada anteriormente.
Lo que logra esto es que, basado en la Lógica de Front, podemos crear variables para trabajar con ellas y hacer el llamado en las vistas de nuestro proyecto, como por ejemplo:
```sh
};
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
```
Consumiendo los nombres de los pokemones con la letra C, previamente filtrado.

```sh
  const countTotalPokemons = () => {
    return data.length;
  };
```
Luego, dentro de los estilos de Javascript, contamos todos los Pokemones.
```sh
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
```
Aquí se muestran todos los nombres
```sh
<h3>{item.name}</h3>
```

Happy Coding!


