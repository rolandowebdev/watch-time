import { useEffect, useState } from 'react';

function Star({ id }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const postRating = `${process.env.REACT_APP_BASE_URL}/movie/${id}/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${process.env.REACT_APP_GUEST_SESSION_ID}`;

  const deleteRating = `${process.env.REACT_APP_BASE_URL}/movie/810693/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${process.env.REACT_APP_GUEST_SESSION_ID}`;

  const postData = async () => {
    const res = await fetch(postRating, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: rating }),
    });
    const data = await res.json();
    setRating(data);
    console.log(data);
  };

  const deleteData = async () => {
    const res = await fetch(deleteRating, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setRating(data);
    console.log(data);
  };

  const handleRating = (index) => {
    setRating(index);
    localStorage.setItem(id, index);
  };

  const handleDelete = () => {
    deleteData();
    localStorage.removeItem(id);
  };

  useEffect(() => {
    if (rating > 0.5) postData();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="mb-2 text-2xl font-bold">Rating</h2>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= (hover || rating)
                  ? 'text-yellow-500 text-2xl '
                  : 'text-gray-400 text-2xl'
              }
              onClick={() => handleRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}>
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <h1>Your Rating : {localStorage.getItem(id)}</h1>
      </div>
      <button
        className="bg-gray-800 px-3 flex items-center justify-center py-0 mt-1 rounded-sm text-md pt-1"
        onClick={handleDelete}
        type="button">
        Reset Rating
      </button>
    </div>
  );
}

export default Star;
