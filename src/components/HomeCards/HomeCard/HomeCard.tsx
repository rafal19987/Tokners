import Image from 'next/image';
import Link from 'next/link';
import { HomeCardTypes } from '@/types/homeCardTypes';

const HomeCard = ({
  color,
  icon,
  textHeader,
  textContent,
  arrow,
}: HomeCardTypes) => {
  return (
    <article className="w-fit h-full mt-[10px] px-[30px] bg-[#171B29] xl:h-[436px] xl:w-[970px]">
      <div
        className={`flex items-center justify-center w-[70px] h-[70px] mt-[30px] rounded-full bg-[#${color}]`}
      >
        <Image src={icon} width={24} height={24} alt="header icon" />
      </div>
      <div className="mt-[15px]">
        <Link className="flex items-center " href="#">
          <h2 className="text-white">For</h2>
          <span className={`ml-[6px] text-[#${color}]`}>{textHeader}</span>
        </Link>
      </div>
      <p className="text-white mt-[15px] opacity-50 text-base leading-6">
        {textContent}
      </p>
      <div className="group w-fit h-fit mt-[20px] pb-[40px]">
        <Link className={`flex text-[#${color}]`} href="#">
          Learn More
          <Image
            className="ml-[6px]"
            src={arrow}
            width={16}
            height={16}
            alt="arrow icon"
          />
        </Link>
      </div>
    </article>
  );
};

export default HomeCard;
