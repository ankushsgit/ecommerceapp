<template>
  <div>
    <div class="row m-4">
      <h4>Add a new address</h4>
    </div>
    <div class="row m-4">
      <form>
        <div class="form-group">
          <label for="countries">Country/Region</label>
          <select class="form-control" id="countries" v-model="addressForm.country">
            <option selected>Select Country</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <input type="text" id="fullname" class="form-control" v-model="addressForm.fullname"
            placeholder="Enter Full Name" required />
        </div>
        <div class="form-group">
          <label for="mobile">Mobile Number</label>
          <input type="number" maxlength="10" id="mobile" class="form-control" v-model="addressForm.mobile"
            placeholder="Enter Mobile Number" required />
        </div>
        <div class="form-group">
          <label for="pincode">Pincode</label>
          <input type="number" maxlength="6" id="pincode" class="form-control" v-model="addressForm.pincode"
            placeholder="Enter Pincode" required />
        </div>
        <div class="form-group">
          <label for="addressline1">Flat, House no., Building, Company, Apartment</label>
          <input type="text" id="addressline1" class="form-control" v-model="addressForm.addressline1"
            placeholder="Enter Address Line1" required />
        </div>
        <div class="form-group">
          <label for="addressline2">Area, Colony, Street, Sector, Village</label>
          <input type="text" id="addressline2" class="form-control" v-model="addressForm.addressline2"
            placeholder="Enter Address Line 2" required />
        </div>
        <div class="form-group">
          <label for="landmark">Landmark</label>
          <input type="text" id="landmark" class="form-control" v-model="addressForm.landmark"
            placeholder="Enter landmark" required />
        </div>
        <div class="form-group">
          <label for="city">Town/City</label>
          <input type="text" id="city" class="form-control" v-model="addressForm.city" placeholder="Enter City"
            required />
        </div>
        <div class="form-group">
          <label for="state">State / Province / Regiony</label>
          <input type="text" id="state" class="form-control" v-model="addressForm.state" placeholder="Enter State"
            required />
        </div>
        <button type="submit" class="btn btn-primary" @click="addAddress">Add Address</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Entry",
  data() {
    return {
      addressForm: {country:"", fullname: "", mobile: "" , pincode:"", addressline1:"", addressline2:"", landmark:"", city:"", state:""},
      address:[]
    };
  },
  methods: {
    addAddress() {
      this.address.push(this.addressForm);
      localStorage.setItem("address", JSON.stringify(this.address));
    }
  },
};
</script>