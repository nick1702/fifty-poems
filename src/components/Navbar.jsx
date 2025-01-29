import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.nav`
    width: 250px;
    height: 100vh;
    background-color: #f3f4f6;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
`;

const NavItem = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    color: #1f2937;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    transition: background 0.3s;

    &:hover {
        background-color: #e5e7eb;
    }
`;

function Navbar() {
    return (
        <Sidebar>
            <h2 className="text-xl font-bold">Fifty Poems</h2>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/submit-poem">Submit Poem</NavItem>
            <NavItem to="/profile">Profile</NavItem>
            <NavItem to="/compiled-poems">Compiled Poems</NavItem>
        </Sidebar>
    );
}

export default Navbar;
