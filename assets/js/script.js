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


      
      Your IP is being traced...
    `;
  }

  var audio = document.getElementById("myAudio");
  var maxVolume = 1;
  function limitVolume(volume) {
    audio.volume = volume > maxVolume ? maxVolume : volume;
  }

  limitVolume(1);

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

   function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 => 12

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    const dateString = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    document.getElementById('clock-date').textContent = `${timeString} | ${dateString}`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // gọi ngay để không phải đợi 1s
});
