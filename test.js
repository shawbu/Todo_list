function go()
{
    // 先抓取html裡 目標物件的值
    var list = document.getElementById("list").value;
    var point = document.getElementById("point").value;
    var spendtime = document.getElementById("spendtime").value;

    // 用console.log檢視取得的值
    console.log(
        "list：" + list + "\n" +
        "point：" + point + "\n" +
        "spendtime：" + spendtime
        );

    // 取得 sectionCHG 的父節點
    var target = document.getElementById("sectionCHG").parentElement;

    // 撰寫準備要貼上html的程式碼
    var htmldata = 
    '<div class="item01"><div class="checkbox"><input type="checkbox"></div>' + 
    '<div class="detail"><span>' + list + '</span></div> ' + 
    '<div class="point"><p>'+ point +'</p></div> ' + 
    '<div class="spend_time"><span id="spend_time">'+ spendtime +'</span><span>mins</span></div></div>'

    // 建立一個 div，並將剛剛撰寫的程式碼放進這個div
    var e = document.createElement('div');
    e.innerHTML = htmldata;

    // 將剛剛的div附加到 sectionCHG 的父節點
    target.append(e)

}