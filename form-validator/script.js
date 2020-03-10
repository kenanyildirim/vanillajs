const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

showSuccess = input => {
  input.parentElement.className = "form-control success";
};

checkEmail=(input)=>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(input.value).toLowerCase())) {
        showError(input,`${getFieldName(input)} is not valid email`);
    }
    else{
        showSuccess();
    }
}

getFieldName=(input)=>{
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

checkRequired=(inputs)=>{
let status=true;
inputs.forEach((input)=>{
    if(input.value.trim()==''){
        showError(input,`${ getFieldName(input)} is required`);
        status=false;
    }
    else{
        showSuccess(input);
    }
});
return status;
}

checkLength=(input,min,max)=>{
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters` );
    }

    else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters` );
    }
    else{
        showSuccess();
    }
}

checkPasswordsMatch=(input1,input2)=>{
    if(input1.value!==input2.value){
        showError(input2,'password do not match...');
    }
    else{
        showSuccess(input2);
    }
}

//event listeners
form.addEventListener("submit", e => {
  e.preventDefault();
  let requiredStatus=checkRequired([username,email,password,password2]);
  if(!requiredStatus){
    return;
  }
  checkLength(username,3,15);
  checkLength(password,6,25);
  checkEmail(email);
  checkPasswordsMatch(password,password2);
 
});
