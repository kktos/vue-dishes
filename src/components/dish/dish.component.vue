<template>
  <q-card class="card">
	<q-img :src="dish.image ? dish.image : '/image-placeholder.png'" basic contain>
	  <div class="absolute-bottom text-h6">
		{{ dish.nom }}
	  </div>
	</q-img>

	<q-card-section>
	  <q-rating
		:value="dish.note"
		size="2em"
		color="orange"
		readonly
		class="q-mt-sm"
	  />
	</q-card-section>

	<q-card-section v-if="dish.description.length" class="q-pt-none">
	  {{ dish.description }}
	</q-card-section>
	<q-card-section v-else class="q-pt-none text-italic">
	  Aucune description fournie
	</q-card-section>

	<q-card-actions class="absolute-bottom" align="right">
	  <q-btn @click="isDishFormVisible = true" icon="edit" color="blue" flat
		>Modifier</q-btn
	  >
	  <q-btn @click="confirmDelete" icon="delete" color="red" flat>Supprimer</q-btn>
	</q-card-actions>

	<q-dialog v-model="isDishFormVisible">
	  <dish-form v-bind:dish="dish" action="modifier" @close="isDishFormVisible= false"/>
	</q-dialog>

	<q-dialog ref="deleteDlg" persistent>
	  <q-card>
		<q-card-section class="row items-center">
		  <div class="text-h6">Certain de supprimer le plat "{{ dish.nom}}" ?</div>
		</q-card-section>

		<q-card-actions align="right">
		  <q-btn flat label="Non" color="primary" v-close-popup />
		  <q-btn flat label="SUPPRIMER" color="primary" @click="deleteDish" />
		</q-card-actions>
	  </q-card>
	</q-dialog>

  </q-card>
</template>

<script src="./dish.component.js" />
<style scoped src="./dish.component.css" />
