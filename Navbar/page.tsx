import Link from "next/link";

const links = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/" },
  { name: "Skills", url: "/" },
  { name: "About", url: "/" },
  { name: "Contact", url: "/" },
];

export default function Home() {
  return (
    <div className="px-6 flex flex-col items-center shadow-md md:flex-row justify-between">
      <h2 className="bg-gradient-to-t from-blue-400 to-blue-800 text-transparent bg-clip-text md:mt-0 mt-2 uppercase">
        StackFolio
      </h2>
      <ul className="flex mt-2 md:mt-0">
        {links.map((el) => (
          <li
            key={el.name}
            className="px-3 relative before:content-[''] before:absolute before:w-0 hover:before:w-full before:h-1 before:bg-blue-600 before:left-0 before:duration-500 before:top-0 py-3 hover:bg-blue-50"
          >
            <Link href={""}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
