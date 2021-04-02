import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  input {
    width: 100%;
    margin-top: 3rem;
    font-size: 1.5rem;
    color: #116192;
    padding: 1rem;
    border-radius: 3rem;
    margin-bottom: 2rem;
    background-color: #ebebeb;

    ::placeholder {
      color: #116192;
      font-size: 1rem;
    }
  }
`;

export const MovieList = styled.section`
  margin: 2rem auto;
`;
export const MovieItem = styled.article`
  display: flex;
  margin: 1.5rem 0;
`;
export const ImageContainer = styled.section`
  max-width: 15%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const MovieContent = styled.section`
  background: #ebebeb;
  width: 100%;
  header {
    display: flex;
    background: #116192;
    color: #1ecedc;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      padding: 1.5rem;
      font-size: 1.5rem;
      color: #00e6e3;
      border: 0.2rem solid #00e6e3;
      background: #116193;
      border-radius: 50%;
      height: 1rem;
      margin: 0 1.3rem;
      transform: translateY(45%);
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;

  span {
    margin-left: 4.5rem;
    color: #b7babf;
    font-size: 1rem;
  }

  P {
    margin-top: 1rem;
    max-width: 90%;
    font-family: 'Lato', sans-serif;
    color: #606060;
    text-align: justify;
  }
  div {
    display: flex;
    max-width: 500px;
    justify-content: flex-start;
    span {
      max-width: 25%;
      margin: 2rem 0.9rem;
      margin-left: 0;
      padding: 0.5rem;
      border: thin solid #116193;
      border-radius: 2rem;
      background: #ffff;
      font-family: 'Lato', sans-serif;
      font-size: 0.8rem;
      color: #116193;
      text-align: center;
    }
  }
`;

export const PaginationContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 1rem;
  color: #116193;

  div {
    font-size: 2rem;
    color: #03cad2;
    cursor: pointer;
    margin: .9rem;

    &.hide {
     display: none;
    }

    &.currentItem {
      font-size: 2rem;
      color: #03cad2;
      cursor: pointer;
      background: #116193;
      border: 2px solid #03cad2;
      border-radius: 50%;
      padding: 0.2rem 0.8rem;
    }
  }
`;
