


function loginUser(event) {
  event.preventDefault();

  let username = document.getElementById("loginUser").value;
  let password = document.getElementById("loginPass").value;

  if (username === "admin" && password === "1234") {

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("fullWebsite").style.display = "block";

  } else {
    document.getElementById("loginError").innerHTML =
      "❌ Wrong Username or Password!";
  }

  return false;
}


function openLogin() { 
      document.getElementById("loginModal").style.display = "flex"; 
    }

    function closeLogin() { 
      document.getElementById("loginModal").style.display = "none"; 
    }

    function checkLogin(event) {
      event.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let correctUsername = "abdike";
      let correctPassword = "1234";

      if (username === correctUsername && password === correctPassword) {
        alert("✅ Login successful! Welcome " + username);
        closeLogin();
        showWelcomeSection();
      } else { 
        alert("❌ Invalid username or password"); 
      }
    }

    function contactMessage(event) {
      event.preventDefault();
      alert("📩 Thank you for your message! I will reply soon.");
    }

    function showWelcomeSection() {
      document.getElementById("mainHeader").style.display = "none";
      document.getElementById("mainNav").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("projects").style.display = "none";
      document.getElementById("contact").style.display = "none";
      document.getElementById("mainFooter").style.display = "none";
      document.getElementById("welcomeSection").style.display = "block";
    }

    function logout() { 
      location.reload(); 
    }

    window.onclick = function(event) {
      let modal = document.getElementById("loginModal");
      if (event.target == modal) { 
        modal.style.display = "none"; 
      }
    }

    
    document.addEventListener('DOMContentLoaded', function() {
      const skillBars = document.querySelectorAll('.skill-progress');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
              entry.target.style.width = width;
            }, 300);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      skillBars.forEach(bar => {
        observer.observe(bar);
      });
    });
  function openLogin() { 
  document.getElementById("loginModal").style.display = "flex"; 
}

function closeLogin() { 
  document.getElementById("loginModal").style.display = "none"; 
}

function checkLogin(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "abdike" && password === "1234") {

    alert("✅ Welcome " + username);

    closeLogin();

    // Hide all sections
    document.getElementById("mainHeader").style.display = "none";
    document.getElementById("mainNav").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("mainFooter").style.display = "none";

    // Show Dashboard
    document.getElementById("dashboard").style.display = "block";

    loadDashboard();
    

  } else {
    alert("❌ Invalid Username or Password");
  }
}

