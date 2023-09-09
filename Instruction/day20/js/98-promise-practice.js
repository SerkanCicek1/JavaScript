const btnEl = document.querySelector('#btn');
const btnChainEl = document.querySelector('#btnChain');

btnEl.addEventListener('click', () => {
    asyncConfirmButton('Are you sure?')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
});


const asyncConfirmButton = async (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = confirm(message);
            if (result) {
                resolve('You clicked OK');
            } else {
                reject('You clicked Cancel');
            }
        })
    })
};

const soz1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('soz1');
        }, 1000)
    });
};
const soz2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('soz2');
        }, 1000)
    });
};
const soz3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('soz3');
        }, 1000)
    });
};
const soz4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('soz4');
        }, 500)
    });
};

// btnChainEl.addEventListener('click', () => {
//     soz1()
//         .then(res => {
//             console.log(res);
//             return soz2()
//         })
//         .then(res => {
//             console.log(res);
//             return soz3()
//         })
//         .then(res => {
//             console.log(res);
//             return soz4()
//         })
//         .then(res => {
//             console.log(res);
//         })

//     console.log("Hello")
// });

btnChainEl.addEventListener('click', async () => {
    console.log("Bekliyoruz...");
    try {
        const resp1 = await soz1();
        console.log(resp1);

        const resp2 = await soz2();
        console.log(resp2);

        const resp3 = await soz3();
        console.log(resp3);

        const resp4 = await soz4();
        console.log(resp4);

    } catch (error) {
        console.log(error)
    }
});