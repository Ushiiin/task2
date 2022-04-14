console.log("test");

const dice_eyes = [1, 2, 3, 4, 5, 6];

function score_calc(L) {
    L.sort()
    if (L[0] === L[1] && L[1] === L[2]) {
        if (L[0] === 1) score = 500;
        else score = 300;
    }
    else if (L[0] === 4 && L[1] === 5 && L[2] === 6) {
        score = 200;
    }
    else if (L[0] === L[1]) {
        score = L[2];
    }
    else if (L[1] === L[2]) {
        score = L[0];
    }
    else if (L[0] === 1 && L[1] === 2 && L[2] === 3){
        // 負の役を入れる
        score = -100;
    }
    else {
        //役なし
        score = 0;
    }
    return score;
}

var bet_status = false;

//賭けペリカの固定
$("#bet-fix").on("click",function(){
    // 一回固定したら動かせないようにする。
    if (bet_status) return;

    let bet_perica = document.querySelector("#bet-num");
    bet_perica = Number(bet_perica.value);
    console.log(bet_perica);
    $("#kake-perica").html(bet_perica);
    const nokori_perica = Number($("#syoji-perica").html()) - bet_perica;
    //掛け金が0ならbet_statusはfalseのまま
    if (bet_perica === 0){
        return;
    }
    bet_status = true;
    $("#syoji-perica").html(nokori_perica);
})

//賭けペリカが所持ペリカを超えないようにする。
$("#bet-num").on("click",function(){
    let now_bet_perica = document.querySelector("#bet-num");
    // console.log(now_bet_perica.value);
    now_bet_perica = Number(now_bet_perica.value);
    //console.log(isNaN(now_bet_perica));
    const bet_max = $("#syoji-perica").html();
    //console.log("BET",bet_max);
    //console.log("B",isNaN(bet_max));
    if (now_bet_perica > bet_max) {
        $("#bet-num").val(bet_max);
    }
})

var p_score = 0;
var c_score = 0;

$("#p-btn").on("click", function() {
    //掛け金が0だと出来ない。
    if ($("#kake-perica").html() == 0){
        console.log("タダは許さんぞい");
        return;
    }
    //残り回数の取得
    let p_nokori_num;
    p_nokori_num = $("#p-nokori").html();
    //残りがないならダメ
    console.log(p_nokori_num);
    if (p_nokori_num == 0) {
        return;
    }

    //一旦画像を消す
    $("#zawa").html("");
    $("#zawazawa").html("");
    const cheat = Math.floor(Math.random() * 100) + 1;
    console.log("cheat", cheat)
    //0-indexなので1を足して1~6に対応する。
    let p_eyes = [];
    let random = Math.floor(Math.random() * 6) + 1;
    if (cheat <= 30) {
        //チートがはたらいた時だけざわざわする。
        $("#zawa").html('<img src="images/zawa.png" alt="ざわ画像" width="250px" id="zawa1">');
        $("#zawa1").css("padding-right","50px");
        $("#zawazawa").html('<img src="images/zawa.png" alt="ざわ画像" width="250px" id="zawa2">');
        $("#zawa2").css("padding-left","50px");
        while (random < 4) {
            random = Math.floor(Math.random() * 6) + 1;
        }
    }
    p_eyes.push(random);
    if (p_eyes[0] === 1) {
        $("#p1").attr("src", "images/dice1.png");
    } else if (p_eyes[0] === 2) {
        $("#p1").attr("src", "images/dice2.png");        
    } else if (p_eyes[0] === 3) {
        $("#p1").attr("src", "images/dice3.png");        
    } else if (p_eyes[0] === 4) {
        $("#p1").attr("src", "images/dice4.png");        
    } else if (p_eyes[0] === 5) {
        $("#p1").attr("src", "images/dice5.png");        
    } else if (p_eyes[0] === 6) {
        $("#p1").attr("src", "images/dice6.png");        
    }
    random = Math.floor(Math.random() * 6) + 1;
    if (cheat <= 30) {
        while (random < 4) {
            random = Math.floor(Math.random() * 6) + 1;
        }
    }
    p_eyes.push(random);
    if (p_eyes[1] === 1) {
        $("#p2").attr("src", "images/dice1.png");
    } else if (p_eyes[1] === 2) {
        $("#p2").attr("src", "images/dice2.png");        
    } else if (p_eyes[1] === 3) {
        $("#p2").attr("src", "images/dice3.png");        
    } else if (p_eyes[1] === 4) {
        $("#p2").attr("src", "images/dice4.png");        
    } else if (p_eyes[1] === 5) {
        $("#p2").attr("src", "images/dice5.png");        
    } else if (p_eyes[1] === 6) {
        $("#p2").attr("src", "images/dice6.png");        
    }
    random = Math.floor(Math.random() * 6) + 1;
    if (cheat <= 30) {
        while (random < 4) {
            random = Math.floor(Math.random() * 6) + 1;
        }
    }
    p_eyes.push(random);
    if (p_eyes[2] === 1) {
        $("#p3").attr("src", "images/dice1.png");
    } else if (p_eyes[2] === 2) {
        $("#p3").attr("src", "images/dice2.png");        
    } else if (p_eyes[2] === 3) {
        $("#p3").attr("src", "images/dice3.png");        
    } else if (p_eyes[2] === 4) {
        $("#p3").attr("src", "images/dice4.png");        
    } else if (p_eyes[2] === 5) {
        $("#p3").attr("src", "images/dice5.png");        
    } else if (p_eyes[2] === 6) {
        $("#p3").attr("src", "images/dice6.png");        
    }
    p_score = score_calc(p_eyes);
    console.log(p_score);

    //alert(p_score);
    if (p_score === 0) {
        $("#p-nokori").html((p_nokori_num-1+3)%3);
    } else{ //役がある場合には残り0
        $("#p-nokori").html(0);
    }
    
    //スコアを入力
    $("#p-yaku").html(Math.floor(p_score/100));
    $("#p-me").html(Math.floor(p_score%100));
    //勝敗をリセット
    $("#result").html("");
    //子の出目もリセット
    // $("#c1").attr("src", "images/dice0.png");
    // $("#c2").attr("src", "images/dice0.png");
    // $("#c3").attr("src", "images/dice0.png");
    // $("#c-yaku").html("");
    // $("#c-me").html("");
});

