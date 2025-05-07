//window.alert("Welcome to Snapdeal Website");

// NAVBARS FUNCTIONALITY

window.onscroll = function () {
    const scrollPosition = window.scrollY;
    const pinkBar = document.querySelector(".one"); // DOM TRAVERSAL METHOD
    const whiteBar = document.querySelector(".two");
    const imageBar = document.querySelector(".three");
  
    if (scrollPosition > 8) {
      pinkBar.classList.add("hide-pink"); // CHANGING STYLE OF ANY HTML ELEMENT BY CHANGING THE CLASS LIST
      whiteBar.classList.add("nav-fixed");
  
      // Get whiteBar's height to place imageBar right below it
      const whiteBarHeight = whiteBar.offsetHeight;
      imageBar.classList.add("image-fixed");
      imageBar.style.top = whiteBarHeight + "px";
    } else {
      pinkBar.classList.remove("hide-pink");
      whiteBar.classList.remove("nav-fixed");
      imageBar.classList.remove("image-fixed");
      imageBar.style.top = ""; // reset top
    }
  };



// LOCATION ON/OFF

  document.addEventListener("DOMContentLoaded", function () {
    const locationToggle = document.getElementById("location-toggle");
    const locationIcon = document.getElementById("location-icon");
  
    if (locationToggle && locationIcon) {
      locationToggle.onclick = function () {
        if (locationIcon.textContent === "location_on") {
          locationIcon.textContent = "location_off";
          console.log("Location turned off!");
          setTimeout(() => {
            alert("Location has been turned off");
          }, 50); // delay for UI to update
        } else {
          locationIcon.textContent = "location_on";
          console.log("Location turned on!");
          setTimeout(() => {
            alert("Location is turned on");
          }, 50);
        }
      };
    } else {
      console.log("Error: Could not find location elements.");
    }
  });




// LOGIN FLOW
  
  document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById("login-trigger");
    const popup = document.getElementById("signup-popup");
    const overlay = document.getElementById("overlay");
    if (loginBtn) {
      loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "block";
        overlay.style.display = "block";
  
        popup.style.width = "687px";
        popup.style.height = "470px";
      });
    }
    // Step 1: Move to Step 2 after email and OTP
    function nextStep() {
      const email = document.getElementById("email");
      const otp = document.getElementById("otp"); // DOM TRAVERSAL METHOD
  
      if (email && email.value.trim() !== "" && otp && otp.value.trim() !== "") {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
  
        popup.style.width = "725px";
        popup.style.height = "671px";
      } else {
        alert("Please enter both your email/mobile and OTP.");
      }
    }
    const continueBtn = document.querySelector("#step1 button");
    if (continueBtn) {
      continueBtn.addEventListener("click", nextStep);
  
      // Enable Enter key for Step 1 fields
      ["email", "otp"].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
          input.addEventListener("keydown", function (event) {  // KEY-PRESS EVENT ENTER
            if (event.key === "Enter") {
              event.preventDefault();
              continueBtn.click();
            }
          });
        }
      });
    } 
    // Step 2: Proceed to Step 3 after filling out the details
    function completeSignup() {
      const name = document.getElementById("name");
      const mobile = document.getElementById("mobile");
      const password = document.getElementById("password");
      const date = document.getElementById("date");
  
      if (name.value && mobile.value && password.value && date.value) {
        document.getElementById("step2").style.display = "none";
        const step3 = document.getElementById("step3");
        step3.style.display = "block";
        step3.classList.add("fade-in-out");
  
        popup.style.width = "692px";
        popup.style.height = "470px";
  
        setTimeout(() => {
          popup.style.display = "none";
          overlay.style.display = "none";
          step3.classList.remove("fade-in-out");
          step3.style.display = "none";
          document.getElementById("step1").style.display = "block";
          document.querySelector("#login-trigger span").textContent = "Profile";
        }, 5000);
      } else {
        alert("Please fill in all required fields.");
      }
    }
    const proceedBtn = document.getElementById("proceed-btn");
    if (proceedBtn) {
      proceedBtn.addEventListener("click", completeSignup);
  
      // Enable Enter key for Step 2 fields
      const step2Fields = ["name", "address", "mobile", "password", "date"];
      step2Fields.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
          input.addEventListener("keydown", function (event) {    // KEY-PRESS EVENT ENTER
            if (event.key === "Enter") {
              event.preventDefault();
              proceedBtn.click();
            }
          });
        }
      });
    }
    const closeBtn = document.getElementById("continue-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "none";
        overlay.style.display = "none";
  
        document.getElementById("step1").style.display = "block";
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "none";
      });
    }
  });  
  function goToStep1() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step1").style.display = "block";
  
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("address").value = "";
    document.getElementById("password").value = "";
    document.getElementById("date").value = "";
  
    const popup = document.getElementById("signup-popup");
    popup.style.width = "687px";
    popup.style.height = "470px";
  }
  



  // MOUSE-OVER MOUSE-OUT EVENT

  document.addEventListener('DOMContentLoaded', function () {
    const hoverColor = 'black';
    const defaultColor = '#464646';
  
    // Apply hover effect to all buttons with class 'view-more'
    document.querySelectorAll('button.view-more').forEach(button => {
      // Set default color
      button.style.color = defaultColor;
  
      button.addEventListener('mouseover', function () {
        this.style.color = hoverColor;
        this.style.cursor = 'pointer';
      });
  
      button.addEventListener('mouseout', function () {
        this.style.color = defaultColor;
      });
    });
  });
  





  
  
  


  
  
  