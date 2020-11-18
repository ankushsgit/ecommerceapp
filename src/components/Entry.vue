<template>
  <div class="container justify-content-center card p-5 mt-5">
    <div class="row">
      <div class="col">
        <h1>Amazon.in</h1>
      </div>
    </div>

    <!-- login view starts here --> 
    <div v-if="viewState == 'login'">
      <div class="row mt-4">
        <div class="col">
          <h3>Login</h3>
        </div>
      </div>

      <b-form>
        <b-form-group id="email_address" label="Email address:" label-for="email address"
          description="We'll never share your email with anyone else.">
          <b-form-input id="email_address" v-model="loginForm.email" type="email" required placeholder="Enter email"
            class="form-control"></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Password" label-for="password">
          <b-form-input id="password" v-model="loginForm.password" required type="password" placeholder="Enter password"
            class="form-control"></b-form-input>
        </b-form-group>
        <div class="row">
          <div class="col-1">
            <b-button variant="primary" @click="login">Login</b-button>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col">
            <p>Dont have an account ?</p>
            <b-button variant="secondary" @click="toggleView('signup')">Signup Instead</b-button>
          </div>
        </div>
      </b-form>
    </div>

    <!-- Sign up view -->
    <div v-else>
      <div class="row mt-4">
        <div class="col">
          <h3>Signup</h3>
        </div>
      </div>

      <b-form>
        <b-form-group id="username" label="Name" label-for="name">
          <b-form-input id="username" v-model="signupForm.name" type="text" required placeholder="Enter name"
            class="form-control"></b-form-input>
        </b-form-group>

        <b-form-group id="email_address" label="Email address:" label-for="email address"
          description="We'll never share your email with anyone else.">
          <b-form-input id="email_address" v-model="signupForm.email" type="email" required placeholder="Enter email"
            class="form-control"></b-form-input>
        </b-form-group>

        <b-form-group id="password" label="Password" label-for="password">
          <b-form-input id="password" v-model="signupForm.password" required type="password"
            placeholder="Enter password" class="form-control"></b-form-input>
        </b-form-group>
        <div class="row">
          <div class="col-1">
            <b-button variant="primary" @click="signup">Signup</b-button>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col">
            <p>Already a user ?</p>
            <b-button variant="secondary" @click="toggleView('login')">Login Instead</b-button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry",
  data() {
    return {
      loginForm: { email: "", password: "" },
      signupForm: { name: "", email: "", password: "" },
      viewState: "login",
      users: [],
    };
  },
  methods: {
    login() {
      // Find email address in the list of all users and compare password
      var loggedInUserObject = this.users.find(
        (el) => el.email.toLowerCase() == this.loginForm.email.toLowerCase()
      );
      if (loggedInUserObject && loggedInUserObject.password === this.loginForm.password) {
        this.loginForm["name"] = loggedInUserObject.name;
        localStorage.setItem("loggedInUser", JSON.stringify(this.loginForm));
        // route to home page code goes here
        this.$bvToast.toast("Redirecting to home page", {
          title: "Authenticated User",
          autoHideDelay: 3000,
        });
        this.navigate();
      } else {
        this.$bvToast.toast("Invalid email or password, Please try again.", {
          title: "Un-Authorized User",
          autoHideDelay: 3000,
        });
      }
    },
    toggleView(data) {
      this.viewState = data;
      this.loginForm = { email: "", password: "" };
      this.signupForm = { name: "", email: "", password: "" };
    },
    signup() {
      // check if user is already present
      let existingUser = this.users.find(
        (el) => el.email == this.signupForm.email
      );

      // If user is present, show toaster and view login page
      if (existingUser) {
        this.$bvToast.toast("You are already registered, Please login", {
          title: "Already registered",
          autoHideDelay: 3000,
        });
        this.viewState = "login";
        return;
      }

      // If new user, create new user and store it in local storage
      this.users.push(this.signupForm);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.$bvToast.toast("You can now login...", {
        title: "Registration Successful",
        autoHideDelay: 3000,
      });
      setTimeout(() => {
        this.viewState = "login";
      }, 2000);
    },
    navigate() {
      this.$router.push("/home");
    },
  },

  mounted() {
    this.users = localStorage.getItem("users");
    this.users = this.users ? JSON.parse(this.users) : [];
  },
};
</script>

<style scoped></style>
