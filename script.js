
 



function fnnn() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("myBtn");
    let contentElement = document.getElementById("d");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("d").style.display = "block";
            contentElement.innerHTML = x;
            
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("d").style.display = "none";
            
            
        }
    });
}

function fnnn1() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("myBtn1");
    let contentElement = document.getElementById("f");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("f").style.display = "block";
            contentElement.innerHTML = x;
            
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("f").style.display = "none";
            
            
        }
    });
}

function fnnn2() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("bnm");
    let contentElement = document.getElementById("d1");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("d1").style.display = "block";
            contentElement.innerHTML = x;
            contentElement.style.paddingLeft="5%";
            contentElement.style.paddingRight="5%";
            contentElement.style.textAlign="center";
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("d1").style.display = "none";
            
            
        }
    });
}

// $("#d2").hide();

function fnnn3() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("bnm2");
    let contentElement = document.getElementById("d2");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("d2").style.display = "block";
            contentElement.innerHTML = x;
            contentElement.style.paddingLeft="5%";
            contentElement.style.paddingRight="5%";
            contentElement.style.textAlign="center";
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("d2").style.display = "none";
            
            
        }
    });
}



function fnnn4() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("bnm3");
    let contentElement = document.getElementById("d3");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("d3").style.display = "block";
            contentElement.innerHTML = x;
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.paddingLeft="5%";
            contentElement.style.paddingRight="5%";
            contentElement.style.textAlign="center";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("d3").style.display = "none";
            
            
        }
    });
}


// wrl1 and wrl2

function fnnn5() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("myBtmn");
    let contentElement = document.getElementById("e1");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("e1").style.display = "block";
            contentElement.innerHTML = x;
            contentElement.style.paddingLeft = "10%";
            contentElement.style.paddingRight = "8%";
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("e1").style.display = "none";
            
            
        }
    });
}

function fnnn6() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("myBtmn1");
    let contentElement = document.getElementById("e2");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("e2").style.display = "block";
            contentElement.innerHTML = x;
            contentElement.style.paddingLeft = "10%";
            contentElement.style.paddingRight = "8%";
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("e2").style.display = "none";
            
            
        }
    });
}

function fnnn7() {
    let x = "lorem ipsum dolor sit amet,consectetur adipsdasdfs epit.Ex itaque";
    let element = document.getElementById("myBtmn2");
    let contentElement = document.getElementById("e3");
    

    element.addEventListener("click", function () {
        if (element.innerText == "Read more") {
            document.getElementById("e3").style.display = "block";
            contentElement.innerHTML = x;
            contentElement.style.paddingLeft = "10%";
            contentElement.style.paddingRight = "8%";
            contentElement.style.fontFamily = "sans-serif";
            contentElement.style.color = "gray";
            element.innerText = "Read less";
            
        } else {
            element.innerText = "Read more";
            document.getElementById("e3").style.display = "none";
            
            
        }
    });
}

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.navf').addClass('sticky')
    } else{
        $('.navf').removeClass('sticky')
    }
});


function bu(){
    let cl=document.getElementsByClassName("demo2");
    let y=document.getElementsByClassName("buttt2");
    y.addEventListener("click",function(){
        cl.style.pointerEvents="auto";
    })
}

window.addEventListener("scroll", function() {
    scrollfunction();
});

function scrollfunction(){
    if(document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60){
        console.log("hiiiiiiiiiiii")
        document.getElementsByTagName("header").style.backgroundColor="black";
        const ne= document.getElementsByTagName("header").innerHTML
        console.log(ne)
    }
    else{
        document.getElementsByTagName("header").style.backgroundColor="red";
    }
};



