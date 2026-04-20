document.addEventListener('DOMContentLoaded', function () {
  let isTerminalDone = false;
  let skipTriggered = false;
  let typingTimeout = null;

  const terminalContainer = document.getElementById('terminal');
  const terminalText = document.getElementById('terminal-text');
  const videoBackground = document.getElementById('myVideo');
  const audioBackground = document.getElementById('myAudio');
  const blurredBox = document.getElementById('blurred-box');
  const closeButton = document.getElementById('close-button');
  const skipButton = document.getElementById('skip-button');
  const links = document.querySelector('.links');
  const systemPanel = document.getElementById('system-panel');
  const terminalToggle = document.getElementById('terminal-toggle');

  if (links) links.classList.remove('links--visible');
  if (blurredBox) blurredBox.style.display = 'none';

  const terminalTextContent = [
    "[BOOT] Initializing THUYSMAO OS v3.0...",
    "[BOOT] Loading profile core...",
    "IP: Loading...",
    "[SYNC] Connecting Discord presence...",
    "[SYNC] Loading media engine...",
    "[OK] All systems online.",
    "Press Enter or click to continue..."
  ];
  let currentIndex = 0;

  videoBackground.pause();
  audioBackground.pause();

  // 🧠 Gõ text từng dòng
  function typeWriter() {
    if (skipTriggered) return;
    const line = currentIndex === 0 ? getAsciiArt() : terminalTextContent[currentIndex - 1];
    let i = 0;

    function typeChar() {
      if (skipTriggered) return;
      if (i < line.length) {
        terminalText.textContent += line.charAt(i);
        i++;
        const speed =
  line.startsWith("[BOOT]") || line.startsWith("[SYNC]") || line.startsWith("[OK]")
    ? 22
    : line.startsWith("user@")
    ? 38
    : 28;

typingTimeout = setTimeout(typeChar, speed);
      } else {
        terminalText.textContent += "\n";
        currentIndex++;
        if (currentIndex < terminalTextContent.length + 1) {
          typeWriter();
        } else {
          isTerminalDone = true;
          addEventListeners();
        }
      }
    }

    typeChar();
  }

  //  const kills = [
  //  ["GB0-7", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "s1mple", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
  //  ["GB0-7", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "Valve Corporation", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
  //  ["GB0-7", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "Gabe Newell", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
  //  ["GB0-7", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "Bot T", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
  //  ["GB0-7", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "VACNET 3.0", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]]
  //];

  // function addKillFeed(tPlayer, weaponSrc, ctPlayer, extras = []) {
  //  const killFeed = document.getElementById("kill-feed");
  //  const div = document.createElement("div");
  //  div.className = "kill-item";
  //  div.innerHTML = `
  //    <span class="player t kill-section">
  //      <img src="./assets/pfp/faceit.png" alt="faceit" width="28" style="margin-right: 4px; vertical-align: middle;">
  //      ${tPlayer}
  //    </span>
  //  `;
  // killFeed.appendChild(div);
  // setTimeout(() => div.remove(), 3000);
  //}

  // 🎯 Khi skip hoặc terminal kết thúc
  function handleInput() {
    const particlesBg = document.getElementById('particles-js');
    const systemPanel = document.getElementById('system-panel');
    const terminalToggle = document.getElementById('terminal-toggle');
  
    if (particlesBg) particlesBg.style.display = 'none';
    terminalContainer.style.display = 'none';
  
    if (window.startMusicWithRandom) window.startMusicWithRandom();
    if (window.showMediaToggle) window.showMediaToggle();
  
    blurredBox.style.display = 'block';
    document.body.classList.add(localStorage.getItem('site-theme') || 'dark-glass');
    blurredBox.classList.add('theme-ready');
  
    if (window.initProfileEnhancements) {
      window.initProfileEnhancements();
    }
  
    if (systemPanel || terminalToggle) {
      setTimeout(() => {
        if (systemPanel) {
          systemPanel.classList.add('show');
  
          const savedState = localStorage.getItem("system-panel-open");
          if (savedState === "true") {
            systemPanel.classList.add("open");
          }
        }
  
        if (terminalToggle) {
          terminalToggle.classList.add('show');
        }
      }, 500);
    }
  
    removeEventListeners();
  
    if (skipButton) skipButton.style.display = 'none';
  
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.style.display = 'inline-block';
      const marquee = scrollContainer.querySelector('marquee');
      if (marquee && typeof marquee.start === 'function') {
        marquee.stop();
        setTimeout(() => marquee.start(), 50);
      }
    }
  
    if (links) links.classList.add('links--visible');
  }

  // 🎬 Khi ấn Skip
  function stopTerminal() {
    skipTriggered = true;
    if (typingTimeout) clearTimeout(typingTimeout);

    terminalContainer.style.transition = 'opacity 0.5s ease';
    terminalContainer.style.opacity = '0';
    setTimeout(() => {
      terminalContainer.style.display = 'none';
    }, 500);

    skipButton.style.transition = 'opacity 0.4s ease';
    skipButton.style.opacity = '0';
    setTimeout(() => {
      skipButton.style.display = 'none';
    }, 400);

    handleInput();
  }

  // 🎯 Gán sự kiện Skip
  if (skipButton) skipButton.addEventListener('click', stopTerminal);

  // ⌨️ Khi nhấn Enter hoặc click sau khi terminal xong
  function handleKeyPress(event) {
    if (event.key === 'Enter' && isTerminalDone) handleInput();
  }
  function handleClick() {
    if (isTerminalDone) handleInput();
  }
  function addEventListeners() {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyPress);
  }
  function removeEventListeners() {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', handleKeyPress);
  }

  // 🧩 Lấy IP
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      terminalTextContent[1] = "IP: " + data.ip;
      typeWriter();
    })
    .catch(() => {
      terminalTextContent[1] = "IP: Unable to fetch IP address";
      typeWriter();
    });

  // 🖥️ Hệ điều hành
  const userAgent = navigator.userAgent;
  function getOperatingSystem() {
    if (userAgent.match(/Windows/)) return getWindowsVersion();
    if (userAgent.match(/Macintosh/)) return getMacOSVersion();
    if (userAgent.match(/Linux/)) return "Linux";
    if (userAgent.match(/Android/)) return getAndroidVersion();
    if (userAgent.match(/iPhone|iPad|iPod/)) return getiOSVersion();
    return "Unknown";
  }

  function getWindowsVersion() {
    const version = userAgent.match(/Windows NT ([\d.]+)/);
    if (!version) return "Windows";
    switch (version[1]) {
      case "5.1": return "Windows XP";
      case "6.0": return "Windows Vista";
      case "6.1": return "Windows 7";
      case "6.2": return "Windows 8";
      case "6.3": return "Windows 8.1";
      case "10.0": return "Windows 10";
      default: return "Windows";
    }
  }
  function getMacOSVersion() {
    const version = userAgent.match(/Mac OS X ([\d_]+)/);
    return version ? "macOS " + version[1].replace(/_/g, '.') : "macOS";
  }
  function getAndroidVersion() {
    const version = userAgent.match(/Android ([\d.]+)/);
    return version ? "Android " + version[1] : "Android";
  }
  function getiOSVersion() {
    const version = userAgent.match(/OS ([\d_]+)/);
    return version ? "iOS " + version[1].replace(/_/g, '.') : "iOS";
  }

  
  terminalTextContent[2] = "System: " + getOperatingSystem();

  // 📐 Căn giữa terminal
  function centerTerminal() {
    const w = terminalContainer.offsetWidth;
    const h = terminalContainer.offsetHeight;
    terminalContainer.style.position = 'absolute';
    terminalContainer.style.left = ((window.innerWidth - w) / 2) + 'px';
    terminalContainer.style.top = ((window.innerHeight - h) / 2) + 'px';
  }
  centerTerminal();
  window.addEventListener('resize', centerTerminal);
  terminalText.style.textAlign = 'center';

  // 🎨 ASCII
  function getAsciiArt() {
    return `
  ┌───────────────────────┐
  │      THUYSMAO OS      │
  └───────────────────────┘
  `;
  }

  // 🔊 Giới hạn âm lượng
  const audio = document.getElementById("myAudio");
  function limitVolume(volume) {
    audio.volume = Math.min(volume, 1);
  }
  limitVolume(1);

  // 🚫 Chặn zoom
  window.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
  window.addEventListener('keydown', e => {
    if (e.ctrlKey && ['+', '-', '='].includes(e.key)) e.preventDefault();
  });

  // 🕒 Đồng hồ
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    const date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    document.getElementById('clock-date').textContent = `${time} | ${date}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ✨ particles
  function initParticles() {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }

  if (window.particlesJS) initParticles();
  else {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = initParticles;
    document.head.appendChild(script);
  }
});

window.initProfileEnhancements = (() => {
  let initialized = false;

  return function initProfileEnhancements() {
    if (initialized) return;
    initialized = true;

    const loadingEl = document.getElementById("loading-status");
    const statUptime = document.getElementById("stat-uptime");
    const statTheme = document.getElementById("stat-theme");
    const statMedia = document.getElementById("stat-media");
    const statDiscord = document.getElementById("stat-discord");
    const statSong = document.getElementById("stat-song");
    const themeButtons = document.querySelectorAll(".theme-btn");
    const blurredBox = document.getElementById("blurred-box");

    const loadingMessages = [
      "Initializing presence...",
      "Syncing with Discord...",
      "Loading blackhole scene...",
      "Booting THUYSMÃO system...",
      "Calibrating neon interface...",
      "Connecting to presence gateway..."
    ];

    const state = {
      theme: localStorage.getItem("site-theme") || "cyber-neon",
      currentMedia: "Unknown",
      discordStatus: "offline",
      currentSong: "None"
    };

    function setRandomLoadingMessage() {
      if (!loadingEl) return;
      const random = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      loadingEl.textContent = random;
    }

    function applyTheme(themeName) {
      document.body.classList.remove("cyber-neon", "pink-anime", "dark-glass");
      document.body.classList.add(themeName);

      state.theme = themeName;
      localStorage.setItem("site-theme", themeName);

      themeButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.theme === themeName);
      });

      if (statTheme) statTheme.textContent = themeName;
      if (blurredBox) blurredBox.classList.add("theme-ready");
    }

    function formatUptime(seconds) {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;

      if (h > 0) return `${h}h ${m}m ${s}s`;
      if (m > 0) return `${m}m ${s}s`;
      return `${s}s`;
    }

    const bootTime = Date.now();

    function updateUptime() {
      const seconds = Math.floor((Date.now() - bootTime) / 1000);
      if (statUptime) statUptime.textContent = formatUptime(seconds);
    }

    function detectCurrentMedia() {
      const video = document.getElementById("myVideo");
      if (!video || !video.src) return "Unknown";

      try {
        const url = new URL(video.src, window.location.href);
        const filename = url.pathname.split("/").pop();
        return filename || "Unknown";
      } catch {
        return video.src.split("/").pop() || "Unknown";
      }
    }

    function updateStats() {
      state.currentMedia = detectCurrentMedia();

      if (statTheme) statTheme.textContent = state.theme;
      if (statMedia) statMedia.textContent = state.currentMedia;
      if (statDiscord) statDiscord.textContent = state.discordStatus;
      if (statSong) statSong.textContent = state.currentSong;
    }

    function extractDiscordData() {
      const statusText = document.getElementById("discord-status-text");
      const activityName = document.getElementById("discord-activity-name");
      const activityDetails = document.getElementById("discord-activity-details");
      const activityState = document.getElementById("discord-activity-state");
      const noActivity = document.getElementById("discord-no-activity");

      let status = "offline";
      let song = "None";

      if (statusText && statusText.textContent.trim()) {
        status = statusText.textContent.trim().toLowerCase();
      } else {
        const statusDot = document.getElementById("discord-status-dot");
        if (statusDot?.classList.contains("status-online")) status = "online";
        else if (statusDot?.classList.contains("status-idle")) status = "idle";
        else if (statusDot?.classList.contains("status-dnd")) status = "dnd";
      }

      if (activityName && activityName.textContent.trim()) {
        const name = activityName.textContent.trim();
        const details = activityDetails?.textContent?.trim() || "";
        const stateText = activityState?.textContent?.trim() || "";

        song = [name, details, stateText].filter(Boolean).join(" — ");
      } else if (noActivity && !noActivity.classList.contains("hidden")) {
        song = "None";
      }

      state.discordStatus = status;
      state.currentSong = song || "None";
      updateStats();
    }

    themeButtons.forEach(btn => {
      btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
    });

    applyTheme(state.theme);
    setRandomLoadingMessage();
    updateUptime();
    updateStats();
    extractDiscordData();

    setInterval(updateUptime, 1000);
    setInterval(() => {
      setRandomLoadingMessage();
      updateStats();
      extractDiscordData();
    }, 12000);

    const observer = new MutationObserver(() => {
      extractDiscordData();
      updateStats();
    });

    [
      document.getElementById("discord-status-dot"),
      document.getElementById("discord-status-text"),
      document.getElementById("discord-activity-name"),
      document.getElementById("discord-activity-details"),
      document.getElementById("discord-activity-state"),
      document.getElementById("discord-no-activity"),
      document.getElementById("myVideo")
    ]
      .filter(Boolean)
      .forEach(node => {
        observer.observe(node, {
          attributes: true,
          childList: true,
          subtree: true,
          characterData: true
        });
      });
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  const systemPanel = document.getElementById("system-panel");
  const systemPanelToggle = document.getElementById("system-panel-toggle");

  if (!systemPanel || !systemPanelToggle) return;

  systemPanelToggle.addEventListener("click", () => {
    systemPanel.classList.toggle("open");

    localStorage.setItem(
      "system-panel-open",
      systemPanel.classList.contains("open")
    );
  });
});

function applyTheme(themeName) {
  document.body.classList.remove(
    "cyber-neon",
    "pink-anime",
    "dark-glass"
  );

  document.body.classList.add(themeName);
  localStorage.setItem("site-theme", themeName);

  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === themeName);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("site-theme") || "cyber-neon";
  applyTheme(savedTheme);

  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(btn.dataset.theme);
    });
  });
});

if (systemPanel || terminalToggle) {
  setTimeout(() => {
    if (systemPanel) {
      systemPanel.classList.add('show');

      const savedState = localStorage.getItem("system-panel-open");
      if (savedState === "true") {
        systemPanel.classList.add("open");
      }
    }

    if (terminalToggle) {
      terminalToggle.classList.add('show');
    }
  }, 500);
}