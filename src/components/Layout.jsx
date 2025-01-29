import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #1a1a1a;
    padding: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const LeftSection = styled.div`
    width: 100%;
    text-align: center;
    padding: 1rem;

    @media (min-width: 768px) {
        width: 50%;
        text-align: left;
    }
`;

export const RightSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (min-width: 768px) {
        width: 50%;
    }
`;
