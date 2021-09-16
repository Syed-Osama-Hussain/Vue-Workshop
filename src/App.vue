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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
