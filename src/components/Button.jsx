import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    display: block;
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    margin-top: 1rem;
    transition: background-color 0.3s;

    &.signup {
        background-color: #2563eb;
        color: white;
    }
    &.signup:hover {
        background-color: #1e40af;
    }
    &.signin {
        background-color: #e5e7eb;
        color: #1a1a1a;
    }
    &.signin:hover {
        background-color: #d1d5db;
    }
`;
