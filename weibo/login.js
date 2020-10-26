const user = require("./config.json");
const puppeteer = require("puppeteer");

puppeteer
  .launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
    args: ["--disable-notifications"] // 关闭消息通知
  })
  .then(async browser => {
    const page = await browser.newPage();

    await page.goto("https://weibo.com", { waitUntil: "networkidle2" });
    await page.waitFor(2 * 1000); //防止被检测
    await page.reload(); //防止被检测
    await page.waitForSelector("#loginname");
    // 输入账号密码
    await page.waitFor(5000); //防止被检测

    page.click("#loginname");
    // for (let i = 0; i < 11; i++) page.keyboard.press("Backspace");
    console.log(user.name);
    await page.type("#loginname", user.name, { delay: 10 });
    await page.waitFor(3000); //防止被检测
    page.click("input[name='password']");
    console.log(user.password);
    await page.type("input[name='password']", user.password, { delay: 200 });
    await page.waitFor(3000); //防止被检测
    page.click("a.W_btn_a");
  });
