function random_img() {
    var random=Math.floor(Math.random()*6)+1;
    return "Images/"+random+".png"
}
document.querySelectorAll("img")[0].setAttribute("src",random_img());
document.querySelectorAll("img")[1].setAttribute("src",random_img());