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

      document.getElementById("span2").textContent = str1;

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

      document.getElementById("span2").textContent = str2;

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

      document.getElementById("span2").textContent = str3;

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

      document.getElementById("span2").textContent = str4;

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

      document.getElementById("span2").textContent = str5;

      // q6




      let izonndo = 0;


      if (str1 == radios[i].value) {
        str1 = 10;
        console.log(str1);
      }

      if (str2 == radios[i].value) {
        str1 = 10;
        console.log(str2);
      }

      if (str3 == radios[i].value) {
        str1 = 10;
        console.log(str3);
      }

      if (str4 == radios[i].value) {
        str1 = 10;
        console.log(str4);
      }

      if (str5 == radios[i].value) {
        str1 = 10;
        console.log(str5);
      }




      // /6


//       let str = "";
// var question1 = document.getElementsByName("question1");
// var question2 = document.getElementsByName("question2");
// var question3 = document.getElementsByName("question3");
// var question4 = document.getElementsByName("question4");
// var question5 = document.getElementsByName("question5");
// var question6 = document.getElementsByName("question6");
// var question7 = document.getElementsByName("question7");
// var question8 = document.getElementsByName("question8");
// var question9 = document.getElementsByName("question9");
// var question10 = document.getElementsByName("question10");

// for (let i = 0; i < question1.length; i++){
// if(question1[i].checked){ //(question1[i].checked === true)と同じ
//   str = question1[i].value;
//   break;
// }
// }
// document.getElementById("span1").textContent = str;


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

//5
// var radios = document.getElementsByName('question1');

// for (var i = 0, length = radios.length; i < length; i++)
// {
//  if (radios[i].checked)
//  {
//   // do whatever you want with the checked radio
//   str = (radios[i].value);



//   // only one radio can be logically checked, don't check the rest
//   break;
//  }
// };
// document.getElementById("span2").textContent = str;
// /5

// window.onload = function() {
  
  
// 1
  // var q1 = document.getElementById('radio1');
  
  // var q12 = document.getElementById('radio2');
  
  // var q2 = document.getElementById('radio3');
  // var q3 = document.getElementById('radio5');
  // var q4 = document.getElementById('radio7');
  // var q5 = document.getElementById('radio9');
  
  
  // var bool1 = Boolean(q1);
  // // console.log('Boolean("q1")=' + bool1);
  // addEventListener('click', function(e)  {
  //     var q=e.target;
  //     switch(q== q1){
  //       case 1:
  //       console.log(true);
  //       break;
  //       // }case 2:
  //       // (q==q12) {
  //         // console.log(false);
  //         }
  // });
        // /1
        
        
        // 3
        // function clickBtn1(){
          // 	// let str = "";
          // 	// var question1 = document.getElementsByName("question1");
          
          // 	// for (let i = 0; i < question1.length; i++){
            // 	// 	if(question1[i].checked){ //(question1[i].checked === true)と同じ
            // 	// 		str = question1[i].value;
            // 	// 		break;
            // 	// 	}
            // 	// }
            
            // }
            // /3
            
            // 2
            // function clickBtn1(){
              //   let str = "";
              //   const question1 = document.form1.question1;
  
              //   for (let i = 0; i < question1.length; i++){
                //     if(question1[i].checked){ //(question1[i].checked === true)と同じ
                //       str = question1[i].value;
  //       break;
  //     }
  //   }
  //   document.getElementById("span1").textContent = str;
  //   console.log(document.getElementById("span1").textContent);
  // };
  // /2
  
  
  
  
  // var radio = document.getElementById('radio1');
  
  // function onRadioButtonChange() {
    //     var elements = document.getElementsByName("question1");
    
    // // 選択状態の値を取得
    // for ( var a="", i=elements.length; i--; ) {
      // 	if ( elements[i].checked ) {
        // 		var a = elements[i].value ;
        // 		break ;
        // 	}
        // }
        
        // if ( a === "" ) {
          // 	// 未選択状態
          // } else {
            // 	// aには選択状態の値が代入されている
            // 	console.log( a ) ;
            // }
            // }
            
            
            //     elements[0].checked = false;
            //     // 3つ目の要素を選択状態にする
            //     if(elements[0].checked = true) {
              //       console.log(elements[0].checked);
              //       // 3つ目の要素の選択状態を外す
              //     }else if(elements[0].checked = false) {
                //       console.log(elements[0].checked);
                //     }
                // }
                
                
                
  
                
                
  
                
                
                // target = document.getElementById("output");
                
  //     if (q1.checked == true) {
  //       target.innerHTML = "要素1がチェックされています。<br/>";
  
  //     }
  //     else if (q12.checked == true) {
    //       target.innerHTML = "要素2がチェックされています。<br/>";
    //     }
    // else if (radiobtn3.checked == true) {
      //   target.innerHTML = "要素3がチェックされています。<br/>";
      // }
      //   }
      // }
      
      // boolean q1 = false;
      
      
      // function myCheck(){
        // var flag = false; // 選択されているか否かを判定するフラグ
        
        //　ラジオボタンの数だけ判定を繰り返す（ボタンを表すインプットタグがあるので１引く）
        // for(var i=0; i<document.form1.question1.length-1;i++){
          
          //     // i番目のラジオボタンがチェックされているかを判定
          //     if(document.form1.question1[i].checked){ 
            //         flag = true; 
            //         console.log(question1);  
            //         alert(document.form1.question1[i].value + "が選択されました。");
            //     }
    // }
    
    // 何も選択されていない場合の処理
