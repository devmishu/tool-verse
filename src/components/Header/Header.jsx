import NavBar from "../Header/NavBar/NavBar";

const Header = ({ navList, carts }) => {
    return (
        <header className=" top-0 sticky z-50">
            <NavBar navList={navList} carts={carts} />
        </header>
    );
};

export default Header;