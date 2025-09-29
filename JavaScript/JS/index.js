// console.log("hello world");
// var a=20;
// console.log("a="+a);


// var a = 30;
// if(a>20){
//     var a=50;
//     console.log("a inside value"+a);
// }
// else{
//     console.log("inside else statement");
// }
// console.log("a outside value"+a)


// function greetings(msg){
//     return "hiiiiii"+" "+msg;
// }
// const mssg=greetings("Jiya");
// console.log(mssg);


// const data = function(msg){
//      return "hiiiiii"+" "+msg;
// }
// const mssg=data("Jiya");
// console.log(mssg);



// const data=()=>{
//     console.log("hehehhehe")
// }
// data();




// const data=(msg)=>{
//     console.log("hehehhehe"+ " "+msg)
// }
// data("guyzzzzzzzz");



// const data=(msg)=>{
//      return ("hiiiii")+ msg;
// }
// console.log(result=data("hehe"));



// const data=(msg)=>msg;
// const data1=data("hiiii");
// console.log(data1);


//IIFE

// (()=>{
//     console.log("hiiiiii.....hellooooooo");
// })();


// setTimeout(()=>{console.log("helloooo")},1000);

// setInterval(()=>{console.log("helloooo")},10);
//ctrl+c kr lena rokne ke liye


// function greetings(msg="byeee"){
//     console.log("hello "+msg);
// }
// greetings();


// function greetings(msg="byeee"){
//     console.log("hello "+msg);
// }
// greetings("Welcome");



function selectLanguage(lang){
    let data;
    if(lang=='java'){
        function JavaCompiler(){
            return "Hey, Java Compiler Calling....";
        }
        data=JavaCompiler();
    }
    else if(lang=='C'){
        function CCompiler(){
            return "Hy, C Compiler Calling....";
        }
        data=CCompiler();
    }
    else{
        data="No Compiler Available";
    }
    return data;
}
console.log(selectLanguage("java"));
console.log(selectLanguage("C"));
console.log(selectLanguage("Python"));