
    var count = 0;
     var count2 = 0;
     var count3 = 0;
     var count4 = 0; 
     var count5 = 0;

      function incrementButton(div){
        
        
         
       if(div.id=="one"){
          count++;
          document.getElementById("one").innerHTML = count;        
        };if(div.id=="two"){
          count2++;
          document.getElementById("two").innerHTML = count2;
        }if(div.id=="three"){
          count3++;
          document.getElementById("three").innerHTML = count3;
        }if(div.id=="four"){
          count4++;
          document.getElementById("four").innerHTML = count4;
        }if(div.id=="five"){
          count5++;
          document.getElementById("five").innerHTML = count5;
        }
        
            
  }

  function reset(){
      count = 0;
      count2 = 0;
      count3 = 0;
      count4 = 0; 
      count5 = 0;
      document.getElementById("one").innerHTML = count;
      document.getElementById("two").innerHTML = count2;
      document.getElementById("three").innerHTML = count3;
      document.getElementById("four").innerHTML = count4;
      document.getElementById("five").innerHTML = count;
  }
