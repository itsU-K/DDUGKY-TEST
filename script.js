const data = [
  { name: "jane", age: 37, profession: "admin" },
  { name: "john", age: 24, profession: "developer" },
];

// 1. Print Developers
function printDeveloper() {
  let a = data.filter(function (item) {
    return item.profession == "developer";
  });
  console.log(a);
}

// 2. Add Data
function addData() {
  let name = prompt("enter your name");
  let age = prompt("enter your age");
  let profession = prompt("enter your profession");
  let objpush = {
    name: name,
    age: age,
    profession: profession,
  };
  data.push(objpush);
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  let a = data.filter((item) => {
    return item.profession != "admin";
  });
  console.log(a);
}

// 4. Concatenate Array
function concatenateArray() {
  let a = [
    { name: "Uk", age: 22, profession: "dev" },
    { name: "shivam", age: 24, profession: "develop" },
  ];

  let x = data.concat(a);
  console.log(x);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  data.forEach((item) => {
    return (sum = sum + item.age);
  });
  console.log(sum / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let a = data.filter((item) => {
    let x = item.age > 25;
    if (x == true) {
      console.log(`${item.name} is greater then 25`);
    }
  });
}

// 7. Unique Professions
function uniqueProfessions() {
  let arr = [];
  data.forEach((item) => {
    if (!arr.includes(item.profession)) {
      arr.push(item.profession);
    }
  });
  console.log(arr);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((item) => {
    if (item.name == "john") {
      item.profession = "doctor";
    }
  });
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let count = 0;
  let arr = [];
  data.forEach((item) => {
    if (!arr.includes(item.profession)) {
      arr.push(item.profession);
    }
  });
  console.log(arr.length);
}
