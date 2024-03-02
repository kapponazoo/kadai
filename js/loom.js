
////平織　


//経糸の本数の定義
let WarplengthCount ="3";

let i = 2;
let WarplengthLine =['縦0','縦1','縦2'];
let heddlest = `
<span class="Warpcolor1">${WarplengthLine[0]}</span>
<span class="Warpcolor1">${WarplengthLine[1]}</span>
<span class="Warpcolor1">${WarplengthLine[2]}</span>
`;

let cellId="";
$("#WarplengthBtn").on("click",function(){
        i++;
        $("#WarplengthCount").html(i+1);
        WarplengthLine.push('縦'+i);
         console.log(WarplengthLine);
         console.log(WarplengthLine[i]);
         heddlest += `
         <span class="Warpcolor1">${WarplengthLine[i]}</span>
         `
         console.log(heddlest);
         $("#WarplengthSample").html(heddlest);
})


//経糸の色の定義

let WarpColor ="";
let WarpColorSet ="";



//模様の最小ピースの定義
const plain_piece1 = ["縦","横"];


//経糸緯糸のボリュームの定義
let WarpSet = "20";　/*経糸*/
let WeftSet ="40";　/*緯糸*/

//綜絖の展開

    //経糸にあわせて最小ピースを繰り返す回数を定義
let heddle_WarpSet_Loop = WarpSet/plain_piece1.length;

//綜絖の展開

//開口の定義
let heddle0 = "";



let heddle1 = "";
for(let i=0; i<10; i++){
    heddle1 +=  plain_piece1[0] + plain_piece1[1] ;
}
let heddle2 = "";
for(let i=0; i<10; i++){
    heddle2 +=  plain_piece1[1] + plain_piece1[0] ;
}

//綜絖1の表示
$("#heddle1").html(heddle1);

//綜絖2の表示
$("#heddle2").html(heddle2);

let Result = "";
for(let i=0; i<20; i++){

    Result += heddle1 +"<br>"+ heddle2+"<br>" ;
}
$("#Result").html(Result);








///**下記メモパッド原型

        $("main").slideDown(500);

        //1.Save クリックイベント
        
        $("#save").on("click",function(){
        const value = $("#text_area").val();
        localStorage.setItem("memo",value);
        alert("保存しました");
        });

        //2.clear クリックイベント

        $("#clear").on("click",function(){
        localStorage.removeItem("memo");
        alert("削除しました");
        $("#text_area").val("");
        });

        //3.ページ読み込み：保存データ取得表示
        if(localStorage.getItem("memo")){
            const value =localStorage.getItem("memo")
            $("#text_area").val(value);
        }



        //ロード時に表示
        //※こんなこともできる例
