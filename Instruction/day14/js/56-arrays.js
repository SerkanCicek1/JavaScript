const courses = ["HTML", "CSS", "JS", "PHP", "Java"];

console.log(courses);
console.log(courses[0]);
console.log(courses.length);
console.log(courses[courses.length - 1]);

courses[0] = "Python";
console.log(courses[0]);

// courses = ["Python", "CSS", "JS", "PHP", "Java"]; // TypeError: Assignment to constant variable.