const tick = () => {
    var elementos = document.getElementsByClassName('reloj');
    
    for (var i=0; i < elementos.length; i++) {
      let tiempo = elementos[i].innerText.split(':');
      
      if (tiempo.length < 2){
         let alter = tiempo[0].split('.');
         tiempo[0] = alter[0];
         let second = (alter[1] * 0.0000006).toString().split('.') ;
         tiempo[1] =  parseInt(second[0], 10)
         tiempo[2] = 0;
         
      }
        tiempo[2] = parseInt(tiempo[2], 10) +1;
        if (tiempo[2] == 60 ){
            tiempo[2] = 0;
            tiempo[1] =parseInt(tiempo[1], 10) +1;
        }

        if (tiempo[1] == 60 ){
            tiempo[1] = 0;
            tiempo[0] = parseInt(tiempo[0], 10) +1;
        }
        elementos[i].innerText = tiempo[0] + ':' + tiempo[1].toString().padStart(2,"0") + ':' + tiempo[2].toString().padStart(2,"0");
   }
   
    
};
 
setInterval(tick, 1000);