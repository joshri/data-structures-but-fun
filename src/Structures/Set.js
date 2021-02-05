class Set {
	constructor(list = []) {
		// Create a `values` property and set it equal to an empty array
		// Accept a `list` parameter (default to an empty array). Loop
		// through the array and insert each item into the set
		this.values = [];
		list.filter((item) => {
			if (this.values.includes(item)) {
				return;
			}
			this.values.push(item);
		});
	}

	length() {
		// return the length of the values property
		return this.values.length;
	}

	insert(val) {
		// if `val` is not in the `values` property, then push it in
		if (this.values.includes(val)) {
			return false;
		}
		return this.values.push(val);
	}

	remove(val) {
		// if `val` is in the `values` property, then remove it
		this.values = this.values.filter((item) => item !== val);
	}

	has(val) {
		// return true if `val` is in `values`, false if it isn't
		if (this.values.includes(val)) {
			return true;
		}
		return false;
	}

	union(set) {
		// return a new Set with the values from this Set and the
		// Set passed in as a parameter
		let newSet = new Set(this.values);
		set.values.forEach((item) => newSet.insert(item));
		return newSet;
	}

	intersect(set) {
		// return a new Set of the values that appear in both this
		// Set and the Set passed in
		return new Set(
			this.values.filter((item) => {
				if (set.values.includes(item)) {
					return item;
				}
			})
		);
	}

	difference(set) {
		// return a new Set of the values that only appear in one of
		// the two sets
		let array = [];
		this.values.forEach((item) => {
			if (!set.values.includes(item)) {
				array.push(item);
			}
		});
		set.values.forEach((item) => {
			if (!this.values.includes(item)) {
				array.push(item);
			}
		});
		return new Set(array);
	}
}
