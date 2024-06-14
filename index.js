document.addEventListener("DOMContentLoaded", function() {
    let countdownValue = 10 * 24 * 60 * 60;

    function updateCountdown() {
        const days = Math.floor(countdownValue / (24 * 60 * 60));
        const hours = Math.floor((countdownValue % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdownValue % (60 * 60)) / 60);
        const seconds = countdownValue % 60;

        updateDigit('daysFlip', days);
        updateDigit('hoursFlip', hours);
        updateDigit('minutesFlip', minutes);
        updateDigit('secondsFlip', seconds);
    }

    function padDigits(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function updateDigit(flipCardId, newValue) {
        const flipCard = document.getElementById(flipCardId);
        const topDigit = flipCard.querySelector('.top');
        const bottomDigit = flipCard.querySelector('.bottom');
        const oldValue = topDigit.textContent;

        if (oldValue !== padDigits(newValue)) {
            topDigit.classList.add('flip');
            bottomDigit.classList.add('fliped');
            
            setTimeout(() => {
                topDigit.textContent = padDigits(newValue);
                bottomDigit.textContent = padDigits(newValue);
                topDigit.classList.remove('flip');
                bottomDigit.classList.remove('fliped');
            }, 500);
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