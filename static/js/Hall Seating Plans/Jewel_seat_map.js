let jewel_hall_1={
		map: [  //Seating chart
		    'aaaaaaa__aaaa',
			'aaaaaaa__aaaa',
			'aaaaaaa__aaaa',
			'aaaaaaa__aaaa',
			'aaaaaaa__D[B_H1,BH1]D[B_H2,BH2]__',
			'aaaaaa_______'
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
			rows: ['F','E','D','C','B','A'],
			columns: [11,10,9,8,7,6,5,'a1', 'a2',4,3,2,1]

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

let jewel_hall_2={
		map: [  //Seating chart
		    'aaaa__aaaaaaa',
				'aaaa__aaaaaaa',
				'aaaa__aaaaaaa',
				'aaaa__aaaaaaa',
				'__D[B_H2, BH2]D[B_H1, BH1]__aaaaaaa',
				'______aaaaaaa',
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
		rows: ['F','E','D','C','B','A'],
		columns: [11,10,9,8,'a1', 'a2',7,6,5,4,3,2,1]

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

let jewel_hall_3={
		map: [  //Seating chart
		    'aaaaaaa__aaaa',
				'aaaaaaa__aaaa',
				'aaaaaaa__aaaa',
				'aaaaaaa__aaaa',
				'aaaaaaa__D[B_H2, BH2]_D[B_H1, BH1]_',
				'aaaaaaa______',
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
			rows: ['F','E','D','C','B','A'],
			columns: [11,10,9,8,7,6,5,'a1', 'a2',4,3,2,1]

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


let jewel_hall_4 = {
		map: [  //Seating chart
			    'aaaaaaa__aaaa',
					'aaaaaaa__aaaa',
					'aaaaaaa__aaaa',
					'aaaaaaa__aaaa',
					'aaaaaaa__D[B_H2, BH2]_D[B_H1, BH1]_',
					'aaaaaaa______',
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
			rows: ['F','E','D','C','B','A'],
			columns: [11,10,9,8,7,6,5,'a1', 'a2',4,3,2,1]

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

let jewel_hall_5={
		map: [  //Seating chart
			'aaaaaaaaa__aaaaaaaaa',
			'aaaaaaaaa__aaaaaaaaa',
			'aaaaaaaaa__aaaaaaaaa',
			'aaaaaaaaa__aaaaaaaaa',
			'aaaaaaaaa__aaaaaaaaa',
			'aaaaaaaaa__aaaaaaaaa',
			'aaaaaa______D[B_H2, BH2]_D[B_H1, BH1]_aaaa',
			'aaaaaa__________aaaa',
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
			rows: ['H','G','F','E','D','C','B','A'],
			columns: [18,17,16,15,14,13,12,11,10,'a1', 'a2',9,8, 7,6,5,4,3,2,1]

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

let jewel_hall_6={
		map: [  //Seating chart
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaaaaaa__aaaaaaaa',
			'aaa________D[B_H2, BH2]D[B_H1, BH1]aaaa',
			'aaa__________aaaa',
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
			rows: ['H','G','F','E','D','C','B','A'],
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

	let jewel_hall_7={
		map: [  //Seating chart
		    'aaaaaaa__aaaaaaaa',
				'aaaaaaa__aaaaaaaa',
				'aaaaaaa__aaaaaaaa',
				'aaaaaaa__aaaaaaaa',
				'aaaaaaa__aaaaaaaa',
				'aaaaaaa__aaaaaaaa',
				'aaaaa________D[B_H2, BH2]_D[B_H1, BH1]_',
				'aaaaa____________',

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
			rows: ['H','G','F','E','D','C','B','A'],
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



	let jewel_imax={
		map: [  //Seating chart
			'__aaaaaaaaaaaaaaaaaaaa_',
			'aaaaaaaaaaaaaaaaaaaaaaa',
			'aaaaaaaaaaaaaaaaaaaaaaa',
			'aaaaaaaaaaaaaaaaaaaaaaa',
			'aaaaaaaaaaaaaaaaaaaaaaa',
			'aaaaaaaaaaaaaaaaaaaaaaa',
			'aaaaaaaaaaaaaaaaaaaaaaa',
			'_D[A_H2, AH2]_D[A_H1, AH1]_____________aaaaaa',
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
			rows: ['H','G','F','E','D','C','B','A'],
			columns: [23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

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




	let jewel_lumiere_one={
		map: [  //Seating chart
				'aa__aaa__aa',
				'aa__aaa__aa',
				'a[C_6,C6]a[C_5,C5]__a[C_4,C4]a[C_3,C3]___aa',
				'D[B_H2, BH2]D[B_H1, BH1]__a[B_4,B4]a[B_3,B3]___aa',
				'_________aa',
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
			rows: ['E','D','C','B','A'],
			columns: [7,6,'a1','a2',5,4,3,'a1', 'a2',2,1]

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


	let jewel_lumiere_two={
		map: [  //Seating chart
				'aa__aaa__aa',
				'aa__aaa__aa',
				'a[C_6,C6]a[C_5,C5]__a[C_4,C4]a[C_3,C3]___aa',
				'a[B_4,B4]a[B_3,B3]__a[B_2,B2]a[B_1,B1]___D[B_H2, BH2]D[B_H1, BH1]',
				'a[A_2,A2]a[A_1,A1]_________',
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
			rows: ['E','D','C','B','A'],
			columns: [7,6,'a1','a2',5,4,3,'a1', 'a2',2,1]
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

let jewel_dreamers={
		map: [  //Seating chart
		    'aaaa_aaaaaa',
			'aaaa_aaaaaa',
			'aaaa_aaaaaa',
			'_D[C_H2, CH2]_D[C_H1, CH1]_aaaaaa',
			'_____aaaaaa',
			'____aaaaaaa'

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
			rows: ['F','E','D','C','B','A'],
			columns: [11,10,9,8,7,6,5,4,3,2,1]

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