// Run in console of https://pathofexile.gamepedia.com/List_of_active_skill_gems

if (!console.save) {
    (function(console){
        console.save = function(data, filename){

            if(!data) {
                console.error('Console.save: No data')
                return;
            }

            if(!filename) filename = 'console.csv'

            if(typeof data === "object"){
                data = JSON.stringify(data, undefined, 4)
            }

            var blob = new Blob([data], {type: 'text/csv'}),
                e    = document.createEvent('MouseEvents'),
                a    = document.createElement('a')

            a.download = filename
            a.href = window.URL.createObjectURL(blob)
            a.dataset.downloadurl =  ['text/csv', a.download, a.href].join(':')
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            a.dispatchEvent(e)
        }
    })(console)
}

if (!jq) {
    var jq = document.createElement('script');
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);
}


let active_gems = []
$('.header,.-single').text((i,x)=>{
    active_gems.push(x)
})

let tags = $('.group:first-child')
tags.each((i,x) => {
    let tagList = $.map($('a', x), (val, i) => {return val.text}).join(' ')
    active_gems[i] = active_gems[i] + ',' + tagList
})

console.save(active_gems)
