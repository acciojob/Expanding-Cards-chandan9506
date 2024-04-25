//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll(".panel");
  
    panels.forEach(function(panel, index) {
      panel.addEventListener("click", function() {
        // Remove active class from all panels
        panels.forEach(function(panel) {
          panel.classList.remove("active");
        });
        // Add active class to clicked panel
        this.classList.add("active");
      });
    });
  });
