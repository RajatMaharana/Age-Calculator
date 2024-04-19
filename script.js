const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function age() {
    let today = new Date();
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    let inputDate = new Date(`${month}/${day}/${year}`);

    let birthDetails = {
        day: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    };
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    leapChecker(currentYear);

    if (month <= 12) {
        for (let i = 0; i < months.length; i++) {
            if (month == (i - 1) && day > months[i]) {
                console.log('called')
                alert("Enter a valid Date..");
                displayResults("-", "-", "-")
                return;
            }
        }
    } else {
        alert("Enter a valid Month!");
        displayResults("-", "-", "-")
        return;
    }

    if (birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.day > currentDay && birthDetails.month == currentMonth && birthDetails.year == currentYear)) {
        alert("Not born yet");
        displayResults("-", "-", "-")
        return
    }

    year = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        month = currentMonth - birthDetails.month;
    } else {
        year--;
        month = 12 + currentMonth - birthDetails.month;
    }

    if (currentDay >= birthDetails.day) {
        day = currentDay - birthDetails.day;
    } else {
        month--;
        let days = months[currentMonth - 2];
        day = days + currentDay - birthDetails.day;
        if (month < 0) {
            month = 11;
            year--;
        }
    }

    displayResults(day, month, year);
}

function displayResults(day, month, year) {
    document.getElementById("years").textContent = year;
    document.getElementById("months").textContent = month;
    document.getElementById("days").textContent = day;
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}