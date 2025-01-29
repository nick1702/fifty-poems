import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    padding: 1rem;
    background-color: #1a1a1a;
    color: white;
    text-align: center;
    position: absolute;
    bottom: 0;
`;

function Footer() {
    return <FooterContainer>© {new Date().getFullYear()} Fifty Poems. All rights reserved.</FooterContainer>;
}

export default Footer;
