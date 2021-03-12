export default {
	props: ['dish'],

	data() {
		return {
			isDishFormVisible: false
		};
	},

	methods: {
		confirmDelete() {
			this.$refs.deleteDlg.show();
		},
		deleteDish() {
			this.$store.dispatch('tasks/deleteDish', this.dish.id);
			// this.$refs.deleteDlg.hide();
		}
	},

	components: {
		'dish-form': require('src/components/dish-form/dish-form.component.vue').default
	}
};
