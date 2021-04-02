import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import movieApi from '../../service/api';

import Header from '../../components/Header';

import {
  Container,
  MovieList,
  PaginationContainer,
  MovieItem,
  ImageContainer,
  MovieContent,
  MovieDesc,
} from './styles';

interface IMoviesList {
  page: number;
  results: Array<IMovie>;
  total_results: number;
  total_pages: number;
}

interface IGenresList {
  genres: Array<IGenre>;
}
interface IMovie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface IGenre {
  id: number;
  name: string;
}

const SearchHome: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [parsedMovie, setParseMovie] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [searchName, setSearchName] = useState('');
  const [isName, setIsName] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number[]>([]);
  const [currentSearchPage, setCurrentSearchPage] = useState<number>(1);

  const getMoviesByName = useCallback(async () => {
    if (isName === false) return;

    let formatQuery = encodeURI(searchName);
    const res = await movieApi.get<IMoviesList>(`/search/movie`, {
      params: {
        query: formatQuery,
        page: currentSearchPage,
      },
    });
    if (currentSearchPage > 1) {
      setMovies((lastMovies) => lastMovies.concat(res.data.results));
      setTotalPages(
        (lastPages) => lastPages + Math.ceil(res.data.results.length / 5)
      );
    } else {
      setMovies(res.data.results);
      setTotalPages(Math.ceil(res.data.results.length / 5));
      setParseMovie(
        res.data.results.slice(
          0,
          res.data.results.length < 5 ? res.data.results.length : 5
        )
      );
    }
  }, [searchName, isName, currentSearchPage]);

  const getGenres = useCallback(async () => {
    const res = await movieApi.get<IGenresList>('/genre/movie/list');
    setGenres(res.data.genres);
  }, []);

  const setPaginate = useCallback(() => {
    let lastPage,
      pages = [] as number[];

    if (totalPages - currentPage < 3 && totalPages - currentPage > 0) {
      setCurrentSearchPage((oldSearchPages) => oldSearchPages + 1);
    }
    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      const firstAndLastPage = currentPage === 1 || currentPage === totalPages;
      const pagesBefore = currentPage >= currentPage - 2;
      const pagesAfter = currentPage <= currentPage + 2;

      if (firstAndLastPage || (pagesAfter && pagesBefore)) {
        if (lastPage && currentPage - lastPage === 2) pages.push(lastPage + 1);

        pages.push(currentPage);

        lastPage = currentPage;
      }
    }
    setPage(pages);
  }, [totalPages, currentPage]);

  const getGenresName = useCallback(
    (id: number): string => {
      const genreNamed = genres.find((genre) => genre.id === id);
      return genreNamed?.name || '';
    },
    [genres]
  );

  const averageFormat = useCallback((number) => {
    const formatter = number * 10;
    return formatter;
  }, []);

  useEffect(() => {
    getMoviesByName();
  }, [getMoviesByName]);
  useEffect(() => {
    getGenres();
  }, [getGenres]);
  useEffect(() => {
    setPaginate();
  }, [setPaginate]);

  useEffect(() => {
    setParseMovie(movies.slice((currentPage - 1) * 5, currentPage * 5));
  }, [movies, currentPage]);

  const handleTextUpdate = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      setSearchName(event.target.value);
      setIsName(true);
    },
    []
  );

  return (
    <>
      <Header>
        <h1>Movies</h1>
      </Header>
      <Container>
        <input
          type="text"
          placeholder="Search movies by Name..."
          onChange={handleTextUpdate}
        />
        <MovieList>
          {parsedMovie.map((movie, index) => (
            <MovieItem key={index}>
              <ImageContainer>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="movie"
                  />
                </Link>
              </ImageContainer>
              <MovieContent>
                <header>
                  <span> {`${averageFormat(movie.vote_average)}%`} </span>
                  <div>
                    <Link to={`/movie/${movie.id}`}>
                      <h1>{movie.title}</h1>
                    </Link>
                  </div>
                </header>

                <MovieDesc>
                  <span> {movie.release_date} </span>
                  <p>{movie.overview}</p>

                  <div>
                    {movie.genre_ids.map((item, index) => (
                      <span key={index}>{getGenresName(item)}</span>
                    ))}
                  </div>
                </MovieDesc>
              </MovieContent>
            </MovieItem>
          ))}
        </MovieList>
      </Container>
      <PaginationContainer>
        {page.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentPage(item)}
            className={`${Math.abs(currentPage - item) > 2 ? 'hide' : ''}  ${
              currentPage === item ? 'currentItem' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </PaginationContainer>
    </>
  );
};

export default SearchHome;
