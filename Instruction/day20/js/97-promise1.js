const soz = () => {
    return new Promise((resolve, reject) => {
        const result = false;

        if (result) {
            resolve({ firstName: "John", lastName: "Doe" })
        } else {
            reject({ type: "param_error", message: "Invalid parameter" })
        }
    })
};

soz()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        if (err.type === "param_error") {
            console.log(err.message);
        }
    })