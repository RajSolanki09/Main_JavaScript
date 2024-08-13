let stud = {
    name:"node js",
    number:1234567,
    grid:7643,
    city:"Surat",
    add:{city:"surat",state:"gujarat"},
    skill:["html","css","javaScript"]
}
console.log(stud); // all value Print
console.log(stud.grid); // only one element Print 
console.log(stud.add.state); // nasted object Print
console.log(stud.skill[1]); // for Array index print
console.log(stud.skill[stud.skill.length-1]); // to find final value in dynamic style

let store = stud.skill.pop() // to find final value in dynamic style
console.log(store);

