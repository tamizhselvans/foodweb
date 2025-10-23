

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // input 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const people = document.getElementById("people").value.trim();

    let isValid = true;
    let errorMessage = "";

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Validate 
    if (name === "" || email === "" || phone === "" || people === "") {
      errorMessage += "⚠️ Please fill out all fields.\n";
      console.log("⚠️ Please fill out all fields.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      errorMessage += "⚠️ Invalid email format.\n";
      console.log("⚠️ Invalid email format.");
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      errorMessage += "⚠️ Phone number must be 10 digits.\n";
      console.log("⚠️ Phone number must be 10 digits.");
      isValid = false;
    } else if (parseInt(people) <= 0) {
      errorMessage += "⚠️ Number of people must be greater than 0.\n";
      console.log("⚠️ Number of people must be greater than 0.");
      isValid = false;
    }

    
    if (!isValid) {
      alert(errorMessage);
    } 
    
    else {
      const formData = {
        name: name,
        email: email,
        phone: phone,
        people: parseInt(people),
      };

      console.log("✅ Booking Successful!");
      console.log("Form Data:", formData);
      alert("🎉 Booking Successful! Check console for details.");

      form.reset();
    }
  });
});
