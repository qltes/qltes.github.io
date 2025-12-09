const loadingText = document.getElementById('loading-text');
const funnyImage = document.getElementById('funny-image');

const messages = [
  "loading absoloutely nothing",
  "generating something cool… maybe",
  "processing your patience",
  "why are you still here lol",
  "loading… 0%",
  "loading… 1%",
  "loading… 2%",
  "loading… 3%",
  "loading… 4%",
  "loading… 4% (again)",
  "loading… 5%",
  "still loading…",
    "almost there… not really",
    "loading… 5% (for real this time)",
    "loading… 6%",
    "loading… 6% (it broke)",
    "loading… 6% (still)",
    "loading… 67% (you realize this fake yet?)",
    "loading… 0%",
  "please wait while i do absolutely nothing",
];

const funnyMessage = 'HOLY SHIT DID YALL SEE THAT 👀';

let currentIndex = 0;
let specialEventFrequency = 0.1; // 10% chance per cycle
let funnyMessageDuration = 3000; // ms

function showNextMessage() {
  if (loadingText.dataset.locked === 'true') return;
  loadingText.textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}

function triggerFunnyEvent() {
  loadingText.dataset.locked = 'true';
  loadingText.textContent = funnyMessage;
  funnyImage.style.display = 'block';

  const startX = -funnyImage.offsetWidth * 0.8; // mostly off-screen left
  const endX = window.innerWidth - funnyImage.offsetWidth * 0.2; // mostly visible right
  const duration = 800; // ms for fast movement

  const startTime = performance.now();

  function animate(time) {
    const progress = (time - startTime) / duration;
    if (progress < 1) {
      funnyImage.style.left = startX + progress * (endX - startX) + 'px';
      requestAnimationFrame(animate);
    } else {
      funnyImage.style.display = 'none';
      loadingText.dataset.locked = 'false';
    }
  }

  requestAnimationFrame(animate);
}

setInterval(() => {
  if (Math.random() < specialEventFrequency) {
    triggerFunnyEvent();
  } else {
    showNextMessage();
  }
}, 2000);
