import Image from 'next/image';
import logo from '@/app/assets/logo.svg';

const Logo = () => {
  return (
    <div className="relative flex w-fit h-8">
      <Image
        className="self-end pb-1"
        src={logo}
        width={47}
        height={30}
        alt="logo ico"
      />
      <h1 className="self-end text-3xl text-white font-bold leading-none md:pl-1">
        Tokners
      </h1>
    </div>
  );
};

export default Logo;
