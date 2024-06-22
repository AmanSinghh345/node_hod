//var add=(a,b)=>{return a+b;}
/*var add=(a,b)=>a+b;
var result=add(2,7);
console.log(result);
(function(){
    console.log('prince is added');
})();*/
//callback
/*function callback(){
    console.log('aman is calling a callback function');
}
const add=function(a,b,callback){
    var result=a+b;
    console.log('result: ' + result);
    callback();
}
add(3,4,callback);*/
/*
var fs = require("fs");
var os = require("os");
var user = os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile("greeting.txt", "Hi" + user.username + "!\n", () => {
  console.log("file is created");
});
console.log(fs);
*/

/*
const notes=require('./notes.js');
console.log('server file is imported');
 var edge=notes.age;
var result=notes.addNumber(edge+18,10);
console.log(edge);
console.log('result is now '+result);*/
/*
var _=require('lodash');
var data=["person","person",1,2,1,3,2,'name','age','2'];
var filter=_.uniq(data)
console.log(filter);
console.log(_.isString(true));
console.log(_.isString(false));
console.log(_.isString('name'));
*/
/*
//string to json
const jsonString='{"name":"aman","age":30,"city":"new york"}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.name);

//json to string
const objectToConvert={
    name:"Alice",
    age:20
};
const json=JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json);
*/
