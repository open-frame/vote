// 提示词预热动画
const tip1DOM = document.querySelector(".tip1");
const tip2DOM = document.querySelector(".tip2");
export function showTip1() {
  setTimeout(() => {
    tip1DOM.classList.add("animate__zoomOut");
    setTimeout(() => {
      tip1DOM.style.display = "none";
      tip2DOM.style.display = "block";
      showTip2();
    }, 900);
  }, 1000);
}

function showTip2() {
  setTimeout(() => {
    tip2DOM.classList.add("animate__zoomOut");
    setTimeout(() => {
      tip2DOM.style.display = "none";
      document.querySelector(".preheat").style.display = "none";
      outcome();
    }, 900);
  }, 1000);
}

// 显示投票结果
function outcome() {
  const outcomeDOM = document.querySelector(".hot-outcome");
  if (outcomeDOM) { outcomeDOM.style.display = "block"; }
}