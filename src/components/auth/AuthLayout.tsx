import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  image: string;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, image, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-8 flex items-center justify-center">
        <img
          src={image}
          alt="Shopping cart illustration"
          className="max-w-md w-full object-cover"
        />
      </div>
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}