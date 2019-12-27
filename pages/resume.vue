<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'My Resume', icon: 'lnr-license' }" />
      <section class="text-center">
        <h2>EXPERIENCE</h2>
        <ul class="experience">
          <!--Experience Item-->
          <li>
            <span class="line-left" />
            <article>
              <h4>Front End Developer</h4>
              <h5>Wind Hellas</h5>
              <p class="info">
                Dolor id atque accusantium ut impedit odit provident soluta voluptatem Veritatis ipsam neque mollitia vero suscipit a laborum doloremque. Ipsa!
              </p>
            </article>
            <span class="year">
              <span class="to">now</span>
              <span class="from">Jan. 2020</span>
            </span>
          </li>

          <!--Experience Item-->
          <li>
            <span class="line-left" />
            <article>
              <h4>Front End Developer</h4>
              <h5>MPASS Ltd.</h5>
              <p class="info">
                Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima
              </p>
            </article>
            <span class="year">
              <span class="to">Dec. 2019</span>
              <span class="from">Oct. 2016</span>
            </span>
          </li>

          <!--Experience Item-->
          <li>
            <span class="line-left" />
            <article>
              <h4>Android Developer</h4>
              <h5>Cosmote / OTE</h5>
              <p class="info">
                Thesis on the subject: Indoor Navigation through Beacons Bluetooth Low
                Energy (BLE) technology. Additionally, an app has been implemented and for
                people without the sense of vision.
              </p>
            </article>
            <span class="year">
              <span class="to">Mar. 2016</span>
              <span class="from">Oct. 2015</span>
            </span>
          </li>
        </ul>
      </section>

      <section class="text-center mt-4">
        <h2>EDUCATION</h2>
        <ul class="experience">
          <!--Experience Item-->
          <li>
            <span class="line-left" />
            <article>
              <h4>Computer Science degree</h4>
              <h5>Athens University of Economics and Busines (AUEB)</h5>
              <p class="info">
                Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima
              </p>
            </article>
            <span class="year">
              <span class="to">2016</span>
              <span class="from">2010</span>
            </span>
          </li>
        </ul>
      </section>
    </b-container>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  name: 'AboutPage',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
h2 {
    padding-left: 55px;
}
ul.experience {
    font-family: "Droid Sans";
    margin: 20px 0 50px;
    list-style: none;
    position: relative;
    padding: 0 0 0 50px;
    width: 100%;
    &> li {
        position: relative;
        margin-left: 10px;
        padding: 20px;
        -webkit-transition: all .5s ease-in-out;
        -o-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;

        article {
            h4 {
                font-family: "Droid Sans Bold";
                font-size: 18px;
                font-weight: 700;
                letter-spacing: .5px;
                line-height: 26px;
                margin: 0;
                text-transform: uppercase;
            }
            h5 {
                margin: 5px 0;
                font-size: 12px;
                text-transform: uppercase;
                font-family: "Droid Sans Bold";
                color: $main-color;
            }
        }
        .year {
            height: 100%;
            left: -10px;
            top: 0;
            position: absolute;
            span {
                font-size: 16px;
                position: absolute;
                -webkit-transform: translateX(-140%);
                -ms-transform: translateX(-140%);
                transform: translateX(-140%);
                color: #222;
                &.to {
                  top: -18px;
                }
                &.from {
                  bottom: -18px;
                }
            }
        }
        &:not(:first-child) {
            margin-top: 60px;
        }
        .line-left {
            width: 2px;
            height: 100%;
            background-color: $main-color;
            left: -10px;
            top: 0;
            position: absolute;
            &:before {
                content: "";
                width: 10px;
                height: 10px;
                -webkit-border-radius: 50%;
                border-radius: 50%;
                border: 2px solid #555;
                position: absolute;
                left: -4px;
                top: -10px;
                border-color: $main-color;
            }
            &:after {
                content: "";
                width: 10px;
                height: 10px;
                -webkit-border-radius: 50%;
                border-radius: 50%;
                border: 2px solid #555;
                position: absolute;
                left: -4px;
                top: 100%;
                border-color: $main-color;
            }
        }
    }
}
</style>
