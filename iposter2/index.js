import main from "./main.js";
import footerScreen from "./footer.js"
import banner from "./banner.js";
const $body = document.getElementsByTagName("body");

$body[0].append(banner(), main(), footerScreen());