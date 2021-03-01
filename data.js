import bcrypt from 'bcrypt';

const data = {
	users: [
		{
			name: 'Victor',
			email: 'admin@example.com',
			password: bcrypt.hashSync('0123', 8),
			isAdmin: true
		},
		{
			name: 'Bobby',
			email: 'user@example.com',
			password: bcrypt.hashSync('0123', 8),
			isAdmin: false
		}
	],
	Products: [
		{
			// _id: '1',
			name: 'One Star Dragon Ball',
			category: 'Dragon Ball',
			image: './assets/images/p1.png',
			price: 10000,
			countInStock: 40,
			brand: 'Kami',
			rating: 4.5,
			numReviews: 10,
			description:
				'This is the one star dragonaball! This is the one star dragonaball! This device will grant you a wish upon gathering the other six in the set. Happy Wish hunting!'
		},
		{
			// _id: '2',
			name: 'Two Star Dragon Ball',
			category: 'Dragon Ball',
			image: './assets/images/p2.png',
			price: 10000,
			countInStock: 35,
			brand: 'Kami',
			rating: 5,
			numReviews: 16,
			description:
				'This is the two star dragonaball! This device will grant you a wish upon gathering the other six in the set. Happy Wish hunting!'
		},
		{
			// _id: '3',
			name: 'Three Star Dragon Ball',
			category: 'Dragon Ball',
			image: './assets/images/p3.png',
			price: 10000,
			countInStock: 21,
			brand: 'Kami',
			rating: 4.0,
			numReviews: 11,
			description:
				'This is the three star dragonaball! This device will grant you a wish upon gathering the other six in the set. Happy Wish hunting!'
		},
		{
			// _id: '4',
			name: 'Four Star Dragon Ball',
			category: 'Dragon Ball',
			image: './assets/images/p4.png',
			price: 10000,
			countInStock: 10,
			brand: 'Kami',
			rating: 4.6,
			numReviews: 10,
			description:
				'This is the four star dragonaball! This device will grant you a wish upon gathering the other six in the set. Happy Wish hunting!'
		},
			{
				// _id: '5',
				name: 'Five Star Dragon Ball',
				category: 'Dragon Ball',
				image: './assets/images/p5.png',
				price: 10000,
				countInStock: 10,
				brand: 'Kami',
				rating: 5.0,
				numReviews: 12,
				description:
					'This is the five star dragonaball! This device will grant you a wish upon gathering the other six in the set. Happy Wish hunting!'
			},
			{
				// _id: '6',
				name: 'Six Star Dragon Ball',
				category: 'Dragon Ball',
				image: './assets/images/p6.png',
				price: 10000,
				countInStock: 0,
				brand: 'Kami',
				rating: 4.3,
				numReviews: 17,
				description:
					'This is the six star dragonaball! This device will grant you a wish upon gathering the other six in the set. Happy Wish hunting!'
			},
			{
				// _id: '7',
				name: 'Seven Star Dragon Ball',
				category: 'Dragon Ball',
				image: './assets/images/p7.png',
				price: 10000,
				countInStock: 10,
				brand: 'Kami',
				rating: 4.5,
				numReviews: 13,
				description:
					'This is the seven star dragonaball! This device will grant you a wish upon gathering the other six in the set. Happy Wish hunting!'
			},
			{
				// _id: '8',
				name: 'Dragon Ball Set',
				category: 'Sets',
				image: './assets/images/p8.png',
				price: 70000,
				countInStock: 15,
				brand: 'Kami',
				rating: 5.0,
				numReviews: 14,
				description:
					'All seven dragon balls in one set. When all seven dragon balls touch each other something magical happens! Happy Wish Hunting!'
			}
	]
};
export default data;
