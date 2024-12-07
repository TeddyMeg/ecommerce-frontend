import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span>/</span>
        <span>404 Error</span>
      </div>

      <div className="text-center py-16">
        <h1 className="text-9xl font-bold mb-8">404 Not Found</h1>
        <p className="text-gray-600 mb-8">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/">
          <Button variant="primary">Back to home page</Button>
        </Link>
      </div>
    </div>
  );
}