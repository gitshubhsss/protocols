const radius = [3, 1, 2, 4];



//Funtion 1
const calulateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * (radius[i] * radius[i]));
  }
  return output;
};
console.log(calulateArea(radius));

//Funtion 2
const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(calculateCircumference(radius));

//Funtion 3
const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(radius[i] * 2);
  }
  return output;
};
console.log(calculateDiameter(radius));
