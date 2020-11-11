import Entry from "./components/Entry.vue";
import Laptops from "./components/Laptops.vue";
import Navbar from "./components/Navbar.vue";
import Mobiles from './components/Mobiles.vue';
import ElectronicAppliances from './components/ElectronicAppliances.vue';

export const routes = [
    {path: '/', name:'entry', component: Entry},
    {path: '/home', name:'home', component: Navbar},
    {path: '/laptops', name: 'Laptops',  component: Laptops},
    {path: '/mobiles', name: 'Mobiles',  component: Mobiles},
    {path: '/electronicAppliances', name: 'ElectronicAppliances',  component: ElectronicAppliances},
];