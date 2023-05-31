import Link from 'next/link';
import { DesktopNavItemTypes } from '@/types/DesktopNavItemTypes';

const DesktopNavItem = ({ reference, description }: DesktopNavItemTypes) => {
  return (
    <li className="w-fit text-white font-bold hover:text-black hover:cursor-pointer transition-colors duration-200">
      <Link className="w-full h-full" href={reference}>
        {description}
      </Link>
    </li>
  );
};

export default DesktopNavItem;
