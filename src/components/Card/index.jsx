function Card({ movies }) {
  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.title}
          className="shadow-xl card bg-base-100 image-full">
          <figure className="">
            <img
              className=""
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl card-title">{movie.title}</h2>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
              {movie.overview}
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Detail</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
