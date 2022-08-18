'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => {
    return allStudents.reduce((arr, student) => {
        if (!failedStudents.includes(student)) {
            arr.push(student);
        }
        return arr;
    }, [])
}

console.log(filter(allStudents, failedStudents));