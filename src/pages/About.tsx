import { ChevronRight } from 'lucide-react';

const stats = [
  { number: '10.5k', label: 'Sallers active our site' },
  { number: '33k', label: 'Monthly Product Sale' },
  { number: '45.5k', label: 'Customer active in our site' },
  { number: '25k', label: 'Annual gross sale in our site' },
];

const team = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300',
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=300&h=300',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
        <span>About</span>
      </div>

      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide range of
            tailored marketing, data and service solutions, Exclusive has 10,500 sellers
            and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="text-gray-600">
            We have more than 1 Million products to offer, growing at a very fast
            pace. We offer a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=800&h=600"
            alt="Shopping Experience"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-8 text-center ${
              index === 1 ? 'bg-red-500 text-white' : 'border rounded-md'
            }`}
          >
            <div className="text-3xl font-bold mb-2">{stat.number}</div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8 mb-16">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-64 h-64 object-cover mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}