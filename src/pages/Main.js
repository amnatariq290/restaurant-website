import Landing from "../components/Main/Landing";
import Info from "../components/Main/Info";
<div className="relative bg-cover bg-center h-[90vh] text-white" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555992336-c434f71d87f2?auto=format&fit=crop&w=1600&q=80')` }}>
  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl font-extrabold mb-4">Welcome to Food Heaven</h1>
    <p className="text-xl mb-6 max-w-2xl">
      Discover mouth-watering dishes, handcrafted with love. Your next favorite meal is just a click away.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <a href="/menu" className="bg-red-600 px-6 py-3 rounded font-bold hover:bg-red-700 transition">View Menu</a>
      <a href="/reservation" className="bg-white text-red-600 px-6 py-3 rounded font-bold hover:bg-gray-100 transition">Reserve Table</a>
    </div>
  </div>
</div>

const Main = () => {
  return (
    <>
      <Landing />
      <Info />
    </>
  );
};

export default Main;
