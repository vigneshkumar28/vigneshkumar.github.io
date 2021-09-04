<template>
  <q-page class="flex content-center justify-center abt-page q-py-md q-px-xl">
    <div class="content text-center" :class="$q.dark.isActive ? 'bg-primary' : ''">
      <h4 class="full-width text-accent text-bold q-mt-sm q-mb-lg">About Vigneshkumar</h4>
      Vigneshkumar R is a <i>fast learner, motivator, good and very friendly</i> person.
      <span v-if="is_personal">He is also a <i>good football player.</i> He loves to <i>make people happy and being the reason for their smile (as described by his friends).</i></span>
      <span v-if="is_personal">
  
      &#9673; <i class="text-left" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">Always be a simling. To Get Postive surrondings.</i><br>
     </span>
      <span v-else>
        <br>
        <br>
        <div class="text-left">Summary(in his own words)</div>
        <br>
        <ul class="text-left tech-list" :class="$q.dark.isActive ? 'text-white' : 'text-primary'">
          <li> Looking for jobs. Ready to start work immediately.🙋‍♂️👋👋👋 </li>
          <li> Graduation: April 2021 (Available for internship and full time role: From January 2021). All semester exams are completed☀️ </li>
          <li> Interested to start work in any domain and really interested to learn new technologies.😊😊😊 </li>
          <li> Completed 200+ courses🎯 in Object Oriented Programming (OOPS), Data Structures and Algorithms(DSA), Internet Of Things(IoT), Machine Learning, Artificial Intelligence, Data Science, Chat Bot creation and Certified by University of Washington, Stanford University, University of Michigan, University of California, Google, IBM, Udemy, Coursera, Lynda, LinkedIn Learning Networks, Cognitive class.</li>
          <li> Good practical learner, passion to solving real world problems, helping others, techie updated.</li>
          <li> Some experience in HTML, CSS, JavaScript ( js ), Web Hosting and Deploying.</li>
          <li> Completed projects in IoT, Digital Image Processing, Full Stack Web Development, Embedded system, Artificial Intelligence and Data science. </li>

          <li> HackerRank (12,000+ points) : https://www.hackerrank.com/VIGNESHKUMAR_R </li>

          <li> GeeksForGeeks ( GFG ) : https://auth.geeksforgeeks.org/user/vigneshkumarponnamaravathy/profile </li>

          <li>  Feel free to contact me : vigneshkumarponnamaravathy@gmail.com (email id)📩📧 </li>

          <li>  Salesforce profile👨‍🎓: https://trailblazer.me/id/vigneshkumar </li>

          <li> GitHub profile👨‍🎓: https://github.com/vigneshkumar28 </li>

          <li> LinkedIn profile👨‍🎓: https://www.linkedin.com/in/vigneshkumar-r-870179179 </li>

          <li> Coursera profile👨‍🎓: https://www.coursera.org/user/95f5d92fc6da1da4e691f6897b21e7a2 </li>
        
        </ul>
      </span>
    </div>
    <div class="q-my-md full-width flex justify-center">
      <div class="text-warning" style="padding-top:14.5px">Professional</div>
      <q-toggle class="text-warning" :dark="$q.dark.isActive" color="secondary" size="lg" label="Personal" v-model="is_personal" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      is_personal: false
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  border-radius: 10px;
  padding: 15px;
  color: $warning;
  font-weight: bold;
  font-size: 14px;
  i {
    color: $secondary;
    font-size: 15px;
  }
  .tech-list {
    margin-top: 0;
    padding-left: 15px;
  }
}
</style>
