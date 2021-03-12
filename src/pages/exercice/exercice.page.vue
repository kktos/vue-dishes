<template>
  <q-page class="q-pa-lg">
    <div class="row q-gutter-lg">
      <dish v-for="dish in dishes" :key="dish.id" :dish="dish" />

      <add-button @click="isDishFormVisible = true" />

      <q-dialog v-model="isDishFormVisible">
        <dish-form action="add" @close="isDishFormVisible= false"/>
      </q-dialog>
    </div>
  </q-page>
</template>

<script src="./exercice.page.js" />
<style scoped src="./exercice.page.css" />
