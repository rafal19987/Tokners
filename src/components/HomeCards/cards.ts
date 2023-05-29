import { HomeCardTypes } from '@/types/homeCardTypes';
import blueArrow from '@/app/assets/blueArrow.svg';
import greenArrow from '@/app/assets/greenArrow.svg';
import crown from '@/app/assets/crown.svg';
import star from '@/app/assets/star.svg';

export const cards: HomeCardTypes[] = [
  {
    color: '22A75D',
    icon: crown,
    textHeader: 'Creators',
    textContent:
      'Creators can gain independence through a decentralised digital currency system that is dependent on growing and engaging with the community and also their star power. They own 10-15% of the total value of the tokens minted.',
    arrow: greenArrow,
  },
  {
    color: '2278D4',
    icon: star,
    textHeader: 'Holders',
    textContent:
      'Holding social tokens allows the individual to gain access to benefits including unreleased content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers. ',
    arrow: blueArrow,
  },
];
