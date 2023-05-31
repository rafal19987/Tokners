import DesktopNavBar from '../organisms/DesktopNavBar';
import DesktopSignInUpButtons from '../molecules/DesktopSignInUpButtons';
import Hamburger from '../Hamburger';
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="flex items-center w-screen h-28 bg-[#0f1320]">
      <div className="w-48 h-8 ml-3 border-red-200 md:ml-10">
        <Logo />
      </div>
      <DesktopNavBar />
      <DesktopSignInUpButtons />
      <div className="flex mr-3 ml-auto md:mr-10 lg:hidden">
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
