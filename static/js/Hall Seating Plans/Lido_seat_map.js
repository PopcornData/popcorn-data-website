
let lido_hall_1={
		map: [  //Seating chart
		    '___aaaaaaaaa__aaaaaaa_D[U_H2,UH2]__D[U_H1,UH1]__',
		    '__aaaaaaaaaa__aaaaaaaaaaaa__',
		    '_aaaaaaaaaaa__aaaaaaaaaaaaa_',
		    '_aaaaaaaaaaa__aaaaaaaaaaaaa_',
		    '_aaaaaaaaaaa__aaaaaaaaaaaaa_',
            'aaaaaaaaaaaa__aaaaaaaaaaaaaa',
		    '__aaaaaaaaaa__aaaaaaaaaaaa__',
			'_aaaaaaaaaaa__aaaaaaaaaaaaa_',
            '_aaaaaaaaaaa__aaaaaaaaaaaaa_',
            '_aaaaaaaaaaa__aaaaaaaaaaaaa_',
            '_aaaaaaaaaaa__aaaaaaaaaaaaa_',
            '_aaaaaaaaaaa__aaaaaaaaaaaaa_',
            'aaaaaaaaaaaa__aaaaaaaaaaaaaa',
            '___aaaaaaaaa__aaaaaaaaaaaaaa',
            '_aaaaaaaaaaa__aaaaaaaaaaaaaa',
            '_aaaaaaaaaaa__aaaaaaaaaaaaaa',
            '_aaaaaaaaaaa__aaaaaaaaaaaaaa',
            '_aaaaaaaaaaa__aaaaaaaaaaaaaa',
            '_aaaaaaaaaaa__aaaaaaaaaaaaaa',
            '___aaaaaaaaa__aaaaaaaaaaaaaa',
            '_aaaaaaaaaaa__aaaaaaaaaaaaaa'

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
			rows: ['U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'],
			columns: [26,25,24,23,22,21,20,19,18,17,16,15,'a1','a2',14,13,12,11,10,9,8,7,6,5,4,3,2,1]

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

let lido_hall_2={
		map: [  //Seating chart
		    'D[H_H2,HH2]_D[H_H1,HH1]aaaaaaaaaaa',
		    'aaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaa',
		    'aaaaaaaaaaa___',
            'aaaaaaaaaa____'

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
			columns: [14,13,12,11,10,9,8,7,6,5,4,3,2,1]

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

let lido_hall_3={
		map: [  //Seating chart
		    'D[H_H2,HH2]_D[H_H1,HH1]aaaaaaaaaaa',
		    'aaaaaaaaaaaaaa',
		    'aaaaaaaaaaaaaa',
		    '__aaaaaaaaaaaa',
		    '___aaaaaaaaaaa',
		    '____aaaaaaaaaa',
		    '_______aaaaaaa',
            '_______aaaaaaa'

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
			columns: [14,13,12,11,10,9,8,7,6,5,4,3,2,1]

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


let lido_hall_4 = {
		map: [  //Seating chart
			'__aaa___aaaaaaaaaaaa___aaD[O_H1,OH1]__',
            '_aaaa___aaaaaaaaaaaa___aaaa_',
            '_aaaa___aaaaaaaaaaaa___aaaaa',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            '_aaaa___aaaaaaaaaaaa___aaaa_',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            'aaaaa___aaaaaaaaaaaa___aaaaa',
            '_aaaa___aaaaaaaaaaaaa[C_5,C5]___aaaa',
            '_a[B_22,B22]a[B_21,B21]a[B_20,B20]a[B_19,B19]__a[B_18,B18]aaaaaaaaaaaaa[B_5,B5]___aaaa',
            '___a[A_20,A20]a[A_19,A19]__a[A_18,A18]aaaaaaaaaaaa________'

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
			rows: ['O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'],
			columns: [22,21,20,19,18,'a1','a2','a3',17,16,15,14,13,12,11,10,9,8,7,6,'a5','a2','a1',5,4,3,2,1]

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

let lido_hall_5={
		map: [  //Seating chart
			'_D[N_H2,NH2]_D[N_H1,NH1]aaaaaaaa',
            '_aaaaaaaaaaa',
            '_aaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa',
            'aaaaaaaaaaaa'

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
			rows: ['N','M','L','K','J','I','H','G','F','E','D','C','B','A'],
			columns: [12,11,10,9,8,7,6,5,4,3,2,1]

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

let lido_hall_6={
		map: [  //Seating chart
		    'aaaaaaD[G_H2,GH2]D[G_H1,GH1]_',
		    'aaaaaaaa_',
		    'aaaaaaaa_',
		    'aaaaaaa__',
		    'aaaaaaaa_',
		    'aaaaaaaa_',
            'aaaaaaaaa'

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
			columns: [9,8,7,6,5,4,3,2,1]

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

	let lido_hall_7={
		map: [  //Seating chart
		    'D[I_H2,IH2]D[I_H1,IH1]a[I_9,I9]a[I_8,I8]a[I_7,I7]a[I_6,I6]a[I_5,I5]a[I_4,I4]a[I_3,I3]a[I_2,I2]a[I_1,I1]_',
		    'aaaaaaaaaaaa',
		    'aaaaaaaaaaaa',
		    'a[F_10,F10]a[F_9,F9]a[F_8,F8]a[F_7,F7]a[F_6,F6]a[F_5,F5]a[F_4,F4]a[F_3,F3]a[F_2,F2]a[F_1,F1]__',
		    'a[E_10,E10]a[E_9,E9]a[E_8,E8]a[E_7,E7]a[E_6,E6]a[E_5,E5]a[E_4,E4]a[E_3,E3]a[E_2,E2]a[E_1,E1]__',
		    'aaaaaaaaaaaa',
		    'aaaaaaaaaaaa',
		    'aaaaaaaaaaaa',
		    'aaaaaaaaaaaa',
            '___aaaaaaaaa'

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
			rows: ['I','H','G','F','E','D','C','B','A','O'],
			columns: [12,11,10,9,8,7,6,5,4,3,2,1]

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

	let lido_hall_8={
		map: [  //Seating chart
		    'aaaaD[I_H2,IH2]D[I_H1,IH1]_____',
		    'aaaaaaaa___',
		    'aaaaaaaa___',
		    'aaaaaaaa___',
		    'aaaaaaaa___',
		    'aaaaaaaa___',
		    'aaaaaaaa___',
		    'aaaaaaaaaa_',
		    'aaaaaaaaaaa'

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

let lido_hall_9={
		map: [  //Seating chart
		    '____D[I_H2,IH2]D[I_H1,IH1]aaaa',
		    '__aaaaaaaa',
		    '__aaaaaaaa',
		    '__aaaaaaaa',
		    '__aaaaaaaa',
		    '___aaaaaaa',
		    '___aaaaaaa',
		    'aaaaaaaaaa',
		    'aaaaaaaaaa'

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
			columns: [10,9,8,7,6,5,4,3,2,1]

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

	let lido_hall_10={
		map: [  //Seating chart
		    '_______aaaa',
		    '_____D[I_H2,IH2]D[I_H1,IH1]aaaa',
		    '____aaaaaaa',
		    '____aaaaaaa',
		    '____aaaaaaa',
		    '____aaaaaaa',
		    '____aaaaaaa',
		    '____aaaaaaa',
		    '__aaaaaaaaa',
		    'aaaaaaaaaaa'

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

	let lido_imax = {
		map: [  //Seating chart
		    '__________________D[O_H2,OH2]D[O_H1,OH1]_________________',
            '_____________aaaaaaaaaaaa____________',
            '___________aaaaaaaaaaaaaaaa__________',
            '__________aaaaaaaaaaaaaaaaaa_________',
            '________aaaaaaaaaaaaaaaaaaaaaa_______',
            '_______aaaaaaaaaaaaaaaaaaaaaaaa______',
            '_______aaaaaaaaaaaaaaaaaaaaaaaaa_____',
            '_____aaaaaaaaaaaaaaaaaaaaaaaaaaaa____',
            '__aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            '_aaaaaaaaaaaaaaaaaaaaaaaaaaaa________',
            '_aaaaaaaaaaa____________aaaaa________',
            '_aaaaaaaaa______________aaaaa________',
            'aaaaaaaaaa___________________________'

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
			rows: ['O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'],
			columns: [37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]

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


	