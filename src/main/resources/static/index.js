function sendJSON(){ 
			
  let result = document.querySelector('.result'); 
  let firstName = document.querySelector('#firstName');
  let lastName = document.querySelector('#lastName');
  let emailId = document.querySelector('#emailId');
  let boxNumber = document.querySelector('#boxNumber');
  
  // Creating a XHR object 
  let xhr = new XMLHttpRequest(); 
  //let url = "/api/v1/orders";
  let url = "/api/v1/orders";


  // open a connection 
  xhr.open("POST", url, true);

  // Set the request header i.e. which type of content you are sending 
  xhr.setRequestHeader("Content-Type", "application/json"); 

  // Create a state change callback 
  xhr.onreadystatechange = function () { 
    if (xhr.readyState === 4 && xhr.status === 200) { 
      // Print received data from server 
      result.innerHTML = this.responseText;
    }
    else
      result.innerHTML = "ERROR, YOU ORDERED BEFORE!";
  }; 

  // Converting JSON data to string 
  var data = JSON.stringify({ "firstName": firstName.value, "lastName": lastName.value, "emailId": emailId.value, "boxNumber": boxNumber.value }); 

  // Sending data with the request 
  xhr.send(data);
} 