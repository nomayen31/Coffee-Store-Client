import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='\'>Home</NavLink>
            <NavLink to='\user'>user</NavLink>
            <NavLink to='\signup'>Signup</NavLink>
            <NavLink to='\login'>login</NavLink>
        </div>
    );
};

export default Header;