$("#c-btn").on("click", function() {
    //残り回数を減らす。
    let c_nokori_num;
    c_nokori_num = $("#c-nokori").html();
    if (c_nokori_num == 0){
        return;
    }

    $("#zawa").html("")
    $("#zawazawa").html("")
    //0-indexなので1を足して1~6に対応する。
    let c_eyes = [];
    let random = Math.floor(Math.random() * 6) + 1;
    c_eyes.push(random);
    if (c_eyes[0] === 1) {
        $("#c1").attr("src", "images/dice1.png");
    } else if (c_eyes[0] === 2) {
        $("#c1").attr("src", "images/dice2.png");        
    } else if (c_eyes[0] === 3) {
        $("#c1").attr("src", "images/dice3.png");        
    } else if (c_eyes[0] === 4) {
        $("#c1").attr("src", "images/dice4.png");        
    } else if (c_eyes[0] === 5) {
        $("#c1").attr("src", "images/dice5.png");        
    } else if (c_eyes[0] === 6) {
        $("#c1").attr("src", "images/dice6.png");        
    }
    random = Math.floor(Math.random() * 6) + 1;
    c_eyes.push(random);
    if (c_eyes[1] === 1) {
        $("#c2").attr("src", "images/dice1.png");
    } else if (c_eyes[1] === 2) {
        $("#c2").attr("src", "images/dice2.png");        
    } else if (c_eyes[1] === 3) {
        $("#c2").attr("src", "images/dice3.png");        
    } else if (c_eyes[1] === 4) {
        $("#c2").attr("src", "images/dice4.png");        
    } else if (c_eyes[1] === 5) {
        $("#c2").attr("src", "images/dice5.png");        
    } else if (c_eyes[1] === 6) {
        $("#c2").attr("src", "images/dice6.png");        
    }
    random = Math.floor(Math.random() * 6) + 1;
    c_eyes.push(random);
    if (c_eyes[2] === 1) {
        $("#c3").attr("src", "images/dice1.png");
    } else if (c_eyes[2] === 2) {
        $("#c3").attr("src", "images/dice2.png");        
    } else if (c_eyes[2] === 3) {
        $("#c3").attr("src", "images/dice3.png");        
    } else if (c_eyes[2] === 4) {
        $("#c3").attr("src", "images/dice4.png");        
    } else if (c_eyes[2] === 5) {
        $("#c3").attr("src", "images/dice5.png");        
    } else if (c_eyes[2] === 6) {
        $("#c3").attr("src", "images/dice6.png");        
    }
    c_score = score_calc(c_eyes);
    console.log(c_score);

    //alert(p_score);
    if (c_score === 0) {
        c_nokori_num = (c_nokori_num-1+3)%3
    } else{ //役がある場合には残り0
        c_nokori_num = 0
    }
    $("#c-nokori").html(c_nokori_num);

    $("#c-yaku").html(Math.floor(c_score/100));
    $("#c-me").html(Math.floor(c_score%100));

    //alert(c_nokori_num);
    if (c_nokori_num > 0) {
        return;
    }

    console.log(p_score);

    //何倍になるか

    let get_perica = Number($("#kake-perica").html());
    let syoji_perica = Number($("#syoji-perica").html());
    console.log("GET",get_perica);

    if (p_score > c_score) {
        $("#result").html("You lose...");
        //負けた場合、所持ペリカに変化なし
    }
    else if (p_score < c_score) {
        $("#result").html("You win...");
        let c_yaku = Math.floor(c_score/100);
        console.log("win");
        console.log(c_yaku);
        if (c_yaku > 0){
            //役があると、役の分と元の分が返ってくる
            get_perica *= (c_yaku + 1);
        }
        else {
            //何もないと2倍になって返ってくる。
            get_perica = 2 * get_perica;
        }
        syoji_perica += get_perica
        //alert(syoji_perica);
        $("#syoji-perica").html(syoji_perica);
    
    }
    else {
        $("#result").html("Draw...");
        //Drawはそのまま帰ってくる
        syoji_perica += get_perica
        $("#syoji-perica").html(syoji_perica);
    }
    $("#kake-perica").html(0);
});

