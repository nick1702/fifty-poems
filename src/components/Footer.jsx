import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    background-color: #B8C7E6;
    color: white;
    text-align: center;
    padding: 0.5rem; /* Reduced padding */
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 0.875rem; /* Smaller text */
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem; /* Reduced spacing */
    margin-top: 0.25rem;

    a {
        color: #213547;
        text-decoration: none;
        font-weight: normal;
        font-size: 0.875rem; /* Smaller text */
        transition: color 0.3s ease-in-out;
    }

    a:hover {
        color: #93c5fd;
    }
`;

const HighlightedText = styled.p`
    color: #213547;
    font-weight: bold;
    margin-top: 0.25rem;
`;

function Footer() {
    return (
        <FooterContainer>
            <HighlightedText>Created by Nick Powers</HighlightedText>
            <FooterLinks>
                <a href="mailto:nicholaspowers1702@gmail.com">Email</a>
                <a href="https://www.instagram.com/nick_1702/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </FooterLinks>
        </FooterContainer>
    );
}

export default Footer;
