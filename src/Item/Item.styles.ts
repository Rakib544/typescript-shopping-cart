import styled from 'styled-components';

export const Wrapper = styled.div`
    display: 'flex';
    justify-content: 'space-between';
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;

    img {
        height: 250px;
        width: 100%;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        padding: 1rem;
        height: 100%;
    }

    button {
        width: 100%;
    }

    
`;