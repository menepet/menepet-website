<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'My Resume', icon: 'lnr-license' }" />
      <span class="icon"><i class="lnr lnr-printer" @click="print" /></span>
      <span class="icon">
        <a href="/docs/Petousis_Menelaos_CV.pdf" target="_blank" class="lnr lnr-download" download />
      </span>

      <resume-list title="EXPERIENCE" :list="experience" />

      <resume-list class="mt-4" title="EDUCATION" :list="education" />

      <div class="w-100 text-center">
        <b-button pill variant="outline-info" to="/contact" class="my-4">
          Send me a message in a bottle
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus.js'
import PageHeader from '~/components/PageHeader'
import ResumeList from '~/components/ResumeList'

export default {
  name: 'AboutPage',
  components: {
    PageHeader,
    ResumeList
  },
  data() {
    return {
      experience: [
        {
          title: 'Front End Developer',
          location: 'Wind Hellas, Athens',
          descr: `Working as Front-end Developer & trying new technologies such as PWA, AMP and VueJs.`,
          from: 'Jan. 2020',
          to: 'now',
          projects: [
            {
              title: 'Redesigned WIND Hellas Contact Page',
              descr: `New Contact page for all customers who want support or some contact info with the provider.`,
              technology: 'VanillaJs',
              link: 'https://www.wind.gr/gr/epikoinonia'
            }, {
              title: 'WIND Support',
              descr: `PWA & AMP implementation for WIND Support`,
              technology: 'PWA / AMP',
              link: 'https://www.wind.gr/support/idiotes/'
            }
          ]
        },
        {
          title: 'Front End Developer',
          location: 'MPASS Ltd, Athens',
          descr: `Web Developer with emphasis on the Front-end. At first I was doing fullstack work,
            but along the way I used different Front-end tools like VueJs/Nuxt, EmberJs, MeteorJs,
            GoJs, BackBoneJS, Apache Cordova and more. Check my project list below for more ...`,
          from: 'Oct. 2016',
          to: 'Dec. 2019',
          projects: [
            {
              title: 'Athens International Airport Custom E-shop Client & Admin Panel',
              descr: `Online shop for customers (shops) of Athens Airport, in order to purchase
                services and offers. Management of the data by the respective management,
                based on Vue Element Admin`,
              customer: 'Athens International Airport',
              technology: 'VueJs',
              link: ''
            },
            {
              title: 'Piraeus Bank Gamification Platform (Excelixi SA)',
              descr: `Platform for learning the characteristics and products of the Piraeus Bank Group
                addressed to employees. Includes User Account creation and a betting system for
                some games, the Group's products and services are updated`,
              customer: 'Piraeus Bank - (Excelixi SA)',
              technology: 'EmberJs',
              link: 'https://www.mpass.gr/services/gamification'
            },
            {
              title: 'Athens International Airport Lucky Lottery Kiosk',
              descr: `Kiosk for redemption receipts from physical shops and the thermal printing coupons
                with new gifts and services at the Athens Airport shops`,
              customer: 'Athens International Airport',
              technology: 'EmberJs',
              link: 'https://www.mpass.gr/projects/your-lucky-bag-rewarding-campaign-athens-international-airport'
            },
            {
              title: 'ERT Official Smart TV App',
              descr: `Front End App with live streaming, VoD, Archives and TV menu implementation`,
              customer: 'ERT',
              technology: 'VueJs',
              link: 'https://www.ert.gr/radiotileorasi/poiotita-zois-radiotileorasi/nea-efarmogi-smart-tv-gia-tin-ert/'
            },
            {
              title: 'Pameodeon Smart TV App',
              descr: `The PameOdeon app is the first VoD streaming service in Greece for Smart TV 2011-2013 platforms.
                It is implemented and supported for Samsung Smart TV offering a complete home entertainment experience,
                by providing viewers with Hollywood and Greek favorite black and white films in high resolution.
                Movies are grouped by several categories such as genre, production country, etc.`,
              customer: 'Pameodeon',
              technology: 'VanillaJs',
              link: 'https://www.samsung.com/gr/discover/tv-audio/pameodeon-video-on-demand/'
            },
            {
              title: 'VTB Russia Bank Live Chat widget integration and Admin Panel',
              descr: `Implement an addon widget for any site, along with the management track,
                which included ready answers, sending emails for actions, and assigning conversations
                by category`,
              customer: 'VTB Group',
              technology: 'MeteorJs',
              link: ''
            },
            {
              title: 'Athens International Airport Information | Passenger kiosk for Athens Airport',
              descr: `Information on flights according to the passenger's boarding pass, shopping stores
                and in-app search information.`,
              customer: 'Athens International Airport',
              technology: 'EmberJs',
              link: ''
            },
            {
              title: 'AB Vassilopoulos Web Mobile Games SPA',
              descr: `Customer participation via Vassilopoulos card in games to increase their points
                and earnings also from the internet browser `,
              customer: 'AB Vassilopoulos',
              technology: 'VueJs',
              link: 'https://www2.ab.gr/games/'
            },
            {
              title: 'Web & Android App for Greek Brewers customers',
              descr: `Information panel for suppliers of EZ about the status of their orders`,
              customer: 'Athenian Brewery',
              technology: 'RequireJs',
              link: ''
            },
            {
              title: 'Truce Game App',
              descr: `Developed for the International Olympic Truce Center, the mobile
                application “Truce Game”, an interactive quiz. Athletes participating at the Nanjing
                Youth Olympics, visited the IOTC booth, interacted with enthusiasm, and learned
                information about the history of the Olympic Truce.`,
              customer: 'IOTC, Samsung',
              technology: 'Android',
              link: 'https://www.mpass.gr/projects/truce-game-app'
            },
            {
              title: 'ExplorIoT Android App',
              descr: `Combined with the Company's BLE Sensors (Lux sensor) for the “ExplotIoT” campaign
                at the Mobile World Congress 2016 International Exhibition in Barcelona`,
              customer: '',
              technology: 'Android',
              link: 'https://www.mpass.gr/content/explorit'
            },
            {
              title: 'Internship for one semester',
              descr: ``,
              customer: '',
              technology: '',
              link: ''
            }
          ]
        },
        {
          title: 'Android Developer',
          location: 'Cosmote / OTE Hellas, Athens',
          descr: `Thesis on the subject: Indoor Navigation through Beacons Bluetooth Low
          Energy (BLE) technology. Additionally, an app has been implemented and for
          people without the sense of vision.`,
          from: 'Oct. 2015',
          to: 'Mar. 2016',
          projects: [
            {
              title: 'Indoor navigation, based on building',
              descr: `Indoor navigation, based on building / floor plan and use of
                 B.L.E. (Bluetooth Low Energy) beacons and the compass of the mobile
                 device to locate / heading the user.`,
              customer: 'Cosmote / OTE',
              technology: 'Android',
              link: ''
            }
          ]
        }
      ],
      education: [
        {
          title: 'Computer Science degree',
          location: 'Athens University of Economics and Busines (AUEB)',
          descr: `Undergraduate student at the Athens University of Economics
            and Business, with a lot of volunteer work in the technical field
            and courses such as: Artificial Intelligence, Compilers, Computer Networking,
            Digital Systems Design, Distributed Systems`,
          from: '2010',
          to: '2016'
        },
        {
          title: 'School student',
          location: 'Platon School',
          descr: `Student at Platon school, in Athens Greece`,
          from: '',
          to: '2010'
        }
      ]
    }
  },
  mounted() {
    window.onafterprint = function() {
      EventBus.$emit('collapseAll')
    }
  },
  beforeDestroy() {
    EventBus.$off()
  },
  methods: {
    print() {
      EventBus.$emit('expandAll')
      setTimeout(() => {
        window.print()
      }, 100)
    }
  },
  head() {
    return {
      title: 'My Resume | Petousis Menelaos',
      meta: [{
        name: 'og:title',
        content: 'My Resume | Petousis Menelaos'
      }, {
        vmid: 'description',
        name: 'description',
        content: 'Petousis Menelaos Resume and professional experience'
      }, {
        name: 'og:description',
        content: 'Petousis Menelaos Resume and professional experience'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon i.lnr, .icon a {
    color: $main-color;
    font-size: 22px;
    cursor: pointer;
    margin-right: 15px;
  }
</style>
