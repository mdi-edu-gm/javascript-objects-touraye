let students = [
    {
        name:  "Ebrima Touray",
        dob: 1992,
        skill: 4,
        address: "Jam City",
        interest: ["Writing", "Programming", "Movies", "Athletics"]
    },
    {
        name:  "Buba Sowe",
        dob: 1986,
        skill: 4,
        address: "Bakoteh",
        interest: ["Reading", "Programming", "Movies", "History"]
    },
    {
        name: "Muhammad Gibba",
        dob: 1997,
        address: "Abuko",
        skill: 5,
        interest: ["Programing","videos", "Reading", "Writing"]
    },
    {
        name: "Jailan Saine",
        dob: 1990,
        address: "Tabokoto",
        skill: 6,
        interest: ["Reading", "Sports", "Programming", "Travel"]
    },
    {
        name: "Ismaila Turner",
        dob: 1998,
        address: "Dippakunda",
        skill: 6,
        interest: ["Programing","Music ", "Reading", "Spying"]
    },
    {
        name: "Abu Turaab",
        dob: 1988,
        address: "Jam City",
        skill: 6,
        interest: ["Reading", "Programming", "History"]
    },
    {
        name: "Ousman MB Gassama",
        dob: 1996,
        address: "Banjulinding",
        skill: 6, 
        interest: ["networking", "currentAfairs", "football"]
    }
];

// sadsa
let newStudent = {
    name:"Essu Fonny",
    dob: 1995,
    address:"Brikama", 
    skill : 6,
    interest :[ "programming", "research", "Cybersecurity", "Networking", "computer repair", "social Engineer", "workout", "riding"]  
}

// add the new entry(newStudents) to the students Array (q-1)
students.push(newStudent);
// console.log(students);

// print all the names of the students (q-2)
for (let value of Object.values(students)) {
    let listOfStud = [];
     listOfStud = value.name;
    // console.log(listOfStud);
}


    // the interest of all the studetns from jam city (q-3)
 let student = students.filter(item => {
     if (item.address === "Jam City") {         
         return students;
        }
    });
    // console.log(student);    
    let studInterest = student.filter(set => {
        if(typeof (set) == !String || Number) {
            // console.log(set.interest);
        }
        return student;
    });
    // console.log(studInterest);
   
        


// count how many students have skill set more than 5 (q-4)
let skillSet = students.filter(set => {
    if(set.skill > 5) {
        return students;
    }    
});
// console.log(`${skillSet.length} stundets have the skills set of more than 5`);
// console.log(skillSet);


// compute the average of the top skill students (q-5)
// (6 + 6 + 6 + 6 + 6) / 5
let sumOfSkill = skillSet.filter(sum => {
    let ans = sum.skill;    
    let myAns = (ans * 5) / 5;
    let result = myAns / 5;
    // console.log(myAns);
})

let average = (6 + 6 + 6 + 6 + 6) / 5;
    // console.log(`The average of all the students with the skills set of more than 5 is {average}`);


// print the students that are born after 1990 (q-6)

let age = students.filter(sum => {
    if(sum.dob > 1990) {
        return students;
    }
    // console.log(sum);
});


// print the students that name start with letter "E" (q-7)

let fisrtLetter = students.filter(check => check.name[0] === "E");
// console.log(fisrtLetter);