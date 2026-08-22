(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var status = document.getElementById("form-status");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
    if (status) {
      status.classList.add("show");
      status.setAttribute("role", "status");
      status.focus();
    }
  });
})();
