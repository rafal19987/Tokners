import DesktopNavList from '../molecules/DesktopNavList';

const DesktopNavBar = () => {
  return (
    <nav className="hidden w-80 h-8 ml-20 lg:block">
      <DesktopNavList />
    </nav>
  );
};

export default DesktopNavBar;
