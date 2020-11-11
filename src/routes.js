import Entry from "./components/Entry.vue";
import Products from "./components/Products.vue";
import Navbar from "./components/Navbar.vue";
import Profile from "./components/Profile.vue";

export const routes = [
    {path: '/', name:'Entry', component: Entry},
    {path: '/home', name:'Home', component: Navbar},
    {path: '/products', name: 'Products',  component: Products},
    {path: '/profile', name: 'Profile',  component: Profile},
];