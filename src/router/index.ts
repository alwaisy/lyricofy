import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import {
  AroundYou,
  ArtistDetails,
  Discover,
  Search,
  SongDetails,
  TopArtists,
  TopCharts
} from '../views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Discover
    },
    {
      path: '/top-artist',
      name: 'top-artist',
      component: TopArtists
    },
    {
      path: '/around-you',
      name: 'around-you',
      component: AroundYou
    },
    {
      path: '/top-charts',
      name: 'top-charts',
      component: TopCharts
    },
    {
      path: '/artists/:id',
      name: 'artist-detail',
      component: ArtistDetails
    },
    {
      path: '/songs/:id',
      name: 'song-detail',
      component: SongDetails
    },
    {
      path: '/search/:searchTerm',
      name: 'search',
      component: Search
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
});

export default router;
