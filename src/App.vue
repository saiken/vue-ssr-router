<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <nav>
      <h2>Navigation</h2>
      <ul>
        <li>
          <router-link to="/">
            Top
          </router-link>
        </li>
        <li>
          <router-link to="/hydrationMiss">
            HydrationMiss
          </router-link>
        </li>
        <li>
          <router-link to="/callApiOnCreated">
            callApiOnCreated
          </router-link>
        </li>
        <li>
          <router-link to="/storeSample">
            storeSample
          </router-link>
        </li>
        <li>
          <router-link to="/redirectSample">
            redirectSample
          </router-link>
        </li>
        <li>
          <router-link to="/authSample">
            authSample
          </router-link>
        </li>
      </ul>
    </nav>
    <section>
      <h2>Contents</h2>
      <div>
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'message'
        };
    }
};
</script>

<style>
  h1 {
    color: red;
  }
</style>
