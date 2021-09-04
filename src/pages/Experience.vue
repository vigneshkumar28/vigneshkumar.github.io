<template>
  <q-page class="flex exp-page q-py-md q-px-xl">
    <q-list :dark="$q.dark.isActive" class="full-width q-mt-xl">
      <q-expansion-item header-class="list-item" :class="$q.dark.isActive ? 'bg-primary' : ''">
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="img:statics/icons/newton.png" size="100px" :color="$q.dark.isActive ? 'primary' : ''" text-color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-warning text-bold text-h5">Newton School</q-item-label>
            <q-item-label class="text-bold text-accent text-h6">Placement Training</q-item-label>
            <q-item-label caption class="text-bold">Jan 2021 to present</q-item-label>
          </q-item-section>
        </template>
        <q-separator :dark="$q.dark.isActive" />
        <q-card>
          <q-card-section :class="$q.dark.isActive ? 'bg-primary' : 'text-primary'">
            <ul>
              <li> Full stack developer live Training</li>
            </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Experience'
}
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding-left: 15px;
  li {
    font-weight: bold;
    padding: 20px 0;
    border-bottom: 1px solid #666666;
    list-style-type: circle;
  }
  li:last-of-type {
    border-bottom: none;
  }
}
@media only screen and (max-width: 768px) {
  /deep/ .list-item {
    flex-direction: column;
    padding: 10px;
    .q-item__section--side:not(.q-item__section--avatar) {
      padding: 0;
      margin-top: 10px;
      align-items: center;
    }
    .q-item__section--avatar {
      margin-bottom: 10px;
    }
  }
  /deep/ .q-item__label--header {
    padding: 0;
  }
}
</style>
