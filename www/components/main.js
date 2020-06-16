// Page init event
document.addEventListener('init', function (event) {
  var page = event.target;
  // window.onButtonClick = function onButtonClick() {

  // 1-1
  if (page.matches('#first-page')) {
    page.querySelector('#push-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page2.html');
    };
  }
  if (page.matches('#first-page')) {
    page.querySelector('#push2-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page2-2.html');
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
      document.getElementById("span3").innerHTML = "高い";
    } else if (sum >= 70) {
      document.getElementById("span3").innerHTML = "まあまあ高い";
    } else if (sum >= 50) {
      document.getElementById("span3").innerHTML = "普通";
    } else if (sum >= 30) {
      document.getElementById("span3").innerHTML = "まあまあ低い";
    } else if (sum >= 0) {
      document.getElementById("span3").innerHTML = "低い";
    }

    if (sum >= 90) {
      document.getElementById("span4").innerHTML = "重度のスマホ依存症と言ってもいい状態になっているようです。 <br> あなたにとってスマホは単なるツールではなく、お守りのような存在に <br> なくても生活できると頭ではわかっていますが、実際はスマホを手放せず、スマホがないと不安になってしまうことが。 <br> 無意識のうちにスマホを手にしてしまうため、あえてガラケーに戻してみるなど荒療治で対処を。スマホを手放すと使える時間も一気に増えそうです。";

    } else if (sum >= 70) {
      document.getElementById("span4").innerHTML = "残念ながら、すでに中程度のスマホ依存に陥っている可能性があります。<br> 最近、スマホが手元にないと、どう過ごしていいかわからなくなることはありませんか？ <br> このままではスマホなしではいられない重度のスマホ依存状態になる危険があります。<br> 休みの日にはスマホの電源を切るようにするなどして、スマホなしで生活する日を間を作ってみて。<br> スマホなしでも大丈夫だと実感できれば、スマホ依存から抜け出られるように。";

    } else if (sum >= 50) {
      document.getElementById("span4").innerHTML = "自分では意識していないかもしれませんが、スマホ依存症の予備軍と言ってもよさそう。 <br> 目の前に友だちがいても、スマホ経由で会話をしてしまう、スマホが鳴らないとさみしくなるなど、このままでは、スマホ依存度はどんどん高まっていく危険が。 <br> 用がないときにはスマホに触らない、友だちとは直接会って遊ぶようにするなど、スマホへの接触回数を減らすことが必要になっていきそうです。";

    } else if (sum >= 30) {
      document.getElementById("span4").innerHTML = "現状では、スマホへの依存は心配しなくても大丈夫そう。 <br> ただし、スマホとの接触時間が増えるにつれ、少しずつスマホ依存の傾向が出てきているようです。 最近、暇をつぶす際は、まずスマホを手に取っていませんか？ それが実はスマホ依存への第一歩。 <br> 暇なときは本を読む、スマホだけでなくパソコンも活用するなどして、メリハリをつけてスマホを使って。そうすれば、スマホ依存度は変わってきます。";

    } else if (sum >= 0) {
      document.getElementById("span4").innerHTML = "あなたにとってスマホはあくまでツール。 <br> 必要なときに利用していくものであって、依存するような対象ではないようです。現在のところ、上手にスマホを活用することができていると言えそうです。 <br>ただし、これから先、仕事でもスマホを活用する頻度が高まってくると、状況が変わる可能性も。仕事で使う機会が増えたらプライベートでは活用度を下げるなど、今後もうまくスマホと付き合っていって。！";
    }

    // hb
    // r1hb
    if (radio1.checked) {
      document.getElementById('span5-0').innerHTML = "マッサージ";
    }
    if (radio1.checked) {
      document.getElementById('span5').innerHTML = '<img src="./gazou/furo.png"  width="200"; alt="サンプル画像1">';
    }
    if (radio1.checked) {
      document.getElementById('span55-0').innerHTML = "お風呂でマッサージを行うときは、肩まで5分ほど浸かり、身体を充分温めてから始めましょう。 <br> のぼせないために、温度を38度から40度くらいの「普段よりも少しぬるいかな」と感じる温度に設定してください。 <br> 併せて、入浴時間は20分以内にしましょう。";
    }
    // if (radio1.checked) {
    //   document.getElementById('u1-1').innerHTML = '<a href="https://www.homepage-tukurikata.com/hp/link.html">';
    // }
    // console.log("u1-1");

    // if(radio1.checked) {
    //   document.getElementById('span5-1').innerHTML = '<img src="./gazou/furo.png"  width="100";  alt="サンプル画像1">';
    // }
    // if(radio1.checked) {
    //   document.getElementById('span55-1').innerHTML ="お風呂に携帯の持ち込みはNG！ <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> リラックスして副交感神経の活動が優位になる入浴タイムにスマホを見ると、交感神経が活発に働き、自律神経が乱れやすくなる。"
    // }
    // if(radio1.checked) {
    //   document.getElementById('span5-2').innerHTML = '<img src="./gazou/furo.png"  width="100"; alt="サンプル画像1">';
    // }
    // if(radio1.checked) {
    //   document.getElementById('span55-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r2hb
    if (radio3.checked) {
      document.getElementById('span6-0').innerHTML = "読書";
    }
    if (radio3.checked) {
      document.getElementById('span6').innerHTML = '<img src="./gazou/book_tsubuse_man.png" width="100"; alt="サンプル画像2">';
    }
    if (radio3.checked) {
      document.getElementById('span66-0').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
    }
    // if(radio3.checked) {
    //   document.getElementById('span6-1').innerHTML = '<img src="./gazou/book_tsubuse_man.png" width="100"; alt="サンプル画像2">';
    // }
    // if(radio3.checked) {
    //   document.getElementById('span66-1').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
    // }
    // if(radio3.checked) {
    //   document.getElementById('span6-2').innerHTML = '<img src="./gazou/book_tsubuse_man.png" width="100"; alt="サンプル画像2">';
    // }
    // if(radio3.checked) {
    //   document.getElementById('span66-2').innerHTML = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト";
    // }

    // r3hb
    if (radio5.checked) {
      document.getElementById('span7-0').innerHTML = "運動";
    }
    if (radio5.checked) {
      document.getElementById('span7').innerHTML = '<img src="./gazou/strech.png" width="100"; alt="サンプル画像5">';
    }
    if (radio5.checked) {
      document.getElementById('span77-0').innerHTML = "外出自粛が続き、運動不足が気になる人も多いと思います。 <br> フィットネス関連のスマートフォンアプリには、新型コロナ対策としてコンテンツを無料にするなど、特別対応中のものがあります。 <br> ゲーム感覚で毎日フィットネスできるアプリや、オンラインでジム仲間と励ましあえるアプリなどさまざま。 <br> この機会に生活スタイルにマッチするフィットネスアプリを見つけ、今後の生活習慣改善につなげてみてはいかがでしょうか。";
    }
    // if(radio5.checked) {
    //   document.getElementById('span7-1').innerHTML = '<img src="./gazou/strech.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio5.checked) {
    //   document.getElementById('span77-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio5.checked) {
    //   document.getElementById('span7-2').innerHTML = '<img src="./gazou/strech.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio5.checked) {
    //   document.getElementById('span77-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r4hb
    if (radio7.checked) {
      document.getElementById('span8-0').innerHTML = "無理をせず、小さな目標を設定する";
    }
    if (radio7.checked) {
      document.getElementById('span8').innerHTML = '<img src="./gazou/yaruki_moeru_man.png" width="100"; alt="サンプル画像1">';
    }
    if (radio7.checked) {
      document.getElementById('span88-0').innerHTML = "1日にSNSに使う時間が3時間なら2時間半に、1日でメッセージする時間が4時間なら3時間半にと、無理のない目標設定が大切だそうだ。 <br> 通話、メッセージ、SNSなどがある中から優先順位をつけて、それぞれに達成できそうな使用時間の制限を設けるんです」<br> 一方、自らによって自分のスマホが”没収”されていると感じないようにすることも大切なようだ。<br> 苦に成り過ぎないくらいのさじ加減で徐々に使用時間を減らすことにより、「ちょうど良い削減レベル」を見つけることができるそうだ。 <br> 心身共にリラックスするようにしましょう。<br> 「目標はスマホの使い方を進化させることであって、使用を完全にやめることではありません」";
    }
    // if(radio7.checked) {
    //   document.getElementById('span8-1').innerHTML = '<img src="./gazou/yaruki_moeru_man.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio7.checked) {
    //   document.getElementById('span88-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio7.checked) {
    //   document.getElementById('span8-2').innerHTML = '<img src="./gazou/yaruki_moeru_man.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio7.checked) {
    //   document.getElementById('span88-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r5hb
    if (radio9.checked) {
      document.getElementById('span9-0').innerHTML = "朝やるといいことをする";
    }
    if (radio9.checked) {
      document.getElementById('span9').innerHTML = '<img src="./gazou/time_man1_asa.png" width="100"; alt="サンプル画像1">';
    }
    if (radio9.checked) {
      document.getElementById('span99-0').innerHTML = "PCや携帯電話の液晶画面を見るとき、人はまばたきの回数が減り、疲労する。 <br> 疲れをためないためにも、朝のPCや携帯電話は、メールチェックなど最低限に <br> 前の日の楽しかった出来事を書き出す、仕事の企画のアイデアを考える、常温の水・たんぱく質を含んだ食事など朝やるといいことを意識しましょう";
    }
    // if(radio9.checked) {
    //   document.getElementById('span9-1').innerHTML = '<img src="./gazou/time_man1_asa.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio9.checked) {
    //   document.getElementById('span99-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio9.checked) {
    //   document.getElementById('span9-2').innerHTML = '<img src="./gazou/time_man1_asa.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio9.checked) {
    //   document.getElementById('span99-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r6hb
    if (radio11.checked) {
      document.getElementById('span10-0').innerHTML = "スマホ依存対策アプリ";
    }
    if (radio11.checked) {
      document.getElementById('span10').innerHTML = '<img src="./gazou/game_tetsuya_man.png" width="100"; alt="サンプル画像1">';
    }
    if (radio11.checked) {
      document.getElementById('span1010-0').innerHTML = "「作業に集中できる環境作りができる」として有名になったアプリやスマホに触らなければ木や魚が育つものなど多種多様なアプリがあります。 <br> ゲーム感覚で楽しめるタイプや、スマホ画面をロックして利用を制限してくれるものなど様々ですので、自分に合った、無理なく続けられるアプリを選ぶのが肝心です。";
    }
    // if(radio11.checked) {
    //   document.getElementById('span10-1').innerHTML = '<img src="./gazou/game_tetsuya_man.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio11.checked) {
    //   document.getElementById('span1010-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio11.checked) {
    //   document.getElementById('span10-2').innerHTML = '<img src="./gazou/game_tetsuya_man.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio11.checked) {
    //   document.getElementById('span1010-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r7hb
    if (radio13.checked) {
      document.getElementById('span11-0').innerHTML = "せっかくなら、有意義な時間に";
    }
    if (radio13.checked) {
      document.getElementById('span11').innerHTML = '<img src="./gazou/douga_haishin_youtuber.png" width="100"; alt="サンプル画像1">';
    }
    if (radio13.checked) {
      document.getElementById('span1111-0').innerHTML = "「どうせ見るなら、新しい学びのある有意義な時間にしたい」と思っている方も多いのではないでしょうか。 <br> 科学、文化、英語、教育まで、幅広いテーマの解説Youtubeチャンネルなどを観て、 <br> 得た知識をノートにまとめてみてはいかがでしょうか。";
    }
    // if(radio13.checked) {
    //   document.getElementById('span11-1').innerHTML = '<img src="./gazou/douga_haishin_youtuber.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio13.checked) {
    //   document.getElementById('span1111-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio13.checked) {
    //   document.getElementById('span11-2').innerHTML = '<img src="./gazou/douga_haishin_youtuber.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio13.checked) {
    //   document.getElementById('span1111-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r8hb
    if (radio15.checked) {
      document.getElementById('span12-0').innerHTML = "新しい趣味を見つけにいこう";
    }
    if (radio15.checked) {
      document.getElementById('span12').innerHTML = '<img src="./gazou/text_kyujitsu.png" width="100"; alt="サンプル画像1">';
    }
    if (radio15.checked) {
      document.getElementById('span1212-0').innerHTML = "休日の過ごし方を見つけるコツは「新しく挑戦してみたいことを書き出してみる」です。 <br> お金、時間、人数などを考えると、非現実的なものもあるかもしれません。 <br> しかし、一旦できない理由は考慮に入れず、やってみたいことを思いつく限り書き出しましょう。 <br> そもし新しくやってみたいことが見つからなければ、あなたが過去にやっていたことを書き出してみてください。<br> 興味がなくなってしまったことでも、時間が経って価値観が変わると、当時以上に打ち込める場合もあるものです。<br> 近な人の趣味や休日の過ごし方を真似してみるのも良い方法です。<br> 色々と考えてみると何か見つかるかもしれません";
    }
    // if(radio15.checked) {
    //   document.getElementById('span12-1').innerHTML = '<img src="./gazou/text_kyujitsu.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio15.checked) {
    //   document.getElementById('span1212-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio15.checked) {
    //   document.getElementById('span12-2').innerHTML = '<img src="./gazou/text_kyujitsu.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio15.checked) {
    //   document.getElementById('span1212-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r9hb
    if (radio17.checked) {
      document.getElementById('span13-0').innerHTML = "シンプルに危険です";
    }
    if (radio17.checked) {
      document.getElementById('span13').innerHTML = '<img src="./gazou/walking2_man.png" width="100"; alt="サンプル画像1">';
    }
    if (radio17.checked) {
      document.getElementById('span1313-0').innerHTML = "スマホの画面に夢中になっていると視覚情報が鈍感になり、周りに注意がいかなくなります。歩きスマホが危ないことは科学的にも立証されていて、普通に歩いているときなら100％避けられる障害物でも、歩きスマホをしている状態では10～20％の人がぶつかってしまいます。 <br> 歩いているときに美味しそうな飲食店や運命の人など新しい発見・出会いが待っているかもしれません <br> ";
    }
    // if(radio17.checked) {
    //   document.getElementById('span13-1').innerHTML = '<img src="./gazou/walking2_man.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio17.checked) {
    //   document.getElementById('span1313-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio17.checked) {
    //   document.getElementById('span13-2').innerHTML = '<img src="./gazou/walking2_man.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio17.checked) {
    //   document.getElementById('span1313-2').innerHTML = "お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！";
    // }

    // r10hb
    if (radio19.checked) {
      document.getElementById('span14-0').innerHTML = "「寝る前スマホ」による睡眠障害";
    }
    if (radio19.checked) {
      document.getElementById('span14').innerHTML = '<img src="./gazou/suimin_man.png" width="100"; alt="サンプル画像1">';
    }
    if (radio19.checked) {
      document.getElementById('span1414-0').innerHTML = "スマホ、パソコン、タブレットなどから発せられる光によって、脳が「昼間だ」と錯覚し、メラトニンの分泌量が抑制されます。すると、脳が覚醒し、眠りが浅いなどの睡眠障害を引き起こしやすくなります。 <br> リ睡眠前でもありますし、アクティブに動くより座ってできることや、ルーティーンでこなせてしまう軽い方法がおすすめです。<br>考え事をしながら寝ると、良質な睡眠を得られません。良くない夢に悩まされることもありますよね。日記をつけたり、スキンケア、軽い片付け、お気に入りの飲み物を飲んでみるなど「自分時間」を見つけると充実した一日の終わりになるかもしれません";
    }
    // if(radio19.checked) {
    //   document.getElementById('span14-1').innerHTML = '<img src="./gazou/suimin_man.png" width="100"; alt="サンプル画像1">';
    // }
    // if(radio19.checked) {
    //   document.getElementById('span1414-1').innerHTML ="お風呂に携帯の持ち込みはNG <br> リラックスタイムにしたいからと <br> 携帯電話をもちこんでいるあなた。<br> 画面からの光の刺激や、画面を見る首への負担は <br> 実はとても大きいもの。<br> 入浴タイムにはデジタル機器から離れて、 <br> 心身共にリラックスするようにしましょう。<br> 携帯の見すぎで凝り固まった肩周りを <br> ストレッチするのもおすすめです！"
    // }
    // if(radio19.checked) {
    //   document.getElementById('span14-2').innerHTML = '<img src="./gazou/suimin_man.png" width="100"; alt="サンプル画像1">';
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

    window.onclick = function func1() {
      var input_register = document.getElementById("input_register").value;
      // input_register = "入力された内容は「" + input_register + "」です。";
      // document.getElementById("output_register").innerHTML = input_register;
      console.log(input_register);
    }

    page.querySelector('#push2-button').onclick = function () {
      document.querySelector('#navigator').pushPage('page2-3.html');
    };
  }
  else if (page.matches('#third-2-page')) {
    page.querySelector('#pop-button').onclick = function () {
      document.querySelector('#navigator').resetToPage('page1.html');
    };
  }

  if (page.matches('#third-2-page')) {

    // window.onclick = function func1() {
    // if (func1().onclick) {
    // input_register = "入力された内容は「" + input_register + "」です。";
    // var input_register = document.getElementById("input_register").value;
    document.getElementById("output_register").innerHTML = input_register;
    // document.getElementById("input_register").innerHTML = input_register;
    // console.log(input_register);
    console.log(output_register);
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
});


// /Page init event

