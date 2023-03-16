import HomePage from '../pages/home';
import MensClothingPage from '../pages/mens-clothing';
import WomensClothingPage from '../pages/womens-clothing';

const routes = [
  { path: '/', component: <HomePage /> },
  { path: 'mens-clothing', component: <MensClothingPage /> },
  { path: 'womens-clothing', component: <WomensClothingPage /> },
];

export { routes };
