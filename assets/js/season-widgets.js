(function () {
  const SEASON_START = new Date("2026-10-20T00:00:00");
  const SEASON_END = new Date("2027-04-11T23:59:59");
  const TRADE_DEADLINE = new Date(1805731200000);

  function daysLeft(target) {
    const now = new Date();
    const ms = target.getTime() - now.getTime();
    return Math.max(0, Math.ceil(ms / 86400000));
  }

  function seasonPercent() {
    const now = Date.now();
    const total = SEASON_END.getTime() - SEASON_START.getTime();
    const elapsed = now - SEASON_START.getTime();
    return Math.min(100, Math.max(0, (elapsed / total) * 100));
  }

  function render() {
    const elEnd = document.getElementById("widget-season-end");
    const elPct = document.getElementById("widget-season-pct");
    const elBar = document.getElementById("widget-season-bar");
    const elTrade = document.getElementById("widget-trade-deadline");
    if (!elEnd) return;

    elEnd.textContent = daysLeft(SEASON_END);

    const pct = seasonPercent();
    elPct.textContent = pct.toFixed(1) + "%";
    elBar.style.width = pct + "%";

    const tradeDays = daysLeft(TRADE_DEADLINE);
    elTrade.textContent = Date.now() > TRADE_DEADLINE.getTime() ? "UŽDARYTAS" : tradeDays;
  }

  render();
  setInterval(render, 60000);
})();
