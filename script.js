function checkPassword() {
  var password = document.getElementById("password").value;

  // Compare the entered password with the correct password
  if (password === "17112023") {
    // If the password is correct, show success message and redirect to a new page
    document.getElementById("passwordForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";

    // Redirect after 2 seconds (adjust the time as needed)
    setTimeout(function () {
      window.location.href = "new_page.html";
    }, 2000);
  } else {
    // If the password is incorrect, you can show an error message or take other actions
    alert("Sai rồi nha. Nhập lại đi nè ebe !!!");
  }
}

function description() {
  var script = document.querySelector(".script");

  script.addEventListener("click", () => {
    alert("Password là ngày mà anh tặng em món quà đầu tiên");
  });
}
