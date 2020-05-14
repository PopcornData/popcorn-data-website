let paya_lebar_quarter_hall_1 = {
		map: [  //Seating chart
		    'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_aaaaaaaaaa_aaaa',
            'aaaa_D[B_H2,BH2]_D[B_H1,BH1]_aaaaaa_aaaa',
            '_________aaa____aaaa'

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
			rows: ['K','J','I','H','G','F','E','D','C','B','A'],
			columns: [18,17,16,15,'a2',14,13,12,11,10,9,8,7,6,5,'a1',4,3,2,1]

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

var paya_lebar_quarter_hall_2 = {
		map: [  //Seating chart
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aa_D[A_H2,AH2]_D[A_H1,AH1]__aaaa'

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
			columns: [10,9,8,7,6,5,'a1','a2',4,3,2,1]

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

let paya_lebar_quarter_hall_3 = {
		map: [  //Seating chart
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aaaaaa__aaaa',
		    'aa_D[A_H2,AH2]_D[A_H1,AH1]__aaaa'

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
			columns: [10,9,8,7,6,5,'a1','a2',4,3,2,1]

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


let paya_lebar_quarter_hall_4 = {
		map: [  //Seating chart
		    'aaaa__aaaaa',
		    'aaaa__aaaaa',
		    'aaaa__aaaaa',
		    'aaaa__aaaaa',
		    'aaaa__aaaaa',
		    'aaaa__aaaaa',
		    'aaaa__D[A_H2,AH2]_D[A_H1,AH1]_a'

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
			columns: [9,8,7,6,'a1','a2',5,4,3,2,1]

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

let paya_lebar_quarter_hall_5 = {
		map: [  //Seating chart
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__D[A_H2,AH2]_D[A_H1,AH1]_aaa'

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
			columns: [11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

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


let paya_lebar_quarter_hall_6 = paya_lebar_quarter_hall_5


let paya_lebar_quarter_hall_7 = {
		map: [  //Seating chart
		    'aaaaaaa__aaaa',
		    'aaaaaaa__aaaa',
		    'aaaaaaa__aaaa',
		    'aaaaaaa__aaaa',
		    'aaaaaaa__aaaa',
		    'aaaaaaa__aaaa',
		    'aaa_D[A_H2,AH2]_D[A_H1,AH1]__aaaa'

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
			columns: [11,10,9,8,7,6,5,'a1','a2',4,3,2,1]

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

let paya_lebar_quarter_hall_8 = {
		map: [  //Seating chart
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__aaaaaaa',
		    'aaaa__D[A_H2,AH2]_D[A_H1,AH1]_aaa'

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
			columns: [11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

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


let paya_lebar_quarter_hall_9 = paya_lebar_quarter_hall_8

let paya_lebar_quarter_lumiere_one = {
		map: [  //Seating chart
		    'aa____aa___aa',
		    'aa____aa___aa',
		    'aa___aaa___aa',
		    'aa___aaa___aa',
		    'aa____D[A_H2,AH2]D[A_H1,AH1]_____'

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
			columns: [7,6,'a6','a5','a4',5,4,3,'a3','a2','a1',2,1]

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

let paya_lebar_quarter_lumiere_two=paya_lebar_quarter_lumiere_one

let paya_lebar_quarter_imax = {
		map: [  //Seating chart
		    '__aaaaaaaaaaaaaaaaaaa__',
		    '_aaaaaaaaaaaaaaaaaaaaa_',
		    'aaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaaaaaaaaaaa',
		    'aaaaa____________aa_D[A_H2,AH2]_D[A_H1,AH1]'


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
