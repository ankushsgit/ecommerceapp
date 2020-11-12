import Entry from "./components/Entry.vue";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";
import ProductDetail from './components/ProductDetail';
import Laptops from './components/Laptops';
import Mobiles from './components/Mobiles';
import ElectronicAppliances from './components/ElectronicAppliances';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Bagpage from './components/Bagpage';


export const routes = [
    {path: '/', name:'Entry', component: Entry},
    {path: '/home', name:'Home', component: Home},
    {path: '/profile', name: 'Profile',  component: Profile},
    {path: '/laptops', name: 'Laptops',  component: Laptops},
    {path: '/mobiles', name: 'Mobiles',  component: Mobiles},
    {path: '/electronicAppliances', name: 'ElectronicAppliances',  component: ElectronicAppliances},
    {path: '/products/:id',name: 'productDetails',component : ProductDetail},
    {path: '/checkout',name: 'checkout',component : Checkout},
    {path: '/success',name: 'success',component : Success},
    {path: '/bagpage',name: 'bagpage',component : Bagpage},
];