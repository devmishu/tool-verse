import NavBar from "../Header/NabBar/NavBar";
import Hero from "./Hero/Hero";

const Header = ({navList}) => {
    return (
        <header>
            <NavBar navList={navList}/>
            <Hero />
            
        </header>
    );
};

export default Header;