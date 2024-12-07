export function PromoSection() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-black text-white rounded-lg p-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-8">Enhance Your Music Experience</h2>
            <div className="flex space-x-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  23
                </div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  05
                </div>
                <div className="text-sm">Days</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  59
                </div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  35
                </div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
            <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
              Buy Now!
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=500"
              alt="JBL Speaker"
              className="w-96 h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}