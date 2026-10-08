function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          YADAV AMAN
        </h1>

        {/* Menu */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>

          <a href="#" className="hover:text-gray-200">
            About
          </a>

          <a href="#" className="hover:text-gray-200">
            Skills
          </a>

          <a href="#" className="hover:text-gray-200">
            Projects
          </a>

          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </div>

      </nav>
    </header>
  )
}

export default Header