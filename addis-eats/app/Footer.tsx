export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white px-6 py-6 text-center">
      <p className="text-sm text-gray-600">
        Eat good. Support local.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        © {new Date().getFullYear()} Addis Eats
      </p>
    </footer>
  );
}