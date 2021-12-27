import main from "../iposter2/main.js";
import footerScreen from "../iposter2/footer.js"
import banner from "../iposter2/banner.js";
let $body = document.getElementsByTagName("body");

$body[0].append(banner(), main(), footerScreen());