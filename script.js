

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction3() {
	document.getElementById('myP').contentEditable = true;
	document.getElementById('myP').style.backgroundColor = "#ddd";
	alert('Now, You can Edit the Content');
}

function myFunction4() {
	document.getElementById('myP').contentEditable = false;
	document.getElementById('myP').style.backgroundColor = "#ffff";
	alert('Your Edit is saved as draft and will be uploaded to website in 3-4 days as soon as possible. Please reload the page to back to Original content.Thank You');
}

function myFunction31() {
	document.getElementById('myP1').contentEditable = true;
	document.getElementById('myP1').style.backgroundColor = "#ddd";
	alert('Now, You can Edit the Content');
}

function myFunction32() {
	document.getElementById('myP1').contentEditable = false;
	document.getElementById('myP1').style.backgroundColor = "#ffff";
	alert('Your Edit is saved as draft and will be uploaded to website in 3-4 days as soon as possible. Please reload the page to back to Original content.Thank You');
}


 // Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.display = "none";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
	
  }
}

function myFunction12() {
	document.getElementById('demo1').style.fontSize = 'large';
	document.getElementById('demo2').style.fontSize = 'large';
	document.getElementById('demo3').style.fontSize = 'large';
	document.getElementById('demo4').style.fontSize = 'large';
	document.getElementById('demo5').style.fontSize = 'large';
	document.getElementById('demo6').style.fontSize = 'large';
}
function myFunction13() {
	document.getElementById('demo1').style.fontSize = 'small';
	document.getElementById('demo2').style.fontSize = 'small';
	document.getElementById('demo3').style.fontSize = 'small';
	document.getElementById('demo4').style.fontSize = 'small';
	document.getElementById('demo5').style.fontSize = 'small';
	document.getElementById('demo6').style.fontSize = 'small';
}
function myFunction14() {
	document.getElementById('demo1').style.fontSize = 'medium';
	document.getElementById('demo2').style.fontSize = 'medium';
	document.getElementById('demo3').style.fontSize = 'medium';
	document.getElementById('demo4').style.fontSize = 'medium';
	document.getElementById('demo5').style.fontSize = 'medium';
	document.getElementById('demo6').style.fontSize = 'medium';
}

function myFunction15() {
	document.getElementById('demo1').style.fontSize = 'x-large';
	document.getElementById('demo2').style.fontSize = 'x-large';
	document.getElementById('demo3').style.fontSize = 'x-large';
	document.getElementById('demo4').style.fontSize = 'x-large';
	document.getElementById('demo5').style.fontSize = 'x-large';
	document.getElementById('demo6').style.fontSize = 'x-large';
}

function myFunction16() {
	document.getElementById('demo1').style.fontSize = 'x-small';
	document.getElementById('demo2').style.fontSize = 'x-small';
	document.getElementById('demo3').style.fontSize = 'x-small';
	document.getElementById('demo4').style.fontSize = 'x-small';
	document.getElementById('demo5').style.fontSize = 'x-small';
	document.getElementById('demo6').style.fontSize = 'x-small';
}

function myFunction17() {
	document.getElementById('demo1').style.fontSize = 'xx-large';
	document.getElementById('demo2').style.fontSize = 'xx-large';
	document.getElementById('demo3').style.fontSize = 'xx-large';
	document.getElementById('demo4').style.fontSize = 'xx-large';
	document.getElementById('demo5').style.fontSize = 'xx-large';
	document.getElementById('demo6').style.fontSize = 'xx-large';
}


document.getElementById('div2').style.display = 'none';
document.getElementById('myModal2').style.display = 'none';
document.getElementById('bg1').style.fontFamily = 'arial';

var close = document.getElementsByClassName("closebtn2");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.display = "none";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
	
  }
}

   