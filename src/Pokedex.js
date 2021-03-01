import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import data from './data';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.nextPokemon.bind(this)
        this.state = {
            pokemonIndex: 0,
        }
    }
/*
    handleClick(data) {
        this.setState((state) => ({ pokemonIndex: (state.pokemonIndex + 1) % data.length, }))
    };

    render() {
        return (
            <div className="pokedex">
                <Pokemon key={data.id} pokemon={data[this.state.pokemonIndex]} />
                <Button onClick= { () => this.handleClick(data)}>Next</Button>
            </div>
        );
    }
*/
    nextPokemon(data) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % data.length,
    }));
  }

    render() {
        return (
            <div className="pokedex">
                <Pokemon key={data.id} pokemon={data[this.state.pokemonIndex]} />
                <Button
                    className="pokedex-button"
                    onClick={() => this.nextPokemon(data.length)}
                    disabled={ data.length <= 1 }
                > Próximo pokémon
                </Button>
            </div>
        )
    }

}

export default Pokedex;