//     if(!flag){ 
  //       console.log(question1); 
  //         alert("項目が選択されていません。");
  //     }
  
  //   };
  
  // };
  
  
  
  
  
  
  // 4
  // addEventListener('click', function(e)  {
  //   var q=e.target;
  //   if(q== q1){
  //     console.log(q1);
    
  //   }else if(q== q12) {
  //     console.clear(q1);
      
      
  //   }else if(q== q2){
  //     console.log(q2);
  //   }else if(q== q3){
  //     console.log(q3);
  //   }else if(q== q4){
  //     console.log(q4);
  //   }else if(q== q5){
  //     console.log(q5);
  //   }
  //   else if(q== q6){
  //     console.log(q6);
  //   }else if(q== q7){
  //     console.log(q7);
  //   }else if(q== q8){
  //     console.log(q8);
  //   }else if(q== q9){
  //     console.log(q9);
  //   }else if(q== q10){
  //     console.log(q10);
  //   }
    
    
  // });
// };
// 4



// window.onload = function() {

//   var radio = document.getElementById('radio1');
//   radio.forEach(function(e) {

//   e.addEventListener('click', function()  {
//     console.log(document.querySelector("input:checked[id=radio1]").value);
//   });
// });
// };
    
// var q1 = document.getElementById('radio1').checked();
// console.log(q1);

// var q2 = document.getElementById('radio3').checked();
// var q3 = document.getElementById('radio5').checked();
// var q4 = document.getElementById('radio7').checked();
// var q5 = document.getElementById('radio9').checked();

// var qYes = [q1 ,q2 ,q3 ,q4 ,q5];
// let izonndo = 0;
// for(let i=0;i<qYes.length;i++){
  //   if(qYes[i]==="yes"){
    //     izonndo+=10;
    //   }
    // }
    
    // document.getElementById("getid").textContent = izonndo; 
    // for(var i = 0; i < qYes.length; i++){
      //   if(qYes[i].checked) {
        //     console.log("選択された値：", qYes[i].value);
        // }
        // }

//         main.jsはどこで読み込んでますかね？
// index.htmlのheadタグで読み込んでいる場合、DOM読み込み前にmain.jsが呼ばれるので、getElementById('radio1')は取得できません。

// window.onload = function() {
 
//   var checkOption = document.getElementsByName('RadioGroup1');
  
//   checkOption.forEach(function(e) {
//       e.addEventListener("click", function() {           
//           console.log(document.querySelector("input:checked[name=RadioGroup1]").value);
//       });
//   });

// };
