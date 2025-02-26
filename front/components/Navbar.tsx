import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/sales">Sales</Link>
        <Link href="/service">Services</Link>
      </nav>
    </header>
  );
};
export default Navbar;