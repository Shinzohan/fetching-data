export default async function PokemonDetail({ params }) {
    const { name } = params; // Get the Pokémon name from the URL
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await res.json();
  
    return (
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold capitalize mb-4">{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mb-4"
        />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Base Experience: {pokemon.base_experience}</p>
  
        <h2 className="text-2xl font-bold mt-4">Abilities</h2>
        <ul>
          {pokemon.abilities.map((abilityObj, index) => (
            <li key={index}>{abilityObj.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  