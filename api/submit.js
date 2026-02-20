const form = document.getElementById("inviteForm");

console.log("evooooo");

form.onsubmit = function (event) {
  event.preventDefault();

  emailjs.sendForm("service_vencanje", "template_vencanje", this).then(
    function () {
      alert("Poruka je uspešno poslata!");
      form.reset();
      // If you have confetti code, trigger it here!
    },
    function (error) {
      alert("Greška: " + JSON.stringify(error));
    }
  );
};
