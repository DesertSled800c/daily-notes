const rules = [
  {
    id: 1,
    topics: ["strategy", "professional", "help"],
    text: "Review all my old code before asking for help or looking at hints.",
    author: "Samantha Maas",
    date: "2020-11-09",
  },
  {
    id: 2,
    topics: ["thinking", "help"],
    text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
    author: "Gib Jeffries",
    date: "2021-01-18",
  },
  {
    id: 3,
    topics: ["reminder", "github"],
    text: "Need to have all my code backed up to Github by the end of the week.",
    author: "Rebecca Parker",
    date: "2021-02-25",
  },
  {
    id: 4,
    topics: ["strategy", "github"],
    text: "Always work on a branch and submit a PR, even if I'm working on my own project.",
    author: "Red Tilson",
    date: "2020-11-25",
  },
];

// const filteredRules = [];
// const criteria = "github";
// for (const rule of rules)
// if (rule.topics.includes(criteria)) {
//     filteredRules.push(rule)
// } else {
//      console.log("github does not exist in topics")
// }

// console.log(filteredRules);

// console.log("***  Note Articles  ***");
let section = "";
for (const rule of rules) {
  section += `\n    <article>\n ${rule.text}\n`;
  for (const topic of rule.topics) {
    section += `    <section>${topic}</section>\n`;
  }
  section += `</article>`;
}
console.log(section);