import Entry from "./components/Entry.vue";
import Products from "./components/Products.vue";

export const routes = [
    {path: '/', name:'entry', component: Entry},
    {path: '/products', name: 'Products',  component: Products},
];