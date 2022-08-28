import Search from '../Search';

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-slate-900 mb-11">
      <a className="mt-2 text-3xl font-bold tracking-wide" href="/">
        WatchTime
      </a>
      <Search />
    </div>
  );
}

export default Navbar;
