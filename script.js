var saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function () {
  // Get the contact information from the website
  var contact = {
    name: "Mehmet Burhan Ongan",
    phone: "05438680810",
    email: "mbo1907@hotmail.com"
  };
  // create a vcard file
  var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);

  const newLink = document.createElement('a');
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;

  newLink.click();
});


document.addEventListener("DOMContentLoaded", function () {
  var qrButton = document.getElementById("qrButton");
  var qrCollapse = document.getElementById("qrCollapse");

  // Show QR modal when button is clicked
  qrButton.addEventListener("click", function () {
    if (qrCollapse.classList.contains("show")) {
      qrCollapse.classList.remove("show");
    } else {
      qrCollapse.classList.add("show");
    }
  });

  // Close QR modal on outside click
  document.addEventListener("click", function (event) {
    if (!qrButton.contains(event.target) && !qrCollapse.contains(event.target)) {
      qrCollapse.classList.remove("show");
    }
  });

  // Close QR modal on scroll
  window.addEventListener("scroll", function () {
    qrCollapse.classList.remove("show");
  });
});



var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});
