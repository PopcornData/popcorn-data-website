let waterway_point_hall_1 = {
		map: [  //Seating chart
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaa_____a[A_H2,AH2]a[A_H1,AH1]aaa',
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
			columns: [13,12,11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

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


let waterway_point_hall_2 = {
		map: [  //Seating chart
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    'aaaaaa__aaaaaaa',
		    '__________a[A_H2,AH2]a[A_H1,AH1]aaa',
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
			columns: [13,12,11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

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

let waterway_point_hall_3 = waterway_point_hall_1;
let waterway_point_hall_4 = waterway_point_hall_1;

let waterway_point_hall_5 = {
		map: [  //Seating chart
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa______a[A_H2,AH2]a[A_H1,AH1]',
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
			columns: [14,13,12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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

let waterway_point_hall_6 = {
		map: [  //Seating chart
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    'aaaaaaaa__aaaaaa',
		    '______a[A_H2,AH2]a[A_H1,AH1]___aaaaa',
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
			columns: [14,13,12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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

let waterway_point_hall_7 = {
		map: [  //Seating chart
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaa[A_H2,AH2]a[A_H1,AH1]_____aaaaa',
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
			columns: [13,12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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

let waterway_point_hall_8 = waterway_point_hall_7;

let waterway_point_hall_9 = {
		map: [  //Seating chart
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaaaaa__aaaaaa',
		    'aaaa[A_H2,AH2]a[A_H1,AH1]__________',
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
			columns: [13,12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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


let waterway_point_hall_10 = waterway_point_hall_7;

let waterway_point_imax = {
		map: [  //Seating chart
		    '__aaaaaaaaaaaaaaaaaaaaaaaa',
		    '_aaaaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaaaaa',
		    'a[A_H2,AH2]_a[A_H1,AH1]_aaaaaaaaaaaaaaaaaa____'
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
			rows: ['I','H','G','F','E','D','C','B','A'],
			columns: [26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

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




