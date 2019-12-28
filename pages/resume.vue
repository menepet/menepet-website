<template>
  <div>
    <b-container class="text-center">
      <page-header :param="{ title: 'My Resume', icon: 'lnr-license' }" />

      <resume-list title="EXPERIENCE" :list="experience" />

      <resume-list class="mt-4" title="EDUCATION" :list="education" />

      <b-button pill variant="outline-info" to="/contact" class="my-4">
        Contact me if you want :)
      </b-button>
    </b-container>
  </div>
</template>

<script>
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
          location: 'Wind Hellas',
          descr: `SDolor id atque accusantium ut impedit odit provident
          soluta voluptatem Veritatis ipsam neque mollitia vero suscipit a laborum doloremque. Ipsa!`,
          from: 'Jan. 2020',
          to: 'now'
        },
        {
          title: 'Front End Developer',
          location: 'MPASS Ltd.',
          descr: `SDolor id atque accusantium ut impedit odit provident
          soluta voluptatem Veritatis ipsam neque mollitia vero suscipit a laborum doloremque. Ipsa!`,
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
          location: 'Cosmote / OTE Hellas',
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
          descr: `Sit cupiditate praesentium ex esse nulla Facere fuga 
          perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima`,
          from: '2010',
          to: '2016'
        },
        {
          title: 'School student',
          location: 'Platon School',
          descr: `Sit cupiditate praesentium ex esse nulla Facere fuga 
          perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima`,
          from: '',
          to: '2010'
        }
      ]
    }
  },
  head() {
    return {
      title: 'My Resume | Petousis Menelaos'
    }
  }
}
</script>
