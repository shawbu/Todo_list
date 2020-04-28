function go()
{
    var list = document.getElementById("list").value;
    var point = document.getElementById("point").value;
    var spendtime = document.getElementById("spendtime").value;


    console.log(
        "list：" + list + "\n" +
        "point：" + point + "\n" +
        "spendtime：" + spendtime
        );

    var target = document.getElementById("sectionCHG").parentElement;

    var htmldata = 
    '<div class="item01"><div class="checkbox"><input type="checkbox"></div>' + 
    '<div class="detail"><span>' + list + '</span></div> ' + 
    '<div class="point"><p>'+ point +'</p></div> ' + 
    '<div class="spend_time"><span id="spend_time">'+ spendtime +'</span><span>mins</span></div></div>'

    var e = document.createElement('div');
    e.innerHTML = htmldata;

    target.append(e)

}