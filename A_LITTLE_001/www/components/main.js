// Page init event
document.addEventListener('init', function(event) {
  var page = event.target;
  
  if (page.matches('#first-page')) {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#navigator').pushPage('page2.html');
      };
    } 
    else if (page.matches('#second-page')) {
      page.querySelector('#pop-button').onclick = function() {
        document.querySelector('#navigator').popPage();
      };
    }
    // 2ページ目
    if (page.matches('#second-page')) {

      // 6
      // q1
      var radios = document.getElementsByName('question1');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
           var str1 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str1;

      // q2
      var radios = document.getElementsByName('question2');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str2 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str2;

      // q3
      var radios = document.getElementsByName('question3');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str3 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str3;

      // q4
      var radios = document.getElementsByName('question4');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str4 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str4;

      // q5
      var radios = document.getElementsByName('question5');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str5 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str5;

      // q6

      var radios = document.getElementsByName('question6');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str6 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str6;

      // q7
      var radios = document.getElementsByName('question7');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str7 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str7;

      // q8
      var radios = document.getElementsByName('question8');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str8 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str8;

      // q9
      var radios = document.getElementsByName('question9');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str9 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      // document.getElementById("span2").textContent = str9;

      // q10
      var radios = document.getElementsByName('question10');
      
      for (var i = 0, length = radios.length; i < length; i++)
      {
        if (radios[i].checked){  // do whatever you want with the checked radio
          str10 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
          break;
        };
      }
      console.log(radios[i].value);

      document.getElementById("span2").textContent = str10;


      if (str1 == radios[0].value) {
        str1 = 10;
        console.log(str1);
      }

      if (str2 == radios[0].value) {
        str2 = 10;
        console.log(str2);
      }

      if (str3 == radios[0].value) {
        str3 = 10;
        console.log(str3);
      }

      if (str4 == radios[0].value) {
        str4 = 10;
        console.log(str4);
      }

      if (str5 == radios[0].value) {
        str5 = 10;
        console.log(str5);
      }

      if (str6 == radios[0].value) {
        str6 = 10;
        console.log(str6);
      }

      if (str7 == radios[0].value) {
        str7 = 10;
        console.log(str7);
      }

      if (str8 == radios[0].value) {
        str8 = 10;
        console.log(str8);
      }

      if (str9 == radios[0].value) {
        str9 = 10;
        console.log(str9);
      }

      if (str10 == radios[0].value) {
        str10 = 10;
        console.log(str10);
      }

 
        var sum = 0;
 

          if(str1 == 10){
            sum += str1;
          }
          if(str2 == 10){
            sum += str2;
          }
          if(str3 == 10){
            sum += str3;
          }
          if(str4 == 10){
            sum += str4;
          }
          if(str5 == 10){
            sum += str5;
          }
          if(str6 == 10){
            sum += str6;
          }
          if(str7 == 10){
            sum += str7;
          }
          if(str8 == 10){
            sum += str8;
          }
          if(str9 == 10){
            sum += str9;
          }
          if(str10 == 10){
            sum += str10;
          }
 
        console.log(sum);
        document.getElementById("span2").textContent = sum;
        // return sum;

      // /6


page.querySelector('#push-button').onclick = function() {
  document.querySelector('#navigator').pushPage('page3.html');
};
  } 
  else if (page.matches('#third-page')) {
    page.querySelector('#pop-button').onclick = function() {
      document.querySelector('#navigator').popPage();
    };
  }
});

// /Page init event

