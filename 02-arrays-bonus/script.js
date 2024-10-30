const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log("es1");
const reversedTeachers = teachers.toReversed();
console.log("toReversed() method:\n" + reversedTeachers);

const reversedCustom = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedCustom.push(teachers[i]);
}
console.log("without toReversed():\n" + reversedCustom);



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.log("\nes2");
const longNames = teachers.filter(longname => longname.length >= 5);
console.log("filter() method:\n" + longNames);

const longCustom = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longCustom.push(teachers[i]);
  }
}
console.log("without filter():\n" + longNames);


// 3. Rimuovi 'Ed' dall'array teachers
console.log("\nes3");
const teachersCopy = teachers.slice();
const indexEd = teachers.indexOf("Ed");
// assumendo che Ed sia elemento di teachers => index !== -1
teachers.splice(indexEd, 1);
console.log("splice() method teachers:\n" + teachers);

for (let i = indexEd; i < teachersCopy.length - 1; i++) {
  teachersCopy[i] = teachersCopy[i + 1];
}
teachersCopy.pop();
console.log("without splice() teachersCopy:\n" + teachersCopy);
