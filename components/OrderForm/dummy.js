export const dinnerStateDummy = [
    {
        dinnerId: 'frd01',
        dinnerName: 'French Dinner',
        orderable: 'false',
        price: 23000,
        special: 'false',
        details: [
            {
                menuName: 'coffee',
                size: 1,
                measure: 'cup',
            },
            {
                menuName: 'steak',
                size: 1,
                measure: '',
            },
        ]
    },
    {
        dinnerId: 'frd01',
        dinnerName: 'French Dinner',
        orderable: 'true',
        price: 23000,
        special: 'false',
        details: [
            {
                menuName: 'coffee',
                size: 1,
                measure: 'cup',
            },
            {
                menuName: 'steak',
                size: 1,
                measure: '',
            },
        ]
    },
    {
        dinnerId: 'cpfd',
        dinnerName: 'Champange Festival',
        orderable: 'true',
        price: 81000,
        special: 'true',
        details: [
            {
                menuName: 'coffee',
                size: 1,
                measure: 'cup',
            },
            {
                menuName: 'steak',
                size: 1,
                measure: '',
            },
        ]
    },
];

export const optionsDummy = {
    options: [
        {
            menuId: 'cf01',
            menuName: 'coffee',
            size: 1,
            measure: 'cup',
            normalPrice: 2000,
            extraPrice:10000,
        },
        {
            menuId: 'st01',
            menuName: 'steak',
            size: 1,
            measure: '',
            normalPrice: 11000,
            extraPrice: 14000,
        },
    ],
    extra: [
        {   
            menuId: 'bc01',
            menuName: 'bacon',
            normalPrice: 4000,
            extraPrice: 6000,
        },
        {
            menuId: 'sl01',
            menuName: 'salad',
            normalPrice: 6000,
            extraPrice: 8000,
        },
    ],
}