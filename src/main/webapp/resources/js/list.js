window.onload = function(){

    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
        
    const sort_i1 = document.querySelector(".sort > i:nth-of-type(1)");
    const sort_i2 = document.querySelector(".sort > i:nth-of-type(2)");
    const sort_i3 = document.querySelector(".sort > i:nth-of-type(3)");
    const sort_i4 = document.querySelector(".sort > i:nth-of-type(4)");

    const sort1 = document.querySelector(".sort1");
    const sort2 = document.querySelector(".sort2");
    const sort3 = document.querySelector(".sort3");
    const sort4 = document.querySelector(".sort4");

    document.querySelector('#best').addEventListener('click', function() {
        sort_i1.style.visibility = "visible";
        sort1.style.color = "#0000FF";
    })

    document.querySelector('#newProduct').addEventListener('click', function() {
        sort_i2.style.visibility = "visible";
        sort2.style.color = "#0000FF";
    })

    // 상품명순
    document.querySelector('#sortProductName').addEventListener('click', function() {
        sort_i3.style.visibility = "visible";
        sort3.style.color = "#0000FF";

        sort_i4.style.visibility = "hidden";
        sort4.style.color = "";
    })

    // 낮은가격순
    document.querySelector('#lowPrice').addEventListener('click', function() {
        sort_i4.style.visibility = "visible";
        sort4.style.color = "#0000FF";

        sort_i3.style.visibility = "hidden";
        sort3.style.color = "";
    })

    switch(urlParams.get('type')) {
        case 'lowPrice':
            sort_i4.style.visibility = "visible";
            sort4.style.color = "#0000FF";
            break;
        case 'sortProductName':
            sort_i3.style.visibility = "visible";
            sort3.style.color = "#0000FF";
            break;
    } // switch





   

    /*      const list = document.querySelector("#list");

            var xhr = new XMLHttpRequest();
            console.log("xhr", xhr);
        
            xhr.onreadystatechange = function () {
                console.log(`2. onready : `, xhr.readyState);
        
                if(xhr.readyState == 4){   // 응답완료 상태
                            
                    // http status code를 검사하여 정상응답(200)인 경우에만 응답데이터 를 사용
                    if(xhr.status == 200){
                        console.log("ttt",xhr.responseText)
                        list.innerHTML = xhr.responseText;
        
                    }
                }
                
            }    
            xhr.open('GET', '/LowPrice', true);
            xhr.send(list); */


}






