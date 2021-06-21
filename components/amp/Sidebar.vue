<template>
  <amp-sidebar id="sidebar" layout="nodisplay" side="left">
    <div class="sidebar-top">
      <amp-img
        alt="site logo"
        src="/amp/menepet-logo.webp"
        width="199"
        height="199"
        layout="fixed"
      />
      <h1>Menelaos Petousis</h1>
    </div>

    <nav class="nav-menu">
      <ul>
        <li>
          <n-link exact-active-class="active" to="/">
            <font-awesome-icon icon="home" />
            <span>Home</span>
          </n-link>
        </li>
        <li>
          <n-link exact-active-class="active" to="/about">
            <font-awesome-icon icon="user" />
            <span>About Me</span>
          </n-link>
        </li>
        <li>
          <n-link exact-active-class="active" to="/resume">
            <font-awesome-icon icon="scroll" />
            <span>Resume</span>
          </n-link>
        </li>
        <!-- <li>
          <n-link exact-active-class="active" to="/portfolio">
            <font-awesome-icon icon="home" />
            Portfolio
          </n-link>
        </li> -->
        <li>
          <n-link exact-active-class="active" to="/contact">
            <font-awesome-icon icon="envelope" />
            <span>Contact</span>
          </n-link>
        </li>
      </ul>
    </nav>
  </amp-sidebar>
</template>
