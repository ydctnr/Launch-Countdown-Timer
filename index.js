document.addEventListener("DOMContentLoaded", function() {
    let countdownValue = 10 * 24 * 60 * 60;

    function updateCountdown() {
        const days = Math.floor(countdownValue / (24 * 60 * 60));
        const hours = Math.floor((countdownValue % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdownValue % (60 * 60)) / 60);
        const seconds = countdownValue % 60;

        flipTopDigit('daysFlip', days);
        flipBottomDigit('daysFlip', days);
        flipTopDigit('hoursFlip', hours);
        flipBottomDigit('hoursFlip', hours);
        flipTopDigit('minutesFlip', minutes);
        flipBottomDigit('minutesFlip', minutes);
        flipTopDigit('secondsFlip', seconds);
        flipBottomDigit('secondsFlip', seconds);
    }

    function padDigits(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function flipTopDigit(flipCardId, newValue) {
        const flipCard = document.getElementById(flipCardId);
        const upperDigit = flipCard.querySelector('.top');
        const oldValue = upperDigit.textContent;
    
        if (oldValue !== padDigits(newValue)) {
            upperDigit.classList.remove('flip');
            setTimeout(() => {
                upperDigit.textContent = padDigits(newValue);
                upperDigit.classList.add('flip');
            }, 50);
        }
    }
    function flipBottomDigit(flipCardId, newValue) {
        const flipCard = document.getElementById(flipCardId);
        const lowerDigit = flipCard.querySelector('.bottom');
        const oldValue = lowerDigit.textContent;
    
        if (oldValue !== padDigits(newValue)) {
            lowerDigit.classList.remove('fliped');
            setTimeout(() => {
                lowerDigit.textContent = padDigits(newValue);
                lowerDigit.classList.add('fliped');
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