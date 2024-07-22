var isBlack = true;
document.getElementById("changeColorButton").addEventListener("click", function() {
    if (isBlack) {
        // Change body background color to black and text color to beige
        document.body.style.backgroundColor = "black";
        document.body.style.color = "beige";
        // Change text color of navigation links in header
        document.querySelectorAll('a').forEach(function(link) {
            link.style.color = "beige";
        });
        document.getElementById('logo-icon').style.color = "beige";
        // Change border color of service sections to beige
        document.querySelectorAll('.service').forEach(function(service) {
            service.style.borderColor = "beige";
        });

        document.querySelectorAll('.card').forEach(function(card) {
            card.style.borderColor = "beige";
        });

        document.querySelectorAll('footer').forEach(function(footer) {
            footer.style.borderColor = "beige";
        });
    } else {
        // Change body background color to beige and text color to black
        document.body.style.backgroundColor = "beige";
        document.body.style.color = "black";
        // Change text color of navigation links in header
        document.querySelectorAll('a').forEach(function(link) {
            link.style.color = "black";
        });
        document.getElementById('logo-icon').style.color = "black";
        // Change border color of service sections to black
        document.querySelectorAll('.service').forEach(function(service) {
            service.style.borderColor = "black";
        });

        document.querySelectorAll('.card').forEach(function(card) {
            card.style.borderColor = "black";
        });

        document.querySelectorAll('footer').forEach(function(footer) {
            footer.style.borderColor = "black";
        });
    }

    isBlack = !isBlack;
});



document.querySelectorAll('.styled-button').forEach(function(btn) {
    btn.addEventListener("click", function() {
        var modal = this.nextElementSibling;
        modal.style.display = "block";
    });
});

document.querySelectorAll('.close').forEach(function(span) {
    span.addEventListener("click", function() {
        var modal = this.closest(".modal");
        modal.style.display = "none";
    });
});

window.addEventListener("click", function(event) {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

