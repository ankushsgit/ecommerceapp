<template>
  <div>
    <div class="row m-4">
      <h4>Add a new Product</h4>
    </div>
    <form @submit.prevent="addProduct">
      <div class="row">
        <div class="col-4">
          <div class="form-group row">
            <label for="productName" class="col-4 col-form-label text-right">Product Name</label>
            <div class="col-8">
              <input type="text" id="productName" class="form-control" v-model.trim="product.productName"
                placeholder="Enter Product Name" required />
            </div>
          </div>

          <div class="form-group row">
            <label for="productPrice" class="col-4 col-form-label text-right">Product Price</label>
            <div class="col-8">
              <input type="number" maxlength="5" id="productPrice" class="form-control"
                v-model.trim="product.productPrice" placeholder="Enter Product Price" required />
            </div>
          </div>

          <div class="form-group row">
            <label for="productCategory" class="col-4 col-form-label text-right">Product Category</label>
            <div class="col-8">
              <select class="form-control" id="productCategory" v-model="product.productCategory">
                <option selected>Select Category</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Electronics</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="productSeller" class="col-4 col-form-label text-right">product Seller</label>
            <div class="col-8">
              <input type="text" id="productSeller" class="form-control" v-model.trim="product.productSeller"
                placeholder="Enter Product Seller" required />
            </div>
          </div>

          <div class="form-group row">
            <label for="productRating" class="col-4 col-form-label text-right">Product Rating</label>
            <div class="col-8">
              <select class="form-control" id="productRating" v-model="product.productRating">
                <option selected>Select Category</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="isBestProduct" class="col-4 col-form-label text-right">
              Best Product</label>
            <input class="form-radio-input" type="radio" id="yes" v-model="product.isBestProduct" value="Yes" />
            <label class="custom-radio-label" for="isBestProduct">
              &nbsp;&nbsp;Yes</label>
            &#160;&#160;&#160;&#160;
            <input class="form-radio-input" type="radio" id="no" v-model="product.isBestProduct" value="No" />
            <label class="custom-radio-label" for="isBestProduct">
              &nbsp;&nbsp;No</label><br />
          </div>

          <div class="form-group row">
            <label for="isTopProduct" class="col-4 col-form-label text-right">
              Top Product</label>
            <input class="form-radio-input" type="radio" id="yes" v-model="product.isTopProduct" value="Yes" />
            <label class="custom-radio-label" for="isTopProduct">
              &nbsp;&nbsp;Yes</label>
            &#160;&#160;&#160;&#160;
            <input class="form-radio-input" type="radio" id="no" v-model="product.isTopProduct" value="No" />
            <label class="custom-radio-label" for="isTopProduct">
              &nbsp;&nbsp;No</label><br />
          </div>

          <div class="form-group row">
            <label for="productDescription" class="col-4 col-form-label text-right">
              Description</label>
            <div clas="col-12">
              <textarea class="form-control" rows="5" v-model.trim="product.productDescription"
                placeholder=" product Description" name="text"></textarea>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group row">
            <label for="productImage" class="col-4 col-form-label text-right">Product Image
            </label>
            <div class="col-8">
              <input type="text" id="productImage" class="form-control" v-model.trim="product.productImage"
                placeholder="past Product Image URL" required />
            </div>
          </div>

          <div class="text-right" style="cursor: pointer">
            <div v-if="product.productImage">
              <img :src="product.productImage" width="400px" height="400px" />
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-10 text-right">
          <button type="submit" class="btn btn-primary">Add Address</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "addproduct",
  data() {
    return {
      product: {
        id: "",
        productName: "",
        productPrice: "",
        productCategory: "",
        productImage: "",
        productSeller: "",
        productRating: "",
        isBestProduct: "",
        isTopProduct: "",
        productDescription: "",
      },
    };
  },
  methods: {
    addProduct() {
      this.product.id = new Date().getUTCMilliseconds().toString();
      let URL = "";
      if (this.product.productCategory == "Mobile") {
        URL = "http://localhost:3000/mobiles";
      } else if (this.product.productCategory == "Laptop") {
        URL = "http://localhost:3000/laptops";
      } else {
        URL = "http://localhost:3000/electronics";
      }
      axios.post(URL, this.product).then(function (response) {
        console.log(response);
        this.$router.push("/home");
      });
    },
  },
};
</script>