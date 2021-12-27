export default function footerScreen() {

    const $footer = document.createElement("div");
    $footer.id = "footer";
    $footer.innerHTML = `<p>
    <h class="text-1">Lazada</h>
    <h class="text-2">tài chợ</h>
    <h class="text-3"> Ecom </h>
    <h class="text-4"> AdX </h>
</p>
<div>
    <i class="fas fa-angle-double-down"></i>
</div>
`
    return $footer
}