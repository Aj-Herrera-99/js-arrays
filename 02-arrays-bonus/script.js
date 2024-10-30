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

const reversedTeachers = teachers.toReversed();
console.log("Metodo toReversed() " + reversedTeachers);

const reversedCustom = [];
for(let i=teachers.length-1; i>=0; i--){
  reversedCustom.push(teachers[i]);
}
console.log("Metodo \"fatto a mano\": " + reversedCustom);



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(longname => longname.length >= 5);
console.log("longNames: " + longNames);

// 3. Rimuovi 'Ed' dall'array teachers