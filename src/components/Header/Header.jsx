import NavBar from "../Header/NavBar/NavBar";
import Hero from "./Hero/Hero";

const Header = ({ navList, carts }) => {
    return (
        <header>
            <NavBar navList={navList} carts={carts} />
            <Hero />

        </header>
    );
};

export default Header;