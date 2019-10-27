// function getUrlParam(sUrl, skey) {
//     let url = sUrl.slice(sUrl.indexOf("?")+1).split("&");
//     let ans = [];
//     let ansObj = {};
//     console.log(url)
//     for(let i = 0;i<url.length;i++){
//         let temp = url[i].split("=")[0];    
//         let obj = {}
//         obj[temp] = url[i].split("=")[1]    
//         ans.push(obj);
//     }
//     console.log(ans);
        
//     if(skey == undefined) return ansObj;
//     return ans.length > 1?ans:ans.join(',');
// }
// let rs = getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe");
// console.log(rs);
const http = require("https");
const nodeSchedule = require("node-schedule")
class html {
    name = 'html';
    constructor(name,jacks){
        this.name = name;
        this.jakcs = jacks
    }
}
class GetWeibo extends html{
    jack = 'hello world'
    constructor(url,name,jack){
        super(name,jack);
        this.url = url;
    }
    get(){
        console.log(this);
        // http.get(this.url,res => {
        //     console.log(res);
        // }).on(err => {
        //     console.log(err);
        // })
    }
    pop(){
        return this;
    }
}

const weibo = new GetWeibo('https://www.luas.edu.cn','jj','ll')

// nodeSchedule.scheduleJob("2 * * * * *",()=>{
    console.log(weibo.pop())
// })