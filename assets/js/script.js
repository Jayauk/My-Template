// Show the "Back to Top" button when the user scrolls down 100px
window.onscroll = function () {
    let button = document.getElementById("back-to-top");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.body.classList.add('scrolled'); // Add class to body when scrolled
    } else {
        document.body.classList.remove('scrolled'); // Remove class when back to top
    }
};

// Scroll back to the top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

$(document).ready(function () {
    // Toggle Navbar on mobile
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('show');
    });

    // Smooth scroll for anchor links
    $("a[href^='#']").on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Show or hide the button depending on the scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // Smooth scroll to top when the button is clicked
    $('#backToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Open modal
    $('#openModal').click(function () {
        $('#myModal').fadeIn();
    });

    // Close modal
    $('#closeModal').click(function () {
        $('#myModal').fadeOut();
    });

    // Simple Image Slider
    var currentIndex = 0;
    var items = $('.slider-item');  // Get all the slider items
    var itemCount = items.length;   // Get the total number of items

    // Function to show the current image
    function showImage(index) {
        items.hide();
        $(items[index]).fadeIn();
    }

    // Next Image Button
    $('#next').click(function () {
        currentIndex = (currentIndex + 1) % itemCount;
        showImage(currentIndex);
    });

    // Previous Image Button
    $('#prev').click(function () {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showImage(currentIndex);
    });

    // Show the first image initially
    showImage(currentIndex);

    $('#contactForm').submit(function (event) {
        var isValid = true;

        // Check if name is empty
        if ($('#name').val() === '') {
            isValid = false;
            $('#name').addClass('error');
        } else {
            $('#name').removeClass('error');
        }

        // Check if email is empty
        if ($('#email').val() === '') {
            isValid = false;
            $('#email').addClass('error');
        } else {
            $('#email').removeClass('error');
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Toggle dark mode
    $('#darkModeToggle').click(function () {
        $('body').toggleClass('dark-mode');
    });

    // When a service card is clicked
    $('.service-card').click(function () {
        var title = $(this).find('h3').text();  // Get service title
        var description = $(this).find('p').text();  // Get service description

        // Set the title and description in the modal
        $('#modalTitle').text(title);
        $('#modalDescription').text(description);

        // Display the modal
        $('#serviceModal').fadeIn();
    });

    // Close the modal when the close button is clicked
    $('.close').click(function () {
        $('#serviceModal').fadeOut();
    });

    // Close the modal when clicked outside of the modal content
    $(window).click(function (event) {
        if ($(event.target).is('#serviceModal')) {
            $('#serviceModal').fadeOut();
        }
    });

    // Services
    // When a service card is clicked
    $('.service-card').click(function () {
        var title = $(this).data('title');  // Get service title
        var description = $(this).data('description');  // Get service description

        // Set the title and description in the modal
        $('#modalTitle').text(title);
        $('#modalDescription').text(description);

        // Display the modal
        $('#serviceModal').fadeIn();
    });

    // Close the modal when the close button is clicked
    $('.close').click(function () {
        $('#serviceModal').fadeOut();
    });

    // Close the modal when clicked outside of the modal content
    $(window).click(function (event) {
        if ($(event.target).is('#serviceModal')) {
            $('#serviceModal').fadeOut();
        }
    });

});
