import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = styled.nav`
    width: ${(props) => (props.open ? "250px" : "80px")};
    height: 100vh;
    background-color: #f3f4f6;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.open ? "flex-start" : "center")};
    gap: 1rem;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: width 0.3s ease-in-out;
    overflow: hidden;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 1rem;
    align-self: ${(props) => (props.open ? "flex-end" : "center")};
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

function Navbar({ isOpen, toggleNavbar }) {
    return (
        <Sidebar open={isOpen}>
            <MenuButton onClick={toggleNavbar}>
                {isOpen ? <FiX /> : <FiMenu />}
            </MenuButton>
            {isOpen && (
                <>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/submit-poem">Submit Poem</NavItem>
                    <NavItem to="/profile">Profile</NavItem>
                    <NavItem to="/compiled-poems">Compiled Poems</NavItem>
                </>
            )}
        </Sidebar>
    );
}

export default Navbar;
