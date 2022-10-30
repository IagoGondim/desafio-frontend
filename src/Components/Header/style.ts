import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

`;

export const Title = styled.h1`
  color: var(--shape);
`