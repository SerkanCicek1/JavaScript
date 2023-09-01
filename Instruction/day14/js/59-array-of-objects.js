const studentsData = [
    {
        name: 'John',
        age: 20,
        gender: 'male'
    },
    {
        name: 'Mary',
        age: 22,
        gender: 'female'
    },
    {
        name: 'Bob',
        age: 18,
        gender: 'male'
    }
];

const fillStudentsSelectOptions = () => {
    const selectEl = document.getElementById('students');

    for (let i = 0; i < studentsData.length; i++) {
        selectEl.innerHTML += `<option>${studentsData[i].name}</option>`;
    }
};

fillStudentsSelectOptions();