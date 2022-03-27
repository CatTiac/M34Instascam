// import { Link } from "react-router-dom";
import { StyledHeader } from "../globalStyles";

export const Navbar = ({ setUser }) => {
    const logOut = () => {
        setUser();
        localStorage.removeItem("myToken");
    };

    return (
        <>
        <StyledHeader>Instascam</StyledHeader>
        {/* <Link to="/">Back to login</Link> */}
        <button onClick={ logOut }>LogOut</button>
        </>
    );
};