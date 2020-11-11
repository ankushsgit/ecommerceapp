import Entry from "./components/Entry.vue";
import Products from "./components/Products.vue";
import Navbar from "./components/Navbar.vue";
import Profile from "./components/Profile.vue";
import ProductDetail from './components/ProductDetail';
import Laptops from './components/Laptops';
import Mobiles from './components/Mobiles';
import ElectronicAppliances from './components/ElectronicAppliances';

export const routes = [
    {path: '/', name:'Entry', component: Entry},
    {path: '/home', name:'Home', component: Navbar},
    {path: '/products', name: 'Products',  component: Products},
    {path: '/profile', name: 'Profile',  component: Profile},
    {path: '/laptops', name: 'Laptops',  component: Laptops},
    {path: '/mobiles', name: 'Mobiles',  component: Mobiles},
    {path: '/electronicAppliances', name: 'ElectronicAppliances',  component: ElectronicAppliances},
    {path: '/products/:id',name: 'productDetails',component : ProductDetail},
];