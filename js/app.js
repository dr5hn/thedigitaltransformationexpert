var btns = document.querySelectorAll(".calendly-init");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    Calendly.initPopupWidget({
      url: "https://calendly.com/romanicoach/free-strategy-meeting-1-to-1",
    });
  });
});
