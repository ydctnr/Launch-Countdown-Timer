document.addEventListener("DOMContentLoaded", function() {

    let countdownValue = 10 * 24 * 60 * 60;

    function updateCountdown() {
        const days = Math.floor(countdownValue / (24 * 60 * 60));
        const hours = Math.floor((countdownValue % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdownValue % (60 * 60)) / 60);
        const seconds = countdownValue % 60;

        flipDigit('daysTop', days);
        flipDigit('daysBottom', days);
        flipDigit('hoursTop', hours);
        flipDigit('hoursBottom', hours);
        flipDigit('minutesTop', minutes);
        flipDigit('minutesBottom', minutes);
        flipDigit('secondsTop', seconds);
        flipDigit('secondsBottom', seconds);

    }

    function padDigits(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function flipDigit(elementId, newValue) {
        const element = document.getElementById(elementId);
        const oldValue = element.textContent;

        if (oldValue !== padDigits(newValue)) {
            element.classList.remove('flip');
            setTimeout(() => {
                element.textContent = padDigits(newValue);
                element.classList.add('flip');
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