let grades = [];
// 1
for (let i = 0; i < 12; i++) {
    let randomNumber = Math.ceil(Math.random() * 100);
    grades.push(randomNumber);
}
console.log(grades);

//2
let sum = 0;
grades.forEach((item) => {
    sum += item;
});
const averageGrade = (sum / grades.length).toFixed(2);
console.log(`Средний балл студентов: ${averageGrade}`);

//3
let maxScore = 0;
grades.forEach((item) => {
    if (item > maxScore) {
        maxScore = item;
    }
});
console.log(`Максимальный балл среди студентов: ${maxScore}`);

//4
let minScore = maxScore;
grades.forEach((item) => {
    if (item  < minScore) {
        minScore = item;
    }
});
console.log(`Минимальный балл среди студентов: ${minScore}`);

//5
let studentPositive = 0;
const studentsScorePlus = grades.filter((item) => {
    if (item >= 60) {
        return studentPositive += 1;
    };
});
console.log(`Количество студентов, получивших положительную оценку: ${studentPositive}`);
console.log(`Количество оставшихся оценок: ${grades.length - studentPositive}`);

//6
let studentNegative = 0;
const  studentsScoreMinus = grades.filter((item) => {
    if (item < 60) {
        return studentNegative += 1;
    };
});
console.log(`Количество студентов, получивших отрицательную оценку: ${studentNegative}`);

//7
const gradesTransform = grades.map((item) => {
    if (item < 100 && item >= 80) {
        return item = 'A'
    }
    if (item <= 79 && item >= 60) {
        return item = 'B'
    }
    if (item <= 59 && item >= 40) {
        return item = 'C'
    }
    if (item <= 39 && item >= 20) {
        return item = 'D'
    }if (item < 20) {
        return item = 'E'
    }
});
console.log(gradesTransform);