document.getElementById("lodiise").style.display="none"

var butsearch=document.getElementById("butsearch");
var textS=document.getElementById("search_text");

butsearch.onclick=show_search;
    
    // var search = document.getElementById("search");
    // $(document).ready(function() {
    //     $("butsearch").click(function () {
    //        $(this).empty();
    //     });
    //  });

    function show_search(){
        document.getElementById("lodiise").style.display="flex";
       
        $("#search").empty();
        var T=textS.value;
        
        if (!$('#search_text').val()) {
            $("#te").text("Enter The Product Name You Want To Search For!!!");
            $("#te").css({"color":"red"});

        }else{
            
            $("#te").text("Waiting..........");
            $("#te").css({"color":"blue"});
       var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.npoint.io/13b45254f8416319501e/search/", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var dataR =JSON.parse( xhr.responseText);
                // console.log(dataR.length);

                // console.log(textS.value)
                // console.log(textS.value)
                for (var i=6; i<dataR.length;i++){ 
                    // console.log(dataR[i].money);
                    if(dataR[i].title.includes(textS.value)){
                        console.log(i);
                    var catbox = document.createElement('div');
                    catbox.setAttribute('class','show_box');
                    catbox.setAttribute('id','siz_box');
                    var elem_img = document.createElement("img");
                    elem_img.setAttribute("src",dataR[i].image);
                    elem_img.setAttribute("alt",i);
                    elem_img.setAttribute("onclick", "runCommand(this);");
                    var elem_a = document.createElement("a");
                    elem_a.textContent=dataR[i].title;
                    var elem_a2 = document.createElement("a");
                    var elem_a3 = document.createElement("a");
                    elem_a2.textContent=dataR[i].price;
                    elem_a3.textContent=dataR[i].shipping;
                    catbox.appendChild(elem_img);
                    catbox.appendChild(elem_a);
                    catbox.appendChild(elem_a2);
                    catbox.appendChild(elem_a3);
                    search.appendChild(catbox);
                    this.addEventListener('loadend',function(){
                        document.getElementById("lodiise").style.display="none";
                        $("#te").text(T);
                        $("#search_text").val('');

                    }); }}}}
        xhr.send();}
        }
    
        function runCommand(x){ 
            console.log(x.alt);
            sessionStorage.setItem("produtselect", x.alt);
            window.open("/allproduct_code/showproduct.html","_self");
            sessionStorage.setItem("homepageitemsselect", "search");

            
         
         }
         document.getElementById("badge").innerHTML=sessionStorage.getItem("countamr");
