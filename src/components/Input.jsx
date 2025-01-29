import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    margin-top: 8px;
`;

function Input({ type = "text", placeholder, ...props }) {
    return <StyledInput type={type} placeholder={placeholder} {...props} />;
}

export default Input;
