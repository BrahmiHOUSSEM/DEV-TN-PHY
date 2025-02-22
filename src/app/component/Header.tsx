const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-950 text-white p-4">
      <div className="text-xl font-bold bg-white text-yellow-700 p-1 rounded-md">
        DEV-TN
      </div>
      <ul className="flex gap-4 items-center justify-between">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Series</li>
        <li className="cursor-pointer">Devoirs</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
