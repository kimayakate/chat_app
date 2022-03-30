// $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });


// var myInput = document.getElementById("password");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");
// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//     document.getElementById("message").style.display = "block";
//   }

//   // When the user clicks outside of the password field, hide the message box
//   myInput.onblur = function() {
//     document.getElementById("message").style.display = "none";
//   }

//   // When the user starts to type something inside the password field
//   myInput.onkeyup = function() {
//     // Validate lowercase letters
//     var lowerCaseLetters = /[a-z]/g;
//     if(myInput.value.match(lowerCaseLetters)) {
//       letter.classList.remove("invalid");
//       letter.classList.add("valid");
//     } else {
//       letter.classList.remove("valid");
//       letter.classList.add("invalid");
//   }

//     // Validate capital letters
//     var upperCaseLetters = /[A-Z]/g;
//     if(myInput.value.match(upperCaseLetters)) {
//       capital.classList.remove("invalid");
//       capital.classList.add("valid");
//     } else {
//       capital.classList.remove("valid");
//       capital.classList.add("invalid");
//     }

//     // Validate numbers
//     var numbers = /[0-9]/g;
//     if(myInput.value.match(numbers)) {
//       number.classList.remove("invalid");
//       number.classList.add("valid");
//     } else {
//       number.classList.remove("valid");
//       number.classList.add("invalid");
//     }

//     // Validate length
//     if(myInput.value.length >= 8) {
//       length.classList.remove("invalid");
//       length.classList.add("valid");
//     } else {
//       length.classList.remove("valid");
//       length.classList.add("invalid");
//     }
//   }

function displayRegistrationForm(){
    document.getElementById('register-form').style.display = "block";
    document.getElementById('login-form').style.display = "none";
}

function displayLoginForm(){
    document.getElementById('register-form').style.display = "none";
    document.getElementById('login-form').style.display = "block";
}

function registration() {
    var username = document.getElementById("t1").value;
    var email = document.getElementById("t2").value;
    var pwd = document.getElementById("t3").value;
    var cpwd = document.getElementById("t4").value;

    //email id expression code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (username == '') {
        alert('Please enter your username');
    }
    else if (!letters.test(username)) {
        alert('Username field required only alphabet characters');
    }
    else if (email == '') {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email)) {
        alert('Invalid email');
    }

    else if (pwd == '') {
        alert('Please enter Password');
    }
    else if (cpwd == '') {
        alert('Enter Confirm Password');
    }
    else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if (pwd != cpwd) {
        alert('Password not Matched');
    }
    else if (document.getElementById("t4").value.length < 6) {
        alert('Password minimum length is 6');
    }
    else if (document.getElementById("t4").value.length > 12) {
        alert('Password max length is 12');
    }
    else {
        alert('Thank You for Registration & You are Redirecting to Website');
        // Redirecting to other page or webste code. 
        window.location = "https://tutorial.eyehunts.com//";
    }
}


function login() {
    var username = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (username == '') {
        alert("please enter user name.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if (!filter.test(username)) {
        alert("Enter valid email id.");
    }
    else if (document.getElementById("pwd1").value.length < 6) {
        alert('Password minimum length is 6');
    }
    else if (document.getElementById("pwd1").value.length > 12) {
        alert('Password max length is 12');
    }
    // else if(pwd.length < 6 || pwd.length > 6)
    // {
    // 	alert("Password min and max length is 6.");
    // }
    else {
        alert('Thank You for Login & You are Redirecting to Website');
        //Redirecting to other page or webste code or you can set your own html page.
        //    window.location = "https://www.campuslife.co.in";
        // window.navigate("Profilepage.html");

    }
}
/*-- after login page----*/

$('.nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass('active');
})

const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');


function tabs(panelIndex) {
    tab.forEach(function (node) {
        node.style.display = 'none';
    });
    if (tab[panelIndex]) {
        tab[panelIndex].style.display = 'block';
    }
}
tabs(0);


let bio = document.querySelector('.bio');

function bioText() {
    if (bio) {
        bio.oldText = bio.innerText;
        bio.innerText = bio.innerText.substring(0, 100) + "...";
        bio.innerText += "&nbsp;" + `<span onclick='addLength()' id='see-more-bio'>See More</span>`;
    }

}
bioText();

function addLength() {
    bio.innerText = bio.oldText;
    bio.innerText += "&nbsp;" + `<span onclick='addLength()' id='see-less-bio'>See Less</span>`;
}

/*-- profile pic upolad---*/
// $(document).ready(function() {

    
//     var readURL = function(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('.profile-pic').attr('src', e.target.result);
//             }
    
//             reader.readAsDataURL(input.files[0]);
//         }
//     }
    

//     $(".file-upload").on('change', function(){
//         readURL(this);
//     });
    
//     $(".upload-button").on('click', function() {
//        $(".file-upload").click();
//     });
// });
function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
                        $(function() {
              $('#profile-image1').on('click', function() {
                  $('#profile-image-upload').click();
              });
          });
          
          

















// /*-- messaging feature---*/
// function displaymessage(){
//     //Create an array where the message along with it's ID will be stored.
// let message = [];

// // This fuction will enables us to add the message to the DOM
// function addMessage(text){
//     //Object where message will be stored
//     const chat = {
//         text,
//         id: Date.now()
//     }

//     message.push(chat);
//     console.log(message);
// }


// //Create event listener to detect when a message has been submitted
// const form = document.querySelector('.message-form');
// form.addEventListener('submit', event => {
//     event.preventDefault();

//     //input to save the message itself
//     const input = document.querySelector('.typedMessage');

//     //This helps us to detect empty messages and ignore them
//     const text = input.value.trim();

//     if(text !== ''){
//         addMessage(text);
//         input.value = '';
//         input.focus();

//     }
// });



// function addMessage(text){
//     //Object where message will be stored
//     const chat = {
//         text,
//         id: Date.now()
//     }

//     message.push(chat);

//     //Render message to the screen
//     const list = document.querySelector('.messages');
//     list.insertAdjacentHTML('beforeend', 
//         `<p class="message-item" data-key="${chat.id}">
//             <span>${chat.text}</span>
//         </p>`

//     );

// }

// function addMessage(text){
//     //Object where message will be stored
//     const chat = {
//         text,
//         id: Date.now()
//     }

//     message.push(chat);

//     //Render message to the screen
//     const list = document.querySelector('.messages');
//     list.insertAdjacentHTML('beforeend', 
//         `<p class="message-item" data-key="${chat.id}">
//             <span>${chat.text}</span>
//         </p>`

//     );

//     // Delete the message from the screen after 2 seconds
//     let timer = setTimeout(() => {
//         Array.from(list.children).forEach((child) => 
//        list.removeChild(child))
//        clearTimeout(timer);
//       },2000);

// }


// }














