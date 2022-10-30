import styled from 'styled-components';

export const Container = styled.form`
  p{
    margin-bottom: 2rem;
    color: red;
  }
  padding: 5rem;
  label {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input, select {
    margin: 0.5rem;
    width: 100%;
    padding: 0rem 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  .btn {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;