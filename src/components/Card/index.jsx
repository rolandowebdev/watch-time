import { Link } from 'react-router-dom';

function Card({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.title}
          className="shadow-xl card bg-base-100 image-full">
          <figure>
            <img
              className="w-full"
              alt={movie.title}
              src={`${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl card-title">{movie.title}</h2>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
              {movie.overview}
            </p>
            <div className="justify-end card-actions">
              <Link className="btn btn-primary" to={`/movie/${movie.id}`}>
                Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
