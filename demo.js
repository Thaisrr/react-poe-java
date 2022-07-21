
const request = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) resolve('Coucou !');
        else reject('Boom 1')
    }, 2000)
})

const request2 = (value) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) resolve(value + ' --- modified');
        else reject('Boom 2')
    }, 2000)
})


let data;

console.log('Before request');


function getData1() {
    request()
        .then(response => {
            console.log(response)
            return request2(response)
        })
        .then(res => request2(res))
        .then(res => console.log(res))
        .catch(err => console.info(err))
        .finally(() => console.log('Finito'))
}

async function getData2() {
    try {
        const res1 = await request();
        console.log(res1);
        const res2 = await request2(res1);
        console.log(res2);
        data = res2;
    } catch (err) {
        console.info(err)
    } finally {
        console.info('Finito')
    }
}

getData1()
getData2();
console.log(data); // undefined



