var openermenu = document.querySelector(".menu");
var menubutton = document.getElementById('menubutton');
var boldElement = menubutton.querySelector("b");
var originalText = boldElement.textContent;

document.getElementById('menubutton').addEventListener('click', function() {
    openermenu.classList.toggle("active");
    menubutton.classList.toggle("opened");
    
    if (boldElement.textContent === "x") {
        boldElement.textContent = originalText; // Eğer içerik "x" ise orijinal içeriği geri al
    } else {
        boldElement.textContent = "x";
    }

});

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            var targetId = link.getAttribute("href"); // Hedef bölümün ID'sini alır
            var targetElement = document.querySelector(targetId); // Hedef elementi seçer
            
            if (targetElement) {
                // Belirlediğiniz animasyonlar veya scroll işlemleri burada gerçekleştirilebilir
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }

            document.querySelector('.menu.active').classList.remove('active');
            menubutton.classList.remove('opened');
            boldElement.textContent = "...";
            event.preventDefault();
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks2 = document.querySelectorAll(".top-center a");

    menuLinks2.forEach(function(link) {
        link.addEventListener("click", function(event) {
            var targetId2 = link.getAttribute("href"); // Hedef bölümün ID'sini alır
            var targetElement2 = document.querySelector(targetId2); // Hedef elementi seçer
            
            if (targetElement2) {
                // Belirlediğiniz animasyonlar veya scroll işlemleri burada gerçekleştirilebilir
                targetElement2.scrollIntoView({
                    behavior: "smooth"
                });
            }

            event.preventDefault();
        });
    });
});