$("#reset").on("click", function() {
    $("#p-nokori").html(3);
    $("#c-nokori").html(3);
    //目のリセット
    $("#p1").attr("src", "images/dice0.png");
    $("#p2").attr("src", "images/dice0.png");
    $("#p3").attr("src", "images/dice0.png");
    $("#c1").attr("src", "images/dice0.png");
    $("#c2").attr("src", "images/dice0.png");
    $("#c3").attr("src", "images/dice0.png");
    //役・目表示のリセット
    $("#p-yaku").html("");
    $("#p-me").html("");
    $("#c-yaku").html("");
    $("#c-me").html("");
    //結果表示のリセット
    $("#result").html(""); 
    let now_perica = $("#perica").html();
    console.log("now");
    console.log(now_perica);
    //ペリカのリセット
    console.log(now_perica <= 0);
    if (now_perica <= 0) {
        $("#perica").html("1000");
        console.log(now_perica);
    }
    bet_status = false;
    $("#bet-num").val(0);
    
})

//本当はOPENCVで画像のサイズや色を取得したかったができず。
// ファイル読み込み処理
const onLoadImage = e => {
    const img = new Image();
    img.onload = () => {
        const mat = cv.imread(img);
        cv.imshow('yourpic', mat);
        mat.delete();
    };
    img.src = URL.createObjectURL(e.target.files[0]);
};

// ページ読み込み後処理
window.onload = () => {
    // input要素
    const input = document.getElementById('yourfile');
    // input要素のchangeイベント登録
    input.addEventListener('change', onLoadImage);
};



// <input type="file" id="target" multiple>にchangeイベントを設定
document.getElementById( "yourfile" ).addEventListener( "change", function(e) {
    var file = e.target.files[0];

    var blobUrl = window.URL.createObjectURL(file);

    var img = document.getElementById("yourpic");
    img.src = blobUrl;

    const mat = cv.imread("yourpic");


    // //Color Theifというものを使ってみたいが不明
    // //colorはr,g,bそれぞれが配列として入ります。
    // var colorThief = new ColorThief();
    // var img = document.querySelector('#colorthief img');
    // var color = colorThief.getColor(img);
    // console.log(color);

	// フォームで選択された全ファイルを取得
	// var fileList = this.files ;

	// // 個数分の画像を表示する
	// for( var i=0,l=fileList.length; l>i; i++ ) {
	// 	// Blob URLの作成
	// 	var blobUrl = window.URL.createObjectURL( fileList[i] ) ;

	// 	// HTMLに書き出し (src属性にblob URLを指定)
	// 	document.body.innerHTML += '<a href="' + blobUrl + '" target="_blank"><img src="' + blobUrl + '"></a>' ;
	// }
} ) ;


// for loopを使う
// $("#p-btn").on("click", function() {
//     for (let i = 0; i < 3; i++) {
//         const random = Math.floor(Math.random() * 6);
//         let tag = #p${i}
//         console.log(tag);
//         $("#p${i}").attr("src", "images/dice1.png");
//     }
    
// });
