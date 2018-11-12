
var name='Сергій',a,b,c,d,result;
a=17;
b=7;
d=7;
c=a-b;
result=d+c;

alert(name);
alert(c);
alert(result);

var variant=prompt("Введіть номер варіанту");
if(variant>=7){
	alert('Вірно');
}else{
	alert('Невірно');
}

if (a % 2 ==0){
	y=a+7;
	alert(y);
}
else{
	y=a-3;
	alert(y);
}

for(var i=0; i++<27;){
   var p= Math.pow(i, 2);
	document.write(p,"</br>");	
}
document.write('Прості числа:');
nextPrime:
  for (var w = 2; w <= 27; w++) {

    for (var j = 2; j < w; j++) {
      if (w % j == 0) continue nextPrime;
    }
    document.write(w,' ');
  }
