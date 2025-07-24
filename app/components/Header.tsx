import Link from 'next/link';

export default function Header() {
  return (
    <div className=" text-white bg-(--stone-600) w-full flex p-6">
      <nav className="w-full">
        <ul className="flex gap-6">
          <li className="mr-auto">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="ml-auto">
            <Link href={'/recipes'}>Recipes</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
