

var employee = (function() {
	this.name = getName();
	this.age = getAge();
  this.salary = getSalary();
  function getName(name) {
    return setName();
  }
  function getAge(age) {
    return setAge();
  }
  function getSalary(salary) {
    return setSalary();
  }
  return {
 setAge: function(age) {
  return age;
 },
 setName: function (name) {
  return name;
 },
 setSalary: function (salary) {
  return salary;
 },
 increaseSalary: function (percentage) {
  return getSalary() * percentage +"%"; 
 },
increaseAge: function () {
  var setAge = getAge()+1;
  return setAge;
}
  }
    
  }());