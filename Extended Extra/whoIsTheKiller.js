/*
Караул, когось вбили!

Тобі вдалося трохи звузити список підозрюваних у вбивстві, адже, на щастя, ти знаєш, з ким кожен із них бачився у той день.

Реалізуй функцію getKiller, яка приймає об'єкт підозрюваних suspects, де у кожного підозрюваного є список людей, з якими він зустрічався. Цей об'єкт виглядає ось так:

{
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
}

Окрім списку підозрюваних, функція також приймає масив жертв dead:

['Lucas', 'Bill']

Тобі потрібно вирахувати вбивцю і повернути його ім'я (вбивця завжди працює наодинці). У нашому випадку це James, адже він єдиниий, хто бачив обох вбитих (Lukas і Bill).

Якщо вбивцю не знайдено, то функція нічого не повертає.
*/

const suspects = {
    "James": ["Jacob", "Bill", "Lucas"],
    "Johnny": ["David", "Kyle", "Lucas"],
    "Peter": ["Lucy", "Kyle"]
  };
  
const dead = ["Lucas", "Bill"];
  
function getKiller(suspects, dead) {
    for (let suspect in suspects) {
        if (dead.every(victim => suspects[suspect].includes(victim))) {
            return suspect; 
        }
    }
    return null; 
}
