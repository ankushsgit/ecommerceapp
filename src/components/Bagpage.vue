<template>
    <div>
        <Navbar />
        <div class="row col-sm-12" v-for="productData in cartItems" :key="productData._id">
            <div class="col-sm-2">
                <img
              class="card-img-top mt-2"
              v-bind:src="productData.productImage"
              alt="Card image cap"
              style="max-height: 700px; max-width: 127.135px;margin: auto"
            />
            </div>
            <div class="col-sm-10">
                <h6 class="card-text">{{ productData.productName }}</h6>
              <h4 class="card-text">{{ productData.productPrice }}</h4>
            </div>
        </div>
        <button class="btn btn-primary m-4"  @click="checkoutPage()"> Checkout </button>
    </div>
</template>
<script>
import Navbar from "./Navbar";

export default {
  name: "Mobiles",
  components: {
    Navbar,
  },
  data() {
    return {
        cartItems:[],
    };
  },
  methods: {
      checkoutPage(){
           this.$router.push("/checkout");
      },
    getMobilesData() {
      localStorage.setItem("cart", JSON.stringify([ 
          {
            "_id": "5bd44827429e8654fc8e5a4c",
            "productName": "RealMe 1 (Black, 6GB RAM, 128GB Storage)",
            "productPrice": "11,999.00",
            "mobileCategory": "Smartphone",
            "productImage": "https://images-na.ssl-images-amazon.com/images/I/616-sGx5LTL._SY879_.jpg",
            "mobiletSeller": "Realme",
            "mobileRating": 4.9,
            "isBestmobile": true,
            "isTopMobile": true,
            "__v": 0,
            "mobileDescription": "Camera: 13 MP Rear camera with Fast facial unlock in less than 0.1 second with AI Recognition | 8 MP front camera Display: 15.24 centimeters (6-inch) Full HD In-cell capacitive touchscreen display with 2160x1080 pixels"
        },
        {
            "_id": "5bd4482429e8654fc8e5a4c",
            "productName": "New Inspiron 14 5490 Laptop",
            "productPrice": "56,989.99",
            "laptopCategory": "Laptop",
            "productImage": "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/14_5490/pdp/laptops-inspiron-14-5490-pdp-mod1-silver.jpg?fmt=jpg",
            "laptopSeller": "Dell",
            "laptopRating": 4.1,
            "isBestlaptop": true,
            "isToplaptop": true,
            "__v": 0,
            "laptopDescription": "10th Generation Intel® Core™ i5-10210U Processor (6MB Cache, up to 4.2 GHz) Windows 10 Home Single Language, English Intel® UHD Graphics with shared graphics memory 8GB,4Gx1 + 4G onboard, DDR4, 2666MHz " 
        }
    ]));
    },
    getBagData(){
         this.cartItems = localStorage.getItem("cart");   
         this.cartItems = JSON.parse(this.cartItems);
    }
  },
  mounted() {
    this.getMobilesData();
    this.getBagData();
  },
};
</script>

