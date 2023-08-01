import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
    const {favoritePokemon} = useContext(FavoriteContext)
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img alt="pokeapi_logo" src={logo} className="navbar-img" />
            </div>
            <div>{favoritePokemon.length}❤️</div>
        </nav>

    )
}

export default Navbar;