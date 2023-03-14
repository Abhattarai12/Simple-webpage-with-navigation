let count = 0;
let linkbtn = document.getElementById("link-btn");
function toogle() {
    if (count % 2 == 0){
         document.getElementById('navbar').className = "show";
    } else {
        document.getElementById('navbar').className = "hide";
    };
    count +=1;
    console.log(count);
};
console.log(count);