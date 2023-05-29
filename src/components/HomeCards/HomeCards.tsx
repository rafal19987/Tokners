import HomeCard from './HomeCard/HomeCard';
import { cards } from './cards';
import { HomeCardTypes } from '@/types/homeCardTypes';

const HomeCards = () => {
  return (
    <section className="flex flex-col w-full h-full md:flex-row md:h-[530px]">
      {cards.map((card: HomeCardTypes) => (
        <HomeCard
          key={card.textHeader}
          color={card.color}
          arrow={card.arrow}
          icon={card.icon}
          textHeader={card.textHeader}
          textContent={card.textContent}
        />
      ))}
    </section>
  );
};

export default HomeCards;
