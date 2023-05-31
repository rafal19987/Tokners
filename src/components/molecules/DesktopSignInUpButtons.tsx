import SignInButton from '../atoms/SignInButton';
import SignUpButton from '../atoms/SignUpButton';

const DesktopSignInUpButtons = () => {
  return (
    <div className="hidden justify-between w-52 h-12 mr-10 ml-auto lg:flex">
      <SignInButton />
      <SignUpButton />
    </div>
  );
};

export default DesktopSignInUpButtons;
