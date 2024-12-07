import { Button } from '../ui/Button';

export function SocialAuth() {
  return (
    <div className="mt-6">
      <Button
        variant="outline"
        fullWidth
        className="mb-4 flex items-center justify-center gap-2"
      >
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        Sign up with Google
      </Button>
    </div>
  );
}