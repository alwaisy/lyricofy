// import { useImage } from '@/hooks/useImage';
import { Discover, AroundYou, TopArtists, TopCharts } from '@/assets/svg';

interface IMenu {
  id: number;
  title: string;
  icon: any;
  to: string;
}

type TMenu = IMenu[];

export const menu: TMenu = [
  {
    id: 0,
    title: 'Discover',
    icon: Discover,
    to: '/'
  },
  {
    id: 2,
    title: 'Around You',
    icon: AroundYou,
    to: '/around-you'
  },
  {
    id: 3,
    title: 'Top Artists',
    icon: TopArtists,
    to: '/top-artists'
  },
  {
    id: 4,
    title: 'Top Charts',
    icon: TopCharts,
    to: 'top-charts'
  }
];
