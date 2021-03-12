
export default function () {
	return {
		get dishes() {
			return JSON.parse(localStorage.getItem('dishes'));
		},
		set dishes(value) {
			localStorage.setItem('dishes', JSON.stringify(value));
		}
	}
}
