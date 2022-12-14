import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Star } from '../components';

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [image, setImage] = useState('');
  // const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const url = `${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  const getMovieDetail = async () => {
    // setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setMovieDetail(data);
    setGenres(data.genres);
    setImage(data.backdrop_path ? data.backdrop_path : data.poster_path);
    // setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, [id, image]);

  // if (loading) return <Container>Loading...</Container>;

  return (
    <Container>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="card md:w-[342px] w-full bg-base-100 shadow-xl flex-2">
          <img
            className="w-full h-full bg-contain"
            src={`${process.env.REACT_APP_IMAGE_URL}/${image}`}
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
          <p className="mt-4 text-xl italic">{movieDetail.tagline}</p>
          <div className="mt-4">
            <h2 className="mb-2 text-2xl font-bold">Overview</h2>
            <p>{movieDetail.overview}</p>
          </div>
          <div className="mt-4">
            <h2 className="mb-2 text-2xl font-bold">Genres</h2>
            <ul className="flex gap-2 text-white">
              {genres.map((genre) => (
                <li className="px-2 pt-1 bg-gray-800 rounded-sm" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <Star id={id} />
        </div>
      </div>
    </Container>
  );
}

export default MovieDetail;
