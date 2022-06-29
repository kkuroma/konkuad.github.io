function openNav() {
    document.getElementById("mainNavBar").style.width = "200px";
}

function closeNav() {
    document.getElementById("mainNavBar").style.width = "0";
}

function originalHeight(id) {
    var box = document.getElementById(id);
    var stuffs = box.children;
    var counts = stuffs.length;
    var height = 13;
    for (var i = 0; i < counts; i++) {
        if(stuffs[i].className=='dropDownToggler'){
            height += stuffs[i].clientHeight
        };
    }
    return height;
}

function extendedHeight(id) {
    var box = document.getElementById(id);
    var beforeHeight = box.clientHeight;
    box.style.height = "auto";
    var afterHeight = box.clientHeight;
    box.style.height = beforeHeight;
    return afterHeight 
}

function dropDownToggle(id) {
    var box = document.getElementById(id);
    var stuffs = box.children;
    var counts = stuffs.length; 
    function setVisible(item) {
        if(item.className!='dropDownToggler'){
            var visible = item.style.visibility;
            if(visible=="visible"){
                item.style.visibility = "hidden";
            } else {
                item.style.visibility = "visible";
            }
        }
    }
    for (var i = 0; i < counts; i++) {
        setVisible(stuffs[i]);
    }
    var originalH = originalHeight(id);
    var extendedH = extendedHeight(id);
    console.log(originalH,extendedH);
    if(Math.abs(box.clientHeight-originalH)<=15){
        box.style.height = extendedH;
    } else {
        box.style.height = originalH-5;
    }
}

function initDropDown(id) {
    var box = document.getElementById(id);
    var stuffs = box.children;
    var counts = stuffs.length; 
    function setVisible(item) {
        if(item.className=='dropDownToggler'){
            var visible = item.style.visibility;
            item.style.visibility = "visible";
        }
    }
    for (var i = 0; i < counts; i++) {
        setVisible(stuffs[i]);
    }
    var originalH = originalHeight(id);
    box.style.height = originalH-5;

}
