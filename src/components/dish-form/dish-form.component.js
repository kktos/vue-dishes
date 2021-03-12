export default {
	props: [
		'action',
		'dish'
	],


	data() {
		return {
			workingDish: null
		};
	},

	methods: {
		submitDish() {
			this.$refs.dishName.validate();
			this.$refs.dishDesc.validate();
			if(!this.$refs.dishName.hasError && !this.$refs.dishDesc.hasError) {
				this.$store.dispatch("tasks/updateDish", this.workingDish);
				this.$emit('close');
			}
		},

		createDish() {
			return {
				id: '',
				nom: '',
				description: '',
				image: '',
				note: 0
			};
		}
	},

	computed: {
		currentDish() {
			this.workingDish=	this.action =='add' ?
									this.createDish()
									:
									this.dish;
			return this.workingDish;
		}
	}
};
