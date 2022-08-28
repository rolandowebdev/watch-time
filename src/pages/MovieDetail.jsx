import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components';

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const { id } = useParams();

  const url = `${process.env.REACT_APP_BASE_URL}/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  const getMovieDetail = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setGenres(data.genres);
    setMovieDetail(data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <Container>
      <div className="h-[400px] flex gap-8">
        <div className="card w-[342px] bg-base-100 shadow-xl flex-2">
          <img
            className="w-full"
            src={`${process.env.REACT_APP_IMAGE_URL}/${movieDetail.poster_path}`}
            alt={movieDetail.original_title}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {movieDetail.title}{' '}
            <span className="font-extralight">
              ( {movieDetail.release_date} )
            </span>
          </h1>
          <p className="mt-4 italic text-xl">{movieDetail.tagline}</p>
          <div className="mt-4">
            <h2 className="text-2xl mb-2 font-bold">Overview</h2>
            <p>{movieDetail.overview}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl mb-2 font-bold">Genres</h2>
            <ul className="flex gap-2 text-white">
              {genres.map((genre) => (
                <li
                  className="bg-slate-500 pt-1 px-2 rounded-sm"
                  key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MovieDetail;
