import styled from 'styled-components';

export const MovieDetailWrapper = styled.div`
  Header {
    padding: 2rem;
    justify-content: space-between;
  }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1500px;
  margin: 2rem auto;

  header {
    width: 100%;
    display: flex;
    background: #e6e6e6;
    color: #116193;

    span {
      color: #b7babf;
      font-size: 1rem;
    }
    h1 {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  article {
    display: flex;
  }
`;

export const MovieDetailContent = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  background: #f2f2f2;

  div {
    margin: 2rem;
    width: 90%;
    h2,
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #116193;
    }

    hr {
      background: #7bedea;
      height: 2px;
      width: 100%;
      margin: 0.7rem 0;
    }
    p {
      margin-top: 1rem;
      max-width: 90%;
      font-family: 'Lato', sans-serif;
      color: #828282;
      text-align: justify;
    }

    #genresSpan {
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
    span + span {
      font-size: 40px;
      background: #116193;
      display: flex;
      color: #00e6e3;
      border: 4px solid #00e6e3;
      border-radius: 50%;
      padding: 25px;
      width: 100px;
      height: 100px;
      margin: 0 10px;
      align-items: center;
      justify-content: center;
    }
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MovieDetailImageContainer = styled.section`
  max-width: 30%;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const ContentInfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: center;
  }
`;
export const VideoContainer = styled.footer`
  margin-top: 2rem;
`;
