import Entry from "./components/Entry.vue";
import Products from "./components/Products.vue";
import Navbar from "./components/Navbar.vue";

export const routes = [
    {path: '/', name:'entry', component: Entry},
    {path: '/home', name:'home', component: Navbar},
    {path: '/products', name: 'Products',  component: Products},
];