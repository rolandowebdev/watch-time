import { useEffect, useState } from 'react';
import { Card, Navbar, Container } from '../components';

function Movie() {
  const [movies, setMovies] = useState([]);

  const url = `${process.env.REACT_APP_BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}`;

  const getPopularMovie = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getPopularMovie();
  }, []);

  return (
    <Container>
      <Navbar />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <Card movies={movies} />
      </div>
    </Container>
  );
}

export default Movie;
