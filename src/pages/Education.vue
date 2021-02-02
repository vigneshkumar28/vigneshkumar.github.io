<template>
  <q-page class="flex edu-page q-py-md q-px-xl">
    <q-list class="full-width">
      <q-item-label header class="text-h3 text-warning text-center q-my-lg">Education</q-item-label>
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/hicet.png" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Anna University</q-item-label>
          <q-item-label class="text-secondary text-h6">Bachelor of Engineering in Electronics and Communication Engineering (B.E ECE)</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>Hindusthan College of Engineering and Technology</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption> Merit Scholarship winner</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>Class Topper ( Rank 1 ) and Department Topper ( Rank 2 )</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-accent" caption>2017 - 2021</q-item-label>
          <q-item-label class="text-warning" caption>8.98/10 CGPA</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>Coimbatore</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/angels.jpg" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Little Angels Higher Secondary School</q-item-label>
          <q-item-label class="text-secondary text-h6">Junior College &amp; High School (Science Stream)</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>Computer Science Topper</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>[99% Computer Science, 93.5% Math, 90% Physics]</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>Class Topper ( Rank 1 ), Full Attendance Award , Computer Science Topper Award</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-accent" caption>2015 - 2017</q-item-label>
          <q-item-label class="text-warning" caption>90.5%</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>Namakkal</q-item-label>
        </q-item-section>
      </q-item>
      <q-item-label header class="text-h3 text-warning text-center q-my-lg">Certifications</q-item-label>
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/ucsandiego.png" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Object Oriented Programming in Java Specialization</q-item-label>
          <q-item-label class="text-secondary text-h6">University of California San Diego</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>HHFAK6JMNMSS</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Jun 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/duke.png" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Java Programming</q-item-label>
          <q-item-label class="text-secondary text-h6">Duke University</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>3T5GFM7HZLQC</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>April 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/udemy.jpeg" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Beginner to Expert for Web Development </q-item-label>
          <q-item-label class="text-secondary text-h6">Udemy</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>UC-0ZPTPM0S</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Nov 2019</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/udemy.jpeg" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Practice Java by Building Projects</q-item-label>
          <q-item-label class="text-secondary text-h6">Udemy</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>UC-09cd6f30-a494-4ddc-b1d8-54c2b166c4fb</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Jun 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/ibm.png" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">IBM Certified Data Scientist </q-item-label>
          <q-item-label class="text-secondary text-h6">IBM</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>4173</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2019</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/matlab.jpg" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Machine Learning OnRamp</q-item-label>
          <q-item-label class="text-secondary text-h6">MathWorks</q-item-label>
          <q-item-label :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>MathWorks Matlab</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>Jun 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon color="primary" size="100px" name="img:statics/icons/cambridge.png" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Business English from Cambridge</q-item-label>
          <q-item-label class="text-secondary text-h6">Cambridge English Language Assessment</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2017 - 2018</q-item-label>
        </q-item-section>
      </q-item>
      <template v-for="item in linkedInCerts">
        <q-separator :key="item.name + '_sep'" dark spaced inset />
        <q-item :key="item.name" class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
          <q-item-section avatar>
            <q-icon color="primary" size="100px" :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-accent text-h4">{{item.name}}</q-item-label>
            <q-item-label class="text-secondary text-h6">{{item.authority}}</q-item-label>
            <q-item-label v-if="item.desc" :class="$q.dark.isActive ? 'text-white' : 'text-primary'" caption>{{item.desc}}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label class="text-warning" caption>{{item.issued}}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <q-item-label header class="text-h3 text-warning text-center q-my-lg">Honors &amp; Awards</q-item-label>
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon :color="$q.dark.isActive ? 'white' : 'primary'" size="100px" name="stars" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Internation Research paper publication in IoT with Unique content award</q-item-label>
          <q-item-label class="text-secondary text-h6">International Research Journal of Modernization in Engineering Technology and Science(IRJMETS)</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>May 2020</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon :color="$q.dark.isActive ? 'white' : 'primary'" size="100px" name="stars" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Merit Scholarship</q-item-label>
          <q-item-label class="text-secondary text-h6">Hindusthan College of Engineering and Technology</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2017</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon :color="$q.dark.isActive ? 'white' : 'primary'" size="100px" name="stars" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Best chatbot creation for real time use award</q-item-label>
          <q-item-label class="text-secondary text-h6">National Level Event, TamilNadu, India</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2019</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator dark spaced inset />
      <q-item class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <q-item-section avatar>
          <q-icon :color="$q.dark.isActive ? 'white' : 'primary'" size="100px" name="stars" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-accent text-h4">Computer Science Topper Award</q-item-label>
          <q-item-label class="text-secondary text-h6">Little Angles Higher Secondary School</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label class="text-warning" caption>2016</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Education',
  data () {
    return {
      linkedInCerts: [
        {
          name: 'Object Oriented Programming in Java Specialization',
          issued: 'Jun 2020',
          icon: 'img:statics/icons/ucsandiego.png',
          authority: 'University of California San Diego',
          desc: 'HHFAK6JMNMSS'
        },
        {
          name: ' Java Programming',
          issued: 'April 2020',
          icon: 'img:statics/icons/duke.png',
          authority: 'Duke University ',
          desc: '3T5GFM7HZLQC'
        },
        {
          name: 'Beginner to Expert for Web Development',
          issued: 'Nov 2019',
          icon: 'img:statics/icons/udemy.jpeg',
          authority: 'Udemy',
          desc: 'UC-0ZPTPM0S'
        },
        {
          name: 'Public speaking',
          issued: 'Nov 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Object Oriented Programming OOPS',
          issued: 'Nov 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        },
        {
          name: 'Self Motivation',
          issued: 'Dec 2020',
          icon: 'img:statics/icons/linkedin.png',
          authority: 'LinkedIn'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .list-item {
    flex-direction: column;
    padding: 10px;
    .q-item__section--side {
      padding: 0;
      margin-top: 10px;
      align-items: flex-start;
    }
    .q-item__section--avatar {
      margin-bottom: 10px;
    }
  }
  .q-item__label--header {
    padding: 0;
  }
}
</style>
