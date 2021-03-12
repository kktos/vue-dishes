import axios from 'axios';

const resource_uri = "https://www.themealdb.com/api/json/v1/1/random.php";

export function deleteDish(context, id) {
	context.commit('deleteDish', id);
}

export function updateDish(context, dish) {
	context.commit('updateDish', dish);
}

export async function fetchMoreDishes(context) {
	const dishCount= Math.floor(Math.random() * 5)+1;
	let newDishes= [];
	for(let idx= 0; idx < dishCount; idx++) {
		let response = await axios.get(resource_uri);
		if(response.data && response.data.meals) {
			const meal= response.data.meals[0];
			const dishes= context.state.dishes;

			// check for duplicates
			if(dishes && dishes.findIndex(d=>d.id == meal.idMeal) != -1)
				continue;

			const dish= {
				id: meal.idMeal,
				image: meal.strMealThumb,
				nom: meal.strMeal,
				description: meal.strInstructions ? meal.strInstructions.substr(1,135) : '',
				note: 0
			};
			newDishes.push(dish);
		}
	}

	context.commit('addDishes', newDishes);
}
