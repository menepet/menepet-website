<template>
  <header>
    <div id="header-content">
      <!--Mobile Header-->
      <div class="header-mobile">
        <a class="header-toggle" @click="toggleMenu">
          <div id="nav-icon">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </a>
        <h2>Petousis Menelaos</h2>
      </div>
      <!--Main Header-->
      <div class="header-main">
        <div class="simplebar-scroll-content">
          <div class="simplebar-content">
            <div class="position-relative">
              <h2 class="header-name">Petousis Menelaos</h2>
              <picture>
                <source srcset="~/assets/images/menepet-logo.webp" type="image/webp" class="w-100">
                <source srcset="~/assets/images/menepet-logo.jpg" type="image/jpeg" class="w-100">
                <img src="~/assets/images/menepet-logo.jpg" alt="profile-pic" class="w-100">
              </picture>
            </div>
            <!--Nav Menus-->
            <nav class="nav-menu">
              <ul>
                <li>
                  <n-link exact-active-class="active" to="/" @click.native="toggleMenu">
                    <span class="nav-menu-icon">
                      <i class="lnr lnr-home" />
                    </span>
                    <span>Home</span>
                  </n-link>
                </li>
                <li>
                  <n-link exact-active-class="active" to="/about" @click.native="toggleMenu">
                    <span class="nav-menu-icon">
                      <i class="lnr lnr-user" />
                    </span>
                    <span>About Me</span>
                  </n-link>
                </li>
                <li>
                  <n-link exact-active-class="active" to="/resume" @click.native="toggleMenu">
                    <span class="nav-menu-icon">
                      <i class="lnr lnr-license" />
                    </span>
                    <span>Resume</span>
                  </n-link>
                </li>
                <!-- <li>
                  <n-link exact-active-class="active" to="/portfolio" @click.native="toggleMenu">
                    <span class="nav-menu-icon">
                      <i class="lnr lnr-briefcase" />
                    </span>
                    Portfolio
                  </n-link>
                </li> -->
                <li>
                  <n-link exact-active-class="active" to="/contact" @click.native="toggleMenu">
                    <span class="nav-menu-icon">
                      <i class="lnr lnr-envelope" />
                    </span>
                    <span>Contact</span>
                  </n-link>
                </li>
              </ul>
            </nav>
            <footer class="nav-footer">
              <div class="copy">
                <p>&copy; Petousis Menelaos<br>All Right Reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    toggleMenu() {
      const navEl = document.getElementById('header-content')
      const navElClassName = 'on'
      const burgerEl = document.getElementById('nav-icon')
      const burgerElClassName = 'open'

      this.toggleClass(navEl, navElClassName)
      this.toggleClass(burgerEl, burgerElClassName)
    },
    toggleClass(el, className) {
      if (!el || !el.classList) { return }
      if (el.classList.contains(className)) {
        el.classList.remove(className)
      } else {
        el.classList.add(className)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/nav-icon.scss';
$bg: #2a2b30;

#header-content {
  font-family: 'Droid Sans'
}
.header-main {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: $sidebarWidth;
  background-color: $bg;
  overflow: auto;
  overflow-x: hidden;
  text-align: center;
  z-index: 2;
  border-right: 1px solid #202226;

  .header-name {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    font-size: 20px;
    padding: 10px 0;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    z-index: 1;
    background-color: $main-color;
    margin: 0;
  }
  nav.nav-menu ul li {
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 1px solid #202226;
    text-align: left;
    a {
      display: block;
      line-height: 60px;
      padding-left: 40px;
      position: relative;
      color: #B8B8B8;
      display: -webkit-box;

      &.active {
        color: white;
        text-decoration: underline;
      }
      span.nav-menu-icon {
        display: inline-block;
        font-size: 20px;
        margin-right: 10px;
        vertical-align: top;
      }
    }
  }
  footer.nav-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;

      &> .copy {
        font-size: 12px;
        color: #B8B8B8;
      }
  }
  .simplebar-scroll-content {
      overflow-x: hidden;
      min-width: 100%;
      max-height: inherit;
      box-sizing: content-box;
      .simplebar-content {
          overflow-y: hidden;
          box-sizing: border-box;
          min-height: 100%;
      }
  }
}

header .header-mobile {
  position: fixed;
  top: 0;
  left: 0;
  height: $header-mobile-height;
  width: 100%;
  background-color: $bg;
  z-index: 1;
  display: none;
  -webkit-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;

  .header-toggle {
      cursor: pointer;
      width: 50px;
      height: 100%;
      border-left: 1px solid #3b3c43;
      float: right;
  }
  h2 {
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      color: #fff;
      font-size: 24px;
      line-height: 50px;
      white-space: nowrap;
  }
}

@media screen and (max-width: 767px) {
    header .header-mobile {
      display: block;
      -webkit-transition: all .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
    }
    header #header-content.on .header-main {
      left: 0px;
    }
    header .header-main {
      left: -$sidebarWidth;
      -webkit-transition: all .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
    }
}
</style>
