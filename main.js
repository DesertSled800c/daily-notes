/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [];

const starterObjects = {
  id: 1,
  text: "code",
  author: "NSS",
  date: "11/8/2022",
  topics: ["js", "css", "html"],
};

notes.push(starterObjects);

notes.push({
  id: 2,
  color: "blue",
  text: "smooth",
  topics: ["coconut", "mango"],
});

notes.push({
  id: 3,
  color: "red",
  text: "bold",
  topics: ["candy", "reeses"],
});
















console.log(notes);

for (const note of notes) {
  console.log(note.text);
}

console.log("*** All Note Topics ***");
for (const note of notes) {
  for (const elem of note.topics) {
    console.log(elem);
  }
}

console.log("*** Average Topics Per Note ***")
let totalT = 0;
for (const note of notes) {
    for (const topic of note.topics) {
        totalT += 1
    }
}
let averageT = totalT / notes.length
console.log(averageT)



console.log("*** Average Topics Per Note alternate way ***");
let totalTopics = 0;
for (let note of notes) {
  totalTopics += note.topics.length;
}
averageTopics = totalTopics / notes.length;
console.log(averageTopics);
/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
