document.addEventListener('DOMContentLoaded', function () {
  let isTerminalDone = false;
  var terminalContainer = document.getElementById('terminal');
  var terminalText = document.getElementById('terminal-text');
  var videoBackground = document.getElementById('myVideo');
  var audioBackground = document.getElementById('myAudio');
  var blurredBox = document.getElementById('blurred-box');
  var closeButton = document.getElementById('close-button');

  var terminalTextContent = [
    "User: ch34t3r",
    "IP: Loading...",
    "System: Loading...",
    "Bio Loaded",
    "Press Enter or Click To Continue",
  ];
  var currentIndex = 0;

  videoBackground.pause();
  audioBackground.pause();

  function typeWriter() {
    var line = currentIndex === 0 ? getAsciiArt() : terminalTextContent[currentIndex - 1];
    var i = 0;

    function typeChar() {
      if (i < line.length) {
        terminalText.textContent += line.charAt(i);
        i++;
        setTimeout(typeChar, 50);
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

  function handleInput() {
  terminalContainer.style.display = 'none';

  if (window.startMusicWithRandom) {
    window.startMusicWithRandom();
  }

  // 👇 Hiển thị icon toggle khi terminal kết thúc
  if (window.showMediaToggle) {
    window.showMediaToggle();
  }

  blurredBox.style.display = 'block';
  removeEventListeners();

  const scrollContainer = document.getElementById('scroll-container');
  if (scrollContainer) {
    scrollContainer.style.display = 'inline-block';

    const marquee = scrollContainer.querySelector('marquee');
    if (marquee && typeof marquee.start === 'function') {
      marquee.stop();
      setTimeout(() => marquee.start(), 50);
    }
  }

  let index = 0;
  setInterval(() => {
    const [tPlayer, weaponList, ctPlayer, extras] = kills[index];
    const weaponSrc = weaponList[Math.floor(Math.random() * weaponList.length)];
    addKillFeed(tPlayer, weaponSrc, ctPlayer, extras);
    index = (index + 1) % kills.length;
  }, 1100);
}

  function handleKeyPress(event) {
    if (event.key === 'Enter' && isTerminalDone) {
      handleInput();
    }
  }

  function handleClick() {
    if (isTerminalDone) {
      handleInput();
    }
  }

  function addEventListeners() {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyPress);
  }

  function removeEventListeners() {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', handleKeyPress);
  }

  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      var ipAddress = data.ip;
      terminalTextContent[1] = "IP: " + ipAddress;
      typeWriter();
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
      terminalTextContent[1] = "IP: Unable to fetch IP address";
      typeWriter();
    });

  var userAgent = navigator.userAgent;

  function getOperatingSystem() {
    if (userAgent.match(/Windows/)) {
      return getWindowsVersion();
    } else if (userAgent.match(/Macintosh/)) {
      return getMacOSVersion();
    } else if (userAgent.match(/Linux/)) {
      return "Linux";
    } else if (userAgent.match(/Android/)) {
      return getAndroidVersion();
    } else if (userAgent.match(/iPhone|iPad|iPod/)) {
      return getiOSVersion();
    } else {
      return "Unknown";
    }
  }

  function getWindowsVersion() {
    var version = userAgent.match(/Windows NT ([\d.]+)/);
    if (version) {
      version = version[1];
      switch (version) {
        case "5.1": return "Windows XP";
        case "6.0": return "Windows Vista";
        case "6.1": return "Windows 7";
        case "6.2": return "Windows 8";
        case "6.3": return "Windows 8.1";
        case "10.0": return "Windows 10";
        default: return "Windows";
      }
    }
    return "Windows";
  }

  function getMacOSVersion() {
    var version = userAgent.match(/Mac OS X ([\d_]+)/);
    return version ? "macOS " + version[1].replace(/_/g, '.') : "macOS";
  }

  function getAndroidVersion() {
    var version = userAgent.match(/Android ([\d.]+)/);
    return version ? "Android " + version[1] : "Android";
  }

  function getiOSVersion() {
    var version = userAgent.match(/OS ([\d_]+)/);
    return version ? "iOS " + version[1].replace(/_/g, '.') : "iOS";
  }

  var operatingSystem = getOperatingSystem();
  terminalTextContent[2] = "System: " + operatingSystem;

  function centerTerminal() {
    var terminalWidth = terminalContainer.offsetWidth;
    var terminalHeight = terminalContainer.offsetHeight;
    terminalContainer.style.position = 'absolute';
    terminalContainer.style.left = ((window.innerWidth - terminalWidth) / 2) + 'px';
    terminalContainer.style.top = ((window.innerHeight - terminalHeight) / 2) + 'px';
  }

  centerTerminal();
  window.addEventListener('resize', centerTerminal);
  terminalText.style.textAlign = 'center';

  function getAsciiArt() {
    return `


      
      i am a cheater
    `;
  }

  var audio = document.getElementById("myAudio");
  var maxVolume = 1;
  function limitVolume(volume) {
    audio.volume = volume > maxVolume ? maxVolume : volume;
  }

  limitVolume(1);

  const kills = [
    ["diy", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "You", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
    ["diy2k4", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "Valve Corporation", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
    ["kn1zMonster", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "Gabe Newell", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
    ["Me", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "Bot T", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]],
    ["sn4ke", ["./assets/pfp/deagle.png", "./assets/pfp/awp.png", "./assets/pfp/g3sg1.png", "./assets/pfp/r8.png", "./assets/pfp/ak47.png", "./assets/pfp/ssg08.png"], "VACNET 3.0", ["./assets/pfp/headshot.png", "./assets/pfp/wallbang.png"]]
  ];

  function addKillFeed(tPlayer, weaponSrc, ctPlayer, extras = []) {
    const killFeed = document.getElementById("kill-feed");
    const div = document.createElement("div");
    div.className = "kill-item";
    div.innerHTML = `
      <span class="player t kill-section">
        <img src="./assets/pfp/faceit.png" alt="faceit" width="28" style="margin-right: 4px; vertical-align: middle;">
        ${tPlayer}
      </span>
      <span class="weapons kill-section">
        <img src="${weaponSrc}" height="26" style="vertical-align: middle;">
        ${extras.map(src => {
          const isSmallIcon = src.includes("headshot") || src.includes("wallbang");
          const width = isSmallIcon ? 26 : 34;
          const height = isSmallIcon ? 24 : 32;
          return `<img src="${src}" width="${width}" height="${height}" style="vertical-align: middle;">`;
        }).join('')}
      </span>
      <span class="player ct kill-section">${ctPlayer}</span>
    `;
    killFeed.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }

  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
      e.preventDefault();
    }
  });

  fetch("https://ipinfo.io/json?token=6e9609d324940d")
    .then(res => res.json())
    .then(data => {
      const infoBox = document.getElementById("ip-info-container");
      const [latitude, longitude] = data.loc.split(",");
      infoBox.style.fontSize = "12px";
      infoBox.innerHTML = `
        <strong>IP:</strong> ${data.ip}<br>
        <strong>City:</strong> ${data.city}, ${data.region}, ${data.country}<br>
        <strong>Timezone:</strong> ${data.timezone}<br>
        <strong>Location:</strong> ${latitude}, ${longitude}
      `;
    })
    .catch(err => console.error("IP Fetch Error:", err));
});
