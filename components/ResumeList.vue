<template>
  <section class="text-center">
    <h2>{{ title }}</h2>
    <ul class="experience">

      <li v-for="(item, index) in list" :key="index">
        <span class="line-left" />
        <article>
          <h4>{{ item.title }}</h4>
          <h5>{{ item.location }}</h5>
          <p class="info">{{ item.descr }}</p>
        </article>

        <span class="year">
          <span class="to">{{ item.to }}</span>
          <span class="from">{{ item.from }}</span>
        </span>

        <accordion-items
          v-if="item.projects && item.projects.length > 0"
          :projects="item.projects"
        />

      </li>

    </ul>
  </section>
</template>

<script>
import AccordionItems from '~/components/AccordionItems'

export default {
  name: 'ResumeList',
  components: {
    AccordionItems
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
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
            padding: 0 7%;
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
                font-size: 15px;
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
@media screen and (max-width: 767px) {
    ul.experience > li article {
        padding: 0;
    }
}
</style>
