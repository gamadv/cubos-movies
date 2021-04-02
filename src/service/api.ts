import axios from 'axios';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:{
    api_key: '1d3755fe6340f2462ef32856694f5e49',
  }
});

export default movieApi;
