type Person = {
    name: string;
    surname: string;
    age: number;
};

type Branch = {
    citys: {
        [city: string]: {
            stuff: {
                position: string;
                person: Person;
                family?: {
                    [key: string]: Person[];
                };
            }[];
        };
    };
};

const gazpromArmenia: Branch = {
    citys: {
        gyumri: {
            stuff: [
                {
                    position: 'boss',
                    person: {
                        name: 'Artyom',
                        surname: 'Hayrapetyan',
                        age: 37
                    },
                    family: {
                        wife: [
                            {
                                name: 'Vardush',
                                surname: 'Siraxedyan',
                                age: 32
                            }
                        ],
                        childrens: [
                            {
                                name: 'Lendrush',
                                surname: 'Hayrapetyan',
                                age: 3
                            },
                            {
                                name: 'Gugushik',
                                surname: 'Hayrapetyan',
                                age: 6
                            }
                        ]
                    }
                },
                // Другие сотрудники и их семьи в Гюмри
            ]
        },
        erevan: {
            stuff: [
                {
                    position: 'boss',
                    person: {
                        name: 'Poxos',
                        surname: 'Araqelyan',
                        age: 41
                    },
                    family: {
                        wife: [
                            {
                                name: 'Artush',
                                surname: 'Grigoryan',
                                age: 32
                            }
                        ],
                        childrens: [
                            {
                                name: 'wwww',
                                surname: 'Grigoryan',
                                age: 12
                            },
                            {
                                name: 'weee',
                                surname: 'Grigoryan',
                                age: 6
                            }
                        ]
                    }
                }
            ]
        }
    }
};
















let v: any = true;
v = 'string'
console.log(Math.round(v));


//-----------------------------------------------------------------
const lista: string[] = []
lista.push('Aram')


let lists: [number, boolean, string];
lists = [5, true, 'a'];


//-----------------------------------------------------------------
const names: readonly string[] = ['Aram']
// names.push('Jack')


let list: readonly number[] = [1];
let list2 = [];
list2.push('hello')

//-----------------------------------------------------------------
const car: {
    type: string,
    model: string,
    year: number
} = {
    type: 'BMW',
    model: 'X5',
    year: 2020
}
//------------------------------------------------------------------
const cars: { type: string, milege?: number } = {
    type: 'Toyota'
}
//------------------------------------------------------------------
let user: {
    [key: string]:{
        name: string
    }[]
} = {
    person: [{name: 'aram'}]
}

//-------------------------------------------------------------------