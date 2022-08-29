import { useEffect, useState } from 'react';
import { Card, Container } from '../components';

function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

  const getPopularMovie = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getPopularMovie();
  }, []);

  if (loading) return <Container>Loading</Container>;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <Card movies={movies} />
      </div>
    </Container>
  );
}

export default Movie;
