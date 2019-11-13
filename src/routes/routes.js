import Home from '../Components/Home/Home';
import Gallery from '../Components/Gallery/Gallery';
import Contact from '../Components/Contact/Contact';
import About from '../Components/About/About';
import Testimonials from '../Components/Testimonials/Testimonials';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/gallery',
    component: Gallery,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/testimonials',
    component: Testimonials,
    exact: true,
  },
];

export default routes;
