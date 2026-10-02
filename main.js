const heroVideo = document.getElementById("heroVideo");

if (heroVideo) {
  let fadeFrame = null;
  let restarting = false;

  const setOpacity = (value) => {
    heroVideo.style.opacity = Math.max(0, Math.min(1, value));
  };

  const animateOpacity = (from, to, duration = 500) => {
    const start = performance.now();
    if (fadeFrame) cancelAnimationFrame(fadeFrame);

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setOpacity(from + (to - from) * p);
      if (p < 1) fadeFrame = requestAnimationFrame(tick);
    };
    fadeFrame = requestAnimationFrame(tick);
  };

  const restartVideo = () => {
    if (restarting) return;
    restarting = true;
    setOpacity(0);
    setTimeout(() => {
      heroVideo.currentTime = 0;
      heroVideo.play().catch(() => {});
      animateOpacity(0, 1, 500);
      restarting = false;
    }, 100);
  };

  heroVideo.addEventListener("canplay", () => {
    heroVideo.play().catch(() => {});
    animateOpacity(0, 1, 500);
  }, { once: true });

  heroVideo.addEventListener("timeupdate", () => {
    if (!heroVideo.duration || !isFinite(heroVideo.duration)) return;
    const remaining = heroVideo.duration - heroVideo.currentTime;
    if (remaining <= 0.55 && !restarting) {
      animateOpacity(1, 0, 500);
    }
  });

  heroVideo.addEventListener("ended", restartVideo);
  setOpacity(0);
}

function joinFromHero() {
  const email = document.getElementById("heroEmail").value.trim();
  if (!email) {
    document.getElementById("heroEmail").focus();
    return;
  }
  document.getElementById("joinEmail").value = email;
  document.getElementById("join").scrollIntoView({ behavior: "smooth" });
}

function submitJoin(event) {
  event.preventDefault();
  const msg = document.getElementById("joinMessage");
  msg.textContent = "You're on the list — welcome to InnoveX.";
  msg.style.color = "#111";
}


