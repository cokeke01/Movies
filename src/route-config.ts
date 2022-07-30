//to handle the route of our application, Exmaple: Menu routes
import IndexGenres from './genres/IndexGenres';
import CreateGenre from './genres/CreateGenre';
import EditGenre from './genres/EditGenre';

import IndexActors from './actors/IndexActors';
import CreateActor from './actors/CreateActor';
import EditActor from './actors/EditActor';

import IndexMovieTheaters from './movietheaters/IndexMovieTheaters';
import CreateMovieTheater from './movietheaters/CreateMovieTheater';
import EditMovieTheater from './movietheaters/EditMovieTheater';

import CreateMovie from './movies/CreateMovie';
import EditMovie from './movies/EditMovie';
import FilterMovies from './movies/FilterMovies';

import LandingPage from './movies/LandingPage';
import RedirectToLandingPage from './utils/RedirectToLandingPage';

const routes = [
  { path: '/genres', component: IndexGenres, exact: true },
  { path: '/genres/create', component: CreateGenre },
  { path: '/genres/edit/:id(\\d+)', component: EditGenre }, //(\\d+) means that the paramener must be an integer

  { path: '/actors', component: IndexActors, exact: true },
  { path: '/actors/create', component: CreateActor },
  { path: '/actors/edit/:id(\\d+)', component: EditActor },

  { path: '/movietheaters', component: IndexMovieTheaters, exact: true },
  { path: '/movietheaters/create', component: CreateMovieTheater },
  { path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheater },

  { path: '/movies/create', component: CreateMovie },
  { path: '/movies/edit/:id(\\d+)', component: EditMovie },
  { path: '/movies/filter', component: FilterMovies },

  { path: '/', component: LandingPage, exact: true },
  { path: '*', component: RedirectToLandingPage }, //handling 404-route notfound, the * is a catch all paramaters
];

export default routes;
