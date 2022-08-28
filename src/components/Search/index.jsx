import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState('');
  const [menus, setMenus] = useState([]);

  const url = `${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&include_adult=false`;

  const getSearchMovie = async () => {
    if (query !== '') {
      const res = await fetch(url);
      const data = await res.json();
      setMenus(data.results.splice(0, 8));
    } else {
      setMenus([]);
    }
  };

  useEffect(() => {
    getSearchMovie();
  }, [query]);

  return (
    <div className="relative">
      <div className="relative w-full max-w-xs form-control">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-[18px] h-[18px] ml-2 -translate-y-1/2 top-[45%]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movie..."
          className="w-full max-w-xs pl-8 input input-bordered bg-slate-800"
        />
      </div>
      {query && (
        <ul className="absolute z-50 w-56 p-2 mt-5 menu bg-slate-800 rounded-box">
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link to={`/movie/${menu.id}`}>{menu.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
