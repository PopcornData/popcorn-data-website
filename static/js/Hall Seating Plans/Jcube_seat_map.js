let jcube_hall_1={
		map: [  //Seating chart
		    'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaD[A_H2, AH2]_______D[A_H1, AH1]aa',
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

let jcube_hall_2={
		map: [  //Seating chart
		    'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaaa__aaaaaaa',
				'aaaaaaD[A_H2, AH2]_____D[A_H1, AH1]aaaa',
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

let jcube_hall_3={
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
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaD[A_H2, AH2]_____D[A_H1, AH1]aaaaaa',
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
			rows: ['L','K','J','I','H','G','F','E','D','C','B','A'],
			columns: [15,14,13,12,11,10,9,'a1','a2',8,7,6,5,4,3,2,1]

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


let jcube_hall_4 = {
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
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaD[A_H2, AH2]_____D[A_H1, AH1]aaaaaa',
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
			rows: ['L','K','J','I','H','G','F','E','D','C','B','A'],
			columns: [16,15,14,13,12,11,10,9,'a1', 'a2', 8,7,6,5,4,3,2,1]

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

let jcube_hall_5={
		map: [  //Seating chart
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaaaa__aaaaaaa',
			'aaaaD[A_H2, AH2]_____D[A_H1, AH1]aaaaa',
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
			columns: [14,13,12,11,10,9,8,'a1', 'a2', 7,6,5,4,3,2,1]

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

let jcube_hall_6={
		map: [  //Seating chart
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaaaaaaa',
			'aaaaaaaa__aaa_aaD[B_H1, BH1]_',
			'aaaaaaD[A_H2, AH2]___________',
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

	let jcube_imax={
		map: [  //Seating chart
		    '______aaaaaaaaaaaaaaaaaaaa____',
				'______aaaaaaaaaaaaaaaaaaaa____',
				'_____aaaaaaaaaaaaaaaaaaaaaaaa_',
				'___aaaaaaaaaaaaaaaaaaaaaaaaaa_',
				'______________________________',
				'aaaaaaaaa__aaaaaaaaaaaaaD[C_H2,CH2]D[C_H1,CH1]____',
				'____________aaaaaa____________',
				'____________aaaaaa____________'

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
			rows: ['G','F','E','D','a','C','B','A'],
			columns: [29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

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