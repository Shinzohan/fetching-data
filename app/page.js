import SearchableItemGrid from "./Itemgrid";

export default async function Home() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
  const data = await res.json();
  
  const pokemonDetails = await Promise.all(
    data.results.map(async (item) => {
      const pokeRes = await fetch(item.url);
      const pokeData = await pokeRes.json();
      return {
        name: pokeData.name,
        image: pokeData.sprites.front_default,
        description: pokeData.abilities[0]?.ability.name || 'No ability information available',
      };
    })
  );

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-4">Pokémon List</h1>
      <SearchableItemGrid items={pokemonDetails} />
    </div>
  );
}