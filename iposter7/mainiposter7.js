export default function mainiposter7() {
    let $main = document.getElementById("main");
    $main.innerHTML = ` <div id="left" class="card">
    <div class="discount">50%</div>
    <div>
        <img src="./image/Rectangle 15.png" alt="">
    </div>
    <div>
        <p>Cuộn băng keo 2 mặt trong suốt...</p>
        <h3>1.230.000 đ</h3>
        <del>111.230.000 đ</del>
    </div>
</div>
<div id="right" class="card">
    <div>
        <img src="./image/Rectangle 14.png" alt="">
    </div>
    <div>
        <p>Cuộn băng keo 2 mặt acrylic trong suốt...</p>
        <h3>1.230.000 đ</h3>
        <del>111.230.000 đ</del>
    </div>
</div>
<div class="footer-main">
    <span class="text-1">Lazada</span>
    <span class="text-2">via</span>
    <span class="text-3">AdX</span>
    <span class="text-4">Ecom</span>
</div>`
    return $main
}