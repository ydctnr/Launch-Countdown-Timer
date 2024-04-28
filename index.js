document.addEventListener("DOMContentLoaded", function() {
    let countdownValue = 10 * 24 * 60 * 60;

    function updateCountdown() {
        const days = Math.floor(countdownValue / (24 * 60 * 60));
        const hours = Math.floor((countdownValue % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdownValue % (60 * 60)) / 60);
        const seconds = countdownValue % 60;

        flipDigit('daysFlip', days);
        flipDigit('hoursFlip', hours);
        flipDigit('minutesFlip', minutes);
        flipDigit('secondsFlip', seconds);
    }

    function padDigits(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function flipDigit(flipCardId, newValue) {
        const flipCard = document.getElementById(flipCardId);
        const upperDigit = flipCard.querySelector('.top');
        const lowerDigit = flipCard.querySelector('.bottom');
        const oldValue = upperDigit.textContent;

        if (oldValue !== padDigits(newValue)) {
            upperDigit.classList.remove('flip');
            lowerDigit.classList.remove('flip');
            setTimeout(() => {
                upperDigit.textContent = padDigits(newValue);
                lowerDigit.textContent = padDigits(newValue);
                upperDigit.classList.add('flip');
                lowerDigit.classList.add('flip');
            }, 50);
        }
    }

    updateCountdown();

    const timerInterval = setInterval(function() {
        countdownValue--;
        if (countdownValue >= 0) {
            updateCountdown();
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
});