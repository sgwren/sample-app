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

page.querySelector('#push-button').onclick = function() {
  document.querySelector('#navigator').pushPage('page3.html');
};
}else if (page.matches('#third-page')) {
    page.querySelector('#pop-button').onclick = function() {
      document.querySelector('#navigator').popPage();
    };
  }
  if (page.matches('#third-page')) {

     // new6
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

        // function clickBtn1{
          if(sum >= 90){
             document.getElementById("span3").innerHTML = "高い";
          } else if(sum >= 70) {
            document.getElementById("span3").innerHTML = "まあまあ高い";
          } else if(sum >= 50) {
             document.getElementById("span3").innerHTML = "普通";
          } else if(sum >= 30) {
            document.getElementById("span3").innerHTML = "まあまあ低い";
          } else if(sum >= 0) {
            document.getElementById("span3").innerHTML = "低い";
        }

        if(sum >= 90){
          document.getElementById("span4").innerHTML = "重度のスマホ依存症と言ってもいい状態になっているようです。 <br> あなたにとってスマホは単なるツールではなく、お守りのような存在に <br> なくても生活できると頭ではわかっていますが、実際はスマホを手放せず、スマホがないと不安になってしまうことが。 <br> 無意識のうちにスマホを手にしてしまうため、あえてガラケーに戻してみるなど荒療治で対処を。スマホを手放すと使える時間も一気に増えそうです。";

        }else if(sum >= 70) {
           document.getElementById("span4").innerHTML = "残念ながら、すでに中程度のスマホ依存に陥っている可能性があります。<br> 最近、スマホが手元にないと、どう過ごしていいかわからなくなることはありませんか？ <br> このままではスマホなしではいられない重度のスマホ依存状態になる危険があります。<br> 休みの日にはスマホの電源を切るようにするなどして、スマホなしで生活する日を間を作ってみて。<br> スマホなしでも大丈夫だと実感できれば、スマホ依存から抜け出られるように。";

        } else if(sum >= 50) {
          document.getElementById("span4").innerHTML = "自分では意識していないかもしれませんが、スマホ依存症の予備軍と言ってもよさそう。 <br> 目の前に友だちがいても、スマホ経由で会話をしてしまう、スマホが鳴らないとさみしくなるなど、このままでは、スマホ依存度はどんどん高まっていく危険が。 <br> 用がないときにはスマホに触らない、友だちとは直接会って遊ぶようにするなど、スマホへの接触回数を減らすことが必要になっていきそうです。";

         }else if(sum >= 30) {
          document.getElementById("span4").innerHTML = "現状では、スマホへの依存は心配しなくても大丈夫そう。 <br> ただし、スマホとの接触時間が増えるにつれ、少しずつスマホ依存の傾向が出てきているようです。 最近、暇をつぶす際は、まずスマホを手に取っていませんか？ それが実はスマホ依存への第一歩。 <br> 暇なときは本を読む、スマホだけでなくパソコンも活用するなどして、メリハリをつけてスマホを使って。そうすれば、スマホ依存度は変わってきます。";

        } else if(sum >= 0) {
         document.getElementById("span4").innerHTML = "あなたにとってスマホはあくまでツール。 <br> 必要なときに利用していくものであって、依存するような対象ではないようです。現在のところ、上手にスマホを活用することができていると言えそうです。 <br>ただし、これから先、仕事でもスマホを活用する頻度が高まってくると、状況が変わる可能性も。仕事で使う機会が増えたらプライベートでは活用度を下げるなど、今後もうまくスマホと付き合っていって。！";
        }
        
        // hb
        // r1hb
        if(radio1.checked) {
          document.getElementById('span5-0').innerHTML = "お風呂";
        }
        if(radio1.checked) {
          document.getElementById('span5').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像1">';
        }
        if(radio1.checked) {
          document.getElementById('span55-0').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
        }
        if(radio1.checked) {
          document.getElementById('span5-1').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像1">';
        }
        if(radio1.checked) {
          document.getElementById('span55-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
        }
        if(radio1.checked) {
          document.getElementById('span5-2').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像1">';
        }
        if(radio1.checked) {
          document.getElementById('span55-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
        }
        
        // r2hb
        if(radio3.checked) {
          document.getElementById('span6-0').innerHTML = "お風呂";
        }
        if(radio3.checked) {
          document.getElementById('span6').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像2">';
        }
        if(radio3.checked) {
          document.getElementById('span66-0').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
        }
        if(radio3.checked) {
          document.getElementById('span6-1').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像2">';
        }
        if(radio3.checked) {
          document.getElementById('span66-1').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
        }
        if(radio3.checked) {
          document.getElementById('span6-2').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像2">';
        }
        if(radio3.checked) {
          document.getElementById('span66-2').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
        }
        
        if(radio5.checked) {
          document.getElementById('span7').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像5">';
        }
        
        if(radio7.checked) {
          document.getElementById('span8').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像7">';
        }
        
        if(radio9.checked) {
          document.getElementById('span9').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像9">';
        }
        
        if(radio11.checked) {
          document.getElementById('span10').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像11">';
        }
        
        if(radio13.checked) {
          document.getElementById('span11').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像13">';
        }
        
        if(radio15.checked) {
          document.getElementById('span12').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像15">';
        }
        
        if(radio17.checked) {
          document.getElementById('span13').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像17">';
        }
        
        if(radio19.checked) {
          document.getElementById('span14').innerHTML = '<img src="./gazou/run_and_dog.jpg" alt="サンプル画像19">';
        }

        // return sum;

      // /new6
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#navigator').pushPage('page4.html');
      };
    } 
    else if (page.matches('#fourth-page')) {
      page.querySelector('#pop-button').onclick = function() {
        document.querySelector('#navigator').popPage();
      };
    }
  });


// /Page init event

