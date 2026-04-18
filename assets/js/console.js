document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();

  const css = getComputedStyle(document.documentElement);

  const theme = {
    cyan: css.getPropertyValue("--mc-cyan").trim(),
    green: css.getPropertyValue("--mc-green").trim(),
    red: css.getPropertyValue("--mc-red").trim(),
    orange: css.getPropertyValue("--mc-orange").trim(),
    pink: css.getPropertyValue("--mc-pink").trim(),
    blue: css.getPropertyValue("--mc-blue").trim(),
    white: css.getPropertyValue("--mc-white").trim(),
    gray: css.getPropertyValue("--mc-gray").trim(),
    discord: css.getPropertyValue("--mc-discord").trim()
  };

  const line =
    "════════════════════════════════════════════════════════════";

  console.clear();

  console.log(
    "%c███ THUYSMAO SYSTEM ███",
    `
    color:${theme.cyan};
    font-size:28px;
    font-weight:bold;
    text-shadow:0 0 10px ${theme.cyan};
    letter-spacing:2px;
    `
  );

  console.log(`%c${line}`, `color:${theme.gray};`);

  console.log(
    `%c⏰ LOADED AT: %c${now.toLocaleString()}`,
    `color:${theme.orange};font-weight:bold;font-size:14px;`,
    `color:${theme.white};font-size:14px;`
  );

  console.log(`%c${line}`, `color:${theme.gray};`);

  console.log(
    "%c🚨 SECURITY WARNING",
    `
    background:${theme.red};
    color:white;
    font-size:18px;
    font-weight:bold;
    padding:6px 12px;
    `
  );

  console.log(
    "%cDevTools này dành cho developer.",
    `color:${theme.red};font-size:14px;`
  );

  console.log(
    "%cNếu ai yêu cầu bạn dán code vào đây → HỌ ĐANG LỪA BẠN.",
    `color:${theme.orange};font-size:14px;font-weight:bold;`
  );

  console.log(
    "%cCode độc có thể đánh cắp token hoặc tài khoản.",
    `color:${theme.red};font-size:14px;`
  );

  console.log(`%c${line}`, `color:${theme.gray};`);

  console.log(
    "%c⚡ Welcome to my website! ⚡",
    `
    color:${theme.green};
    font-size:20px;
    font-weight:bold;
    text-shadow:0 0 8px ${theme.green};
    `
  );

  console.log(
    "%c💡 Available Commands:",
    `color:${theme.blue};font-size:16px;font-weight:bold;`
  );

  console.log("%chelp()", "color:white;");
  console.log("%cabout()", "color:white;");
  console.log("%csocials()", "color:white;");
  console.log("%cclear()", "color:white;");

  console.log(`%c${line}`, `color:${theme.gray};`);

  console.log(
    "%c🐱 Powered by Thuysmao",
    `
    color:${theme.pink};
    font-size:16px;
    font-style:italic;
    text-shadow:0 0 6px ${theme.pink};
    `
  );

  // COMMANDS
  window.help = () => {
    console.log(
      "%c📘 COMMAND LIST",
      `color:${theme.cyan};font-size:20px;font-weight:bold;`
    );
    console.log("%chelp()      - Show commands", "color:white;");
    console.log("%cabout()     - About site", "color:white;");
    console.log("%csocials()   - Social links", "color:white;");
    console.log("%cclear()     - Clear console", "color:white;");
  };

  window.about = () => {
    console.log(
      "%c🌐 THUYSMAO PROFILE WEBSITE",
      `color:${theme.green};font-size:18px;font-weight:bold;`
    );
    console.log(
      "%cFrontend • Effects • Discord Presence",
      "color:white;"
    );
  };

  window.socials = () => {
    console.log(
      "%c💬 Discord: niang1_",
      `color:${theme.discord};font-size:16px;`
    );
    console.log(
      "%c🐙 GitHub: github.com/diy2kar4",
      "color:white;font-size:16px;"
    );
  };

  window.clear = () => {
    console.clear();
    console.log(
      "%cConsole cleared.",
      `color:${theme.green};font-size:16px;font-weight:bold;`
    );
  };
});