<template>
  <div>
    <b-container>
      <page-header :param="{ title: 'My Resume', icon: 'lnr-license' }" />

      <resume-list title="EXPERIENCE" :list="experience" />

      <resume-list class="mt-4" title="EDUCATION" :list="education" />

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
          to: 'Dec. 2019'
        },
        {
          title: 'Android Developer',
          location: 'Cosmote / OTE Hellas',
          descr: `Thesis on the subject: Indoor Navigation through Beacons Bluetooth Low
          Energy (BLE) technology. Additionally, an app has been implemented and for
          people without the sense of vision.`,
          from: 'Oct. 2015',
          to: 'Mar. 2016'
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
        }
      ]
    }
  }
}
</script>
