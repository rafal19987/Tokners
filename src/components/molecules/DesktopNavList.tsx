import { DesktopNavItemTypes } from '@/types/DesktopNavItemTypes';
import { routes } from '@/app/routes/routes';
import DesktopNavItem from '../atoms/DesktopNavItem';

const DesktopNavList = () => {
  return (
    <ul className="flex items-center justify-between w-full h-full">
      {routes.map(({ reference, description }: DesktopNavItemTypes) => (
        <DesktopNavItem
          key={description}
          reference={reference}
          description={description}
        />
      ))}
    </ul>
  );
};

export default DesktopNavList;
