import { mapGetters } from 'vuex';

export default {

	data() {
	  return {
		isDishFormVisible: false
	  };
	},

	created() {
		// load some when cache is empty
		if(!this.dishes || !this.dishes.length)
			this.$store.dispatch('tasks/fetchMoreDishes');
	},

	computed: mapGetters({dishes: 'tasks/dishes'}),

	components: {
	  "dish": require("src/components/dish/dish.component.vue").default,
	  "add-button": require("src/components/add-button/add-button.component.vue").default,
	  "dish-form": require("src/components/dish-form/dish-form.component.vue").default
	}

  };
