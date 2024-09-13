

import { PokemonsResponse } from '../../../pokemons/interfaces/pokemons-response';
import { SimplePokemon } from '../../../pokemons/interfaces/simple-pokemon';
import { PokemonGrids } from '../../../pokemons/components/PokemonGrids';



export const getPokemons = async ( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch( `https://pokeapi.co/api/v2/pokemon?offset=${ offset }&limit=${ limit }` )
    .then( res => res.json() );

  const simplePokemons = data.results.map( pokemon => ( {

    id: pokemon.url.split( '/' ).at( -2 )!,
    name: pokemon.name

  } ) );

  // throw new Error('Esto es un error que no debe ocurrir')

  return simplePokemons;
};


export default async function PokemonsPage() {

  const pokemons = await getPokemons( 151 );



  return (
    <div className='flex flex-col'>

      <span className='text-5xl my-2'>Listado de pokemons estatico</span>

      <PokemonGrids
        pokemons={ pokemons }
      />
    </div>
  );
}