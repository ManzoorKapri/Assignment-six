// chapter no 21- 25
// task1 

// var firstName = prompt('Enter your first Name');
// var lastName = prompt('Enter your Last Name');

// alert("Hi " + firstName + " " + lastName);

// task2 

// var favPhone = prompt('Enter your favourite phone model');
// var fp = favPhone.length;
// document.write('Your favourite phone is: ' + fp );


// task3 

// var nationality = "pakistani";
// var nat = nationality.indexOf("n");
// document.write("String: Pakistani" + "<br>" + "indexOf 'n': " + nat);


// task4 

// var firstCode = "Hello World";
// var fc = firstCode.lastIndexOf("l");
// document.write("The index of last l in Hello world is: " + fc);

// task5 

// var nationality1 = "pakistani";
// var nr = nationality1.charAt(3);
// document.write("Pakistani" + "<br>" + "Character at index3 is: " + nr);

// task6 
// var firstName = prompt('Enter your first Name');
// var lastName = prompt('Enter your Last Name');

// var mv = firstName + lastName;


// alert("Hi " + mv);

// task7 

// var firstCity = "Hydrabad"
// var secondCity = firstCity.replace("Hydrabad", "Islamabad");
// document.write("<br>" + "City:" + "Hydrabad" + "After replacement" + "<br>"+ secondCity + "<br>");


// task8 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacementi = message.replace("and", "&", "and", "&");

// document.write(replacementi);

// task9 

// var string1 = "472";
// var number = parseInt("472", 472);
// document.write("Value: 472" + "<br>" + "Type: String" + "<br>" + "Value: 472" + "<br>" + "Type: " + "number");

// task10 

// var ui = prompt("Write any word here..");
// var ui1 = ui.toUpperCase();
// document.write(ui1);

// task11 

// var string = prompt("write javascript here");

// string.charAt(0).toUpperCase()+string.slice(1);
// alert(string);

// task 12 

// var y = 35.36;
// var z = parseInt("35.36", 3536);
// document.write("Number: " + y + "<br>" + "Result: "  + "3536");

// task13 
// var userName = prompt('Enter a value')
// var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

// for (var i = 0; i < chkfile.value.length; i++)
// {
//   if (iChars.indexOf(chkfile.value.charAt(i)) != -1)
//   {
//      alert ("Username has special characters ~`!#$%^&*+=-[]\\\';,/{}|\":<>? \nThese are not allowed\n");
//      return false;
//   }
// }

// task14 

// var search = prompt("search");
// var arr = ["cake", "apple pie", "cookie", "chips", "patties",];
//    var search = prompt("Input").value;
//    for (i=0; i<arr.length; i++){
//       if (arr[i] == search) {
//          alert(arr[i]);
//       } else {
//          alert("Value not found");
//       }
//    }

// task15 

// var password = prompt('Enter Your Password');
// var vali =["A-Z"]
// if (password == '') 
// alert ("Please enter Password");
// else
//     alert('You entered right password');

// task16

// var str = "University of Karachi";
 

// var chars = str.split("");


// document.write(chars[0] + "<br>"); 
// document.write(chars[1] + "<br>"); 
// document.write(chars[2] + "<br>"); 
// document.write(chars[3] + "<br>");
// document.write(chars[4] + "<br>");
// document.write(chars[5] + "<br>");
// document.write(chars[6] + "<br>");
// document.write(chars[7] + "<br>");
// document.write(chars[8] + "<br>");
// document.write(chars[9] + "<br>");
// document.write(chars[10] + "<br>");
// document.write(chars[11] + "<br>");
// document.write(chars[12] + "<br>");
// document.write(chars[13] + "<br>");
// document.write(chars[14] + "<br>");
// document.write(chars[15] + "<br>");
// document.write(chars[16] + "<br>");
// document.write(chars[17] + "<br>");
// document.write(chars[18] + "<br>");
// document.write(chars[19] + "<br>");
// document.write(chars[20] + "<br>");
// document.write(chars[chars.length - 1]); // Outputs: !

// task17 


// var str = prompt("Hello world!"); 
// var res = str.slice(-1);
// document.write(res);

// task 18 


// var cs = "The quick brown fox jumps over the lazy dog"
// var count = cs.split('the').length
// document.write(count);

// chapter 26- 30 

// task1

// var pi = prompt("Write positive number here");
// var r = Math.round(pi);
// pi2 = Math.floor(.00001);
// document.write("number: " + pi + "<br>" + "Round off value:" + r + "<br>" + "floor value:" + r + "<br>" +"Ceil value: " + pi2);

// task2 
// var pi = prompt("Write negative number here", 'Your result is: ');
// var r = Math.round(-pi);
// pi2 = Math.floor(0.00001);
// document.write("number: " + pi + "<br>" + "Round off value:" + r + "<br>" + "floor value:" + r + "<br>" +"Ceil value: " + pi2);

// task3 

// var d = prompt('Write absolute value');
// var e = Math.round(-d);
// document.write('the absolute value of your input is:  ' + d);

// task4 

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// if (numberOfStars === 1)
// alert(".");
// if (numberOfStars === 2)
// alert("..");
// if (numberOfStars === 3)
// alert(":.");
// if (numberOfStars === 4)
// alert("::");
// if (numberOfStars === 5)
// alert("::.");
// if (numberOfStars === 6)
// alert(":::");

// // task 5 


// var headUser = prompt("Enter Heads Username.");
// var tailUser = prompt("Enter tails Username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// if(floor === 0){
//     alert("Heads " + headUser + " win the toss");
// }esle
// {
//     alert("Tail " + tailUser + " win the toss");
// }


// task 6 


// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var ivalue = Math.floor(improvedNum);
// alert(ivalue);

// task 7 

// pt('Enter your weight');
// var weight = Math.random();
// var userWeight = (input * 10);
// if(userWeight >=100)
// alert(userWeight + " this wieght is good");

// task 7 

// var input = prompt('Enter your weight');
// var weight = Math.random();
// var userWeight = (input * 10);
// if(userWeight =100)
// alert(userWeight + " this wieght is good");

// task 8 
// var userInput = prompt('Write a number between 1-10');
// userInput = Math.random();
// if(userInput === "2"){
//         alert("Congratulation you are lucky");
//     }else
//     {
//         alert(userInput + " sorry try again");
//     }
