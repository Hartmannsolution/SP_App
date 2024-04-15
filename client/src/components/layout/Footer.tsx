function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-200 text-center">
      <div className="container mx-auto py-2">
        <p className="text-xs">
          &copy; Copyright {new Date().getFullYear()} by Thomas & Jörg
        </p>
      </div>
    </footer>
  );
}

export default Footer;
