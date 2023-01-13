// JavaScript source code
// вибрати усі лінки
$('a[href*="#"]')
    // Без пустих посилань
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // тільки посилання які на сторінці
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Збернти елемент до якого посилання
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Чи існує ціль куди потрібно скролити
            if (target.length) {
                // запобігає дефолтній події якщо анімація вже почалася
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback після анімації
                    // Повинно змінити фокус!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Перевірити чи на цілі фокус
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // додати табіндекс до цілей які не можуть мати фокус
                        $target.focus(); // Поставити фокус
                    };
                });
            }
        }
    });