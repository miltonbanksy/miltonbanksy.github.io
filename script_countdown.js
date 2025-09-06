const startDate = new Date("2014-08-26T00:00:00"); // wedding date

    // Helper: add ordinal suffix (1st, 2nd, 3rd, 4th...)
    function ordinalSuffix(n) {
      const j = n % 10, k = n % 100;
      if (j === 1 && k !== 11) return n + "st";
      if (j === 2 && k !== 12) return n + "nd";
      if (j === 3 && k !== 13) return n + "rd";
      return n + "th";
    }

    function updateTimers() {
      const now = new Date();

      // ====== ELAPSED TIME ======
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) { seconds += 60; minutes--; }
      if (minutes < 0) { minutes += 60; hours--; }
      if (hours < 0)   { hours += 24; days--; }
      if (days < 0) {
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) { months += 12; years--; }

      document.getElementById("since").innerHTML =
        `<span>${years} years</span>` +
        `<span>${months} months</span>` +
        `<span>${days} days</span>` +
        `<span>${hours} hours</span>` +
        `<span>${minutes} minutes</span>` +
        `<span>${seconds} seconds</span>`;

      // ====== NEXT ANNIVERSARY COUNTDOWN ======
      let nextAnniversary = new Date(startDate);
      nextAnniversary.setFullYear(now.getFullYear());
      if (nextAnniversary <= now) {
        nextAnniversary.setFullYear(now.getFullYear() + 1);
      }

      const anniversaryNumber = years + 1;
      const anniversaryLabel = ordinalSuffix(anniversaryNumber);

      // Full-day anniversary check (month + day only)
      const isAnniversary =
        now.getMonth() === startDate.getMonth() &&
        now.getDate() === startDate.getDate();

      if (isAnniversary) {
        document.getElementById("countdown").innerHTML =
          `<div class="celebration">🎉 Happy ${anniversaryLabel} Anniversary! 🎉</div>`;
        return;
      }

      // Otherwise, show countdown
      let diff = nextAnniversary - now;
      let cdSeconds = Math.floor(diff / 1000);
      let cdMinutes = Math.floor(cdSeconds / 60);
      let cdHours   = Math.floor(cdMinutes / 60);
      let cdDays    = Math.floor(cdHours / 24);

      cdHours   %= 24;
      cdMinutes %= 60;
      cdSeconds %= 60;

      document.getElementById("countdown").innerHTML =
        `<span>${cdDays} days</span>` +
        `<span>${cdHours} hours</span>` +
        `<span>${cdMinutes} minutes</span>` +
        `<span>${cdSeconds} seconds</span>` +
        `<span>until our ${anniversaryLabel} anniversary!</span>`;
    }

    setInterval(updateTimers, 1000);
    updateTimers();
