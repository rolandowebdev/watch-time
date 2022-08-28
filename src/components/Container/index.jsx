import Navbar from '../Navbar';

function Container({ children }) {
  return (
    <div className="justify-center min-h-screen mx-auto px-4 py-6 lg:px-12">
      <Navbar />
      {children}
    </div>
  );
}

export default Container;
