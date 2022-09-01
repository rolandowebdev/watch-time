import Navbar from '../Navbar';

function Container({ children }) {
  return (
    <div className="items-center justify-center min-h-screen px-4 py-6 mx-auto lg:px-12">
      <Navbar />
      {children}
    </div>
  );
}

export default Container;
