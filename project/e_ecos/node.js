// onlcick menu
var menu_popup=document.querySelector(".menu_popup")
function show_menu(){
    
    menu_popup.style.left="0"
}
// menu_cancel
function cancel_menu(){
    menu_popup.style.left="-50%"
}
// search product
var product=document.querySelector(".product")
var product_box=product.querySelectorAll("div")
function search(){
    var inputvalue=document.getElementById("product_search").value.toUpperCase()
    for (var c=0;c<product_box.length;c++){
        var par_p=product_box[c].querySelector("p")
        if (par_p.textContent.toUpperCase().indexOf(inputvalue)<0) {
            product_box[c].style.display="none"
        } else {
             product_box[c].style.display="block"
        } 
    }
}
