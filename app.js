var age = prompt("enter your age");
if (age < 0) {

    alert("error can not have a negative number");

} else if (age == 21) {
    alert("happy 21st birthday");
} else if (age % 2 == 1) {
    alert("this is a log number");
} else if ((Math.sqrt(age) % 1) !== 0) {
    alert("this number is a perfect square number");
}
