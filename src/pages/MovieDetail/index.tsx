import React, { useCallback, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { SiThemoviedatabase } from 'react-icons/si';

import movieApi from '../../service/api';

import Header from '../../components/Header';

import {
  Container,
  ContentInfoSection,
  MovieDetailContent,
  MovieDetailImageContainer,
  MovieDetailWrapper,
  VideoContainer,
} from './styles';

interface MovieID {
  id: string;
}

interface IGenresList {
  genres: Array<IGenre>;
}
interface IMovie {
  adult: boolean;
  backdrop_path: null | object;
  belongs_to_collection: null;
  budget: number;
  genres: Array<IGenre>;
  homepage: string | null;
  id: number;
  poster_path: string | null;
  original_language: string;
  overview: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  videos: IVideo;
  vote_average: number;
  vote_count: number;
}
interface IGenre {
  id: number;
  name: string;
}

interface IVideo {
  results: [
    {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      site: string;
      size: number;
      type: string;
    }
  ];
}
const MovieDetail: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<IMovie>({} as IMovie);
  const [genresList, setGenresList] = useState<IGenre[]>([]);
  const { id } = useParams<MovieID>();

  const getGenres = useCallback(async () => {
    const res = await movieApi.get<IGenresList>('/genre/movie/list');
    setGenresList(res.data.genres);
  }, []);

  const getMovie = useCallback(async () => {
    const res = await movieApi.get<IMovie>(`/movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });
    console.log(res.data);
    setMovieDetails(res.data);
  }, [id]);

  const averageFormat = useCallback((number) => {
    const formatter = number * 10;
    return formatter;
  }, []);

  const currencyFormater = useCallback((value: number) => {
    let newValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

    return newValue;
  }, []);

  const getGenresName = useCallback(
    (id: number): string => {
      const genreNamed = genresList.find((genre) => genre.id === id);
      return genreNamed?.name || '';
    },
    [genresList]
  );

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <MovieDetailWrapper>
      <Header>
        <Link to="/">
          <FiArrowLeft size={40} color="#b7babf" />
        </Link>
        <h1>Movies</h1>
        <SiThemoviedatabase size={40} color="#b7babf" />
      </Header>

      <Container>
        <header>
          <h1>{movieDetails.title}</h1>
          <span>{movieDetails.release_date}</span>
        </header>
        <article>
          <MovieDetailContent>
            <div>
              <h2>Sinopse</h2>
              <hr />
              <p>{movieDetails.overview}</p>
            </div>
            <div>
              <h2>Information</h2>
              <hr />
              <ContentInfoSection>
                <div>
                  <h3>Status</h3>
                  <p>{movieDetails.status}</p>
                </div>
                <div>
                  <h3>Language</h3>
                  <p>{movieDetails.original_language}</p>
                </div>
                <div>
                  <h3>Runtime</h3>
                  <p>{movieDetails.runtime}</p>
                </div>
                <div>
                  <h3>Budget</h3>
                  <p>{currencyFormater(movieDetails.budget)}</p>
                </div>
                <div>
                  <h3>Revenue</h3>
                  <p>{currencyFormater(movieDetails.revenue)}</p>
                </div>
              </ContentInfoSection>
            </div>
            <div>
              {movieDetails.genres &&
                movieDetails.genres.map((item, index) => (
                  <span id="genresSpan" key={index}>
                    {getGenresName(item.id)}
                  </span>
                ))}
              <span>{`${averageFormat(movieDetails.vote_average)}%`}</span>
            </div>
          </MovieDetailContent>
          <MovieDetailImageContainer>
            <img
              src={`http://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
              alt="movie"
            />
          </MovieDetailImageContainer>
        </article>

        {movieDetails.videos && movieDetails.videos.results[0] && (
          <VideoContainer>
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        )}
      </Container>
    </MovieDetailWrapper>
  );
};

export default MovieDetail;
