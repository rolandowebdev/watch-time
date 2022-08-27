import Search from '../Search';

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <a className="text-3xl font-bold tracking-wide" href="/">
        WatchTime
      </a>
      <Search />
    </div>
  );
}

export default Navbar;
