function show(num) {
var txt = document.getElementById("txt"+num);
txt.style.display="block";
}
function remove(num) {
var txt = document.getElementById("txt"+num);
txt.style.display="none";
}

function spoiler(a) {
    if (a.parentNode.getElementsByTagName("div")[0].style.display != "") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "";
    a.innerHTML = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; скрыть";
    }
else {
    a.parentNode.getElementsByTagName("div")[0].style.display = "none";
    a.innerText = "... читать далее";
    }
    }

function spoiler1(a) {
    if (a.parentNode.getElementsByTagName("div")[0].style.display != "") {
    a.parentNode.getElementsByTagName("div")[0].style.display = "";
    a.innerText = "       скрыть";
    }
else {
    a.parentNode.getElementsByTagName("div")[0].style.display = "none";
    a.innerText = "... показать";
    }
    }

function onlyClick(num) {
   var ref = document.getElementById("link_"+num);
   ref.innerText = "    вернуться";
   ref.style.display = "block";
   ref.parentNode.getElementsByTagName("div")[0].style.display = "";
   ref.parentNode.getElementsByTagName("a")[0].style.display = "none";
   ref.href = "#closure0";
 }

function mouseout(a) {
// alert(a.innerHTML +'  '+ a.href);
    a.parentNode.getElementsByTagName("div")[0].style.display = "none"
    a.parentNode.getElementsByTagName("a")[0].style.display = "block"
    a.href = "#closure";
    a.style.display = "none";
        }

 // функция удаления всплывающей подсказки по наведению
function hide(){
if(!document.getElementById('floatTip'));
else document.body.removeChild(document.getElementById('floatTip'));}
 // функция удаления всплывающей подсказки по клику
function hideClick(){
if(!document.getElementById('floatTipClick'));
else document.body.removeChild(document.getElementById('floatTipClick'));}

 // функция показа всплывающей подсказки по наведению
function show(a) {
hideClick();
var d = document.createElement('div');
d.className='floatTip';
d.id='floatTip';
d.innerHTML = a;
document.body.appendChild(d);
var ww = d.getBoundingClientRect().right - d.getBoundingClientRect().left;
var hh = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top;
document.onmouseover=mouseover;
function mouseover(event) {
event = event || window.event;
var x = 0;
var y = 0;
x = event.clientX;
y = event.clientY;
if (x <= document.body.scrollLeft + ww/2) {
 d.style.left = document.body.scrollLeft + 'px'; }
else if (x >= document.body.scrollLeft + document.body.clientWidth - ww) {
d.style.left = document.body.scrollLeft + document.body.clientWidth - ww + 'px';}
else {
    d.style.left = x + document.body.scrollLeft - ww/2 + 'px';
  }
if (y <= hh + 10) {
d.style.top = y + document.body.scrollTop + 10 + 'px';
} else {
d.style.top = y + document.body.scrollTop - hh - 10 + 'px';
}
}
d.style.opacity='0.9';
d.style.filter='alpha(opacity=90)';
}

 // функция показа всплывающей подсказки по клику
function showClick(a) {
hideClick();
hide();
var d = document.createElement('div');
d.className='floatTipClick';
d.id='floatTipClick';
d.innerHTML = a;
document.body.appendChild(d);
var ww = d.getBoundingClientRect().right - d.getBoundingClientRect().left;
var hh = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top;
document.onclick=mouseclick;
function mouseclick(event) {
event = event || window.event;
var x = 0;
var y = 0;
x = event.clientX;
y = event.clientY;
if (x <= document.body.scrollLeft + ww/2) {
 d.style.left = document.body.scrollLeft + 'px'; }
else if (x >= document.body.scrollLeft + document.body.clientWidth - ww) {
d.style.left = document.body.scrollLeft + document.body.clientWidth - ww + 'px';}
else {
    d.style.left = x + document.body.scrollLeft - ww/2 + 'px';
  }
if (y <= hh + 10) {
d.style.top = y + document.body.scrollTop + 10 + 'px';
} else {
d.style.top = y + document.body.scrollTop - hh - 10 + 'px';
}
}
d.style.opacity='0.9';
d.style.filter='alpha(opacity=90)'; // для IE9-
}

