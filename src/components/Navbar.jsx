export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center sticky top-0 z-50">

  <h1 className="text-3xl font-bold text-emerald-700">
    🌿 EcoStay Connect
  </h1>

  <div className="space-x-8 font-medium text-gray-700">
    <a href="/" className="hover:text-emerald-600">
      Home
    </a>

    <a href="/about" className="hover:text-emerald-600">
      About
    </a>

    <a href="/dashboard" className="hover:text-emerald-600">
      Dashboard
    </a>

    <a href="/login" className="hover:text-emerald-600">
      Login
    </a>
    </div>

  <button className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700">
    Sign In
  </button>
  </nav>
  );
}