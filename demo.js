let toto =  2 + 2 + '1' + 1;

console.log(toto); //

if(toto) {
    console.log('Toto est truthy')
} else {
    console.log('Toto est falsy')
}

if(!toto) {
    toto = 'truc'
}

toto = toto ?? 10;

toto ??= 'truc';
toto ||= 'truc';
toto &&= 'truc';

toto = 0

console.log(toto);

//toto = toto || 'coucou';

//toto = toto ?? 'coucou';

/*
Falsy : undefined, null, string vide '' "" ``,false, 0, NaN
 */