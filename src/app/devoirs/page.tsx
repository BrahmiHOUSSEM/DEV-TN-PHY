import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center mt-20 justify-start">
      <Link
        className="border-b-2 border-secondary text-2xl text-secondary my-4 font-extrabold opacity-80 hover:opacity-100 duration-300 hover:translate-x-5"
        href="/2emeSc"
      >
        1ère année secondaire
      </Link>
      <Link
        className="border-b-2 border-secondary text-2xl text-secondary my-4 font-extrabold opacity-80 hover:opacity-100 duration-300 hover:translate-x-5"
        href="/2emeSc"
      >
        2ème année secondaire
      </Link>
      <Link
        className="border-b-2 border-secondary text-2xl text-secondary my-4 font-extrabold opacity-80 hover:opacity-100 duration-300 hover:translate-x-5"
        href="/2emeSc"
      >
        3ème année secondaire
      </Link>
      <Link
        className="border-b-2 border-secondary text-2xl text-secondary my-4 font-extrabold opacity-80 hover:opacity-100 duration-300 hover:translate-x-5"
        href="/2emeSc"
      >
        4ème année secondaire - Bac
      </Link>
    </div>
  );
};

export default page;
