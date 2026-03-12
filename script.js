$(document).ready(function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Mobile menu toggle
    $('#mobile-menu-btn').click(function() {
        $('#mobile-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    // Close mobile menu when clicking on a link
    $('#mobile-menu a').click(function() {
        $('#mobile-menu').removeClass('active');
        $('#mobile-menu-btn').find('i').removeClass('fa-times').addClass('fa-bars');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'swing');
        }
    });

    // Scroll to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#scroll-top').fadeIn().css('display', 'flex');
        } else {
            $('#scroll-top').fadeOut();
        }

        // Add shadow to navbar on scroll
        if ($(this).scrollTop() > 50) {
            $('nav').addClass('nav-shadow');
        } else {
            $('nav').removeClass('nav-shadow');
        }
    });

    $('#scroll-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Counter animation for stats
    let counterAnimated = false;
    
    function animateCounter() {
        if (counterAnimated) return;
        
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = parseInt($this.attr('data-count'));
            
            var elementTop = $this.offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < viewportBottom - 100) {
                counterAnimated = true;
                
                $('.counter').each(function() {
                    var $counter = $(this);
                    var target = parseInt($counter.attr('data-count'));
                    
                    $({ countNum: 0 }).animate({
                        countNum: target
                    }, {
                        duration: 2500,
                        easing: 'swing',
                        step: function() {
                            $counter.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $counter.text(target + '+');
                        }
                    });
                });
            }
        });
    }

    $(window).on('scroll', animateCounter);
    animateCounter();

    // Parallax effect for hero section
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('.hero-gradient').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
    });

    // Add hover effect to cards with enhanced shadow
    $('.card-shadow').hover(
        function() {
            $(this).css({
                'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.15)',
                'transform': 'translateY(-5px)'
            });
        },
        function() {
            $(this).css({
                'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.1)',
                'transform': 'translateY(0)'
            });
        }
    );

    // Lazy loading for images
    $('img').each(function() {
        $(this).attr('loading', 'lazy');
    });

    // Active navigation highlight
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop() + 100;
        
        $('nav a[href^="#"]').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            
            if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass('text-orange-400');
                currLink.addClass('text-orange-400');
            } else {
                currLink.removeClass('text-orange-400');
            }
        });
    });

    // Typing animation for hero section
    const text = "const success = await igrix.buildWebsite();";
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            $('.code-animation').text(text.substring(0, index + 1));
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing animation after page load
    setTimeout(typeWriter, 1000);

    // Add page load animation
    $(window).on('load', function() {
        $('body').css('opacity', '0').animate({opacity: 1}, 500);
    });

    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    $('section').each(function() {
        observer.observe(this);
    });

    // Add stagger animation to feature cards
    $('.feature-grid > div, .stats-grid > div, .blog-grid > div').each(function(index) {
        $(this).css({
            'animation-delay': (index * 0.1) + 's'
        });
    });

    // Smooth reveal animation for images
    $('img').on('load', function() {
        $(this).addClass('fade-in');
    });

    // Add ripple effect to buttons
    $('button, .btn-primary, .btn-secondary').on('click', function(e) {
        var ripple = $('<span class="ripple"></span>');
        $(this).append(ripple);
        
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
        
        ripple.css({
            left: x + 'px',
            top: y + 'px'
        });
        
        setTimeout(function() {
            ripple.remove();
        }, 600);
    });

    // Add CSS for ripple effect
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                width: 20px;
                height: 20px;
                animation: ripple-animation 0.6s;
                pointer-events: none;
            }
            @keyframes ripple-animation {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(20);
                    opacity: 0;
                }
            }
            .fade-in {
                animation: fadeIn 0.5s ease-in;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `)
        .appendTo('head');

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('nav').css('background-color', 'rgba(30, 41, 59, 0.95)');
        } else {
            $('nav').css('background-color', 'rgb(30, 41, 59)');
        }
    });

    // Add smooth transitions to all hover effects
    $('.hover-scale').css('transition', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');

    // Tech icons floating animation
    $('.tech-icon').each(function(index) {
        $(this).css({
            'animation': 'float 3s ease-in-out infinite',
            'animation-delay': (index * 0.2) + 's'
        });
    });

    // Add floating animation CSS
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `)
        .appendTo('head');

    // Preload images for better performance
    const imagesToPreload = [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src + '?w=800&h=600&fit=crop';
    });

    // Add scroll progress indicator
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);
        
        if (!$('#scroll-progress').length) {
            $('body').prepend('<div id="scroll-progress" style="position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #f97316, #ec4899); z-index: 9999; transition: width 0.1s;"></div>');
        }
        
        $('#scroll-progress').css('width', scrollPercentRounded + '%');
    });
});