// переменные с описанием типа аргументов
var type_string = "тип значения string - строка"
var type_float = "тип значения float -<br>число с плавающей запятой"
var type_int = "тип значения integer - целое число"
var type_number = "тип значения number - число"
var type_array = "тип значения array - массив"
var type_typearray = "тип значения TypedArray<br>(типизированный массив)"
var type_bool = "тип значения boolean - логический тип<br>(либо true, либо false)"
var type_func = "тип значения function - т.е.<br>значением аргумента должна быть функция"
var type_null = "тип значения null - т.е.<br>значение неизвестно"
var type_obj = "тип значения object - т.е.<br>аргумент является объектом"
var type_const = "это константа - т.е.<br>значение не изменяется"
var type_vector3 = "значение должно быть<br>трехмерным вектором"
var type_vector2 = "значение должно быть<br>двухмерным вектором"
var type_hashmap = "значение должно быть<br>хеш-картой (хеш-таблицей)"
var type_color = "значение может быть шестнадцатиричным<br>значением цвета или названием цвета<br>согласно CSS"
var type_hex = "значение должно быть шестнадцатиричным<br>значением цвета"
var type_float32array = "тип значения Float32Array -<br>типизированый массив 32-разрядных чисел с плавающей запятой"
var type_rad = "значение угла в радианах"
var type_uint8array = "тип значения Uint8Array - типизированный массив<br>беззнаковых восьмиразрядных целых чисел"
var type_uint16array = "тип значения Uint16Array - типизированный массив<br>беззнаковых шестнадцатиразрядных целых чисел"

// переменные часто встречающегося текста
// var prop_1 = "<h4>Свойства</h4><br>Любой из параметров конструктора доступен в качестве свойства с тем же самым именем. После создания экземпляра, любые изменения этих свойств не изменяют геометрии.<br><br>"

var note_0 = '<div class=list><tt>parameters</tt> - объект с одним или несколькими свойствами, определяющими внешний вид материала (дополнительный, необязательный параметр). Здесь можно передать любое свойство материала (включая любое свойство унаследованное от <a href="#3" onmouseover="show(\'Material\')" onmouseout="hide()">Material</a>).</div>'
var note_01 = 'Исключением является свойство <tt><span onclick="showClick(type_hex)"><a href="#" onclick="return false" onblur="hideClick()" onmouseover="show(\'Color.<br>color - цвет\')" onmouseout="hide()">color</a></span></tt>, значение которого можно передать как шестнадцатиричную строку и по умолчанию равно <tt>0xffffff</tt> (белый цвет). Метод <tt><a href="math.htm#3set" onmouseover="show(\'Color.set\')" onmouseout="hide()">Color.set( color )</a></tt> вызывается внутренне.'
var note_1 = 'Данное свойство соответствует свойству <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin" target="_blank"><tt>lineJoin</tt> в 2D Canvas</a> и игнорируется <a href="renderers.htm#1.1" onmouseover="show(\'WebGLRenderer\')" onmouseout="hide()">WebGL</a> визуализатором (рендерером). Вот эта <a href="https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/lineJoin" target="_blank">статья о <tt>lineJoin</tt></a> на русском языке.'
// var note_2 = '<br>При работе с некоторыми визуализаторами, данная настройка может не иметь никакого влияния. Например, она игнорируется рендерером <a href="renderers.htm#1.1" onmouseover="show(\'CanvasRenderer\')" onmouseout="hide()">Canvas</a>, но работает с рендерером <a href="renderers.htm#1.2" onmouseover="show(\'WebGLRenderer\')" onmouseout="hide()">WebGL</a>.<br>'
var note_3 = '<br>Из-за ограничений в <a href="https://code.google.com/p/angleproject" target="_blank">слое ANGLE</a> с визуализатором (рендерером) <a href="renderers.htm#1.1" onmouseover="show(\'WebGLRenderer\')" onmouseout="hide()">WebGL</a> в операционных системах на основе Windows толщина линии (т.е. значение параметра <tt>linewidth</tt>) всегда будет равна <tt>1</tt>, независимо от установленного значения.'
+'<div class=note_trans><b>Примечание переводчика:</b> ANGLE (Almost Native Graphics Layer Engine - практически встроенный движок графического слоя, а перевод самой аббревиатуры ANGLE - угол) это графический движок слоя абстракций, разработанный компанией Google, с открытым исходным кодом под лицензией BSD.'
+'Этот API в основном предназначен для обеспечения высокопроизводительной совместимости OpenGL с компьютерами Windows и веб-браузерами вроде Chromium, путем перевода вызовов OpenGL в Direct3D, который гораздо лучше поддерживается драйверами. Для ANGLE существует два внутренних визуализатора: самый старый использует Direct3D 9.0c, в то время как новый использует Direct3D 11.<br><br>'
+'<span style="float:right; margin-top:-16px; background-color:#ffffe8;"><i>из статьи англ. Википедии о <a href="https://en.wikipedia.org/wiki/ANGLE_(software)" target="_blank">ANGLE</a>, перевод мой.</i></span></div>'
