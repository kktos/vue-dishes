<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Prestashop Exercice
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
		<q-btn dense round icon="refresh" @click="fetchMoreDishes"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>

        <q-item-label header>Menu de navigation</q-item-label>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Exercice</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'MainLayout',
  methods:{
	  fetchMoreDishes() {
		  this.$store.dispatch('tasks/fetchMoreDishes');
	  }
  },
  components: { },
  setup () {
    const leftDrawerOpen = ref(false)

    return { leftDrawerOpen }
  }
})
</script>
