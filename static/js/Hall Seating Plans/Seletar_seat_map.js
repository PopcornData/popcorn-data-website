let seletar_hall_1 = {
		map: [  //Seating chart
		    'aaaaaa__aaaaaa',
		    'aaaaaa__aaaaaa',
		    'aaaaaa__aaaaaa',
		    'aaaaaa__aaaaaa',
		    'aaaaaa__aaaaaa',
		    'aaaaaa__aaaaaa',
		    'aaaaaa____a[B_H2,BH2]a[B_H1,BH1]aa',
		    'aaaa__________'

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
			columns: [12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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

let seletar_hall_2 = {
        map: [  //Seating chart
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa____a[B_H2,BH2]a[B_H1,BH1]aa',
            'aaaaa_______aa'

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
            columns: [12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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

let seletar_hall_3 = {
        map: [  //Seating chart
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaa[B_H2,BH2]a[B_H1,BH1]____aaaaaa',
            'aa_______aaa__'

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
            columns: [12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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

let seletar_hall_4 = {
        map: [  //Seating chart
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaaaaa__aaaaaa',
            'aaa[B_H2,BH2]a[B_H1,BH1]____aaaaaa',
            'aa_______aaaaa'

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
            columns: [12,11,10,9,8,7,'a1','a2',6,5,4,3,2,1]

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


let seletar_hall_5 = {
        map: [  //Seating chart
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaa[B_H2,BH2]a[B_H1,BH1]___aaaaaaa',
            'aaa_______aaaaaa'

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
            columns: [14,13,12,11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

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


let seletar_hall_6 = {
        map: [  //Seating chart
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaa[A_H2,AH2]a[A_H1,AH1]______aaaaaa'

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
            columns: [14,13,12,11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

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

let seletar_hall_7 = {
        map: [  //Seating chart
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaaaaa__aaaaaaa',
            'aaaa[A_H2,AH2]a[A_H1,AH1]_____aaaaaa'

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
            columns: [14,13,12,11,10,9,8,'a1','a2',7,6,5,4,3,2,1]

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

    let seletar_hall_8 = {
        map: [  //Seating chart
            'aaaaaaaa__aaaaaaa',
            'aaaaaaaa__aaaaaaa',
            'aaaaaaaa__aaaaaaa',
            'aaaaaaaa__aaaaaaa',
            'aaaaaaaa__aaaaaaa',
            'aaaaaaaa__aaaaaaa',
            'aaaaa[B_H2,BH2]a[B_H1,BH1]____aaaaaaa',
            '____________aaaaa'

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