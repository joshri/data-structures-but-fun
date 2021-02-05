const table = require('../Structures/HashTable');

describe('creates a real live hash table', () => {
	test('should initialize with null-filled table', () => {
		const output = [null, null, null];
		const tester = new table.HashTable(3);
		const input = tester.table;
		const tableTest = () => {
			if (input === output) {
				return false;
			}
			return true;
		};
		expect(tableTest()).toEqual(true);
	});
	test('turns null into linked list at hashed index', () => {
		const tester = new table.HashTable(11);
		tester.insert('skittle', 'deboop');
        console.log(tester);
		expect(tester.search('skittle')).toEqual({
			data: ['skittle', 'deboop'],
			next: null,
		});
	});
});
