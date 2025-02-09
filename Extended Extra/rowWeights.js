/*
Кілька людей стоять поспіль, розділені на дві команди. 
Перша людина потрапляє до команди 1, друга - до команди 2, третя - до команди 1 і так далі.

Реалізуй функцію getRowWeights, яка приймає масив чисел (ваги людей) та повертає новий масив з двох цілих чисел, 
де перше - загальна вага команди 1, а друге - загальна вага команди 2.

Примітки:

Розмір масиву не менше 1.
Усі числа додатні.

*/

function getReweights(weights) {
    let team1 = 0;
    let team2 = 0;

    for (let i = 0; i < weights.length; i++) {
        if (i % 2 === 0) {
            team1 += weights[i]; // Чётный индекс → команда 1
        } else {
            team2 += weights[i]; // Нечётный индекс → команда 2
        }
    }
    return [team1, team2];
}
