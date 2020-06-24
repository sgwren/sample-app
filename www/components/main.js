// Page init event
document.addEventListener('init', function (event) {
  var page = event.target;
  // window.onButtonClick = function onButtonClick() {

  // 1 push
  // 1-1
  if (page.matches('#first-page')) {
    page.querySelector('#push-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page2.html');
    };
  }
  // 1-2
  if (page.matches('#first-page')) {
    page.querySelector('#push2-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page2-2.html');
    };
  }
  // 1-3
  if (page.matches('#first-page')) {
    page.querySelector('#push3-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page3-2.html');
    };
  }

  // 1-2
  if (page.matches('#second-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }
  if (page.matches('#second-2-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }
  if (page.matches('#second-3-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  // 2ページ目
  if (page.matches('#second-page')) {

    page.querySelector('#push-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page3.html');
    };
  } else if (page.matches('#third-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').resetToPage('page1.html');
    };
  }
  if (page.matches('#third-page')) {

    // new6
    // q1
    var radios = document.getElementsByName('question1');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        var str1 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q2
    var radios = document.getElementsByName('question2');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str2 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q3
    var radios = document.getElementsByName('question3');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str3 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q4
    var radios = document.getElementsByName('question4');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str4 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q5
    var radios = document.getElementsByName('question5');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str5 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q6

    var radios = document.getElementsByName('question6');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str6 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q7
    var radios = document.getElementsByName('question7');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str7 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q8
    var radios = document.getElementsByName('question8');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str8 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q9
    var radios = document.getElementsByName('question9');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
        str9 = (radios[i].value);  // only one radio can be logically checked, don't check the rest
        break;
      };
    }
    console.log(radios[i].value);

    // q10
    var radios = document.getElementsByName('question10');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {  // do whatever you want with the checked radio
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
    if (str1 == 10) {
      sum += str1;
    }
    if (str2 == 10) {
      sum += str2;
    }
    if (str3 == 10) {
      sum += str3;
    }
    if (str4 == 10) {
      sum += str4;
    }
    if (str5 == 10) {
      sum += str5;
    }
    if (str6 == 10) {
      sum += str6;
    }
    if (str7 == 10) {
      sum += str7;
    }
    if (str8 == 10) {
      sum += str8;
    }
    if (str9 == 10) {
      sum += str9;
    }
    if (str10 == 10) {
      sum += str10;
    }
    console.log(sum);
    document.getElementById("span2").textContent = sum;

    // function clickBtn1{
    if (sum >= 90) {
      document.getElementById("span3").innerHTML = "凄く高い";
    } else if (sum >= 70) {
      document.getElementById("span3").innerHTML = "高い";
    } else if (sum >= 50) {
      document.getElementById("span3").innerHTML = "普通";
    } else if (sum >= 30) {
      document.getElementById("span3").innerHTML = "まあまあ低い";
    } else if (sum >= 0) {
      document.getElementById("span3").innerHTML = "低い";
    }

    if (sum >= 90) {
      document.getElementById("span4").innerHTML = "あなたにとってスマホは単なるツールではなく、お守りのような存在に。<br>なくても生活できると頭ではわかっていますが、実際はスマホを手放せず、スマホがないと不安になってしまうことが。 <br> 無意識のうちにスマホを手にしてしまうため、なにか他に打ち込めることを探してみては";

    } else if (sum >= 70) {
      document.getElementById("span4").innerHTML = "このままではスマホなしではいられない重度のスマホ依存状態になる危険があります。<br> 休みの日にはスマホの電源を切るようにするなどして、スマホなしで生活する日を間を作ってみて。<br> スマホなしでも大丈夫だと実感できれば、スマホ依存から抜け出られるように。";

    } else if (sum >= 50) {
      document.getElementById("span4").innerHTML = "自分では意識していないかもしれませんが、スマホ依存症の予備軍と言ってもよさそう。 <br> 用がないときにはスマホに触らない、友だちとは直接会って遊ぶようにするなど、スマホへの接触回数を減らすことが必要になっていきそうです。";

    } else if (sum >= 30) {
      document.getElementById("span4").innerHTML = "現状では、スマホへの依存は心配しなくても大丈夫そう。 <br> ただし、スマホとの接触時間が増えるにつれ、少しずつスマホ依存の傾向が出てきているようです。 最近、暇をつぶす際は、まずスマホを手に取っていませんか？ それが実はスマホ依存への第一歩。 <br> 暇なときは本を読む、スマホだけでなくパソコンも活用するなどして、メリハリをつけてスマホを使って。そうすれば、スマホ依存度は変わってきます。";

    } else if (sum >= 0) {
      document.getElementById("span4").innerHTML = "あなたにとってスマホはあくまでツール。 <br> 必要なときに利用していくものであって、依存するような対象ではないようです。現在のところ、上手にスマホを活用することができていると言えそうです。 <br>ただし、これから先、仕事でもスマホを活用する頻度が高まってくると、状況が変わる可能性も。仕事で使う機会が増えたらプライベートでは活用度を下げるなど、今後もうまくスマホと付き合っていって！";
    }

    // hb
    // r1hb
    if (radio1.checked) {
      document.getElementById('span5-0').innerHTML = "【お風呂】";
    }
    if (radio1.checked) {
      document.getElementById('span5').innerHTML = '<img src="./gazou/furo_shizuka.jpg" alt="サンプル画像1" id="span50" class="hb_img">';
    }
    if (radio1.checked) {
      document.getElementById('span55-0').innerHTML = "お風呂で歌うと、1.5割増しぐらい上手くなりますよね<br>皆さんは何を歌いますか？";
    }
    // if (radio1.checked) {
    //   document.getElementById('u1-1').innerHTML = '<a href="https://www.homepage-tukurikata.com/hp/link.html">';
    // }
    // console.log("u1-1");

    // if(radio1.checked) {
    //   document.getElementById('span5-1').innerHTML = '<img src="./gazou/furo.png"   alt="サンプル画像1">';
    // }
    // if(radio1.checked) {
    //   document.getElementById('span55-1').innerHTML ="お風呂に携帯の持ち込みはNG！ <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> リラックスして副交感神経の活動が優位になる入浴タイムにスマホを見ると、交感神経が活発に働き、自律神経が乱れやすくなる。"
    // }
    // if(radio1.checked) {
    //   document.getElementById('span5-2').innerHTML = '<img src="./gazou/furo.png"  alt="サンプル画像1">';
    // }
    // if(radio1.checked) {
    //   document.getElementById('span55-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r2hb
    if (radio3.checked) {
      document.getElementById('span6-0').innerHTML = "【読書】";
    }
    if (radio3.checked) {
      document.getElementById('span6').innerHTML = '<img src="./gazou/disney.jpg" alt="サンプル画像2" id="span60" class="hb_img">';
    }
    if (radio3.checked) {
      document.getElementById('span66-0').innerHTML = "「宝島の海賊たちが盗んだ財宝よりも、<br>本には多くの宝が眠っている。<br>そして何よりも、宝を毎日味わうことが出来るのだ。」<br>ってウォルト・ディズニーが言ってました。";
    }
    // if(radio3.checked) {
    //   document.getElementById('span6-1').innerHTML = '<img src="./gazou/book_tsubuse_man.png" alt="サンプル画像2">';
    // }
    // if(radio3.checked) {
    //   document.getElementById('span66-1').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
    // }
    // if(radio3.checked) {
    //   document.getElementById('span6-2').innerHTML = '<img src="./gazou/book_tsubuse_man.png" alt="サンプル画像2">';
    // }
    // if(radio3.checked) {
    //   document.getElementById('span66-2').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
    // }

    // r3hb
    if (radio5.checked) {
      document.getElementById('span7-0').innerHTML = "【運動】";
    }
    if (radio5.checked) {
      document.getElementById('span7').innerHTML = '<img src="./gazou/coach_carter.jpg" alt="サンプル画像5" id="span70" class="hb_img">';
    }
    if (radio5.checked) {
      document.getElementById('span77-0').innerHTML = "「コーチ・カーター」を観たら運動と勉強をしたくなります。<br>これで全て解決です。";
    }
    // if(radio5.checked) {
    //   document.getElementById('span7-1').innerHTML = '<img src="./gazou/strech.png" alt="サンプル画像1">';
    // }
    // if(radio5.checked) {
    //   document.getElementById('span77-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio5.checked) {
    //   document.getElementById('span7-2').innerHTML = '<img src="./gazou/strech.png" alt="サンプル画像1">';
    // }
    // if(radio5.checked) {
    //   document.getElementById('span77-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r4hb
    if (radio7.checked) {
      document.getElementById('span8-0').innerHTML = "【目的】";
    }
    if (radio7.checked) {
      document.getElementById('span8').innerHTML = '<img src="./gazou/iwaki.jpg" alt="サンプル画像1" id="span80" class="hb_img">';
    }
    if (radio7.checked) {
      document.getElementById('span88-0').innerHTML = "目標に目指していくあなた、<br>今輝いてますよ";
    }
    // if(radio7.checked) {
    //   document.getElementById('span8-1').innerHTML = '<img src="./gazou/yaruki_moeru_man.png" alt="サンプル画像1">';
    // }
    // if(radio7.checked) {
    //   document.getElementById('span88-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio7.checked) {
    //   document.getElementById('span8-2').innerHTML = '<img src="./gazou/yaruki_moeru_man.png" alt="サンプル画像1">';
    // }
    // if(radio7.checked) {
    //   document.getElementById('span88-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r5hb
    if (radio9.checked) {
      document.getElementById('span9-0').innerHTML = "【朝】";
    }
    if (radio9.checked) {
      document.getElementById('span9').innerHTML = '<img src="./gazou/asa_3tetsu.jpg" alt="サンプル画像1" id="span90" class="hb_img">';
    }
    if (radio9.checked) {
      document.getElementById('span99-0').innerHTML = "私は起きたら<br>ベッドの上で腹筋してます！！！（週に1回ほど）";
    }
    // if(radio9.checked) {
    //   document.getElementById('span9-1').innerHTML = '<img src="./gazou/time_man1_asa.png" alt="サンプル画像1">';
    // }
    // if(radio9.checked) {
    //   document.getElementById('span99-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio9.checked) {
    //   document.getElementById('span9-2').innerHTML = '<img src="./gazou/time_man1_asa.png" alt="サンプル画像1">';
    // }
    // if(radio9.checked) {
    //   document.getElementById('span99-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r6hb
    if (radio11.checked) {
      document.getElementById('span10-0').innerHTML = "【ゲーム】";
    }
    if (radio11.checked) {
      document.getElementById('span10').innerHTML = '<img src="./gazou/dqw.jpg" alt="サンプル画像1" id="span100" class="hb_img">';
    }
    if (radio11.checked) {
      document.getElementById('span1010-0').innerHTML = "ドラクエウォークをしたら運動にもなります！<br>一緒にやりましょう！";
    }
    // if(radio11.checked) {
    //   document.getElementById('span10-1').innerHTML = '<img src="./gazou/game_tetsuya_man.png" alt="サンプル画像1">';
    // }
    // if(radio11.checked) {
    //   document.getElementById('span1010-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio11.checked) {
    //   document.getElementById('span10-2').innerHTML = '<img src="./gazou/game_tetsuya_man.png" alt="サンプル画像1">';
    // }
    // if(radio11.checked) {
    //   document.getElementById('span1010-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r7hb
    if (radio13.checked) {
      document.getElementById('span11-0').innerHTML = "【動画】";
    }
    if (radio13.checked) {
      document.getElementById('span11').innerHTML = '<img src="./gazou/tom_brown.jpg" alt="サンプル画像1"id="span110" class="hb_img">';
    }
    if (radio13.checked) {
      document.getElementById('span1111-0').innerHTML = "「勉強系のYouTubeは観て満足してます！」<br>「ダメー」<br>（トム・ブラウン風に読んでください）";
    }
    // if(radio13.checked) {
    //   document.getElementById('span11-1').innerHTML = '<img src="./gazou/douga_haishin_youtuber.png" alt="サンプル画像1">';
    // }
    // if(radio13.checked) {
    //   document.getElementById('span1111-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio13.checked) {
    //   document.getElementById('span11-2').innerHTML = '<img src="./gazou/douga_haishin_youtuber.png" alt="サンプル画像1">';
    // }
    // if(radio13.checked) {
    //   document.getElementById('span1111-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r8hb
    if (radio15.checked) {
      document.getElementById('span12-0').innerHTML = "【休日】";
    }
    if (radio15.checked) {
      document.getElementById('span12').innerHTML = '<img src="./gazou/syouten.png" alt="サンプル画像1"id="span120" class="hb_img">';
    }
    if (radio15.checked) {
      document.getElementById('span1212-0').innerHTML = "「日曜日あるある」<br>笑点が始まった瞬間、<br>明日のことを考えてしまう";
    }
    // if(radio15.checked) {
    //   document.getElementById('span12-1').innerHTML = '<img src="./gazou/text_kyujitsu.png" alt="サンプル画像1">';
    // }
    // if(radio15.checked) {
    //   document.getElementById('span1212-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio15.checked) {
    //   document.getElementById('span12-2').innerHTML = '<img src="./gazou/text_kyujitsu.png" alt="サンプル画像1">';
    // }
    // if(radio15.checked) {
    //   document.getElementById('span1212-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r9hb
    if (radio17.checked) {
      document.getElementById('span13-0').innerHTML = "【歩きスマホ】";
    }
    if (radio17.checked) {
      document.getElementById('span13').innerHTML = '<img src="./gazou/aruki_sumaho.jpg" alt="サンプル画像1" id="span130" class="hb_img">';
    }
    if (radio17.checked) {
      document.getElementById('span1313-0').innerHTML = "歩きながらスマホを見ている人は、<br>沢山の人々に見られてますよ";
    }
    // if(radio17.checked) {
    //   document.getElementById('span13-1').innerHTML = '<img src="./gazou/walking2_man.png" alt="サンプル画像1">';
    // }
    // if(radio17.checked) {
    //   document.getElementById('span1313-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio17.checked) {
    //   document.getElementById('span13-2').innerHTML = '<img src="./gazou/walking2_man.png" alt="サンプル画像1">';
    // }
    // if(radio17.checked) {
    //   document.getElementById('span1313-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r10hb
    if (radio19.checked) {
      document.getElementById('span14-0').innerHTML = "【就寝前】";
    }
    if (radio19.checked) {
      document.getElementById('span14').innerHTML = '<img src="./gazou/suimin_man.png" alt="サンプル画像1" id="span140" class="hb_img">';
    }
    if (radio19.checked) {
      document.getElementById('span1414-0').innerHTML = "言うの凄く恥ずかしいのですが、<br>自分がアニメのキャラだったらとか<br>考えながら寝ると結構すぐ寝られます";
    }
    // if(radio19.checked) {
    //   document.getElementById('span14-1').innerHTML = '<img src="./gazou/suimin_man.png" alt="サンプル画像1">';
    // }
    // if(radio19.checked) {
    //   document.getElementById('span1414-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio19.checked) {
    //   document.getElementById('span14-2').innerHTML = '<img src="./gazou/suimin_man.png" alt="サンプル画像1">';
    // }
    // if(radio19.checked) {
    //   document.getElementById('span1414-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }



    // return sum;

    // /new6
    // page.querySelector('#push-button').onclick = function() {
    //   document.querySelector('#navigator').pushPage('page4.html');
    //   };
  }
  // else if (page.matches('#fourth-page')) {
  //   page.querySelector('#pop-button').onclick = function() {
  //     document.querySelector('#navigator').popPage('page1.html');
  //   };
  // }

  if (page.matches('#second-2-page')) {

    // page.querySelector('#push2-button').onclick = function () {
    {
      const question = document.getElementById("questions");
      const choices = document.getElementById("choices");
      const btn = document.getElementById("btn");
      const result = document.getElementById("results");
      const scoreLabel = document.querySelector("#results > p");

      const quizSet = shuffle([
        { q: "なぜアラームのスヌーズは“9分”間隔？", c: ["デジタル表記の見間違いを防ぎ、2度寝の危機感を高める効果も期待できる", "ジョブズのラッキーナンバー", "設計ミスの名残"] },
        { q: "「Google」の社名はどのようにして生まれた？", c: ["｢googol（グーゴル）｣のスペルミス", "創設者たちのイニシャル", "タンスの角に小指をぶつけたときに出た叫び声"] },
        { q: "あれ？今スマホ鳴ってなかった？と思う時の現象名は？", c: ["「ファントム・バイブレーション・シンドローム（幻想振動症候群）」", "イマナッター現象", "天使のささやき"] },
        { q: "「ながら運転」の反則金は？（普通車）", c: ["1万8000円", "6000円", "1万2000円"] },
        { q: "「スマホは〇〇より汚い」と言われている？", c: ["トイレの便器", "エスカレーターの手すり", "エレベーターのボタン"] },
        { q: "固定電話で番号の後ろに ”＃”を つけると？", c: ["早く繋がる", "電話の相手が話し中か調査してくれる", "声色を変えられる"] },
        { q: "携帯電話から聞こえる声は？", c: ["パターン分けした音の見本の中から話し手の声に最も近い音", "本人の声", "コロッケさん"] },
        { q: "水没したスマホを復活させる方法は？", c: ["お米の入った袋に一晩入れておく", "洗濯ネットに入れて日陰干し", "ありません"] },
        { q: "「もしもし」の由来は？", c: ["「申します、申します」を縮めただけの略語", "「おいおい」が訛った言い方", "未だ解明されていない"] },
        { q: "「♯8000」にかけると？", c: ["お子さんが急病を発して困った時、救急車を呼んで良いか小児科医師や看護師に相談できる", "消費者ホットライン", "海上保安庁へ通報"] },
      ]);
      let currentNum = 0;
      let isAnswered;
      let score = 0;



      function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[j], arr[i]] = [arr[i], arr[j]];            //分割代入
        }
        return arr;
      }

      function checkAnswer(li) {
        if (isAnswered) {
          return;
        }
        isAnswered = true;

        if (li.textContent === quizSet[currentNum].c[0]) {
          li.classList.add("correct");
          score++;
        } else {
          li.classList.add("wrong");
        }

        btn.classList.remove("disabled");
      }

      function setQuiz() {
        isAnswered = false;

        question.textContent = quizSet[currentNum].q;

        while (choices.firstChild) {
          choices.removeChild(choices.firstChild);
        }

        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice => {
          const li = document.createElement("li");
          li.textContent = choice;
          li.addEventListener("click", () => {
            checkAnswer(li);
          });
          choices.appendChild(li);
        });

        if (currentNum === quizSet.length - 1) {
          btn.textContent = "Show Score";

        }
      }

      setQuiz();

      btn.addEventListener("click", () => {
        if (btn.classList.contains("disabled")) {
          return;
        }
        btn.classList.add("disabled");

        if (currentNum === quizSet.length - 1) {
          // console.log(`Score: ${score} / ${quizSet.length}`);
          scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
          result.classList.remove("hidden");
        } else {
          currentNum++;
          setQuiz();
        }
      });
    }


    // var memoObj = [localStorage.setItem('memoObj', input_register.value)];

    // localStorage.setItem('memoObj', input_register.value);
    // localStorage.setItem('memoObj', JSON.stringify(input_register.value));
    // document.querySelector('#navigator').pushPage('page2-3.html', { data: input_register.value });
    // document.querySelector('#navigator').pushPage('page2-3.html', { data: JSON.stringify(input_register.value) });

    // return;
    // };
    // console.log(localStorage.setItem('memoObj', JSON.stringify(input_register.value)));



    page.querySelector('#push2-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page2-3.html');
    };
  }
  else if (page.matches('#third-2-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').replacePage('page1.html');
    };
  }

  if (page.matches('#third-2-page')) {

    // document.getElementById("output_register").innerHTML = JSON.parse(localStorage.getItem('memoObj'));
    // document.getElementById("output_register").innerHTML = localStorage.setItem('memoObj', JSON.stringify(input_register.value));
    // document.getElementById("output_register").innerHTML = input_register.value;
    // console.log(document.getElementById("output_register"));
    // return;
    // }
    // }




    //   page.querySelector('#push2-button').onclick = function () {
    //     document.querySelector('#navigator').pushPage('page3-3.html');
    //   };
  }
  // else if (page.matches('#fourth-2-page')) {
  //   page.querySelector('#pop-button').onclick = function () {
  //     document.querySelector('#navigator').resetToPage('page1.html');
  //   };
  // }


  // }

  if (page.matches('#second-3-page')) {
    page.querySelector('#bath-button').onclick = function () {
      document.querySelector('#navigator').pushPage('bath-page.html');
    };
  }
  if (page.matches('#bath-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#book-button').onclick = function () {
      document.querySelector('#navigator').pushPage('book-page.html');
    };
  }
  if (page.matches('#book-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#exercise-button').onclick = function () {
      document.querySelector('#navigator').pushPage('exercise-page.html');
    };
  }
  if (page.matches('#exercise-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#todo-button').onclick = function () {
      document.querySelector('#navigator').pushPage('todo-page.html');
    };
  }
  if (page.matches('#todo-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#morning-button').onclick = function () {
      document.querySelector('#navigator').pushPage('morning-page.html');
    };
  }
  if (page.matches('#morning-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#game-button').onclick = function () {
      document.querySelector('#navigator').pushPage('game-page.html');
    };
  }
  if (page.matches('#game-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#movie-button').onclick = function () {
      document.querySelector('#navigator').pushPage('movie-page.html');
    };
  }
  if (page.matches('#movie-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#holiday-button').onclick = function () {
      document.querySelector('#navigator').pushPage('holiday-page.html');
    };
  }
  if (page.matches('#holiday-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#walk-button').onclick = function () {
      document.querySelector('#navigator').pushPage('walk-page.html');
    };
  }
  if (page.matches('#walk-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }

  if (page.matches('#second-3-page')) {
    page.querySelector('#sleep-button').onclick = function () {
      document.querySelector('#navigator').pushPage('sleep-page.html');
    };
  }
  if (page.matches('#sleep-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').popPage();
    };
  }


});


// /Page init event

