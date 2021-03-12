import { uid } from 'quasar';

export function deleteDish(state, id) {
	state.dishes= state.dishes.filter(d=>d.id != id);
}

export function updateDish(state, dish) {
	if(dish.id && dish.id!='') {
		const idx= state.dishes.findIndex(d => d.id == dish.id);
		if(idx>=0) {
			let dishes= [...state.dishes];
			dishes.splice(idx, 1, dish);
			state.dishes= [...dishes];
		}

	} else {
		dish.id= uid();
		state.dishes= [...state.dishes, dish];
	}
}

export function addDishes(state, dishes) {
	if(!Array.isArray(state.dishes))
		state.dishes= [];
	state.dishes= [...state.dishes, ...dishes];
}
