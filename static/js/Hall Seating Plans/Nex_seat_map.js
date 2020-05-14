let nex_hall_1={
		map: [  //Seating chart
		    'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaD[A_H14,AH14]____________D[A_H3, AH3]aa',

		],

		seats: {
		a: {
			classes: 'normal',
			price  : 10
		},
		D: {
			classes: 'handicap',
			price  : 7
		}
	},
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return row+column;//Text displayed inside checkbox
			},
			rows: ['J','I','H','G','F','E','D','C','B','A'],
			columns: [16,15,14,13,12,11,10,9,'a1', 'a2',8,7,6,5,4,3,2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};

let nex_hall_2={
	map: [  //Seating chart
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaD[A_H13,AH13]___________D[A_H3, AH3]aa',

	],

	seats: {
	a: {
		classes: 'normal',
		price  : 10
	},
	D: {
		classes: 'handicap',
		price  : 7
	}
},
	naming : {
		top : false,
		getLabel : function (character, row, column) {
			return row+column;//Text displayed inside checkbox
		},
		rows: ['J','I','H','G','F','E','D','C','B','A'],
		columns: [16,15,14,13,12,11,10,9,'a1', 'a2',8,7,6,5,4,3,2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};

let nex_hall_3={
	map: [  //Seating chart
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaD[A_H14,AH14]____________D[A_H3, AH3]aa',

	],

	seats: {
	a: {
		classes: 'normal',
		price  : 10
	},
	D: {
		classes: 'handicap',
		price  : 7
	}
},
	naming : {
		top : false,
		getLabel : function (character, row, column) {
			return row+column;//Text displayed inside checkbox
		},
		rows: ['J','I','H','G','F','E','D','C','B','A'],
		columns: [16,15,14,13,12,11,10,9,'a1', 'a2',8,7,6,5,4,3,2,1]
		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};


let nex_hall_4 = {
	map: [  //Seating chart
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaaa__aaaaaaa',
			'aaaaaaD[A_H9,AH9]____D[A_H6, AH6]aaaaa',

	],

	seats: {
	a: {
		classes: 'normal',
		price  : 10
	},
	D: {
		classes: 'handicap',
		price  : 7
	}
},
	naming : {
		top : false,
		getLabel : function (character, row, column) {
			return row+column;//Text displayed inside checkbox
		},
		rows: ['J','I','H','G','F','E','D','C','B','A'],
		columns: [15,14,13,12,11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};

let nex_hall_5={
		map: [  //Seating chart
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaD[A_H10,AH10]____D[A_H7, AH7]aaaaaa',
		],

		seats: {
		a: {
			classes: 'normal',
			price  : 10
		},
		D: {
			classes: 'handicap',
			price  : 7
		}
	},
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return row+column;//Text displayed inside checkbox
			},
			rows: ['J','I','H','G','F','E','D','C','B','A'],
			columns: [15,14,13,12,11,10,9,'a1', 'a2', 8,7,6,5,4,3,2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};

	let nex_hall_6={
		map: [  //Seating chart
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaD[A_H9,AH9]____D[A_H6, AH6]aaaaa',

		],

		seats: {
		a: {
			classes: 'normal',
			price  : 10
		},
		D: {
			classes: 'handicap',
			price  : 7
		}
	},
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return row+column;//Text displayed inside checkbox
			},
			rows: ['J','I','H','G','F','E','D','C','B','A'],
			columns: [15,14,13,12,11,10,9,8,'a1', 'a2',7,6,5,4,3,2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};



	let nex_hall_7={
		map: [  //Seating chart
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'D[A_H15,AH15]____________D[A_H4, AH4]aaa',
		],

		seats: {
		a: {
			classes: 'normal',
			price  : 10
		},
		D: {
			classes: 'handicap',
			price  : 7
		}
	},
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return row+column;//Text displayed inside checkbox
			},
			rows: ['J','I','H','G','F','E','D','C','B','A'],
			columns: [15,14,13,12,11,10,9,'a1', 'a2',8,7,6,5,4,3,2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};


let nex_hall_8={
		map: [  //Seating chart
		    'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaaaaaaa__aaaaaaaa',
				'aaD[A_H14,AH14]____________D[A_H3, AH3]aa',

		],

		seats: {
		a: {
			classes: 'normal',
			price  : 10
		},
		D: {
			classes: 'handicap',
			price  : 7
		}
	},
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return row+column;//Text displayed inside checkbox
			},
			rows: ['J','I','H','G','F','E','D','C','B','A'],
			columns: [16,15,14,13,12,11,10,9,'a1', 'a2',8,7,6,5,4,3,2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};


let nex_premiere_1={
		map: [  //Seating chart
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'D[A_H8, AH8]D[A_H7,AH7]____________',
		],

		seats: {
		a: {
			classes: 'normal',
			price  : 10
		},
		D: {
			classes: 'handicap',
			price  : 7
		}
	},
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return row+column;//Text displayed inside checkbox
			},
			rows: ['G','F','E','D','C','B','A'],
			columns: [8,7,'a5','a6',6,5,'a3','a4',4,3,'a1','a2',2,1]

		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};

let nex_premiere_2={
		map: [  //Seating chart
				'____aa__aa____',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa__aa__aa__aa',
				'aa______D[A_H4, AH4]D[A_H3,AH3]__aa',
		],

		seats: {
		a: {
			classes: 'normal',
			price  : 10
		},
		D: {
			classes: 'handicap',
			price  : 7
		}
	},
		naming : {
			top : false,
			getLabel : function (character, row, column) {
				return row+column;//Text displayed inside checkbox
			},
			rows: ['G','F','E','D','C','B','A'],
			columns: [8,7,'a5','a6',6,5,'a3','a4',4,3,'a1','a2',2,1]


		},
		legend : { //Definition legend
			node : $('#legend'),
			items : [
				[ 'a', 'available',   'Option' ],
				[ 'a', 'unavailable', 'Sold'],
				[ 'D', 'available', 'Handi']//Legend
			]
		},

	};


