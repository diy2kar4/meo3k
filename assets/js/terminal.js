document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("terminal-toggle");
    const overlay = document.getElementById("terminal-overlay");
    const closeBtn = document.getElementById("terminal-close");
    const body = document.getElementById("terminal-body");
    const form = document.getElementById("terminal-form");
    const input = document.getElementById("terminal-input");
  
    if (!toggleBtn || !overlay || !closeBtn || !body || !form || !input) return;
  
    const history = [];
    let historyIndex = -1;
    let matrixInterval = null;
  
    const CONFIG = {
      githubUrl: "https://github.com/diy2kar4",
      discordUrl: "https://discord.com/users/985537688159522847",
      discordUser: "niang1_",
      siteName: "THUYSMAO PROFILE WEBSITE"
    };
  
    function scrollBottom() {
      body.scrollTop = body.scrollHeight;
    }
  
    function addLine(text = "", className = "") {
      const div = document.createElement("div");
      div.className = `terminal-line ${className}`.trim();
      div.textContent = text;
      body.appendChild(div);
      scrollBottom();
    }
  
    function addHTML(html) {
      const div = document.createElement("div");
      div.className = "terminal-line";
      div.innerHTML = html;
      body.appendChild(div);
      scrollBottom();
    }
  
    function openTerminal() {
      overlay.classList.remove("hidden");
      setTimeout(() => input.focus(), 30);
    }
  
    function closeTerminal() {
      stopMatrix();
      overlay.classList.add("hidden");
    }
  
    function clearTerminal() {
      stopMatrix();
      body.innerHTML = "";
    }
  
    function stopMatrix() {
      if (matrixInterval) {
        clearInterval(matrixInterval);
        matrixInterval = null;
      }
    }
  
    function printBanner() {
      addLine("════════════════════════════════════════════════════════════", "term-accent");

      addLine("████████╗██╗  ██╗██╗   ██╗██╗   ██╗███████╗███╗   ███╗ █████╗  ██████╗", "term-green");
      addLine("╚══██╔══╝██║  ██║██║   ██║╚██╗ ██╔╝██╔════╝████╗ ████║██╔══██╗██╔═══██╗", "term-green");
      addLine("   ██║   ███████║██║   ██║ ╚████╔╝ ███████╗██╔████╔██║███████║██║   ██║", "term-green");
      addLine("   ██║   ██╔══██║██║   ██║  ╚██╔╝  ╚════██║██║╚██╔╝██║██╔══██║██║   ██║", "term-green");
      addLine("   ██║   ██║  ██║╚██████╔╝   ██║   ███████║██║ ╚═╝ ██║██║  ██║╚██████╔╝", "term-green");
      addLine("   ╚═╝   ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ", "term-green");

      addLine("════════════════════════════════════════════════════════════", "term-accent");

      addLine("⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄", "term-green");
      addLine("⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄", "term-green");
      addLine("⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄", "term-green");
      addLine("⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄", "term-green");
      addLine("⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰", "term-green");
      addLine("⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤", "term-green");
      addLine("⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗", "term-green");
      addLine("⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄", "term-green");
      addLine("⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄", "term-green");
      addLine("⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄", "term-green");
      addLine("⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄", "term-green");
      addLine("⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄", "term-green");
      addLine("⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄", "term-green");
      addLine("⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴", "term-green");
      addLine("⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿", "term-green");

      addLine("════════════════════════════════════════════════════════════", "term-accent");
    }
  
    function runMatrix() {
      stopMatrix();
      addLine("MATRIX MODE STARTED", "term-accent");
  
      const chars = "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
      const rows = 10;
      const cols = 44;
  
      matrixInterval = setInterval(() => {
        for (let i = 0; i < rows; i++) {
          let line = "";
          for (let j = 0; j < cols; j++) {
            line += chars[Math.floor(Math.random() * chars.length)];
          }
          addLine(line, "term-green");
        }
        addLine("────────────────────────────────────────────", "term-muted");
  
        if (body.children.length > 300) {
          while (body.children.length > 220) {
            body.removeChild(body.firstChild);
          }
        }
      }, 220);
    }
  
    function printHelp() {
      addLine("Available commands:", "term-accent");
      addLine("help       - Show all commands");
      addLine("about      - About this site");
      addLine("whoami     - Short profile");
      addLine("projects   - Featured projects");
      addLine("socials    - Show socials");
      addLine("theme      - Show active theme");
      addLine("discord    - Show current Discord status");
      addLine("stats      - Show current site stats");
      addLine("banner     - ASCII banner");
      addLine("neofetch   - Show system info");
      addLine("matrix     - Start matrix mode");
      addLine("stop matrix       - Stop matrix mode");
      addLine("open github  - Open GitHub");
      addLine("open discord - Open Discord");
      addLine("clear      - Clear terminal");
      addLine("exit       - Close terminal");
    }
  
    function printAbout() {
      addLine(CONFIG.siteName, "term-accent");
      addLine("Frontend • Effects • Discord Presence • Interactive UI", "term-info");
    }
  
    function printWhoAmI() {
      addLine("Thuysmao / Maomao / Niang1_", "term-accent");
      addLine("Building stylish frontend experiences.", "term-info");
    }
  
    function printProjects() {
      addLine("Featured projects:", "term-accent");
      addLine("- Profile Website");
      addLine("- Discord Presence Widget");
      addLine("- Console Command System");
      addLine("- Animated Media Background");
    }
  
    function printSocials() {
      addLine(`Discord: ${CONFIG.discordUser}`, "term-info");
      addLine(`GitHub: ${CONFIG.githubUrl}`, "term-info");
    }
  
    function printNeofetch() {
      const uptime = Math.floor(performance.now() / 1000);
      addLine("       .--.        thuysmao@system", "term-pink");
      addLine("      |o_o |       ─────────────────", "term-pink");
      addLine("      |:_/ |       OS: THUYSMAO Web Terminal", "term-info");
      addLine("     //   \\ \\      Shell: custom-js", "term-info");
      addLine("    (|     | )     Theme: cyber-neon", "term-info");
      addLine("   /'\\_   _/`\\\\    Uptime: " + uptime + "s", "term-info");
      addLine("   \\___)=(___/     User: " + CONFIG.discordUser, "term-info");
    }

    function printThemeInfo() {
        const activeTheme =
          localStorage.getItem("site-theme") ||
          [...document.body.classList].find(cls =>
            ["cyber-neon", "pink-anime", "dark-glass", "red-alert"].includes(cls)
          ) ||
          "cyber-neon";
      
        addLine("ACTIVE THEME", "term-accent");
        addLine(activeTheme, "term-info");
      }
      
      function printDiscordInfo() {
        const username = document.getElementById("discord-username")?.textContent?.trim() || CONFIG.discordUser;
        const activityName = document.getElementById("discord-activity-name")?.textContent?.trim() || "No current activity";
        const activityDetails = document.getElementById("discord-activity-details")?.textContent?.trim() || "";
        const activityState = document.getElementById("discord-activity-state")?.textContent?.trim() || "";
      
        let status = "offline";
        const dot = document.getElementById("discord-status-dot");
        if (dot?.classList.contains("status-online")) status = "online";
        else if (dot?.classList.contains("status-idle")) status = "idle";
        else if (dot?.classList.contains("status-dnd")) status = "dnd";
      
        addLine("DISCORD STATUS", "term-accent");
        addLine(`User: ${username}`, "term-info");
        addLine(`Presence: ${status}`, "term-info");
        addLine(`Activity: ${[activityName, activityDetails, activityState].filter(Boolean).join(" — ")}`, "term-info");
      }
      
      function printStatsInfo() {
        const uptime = document.getElementById("stat-uptime")?.textContent || "0s";
        const theme = document.getElementById("stat-theme")?.textContent || "cyber-neon";
        const media = document.getElementById("stat-media")?.textContent || "Unknown";
        const discord = document.getElementById("stat-discord")?.textContent || "offline";
        const song = document.getElementById("stat-song")?.textContent || "None";
      
        addLine("SITE STATS", "term-accent");
        addLine(`Uptime: ${uptime}`, "term-info");
        addLine(`Theme: ${theme}`, "term-info");
        addLine(`Media: ${media}`, "term-info");
        addLine(`Discord: ${discord}`, "term-info");
        addLine(`Song: ${song}`, "term-info");
      }
  
    function runCommand(raw) {
      const command = raw.trim();
      const lower = command.toLowerCase();
  
      if (!command) return;
  
      addHTML(`<span class="prompt">thuysmao@system:~$</span> ${command}`);
  
      if (lower === "help") {
        printHelp();
        return;
      }
  
      if (lower === "about") {
        printAbout();
        return;
      }
  
      if (lower === "whoami") {
        printWhoAmI();
        return;
      }
  
      if (lower === "projects") {
        printProjects();
        return;
      }
  
      if (lower === "socials") {
        printSocials();
        return;
      }
  
      if (lower === "banner") {
        printBanner();
        return;
      }
  
      if (lower === "neofetch") {
        printNeofetch();
        return;
      }
  
      if (lower === "matrix") {
        runMatrix();
        return;
      }
  
      if (lower === "stop matrix") {
        stopMatrix();
        addLine("Matrix mode stopped.", "term-orange");
        return;
      }
  
      if (lower === "clear") {
        clearTerminal();
        return;
      }
  
      if (lower === "exit" || lower === "close") {
        closeTerminal();
        return;
      }
  
      if (lower === "open github") {
        window.open(CONFIG.githubUrl, "_blank", "noopener,noreferrer");
        addLine("Opening GitHub...", "term-accent");
        return;
      }
  
      if (lower === "open discord") {
        window.open(CONFIG.discordUrl, "_blank", "noopener,noreferrer");
        addLine("Opening Discord...", "term-accent");
        return;
      }

      if (lower === "theme") {
        printThemeInfo();
        return;
      }
      
      if (lower === "discord") {
        printDiscordInfo();
        return;
      }
      
      if (lower === "stats") {
        printStatsInfo();
        return;
      }
  
      addLine(`Command not found: ${command}`, "term-error");
      addLine("Type 'help' to see available commands.", "term-muted");
    }
  
    toggleBtn.addEventListener("click", openTerminal);
    closeBtn.addEventListener("click", closeTerminal);
  
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeTerminal();
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "`") {
        e.preventDefault();
        if (overlay.classList.contains("hidden")) {
          openTerminal();
        } else {
          closeTerminal();
        }
      }
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const value = input.value.trim();
      if (!value) return;
  
      history.push(value);
      historyIndex = history.length;
  
      runCommand(value);
      input.value = "";
    });
  
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          input.value = history[historyIndex];
        }
      }
  
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          input.value = "";
        }
      }
    });
  });