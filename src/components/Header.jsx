import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
    color: #213547;
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    opacity: ${(props) => props.opacity};
    transform: translateY(${(props) => (props.opacity === 0 ? "-50px" : "0")});
    pointer-events: ${(props) => (props.opacity === 0 ? "none" : "auto")}; /* Prevents interactions when hidden */
`;

function Header() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const newOpacity = Math.max(1 - scrollY / 150, 0); // Adjusts opacity over 150px scroll
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <HeaderContainer opacity={opacity}>Fifty Poems Project</HeaderContainer>;
}

export default Header;
