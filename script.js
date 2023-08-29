//html references
let player = document.getElementById("player");
let idle = document.getElementById("idle");
let lefts = document.getElementById("left");
let ups = document.getElementById("up");
let downs = document.getElementById("down");
let rights = document.getElementById("right");

//number variables
let speed = 8;

//boolean variables
let ismovingright = false;
let ismovingleft = false;
let ismovingup = false;
let ismovingdown = false;

//x direction
document.addEventListener("keydown", startmovex);
document.addEventListener("keyup", stopmovex);

function startmovex(event){
    if(event.key == "d" || event.key == "D"){
        ismovingright = true;
        ismovingleft = false;
    }
    else if(event.key == "a" || event.key == "A"){
        
        ismovingright = false;
        ismovingleft = true;
    }
}
function stopmovex(event){
    if(event.key == "d" || event.key == "D"){
        ismovingright = false;
    }
    else if(event.key == "a" || event.key == "A"){
        ismovingleft = false;
    }
}
function movex(){
    let x = player.offsetLeft;
    if(ismovingup != true && ismovingright == true && ismovingdown != true){
        player.style.left = x + speed + "px";
    }
    else if(ismovingleft === true && ismovingup != true && ismovingdown != true){
        player.style.left = x - speed + "px";
    }
    else if (ismovingup === true && ismovingright == true) {
        player.style.left = x + (speed/1.4) + "px"
    }
    else if (ismovingup === true && ismovingleft == true) {
        player.style.left = x - (speed/1.4) + "px"
    }
    else if (ismovingdown === true && ismovingright == true) {
        player.style.left = x + (speed/1.4) + "px"
    }
    else if (ismovingdown === true && ismovingleft == true) {
        player.style.left = x - (speed/1.4) + "px"
    }
    requestAnimationFrame(movex);
}
movex();

//y direction
document.addEventListener("keydown", startmovey);
document.addEventListener("keyup", stopmovey);

function startmovey(event){
    if(event.key == "w" || event.key == "W"){
        ismovingup = true;
        ismovingdown = false;
    }
    else if(event.key == "s" || event.key == "S"){
        ismovingup = false;
        ismovingdown = true;
    } 
}
function stopmovey(event){
    if(event.key == "w" || event.key == "W"){
        ismovingup = false;
    }
    else if(event.key == "s" || event.key == "S"){
        ismovingdown = false;
    }
}
function movey(){
    let y = player.offsetTop;
    if(ismovingup == true && ismovingright != true && ismovingleft != true){
        player.style.top = y - speed + "px";
    }
    else if(ismovingdown == true && ismovingright != true && ismovingleft != true){
        player.style.top = y + speed + "px";
    }
    else if (ismovingup == true && ismovingright == true) {
        player.style.top = y - (speed/1.4) + "px"
    }
    else if (ismovingdown == true && ismovingright == true) {
        player.style.top = y + (speed/1.4) + "px"
    }
    else if (ismovingup == true && ismovingleft == true) {
        player.style.top = y - (speed/1.4) + "px"
    }
    else if (ismovingdown == true && ismovingleft == true) {
        player.style.top = y + (speed/1.4) + "px"
    }
    requestAnimationFrame(movey);
}
movey();

//change sprite based on which direction
function changesprite(){
    if(ismovingright){
        rights.style.display = "block";
        lefts.style.display = "none";
        ups.style.display = "none";
        downs.style.display = "none";
        idle.style.display = "none";
    }
    else if(ismovingleft){
        rights.style.display = "none";
        lefts.style.display = "block";
        ups.style.display = "none";
        downs.style.display = "none";
        idle.style.display = "none";
    }
    else if(ismovingup){
        rights.style.display = "none";
        lefts.style.display = "none";
        ups.style.display = "block";
        downs.style.display = "none";
        idle.style.display = "none";
    }
    else if(ismovingdown){
        rights.style.display = "none";
        lefts.style.display = "none";
        ups.style.display = "none";
        downs.style.display = "block";
        idle.style.display = "none";
    }
    else if(!ismovingdown && !ismovingleft && !ismovingright && !ismovingup){
        rights.style.display = "none";
        lefts.style.display = "none";
        ups.style.display = "none";
        downs.style.display = "none";
        idle.style.display = "block";
    }
    requestAnimationFrame(changesprite);
    //console.log(ismovingdown + ", " + ismovingup + ", " + ismovingleft + ", " + ismovingright)
}
changesprite();