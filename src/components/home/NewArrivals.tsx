export function NewArrivals() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16">
      <div>
        <span className="text-red-500 font-medium">Featured</span>
        <h2 className="text-3xl font-bold mt-2 mb-8">New Arrival</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2">
          <div className="relative h-full bg-black rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800"
              alt="PlayStation 5"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
              <p className="mb-4">Black and White Version of the PS5 Coming Out</p>
              <button className="text-lg underline">Shop Now</button>
            </div>
          </div>
        </div>

        <div className="relative bg-black rounded-lg overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=400"
            alt="Women's Collection"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold mb-1">Women's Collections</h3>
            <button className="text-sm underline">Shop Now</button>
          </div>
        </div>

        <div className="relative bg-black rounded-lg overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?auto=format&fit=crop&q=80&w=400"
            alt="Speakers"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold mb-1">Speakers</h3>
            <button className="text-sm underline">Shop Now</button>
          </div>
        </div>

        <div className="relative bg-black rounded-lg overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=400"
            alt="Perfume"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold mb-1">Perfume</h3>
            <button className="text-sm underline">Shop Now</button>
          </div>
        </div>

        <div className="relative bg-black rounded-lg overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=400"
            alt="Nike Collection"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold mb-1">Nike Collection</h3>
            <button className="text-sm underline">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}