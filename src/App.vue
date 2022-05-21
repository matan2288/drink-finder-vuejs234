<template>
  <nav>
    <img src="https://i.ibb.co/x80mNbj/WineLogo.png" style="width: 70px; margin:auto;" alt="">
    <div class="links" style=" margin:15px;" >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 80%;
  margin: auto;
}

nav {
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #7e0303;
    }
  }
}
</style>
