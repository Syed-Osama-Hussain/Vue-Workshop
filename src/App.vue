<template>
  <div id="app">
    <div id="nav">
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item
              ><router-link to="/phones">Phones</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/laptops">Laptops</router-link></b-nav-item
            >
            <b-nav-item
              ><router-link to="/watches">Watches</router-link></b-nav-item
            >
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.navbar {
  margin-bottom: 10px;
  height: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-item {
  font-size: 10px;
  padding-top: 3px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
