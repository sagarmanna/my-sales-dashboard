// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center leading-tight">
        Welcome to Sales Dashboard
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-10 text-center max-w-xl text-lg md:text-xl leading-relaxed">
        Track and visualize your sales performance for the years 2022, 2023, 2024, and 2025. 
        Use filters, chart types, and insights to make data-driven decisions effectively.
      </p>

      {/* Dashboard Button */}
      <Link
        href="/dashboard"
        className="
          px-6 py-3 md:px-8 md:py-4
          bg-blue-600 text-white font-semibold rounded-xl
          shadow-lg hover:bg-blue-700 hover:shadow-xl
          transition-all duration-300 transform hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
        "
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
