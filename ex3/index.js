
const fs = require('fs');

fs.readFile('file.txt', 'utf-8',(err,data) => {
  if(err){
    console.error(err);
    return;
  }
  //console.log(data);
  var array = data.split(";");  
  console.log(array);

 // var expressao = '^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$';
 // var regex = new RegExp(expressao);


  for(i in array){
//console.log(array[i].toString());
var numero=array[i].toString();
//console.log(regex.test(numero));
//  if (regex.test(numero)) {
  if (array[i].length == 11){
    console.log(numero + ' está certo');
  }
  else {
    console.log(numero + ' está errado')
  }

}

});

            