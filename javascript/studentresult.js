const name=prompt("Enter your name:");
let marks;
let total=0;
let grade;
for(let i=1;i<=5;i++){
     marks=Number(prompt("Enter your marks: "));
     

    total=total+marks;
}

let average=total/5;
if(average>=80){
    grade="A+";
}
else if(average>=70){
    grade="A";
}

else if(average>=60){
   grade="A-";
}
else if(average>=50){
    grade="B";
}
else if(average>=40){
    grade="C";
}
else{
   grade="F"; 
}


console.log("Name:"+name);
console.log("Total Marks:"+total);
console.log("Average:"+average);
console.log("Grade:"+grade);


