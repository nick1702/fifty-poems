import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    min-height: 150px;
    resize: vertical;
`;

function Textarea({ name, placeholder, value, onChange, required }) {
    return (
        <StyledTextarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
}

export default Textarea;
