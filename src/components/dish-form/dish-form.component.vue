<template>
	<q-card class="form-card">
		<q-card-section>
		<div class="text-h6 heading">{{ action }} Plat</div>
		<div class="text-caption">id: {{ currentDish.id }}</div>
		</q-card-section>

		<form @submit.prevent="submitDish">

		<q-card-section>
			<div class="row q-mb-md">
				<q-input filled v-model="currentDish.nom" label="Nom *" class="col"
					ref="dishName"
					lazy-rules="ondemand"
					:rules="[
						val => val !== null && val !== '' || 'Champ obligatoire',
						val => val.length <= 20 || 'Maximum 20 caractères'
					]"
					/>
			</div>

			<div class="row q-mb-md">
				<q-input
				filled
				v-model="currentDish.description"
				ref="dishDesc"
				lazy-rules="ondemand"
				:rules="[
					val => val.length <= 135 || 'Maximum 135 caractères'
				]"
				label="Description"
				type="textarea"
				class="col"
				/>
			</div>

			<div class="row q-mb-md">
				<q-input
				filled
				v-model="currentDish.image"
				label="URL de l'image"
				class="col"
				/>
				<q-img
				:src="currentDish.image ? currentDish.image : '/image-placeholder.png'"
				class="q-ml-sm"
				contain
				/>
			</div>

			<div class="q-mb-md">
				<div class="row">
				<p class="q-mb-none">Note:</p>
				</div>
				<div class="row">
				<q-rating v-model="currentDish.note" size="2em" color="orange" />
				</div>
			</div>
		</q-card-section>


		<q-card-actions align="right">
			<q-btn label="Annuler" color="grey" v-close-popup />
			<q-btn label="Sauver" color="primary" type="submit" />
		</q-card-actions>

  		</form>

	</q-card>

</template>

<script src="./dish-form.component.js" />
<style scoped src="./dish-form.component.css" />
