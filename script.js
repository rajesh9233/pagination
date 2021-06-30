var row = document.getElementById('table-row');
let pageStart = 0;
let pageEnd = 10;
let personalInfo = []
fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
.then(response => response.json())
.then(data => {
    personalInfo = data;
    // pageChange(0)
    let details = ''
    data.forEach((value,i)=>{
        if(i<10){
            details+= `<tr><td>${value.id}</td>`
            details+= `<td>${value.name}</td>`
            details+= `<td>${value.email}</td></tr>`
        }
    });
    row.innerHTML = details;
});


function pageChange(id,start,end){
    var currentItem = document.getElementById(id);
    var first = document.getElementById('first');
    var prev = document.getElementById('prev');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var next = document.getElementById('next');
    var last = document.getElementById('last');
    first.classList.remove('active');
    prev.classList.remove('active');
    page1.classList.remove('active');
    page2.classList.remove('active');
    page3.classList.remove('active');
    next.classList.remove('active');
    last.classList.remove('active');
    currentItem.classList.add('active')

    console.log(id)
    switch (id) {
        case 'first':
            pageStart = 0;
            pageEnd = 10;
            break;
        
        case 'prev':
            pageStart = start-10;
            pageEnd = end-10;
            break;
        
        case 'page1':
            pageStart=0;
            pageEnd=10;
            break;
        
        case 'page2':
            pageStart=10;
            pageEnd=20;
            break;
        
        case 'page3':            
            pageStart=20;
            pageEnd=30;
            break;
        
        case 'next':
            pageStart = start+10;
            pageEnd = end+10;
            break;
        
        case 'last':
            pageStart = personalInfo.length - 10;
            pageEnd = personalInfo.length;
            break;
        
        default:
            break;
    }
    const data = personalInfo.slice(pageStart,pageEnd);
    let details = '';
    data.forEach((value,i)=>{
            details+= `<tr><td>${value.id}</td>`
            details+= `<td>${value.name}</td>`
            details+= `<td>${value.email}</td></tr>`
    });
    // console.log()
    row.innerHTML = details;

}