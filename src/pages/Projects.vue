<template>
  <q-page class="flex projects-page">
    <div class="q-pa-xl row items-start justify-md-between justify-center q-gutter-md">
      <q-card class="project-card" :class="$q.dark.isActive ? 'bg-primary' : ''" :dark="false" v-for="project in projects" :key="project.name" flat bordered>
        <q-img
          width="298px"
          height="160px"
          :src="project.img"
        />
        <q-card-section>
          <div class="text-overline text-warning">{{project.date}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs text-accent">{{project.name}}</div>
          <div class="text-caption text-grey">{{project.desc}}</div>
        </q-card-section>
        <q-card-actions class="absolute-bottom">
          <q-btn flat :color="$q.dark.isActive ? 'white' : 'black'" type="a" :href="project.link" target="_blank" icon="link" label="View Project" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          name: 'IoT based intelligent Gas Leakage Detection and Leak Point Location system',
          date: 'Feb 2020',
          desc: 'Tools used: Arduino IDE, IBM Watson IoT Platform, Node-Red, IBM IoT sensor.'
        },
        {
          name: 'Fake currency identification using MATLAB and Image processing techniques',
          date: 'March 2020',
          desc: 'Tools used: MATLAB and Watson AutoAI.'
        },
        {
          name: 'Future Rate of Bitcoin Prediciton using Machine Learning Model',
          date: 'Present',
          desc: 'Tools used: Google Colabs'
        },
        {
          name: 'Github Repository (Rest of my projects)',
          date: 'Jun 2013 - Present',
          desc: 'Collection of all the rest of my projects that live on github',
          link: 'https://github.com/vigneshkumar28'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.project-card {
  min-height: 400px;
  max-width: 300px;
  position: relative;
}
</style>
