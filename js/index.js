
var siteName=document.getElementById("exampleFormControlInput1");
var dataUrlInput=document.getElementById("exampleFormControlInput2");
var allDataArray=[];
// console.log(dataUrlInput);
    //  console.log(allDataArray) // null 
    //                     el  Key 
if (localStorage.getItem('allproductsString')!=null) {
  allDataArray  = JSON.parse( localStorage.getItem('allproductsString') )
  // displayData()
  displayTable()
}

function displayData() {
// abl ma ye3red el montag  el user kateb el value sah wala ghalat ==> if
var massige= validationProduct()
 if(massige==true){

  if (datealsOpject!=undefined) {
    console.log(' data')
  }else{console.log('No data');}

var datealsOpject={ Name: siteName.value,  link: dataUrlInput.value }

allDataArray.push(datealsOpject)
localStorage.setItem('allproductsString' ,JSON.stringify(allDataArray))  // key ,  value

  console.log(allDataArray);

  clearDataaa();
  displayTable();
 

 }else{
  alert(massige) 
 }
}

function clearDataaa() {
    siteName.value='';
    dataUrlInput.value='';
}
//------------ show table ---------------
// var tableCartona=
function  displayTable( ){
   
    html='';
    for (var i = 0; i <allDataArray.length; i++){
        html+=`
     
        <tr>
          <td>${i+1}</td>
          <td>${allDataArray[i].Name}</td>
          <td><button class="btn btn-success" onclick="updattWeb()"> <i class="fa-solid fa-eye"></i> Visit</button></td>
          <td><button class="btn btn-danger" onclick="deleatWeb(${i})" ><i class="fa-solid fa-trash"></i> Deleat</button></td>

        </tr>
      
        
        `;  
    }

  document.getElementById("displayTable").innerHTML=html;    //مهمه أوي  كنت نسياها  ومن غيرها الفانكشن مش هتشتغل
     
}
//      el delet
function deleatWeb( hambozo){
  allDataArray.splice(hambozo,1);
   console.log('delated....')
  displayTable();
   localStorage.setItem('allproductsString',JSON.stringify(allDataArray))

}
//         el  Regex
function validationProduct(){// -> return boolean
  var regexName=/^[A-Z][a-z]{3,7}$/i
 var regexEmail=/^[a-z]@gmail.com/ig;
if (regexName.test(siteName.value)==false){
  return "please right Name"

}else if(regexEmail.test(dataUrlInput.value)==false){
  return" right email (a-z)@gmail.com"
}
return true

}

/**
 
var formss=  document.querySelector('was-validated');
regexName=/^[A-Z][a-z]{3,7}$/i;
regexEmail=/^[a-z]{3}@gmail.com $/i
 if (regexName.test(siteName.value)==false) {
   }
 
 */
















function updattWeb() {

  // siteName.push(value);
  // dataUrlInput.push(value);
  
}

















// function validateText(input) {
//   if (input.value.trim() === "") {
//       alert();
//       return false;
//   }
//      return true;
 
 
// }

// Document.getElementById('ghead').innerHTML="Date :"+Date()