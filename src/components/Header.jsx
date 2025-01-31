import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
    color: #213547; /* Dark blue shade */
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    pointer-events: none;
    z-index: 1; /* Ensures it appears above the page content */
`;

function Header() {
    return <HeaderContainer>Fifty Poems Project</HeaderContainer>;
}

export default Header;
