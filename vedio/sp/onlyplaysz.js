var ocx;
var xmlJson;
var result = "";
var indexcodes = [];
var url = 'http://122.227.142.67:9081/shipin20170614/ht/';
var url2 = 'http://61.164.92.115:9081/jb/getAllXml';
var switch_url = '';
var typeJB = '';//jbst
//判断江北几个山塘
$.ajax({
    url : 'GetClientIp!base',
    type : "get",
    dataType : "text",
    success : function(ip) {
        console.log(ip);
    },
    error: function (){
        console.log("获取客户端ip失败！");
    }
});

/*$.getJSON('GetClientIp!base',function(ip){
	console.log(ip);
});*/


/*function OnfireEventNotify(EventType, WndIndex, EventXml) {
	var RealTimePlayOcx = document.getElementById("PreviewOCX");
	switch (EventType) {
	case 0x0200000E:

		$.ajax({
			url : url+"loginAction",
			type : "get",
			dataType : "jsonp",
			jsonp: "jsoncallback",
			jsonpCallback:"success_jsonpCallback",
			success : function(json) {
				if(json.token == ''){
					alert("登陆请求失败！");
				}else{
					RealTimePlayOcx.SetToken(parseInt(EventXml), json.token);
				}
			},
			error: function (){
				alert("登陆请求失败！");
			}
		});

		break;
	default:
		break;
	}
}*/

function stopAll() {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('s 3$=["\\h\\i\\f\\g\\l\\m\\7\\j\\k\\7\\e","\\b\\c\\5\\a\\4\\6\\8\\d\\t","\\b\\c\\5\\a\\4\\6\\8\\u\\v"];r(o[3$[0]](-n)==q){9=3$[1]}p{9=3$[2]}',32,32,'|||_|u6b62|u53e3|u9884|x65|u89c8|result|u505c|u5168|u7a97|u6210|x77|x6f|x70|x73|x74|x76|x69|x50|x72|0x1|ocx|else|0x0|if|var|u529f|u5931|u8d25'.split('|'),0,{}))
}

function tokenCallEvent(reqID) {
    if(typeJB==="jbst"){

    }else{
        $.ajax({
            url : url+"loginAction",
            type : "get",
            dataType : "jsonp",
            jsonp: "jsoncallback",
            jsonpCallback:"success_jsonpCallback",
            success : function(json) {
                if(json.token == ''){
                    alert("登陆请求失败！");
                }else{
                    RealTimePlayOcx.SetToken(parseInt(reqID), json.token);
                }
            },
            error: function (){
                alert("登陆请求失败！");
            }
        });
    }
}

function selectWindowType(number) {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('b 4$=["\\e\\9\\7\\x\\k\\l\\i\\5\\j\\e\\o\\p\\m\\5\\n\\7",\'\\d\\c\\a\\8\\h\\g\\w\\v\',\'\\d\\c\\a\\8\',\'\\9\\6\\6\\5\\6\'];b f=y(u);r(q[4$[0]](f)!=t){s(4$[1],4$[2],4$[3])}',35,35,'||||_|x6f|x72|x74|u5c40|x65|u5e03|var|u53e3|u7a97|x73|xkycf1b15f44|u7f6e|u8bbe|x64|x77|x69|x6e|x79|x75|x4c|x61|ocx|if|jAlert|0x0|number|u8d25|u5931|x57|Number'.split('|'),0,{}))
}

function selectWindow() {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('e 4$=["\\g\\5\\d\\8\\9\\b\\5\\a\\3\\7\\3\\c\\6","\\h\\k\\7","\\a\\3\\6\\j\\3\\7\\3\\c\\6\\i\\d\\8\\9\\b\\5","\\g\\5\\d\\8\\9\\b\\5\\a\\3\\7\\3\\c\\6"];e f=p($(4$[0])[4$[1]]());n(l[4$[2]](f)==-m){$(4$[0])[4$[1]](o)}',26,26,'|||x65|_|x77|x74|x6c|x6e|x64|x73|x6f|x63|x69|var|xky4de6ec8c4|x23|x76|x57|x53|x61|ocx|0x1|if|0x0|Number'.split('|'),0,{}))
}

function ptzControllerMove(command, action) {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('J a$=["\\p\\L\\B\\17","\\e\\G\\N\\S\\q\\C\\T\\j\\h\\B\\f\\b\\d\\I\\"\\P\\Q\\F\\"\\C\\j\\d\\s\\b\\t\\f\\d\\R\\I\\"\\L\\c\\U\\M\\O\\"\\G\\g","\\e\\m\\c\\v\\w\\b\\d\\c\\h\\b\\q\\g","\\e\\E\\s\\c\\f\\b\\d\\g","\\e\\o\\E\\s\\c\\f\\b\\d\\g","\\e\\m\\h\\f\\b\\h\\f\\c\\z\\g\\H\\F\\e\\o\\m\\h\\f\\b\\h\\f\\c\\z\\g","\\e\\K\\p\\j\\j\\t\\g\\H\\e\\o\\K\\p\\j\\j\\t\\g","\\e\\o\\m\\c\\v\\w\\b\\d\\c\\h\\b\\q\\g","\\p\\c\\v\\w\\b\\d\\c\\h\\b\\q","\\14\\b\\f\\d","","\\x\\D\\n\\l\\k","\\y\\n\\l\\k","\\15\\19","\\x\\D\\n\\l\\k","\\y\\n\\l\\k","\\18\\W"];J i=[];i[a$[0]](a$[1]);i[a$[0]](a$[2]);i[a$[0]](a$[3]+u+a$[4]);i[a$[0]](a$[5]);i[a$[0]](a$[6]);i[a$[0]](a$[7]);Y(V[a$[8]](r,i[a$[9]](a$[10]))==Z){A=a$[11]+r+a$[12]+u+a$[13]}X{A=a$[11]+r+a$[12]+u+a$[16]}',62,72,'||||||||||_|x6f|x74|x6e|x3c|x69|x3e|x72|xkye4546321f|x65|uff1a|u4f5c|x50|u64cd|x2f|x70|x6c|command|x63|x64|action|x7a|x43|u4e91|x2c|x79|result|x73|x20|u53f0|x41|x30|x3f|x35|x3d|var|x53|x75|x2d|x78|x38|x31|x2e|x67|x6d|x76|x66|ocx|u8d25|else|if|0x0|||||x6a|u6210||x68|u5931|u529f'.split('|'),0,{}))
}

function getParmXml() {
    var a;
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('l b$=["\\J\\t\\c\\w","\\A\\B\\d\\E\\e\\c\\h\\e\\d\\z\\p\\v\\k\\i\\f\\d\\z\\i\\f\\x\\p\\h\\c\\e\\d","\\P\\M\\N","\\A\\B\\d\\E\\e\\c\\h\\e\\d\\z\\p\\v\\k\\i\\f\\d\\V\\i\\u\\c\\g\\e\\d","\\M","\\t\\p\\e\\W","\\q\\I\\T\\C\\k\\j\\y\\c\\h\\e\\i\\g\\r\\n\\"\\U\\S\\R\\"\\j\\c\\r\\f\\g\\u\\i\\r\\w\\n\\"\\p\\x\\K\\Q\\O\\"\\I\\s\\q\\w\\k\\g\\v\\m\\k\\s","\\q\\e\\r\\m\\t\\j\\t\\i\\f\\x\\p\\h\\c\\n\\"","\\"\\j\\e\\m\\y\\c\\n\\"","\\"\\d\\s","\\q\\h\\c\\f\\g\\h\\u\\j\\t\\m\\f\\X\\12\\i\\14\\c\\n\\"","\\"\\j\\e\\m\\y\\c\\n\\"","\\"\\d\\s","\\j\\q\\t\\c\\h\\K\\g\\h\\C\\m\\r\\f\\c\\j\\u\\c\\f\\g\\u\\c\\n\\"","\\"\\d\\s","\\q\\d\\w\\k\\g\\v\\m\\k\\s","\\J\\g\\i\\r",""];l o=[];l H=b$[0];l G=b$[1];l L=b$[2];l F=b$[3];l D=b$[4];o[b$[5]](b$[6]);o[b$[5]](b$[7]+H+b$[8]+G+b$[9]);o[b$[5]](b$[10]+L+b$[8]+F+b$[9]);o[b$[5]](b$[13]+D+b$[9]);o[b$[5]](b$[Z]);a=o[b$[Y]](b$[11]);',62,67,'|||||||||||_|x65|x2f|x73|x63|x6f|x72|x69|x20|x6c|var|x61|x3d|xkye4546321f|x75|x3c|x6e|x3e|x70|x64|x62|x67|x74|x76|x50|x43|x3a|x6d|xkyd36014b51|x55|xkyd61cb39f4|xky3a5e16f83|xky8413a5b5b|x3f|x6a|x66|xkyc35229df4|x35|x36|x38|x32|x2d|x30|x2e|x78|x31|x56|x68|x6b|16|15||17|x53||x7a'.split('|'),0,{}))
    return a;
}

function selectIndex(e, id) {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('5 3$=["\\4\\b\\a\\4","\\9","\\7\\8\\d"];5 6=$(e)[3$[0]]();$(3$[1]+c)[3$[2]](6);',15,15,'|||_|x74|var|xky3bfecd719|x76|x61|x23|x78|x65|id|x6c|'.split('|'),0,{}))
}

function ptzGetPoint() {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('s a$=["\\G","\\m\\B\\w\\I","\\f\\D\\F\\z\\l\\k\\K\\c\\j\\w\\h\\b\\e\\o\\"\\G\\L\\v\\"\\k\\c\\e\\y\\b\\p\\h\\e\\J\\o\\"\\B\\d\\P\\Q\\R\\"\\D\\g","\\f\\n\\d\\t\\x\\b\\e\\d\\j\\b\\l\\g","\\f\\A\\y\\d\\h\\b\\e\\g","\\f\\q\\A\\y\\d\\h\\b\\e\\g","\\f\\n\\j\\h\\b\\j\\h\\d\\H\\g\\r\\v\\f\\q\\n\\j\\h\\b\\j\\h\\d\\H\\g","\\f\\u\\m\\c\\c\\p\\g\\r\\f\\q\\u\\m\\c\\c\\p\\g","\\f\\n\\j\\c\\w\\c\\d\\k\\N\\e\\p\\c\\F\\k\\o","\\k\\O\\M\\c\\l\\l\\S\\h\\z\\c\\o\\r\\v\\k\\u\\m\\c\\c\\p\\o\\r\\k\\q\\g","\\f\\q\\n\\d\\t\\x\\b\\e\\d\\j\\b\\l\\g","\\m\\d\\t\\x\\b\\e\\d\\j\\b\\l","\\Z\\b\\h\\e",""];s i=[];s C=a$[0];s E=X;i[a$[1]](a$[2]);i[a$[1]](a$[3]);i[a$[1]](a$[4]+E+a$[5]);i[a$[1]](a$[6]);i[a$[1]](a$[7]);i[a$[1]](a$[8]+C+a$[9]);i[a$[1]](a$[10]);T[a$[W]](V,i[a$[U]](a$[Y]));',62,63,'||||||||||_|x6f|x65|x74|x6e|x3c|x3e|x69|xkye4546321f|x72|x20|x6c|x70|x50|x3d|x64|x2f|x35|var|x7a|x53|x30|x73|x43|x63|x6d|x41|x75|xky18b7bdb62|x3f|xky7689efe20|x78|x31|x79|x68|x67|x76|x2e|x77|x49|x44|x66|x2d|x38|x54|ocx|12|0x27|11|0x0|13|x6a|'.split('|'),0,{}))
}

function login(newid) {

    if(newid==="001643"||newid==="001651"||newid==="001655"||newid==="001650"
        ||newid==="001648"||newid==="001649"||newid==="001654"){
        typeJB="jbst"
    }else{
        typeJB = "";
    }
    if(typeJB==="jbst"){
        getPlayXML(newid);
    }else{
        $.ajax({
            type:"get",
            async:false,
            dataType : "jsonp",
            jsonp: "jsoncallback",
            jsonpCallback:"success_jsonpCallback",
            url : url+'loginAction',
            success: function (json) {
                if(json.token == ''){
                    alert("登陆请求失败！");
                }else{
                    getPlayXML(newid);
                }
            },
            error: function (){
                alert("登陆请求失败！");
            }
        });
    }

}

function getPlayXML(newid) {
    if(typeJB==="jbst"){
        $.ajax({
            type:"get",
            /*	async:false,*/
            url : "http://61.164.92.115:9081/jb/getAllXml",//"http://115.238.149.171:58880/sh/procedure/getAllXml",
            //url : url+"getCameraJsonAction",
            /*	dataType : "jsonp",
                jsonp: "jsoncallback",
                jsonpCallback:"success_jsonpCallback",*/
            success : function (json) {
                xmlJson = json.xmlList;
                for(var i=0;i<xmlJson.length;i++){
                    xmlJson[i].id=xmlJson[i].indexCode
                }
               /* console.log(xmlJson)*/
                //var id=$.getUrlVars("id");
                var id=newid;
                realTimePlay(id.toString());
                // realTimePlay("70");
                // realTimePlay("001180");
            },
            error: function (){
                alert("获取监控点失败！");
            }
        });
    }else{
        $.ajax({
            type:"get",
            async:false,
            url : url+"getCameraJsonAction",
            dataType : "jsonp",
            jsonp: "jsoncallback",
            jsonpCallback:"success_jsonpCallback",
            success : function (json) {
				newid="4878";
				json = [{
    "id": 4878,
    "indexCode": "003427",
    "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Preview><StreamSvr><Svr type=\"3\" ip=\"52.1.1.5\" port=\"7302\" rtspPort=\"7302\"/><Svr type=\"41\" ip=\"115.238.149.172\" port=\"554\"/></StreamSvr><CamIndexCode>003427</CamIndexCode><DevIndexCode>003423</DevIndexCode><LinkType>1</LinkType><StreamType>0</StreamType><CamName>姚江大闸西区下游</CamName><UserName>admin</UserName><PassWord>xB6y7WVHHLmuAAZtmQ==</PassWord><UserLevel>50</UserLevel><DevType>0</DevType><Manufacturer>0</Manufacturer><ProSeries>1</ProSeries><ChannelNo>34</ChannelNo><SubStream>MAIN</SubStream><NetZone cnid=\"1\" pnid=\"1\"/><TreatyType>SDK</TreatyType><UserId>28</UserId><VagInfo><VagIp>115.238.149.172</VagIp><VagPort>7302</VagPort></VagInfo></Preview>"
}]
                xmlJson = json;
                //var id=$.getUrlVars("id");
                var id=newid;
                console.log(id);
                realTimePlay(id.toString());
            },
            error: function (){
                alert("获取监控点失败！");
            }
        });
    }

}
function getUrlVars2() {
    return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [
        , null ])[1])
}
/*function realTimePlay(indexcode) {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('g 6$=["\\w\\5\\7\\n\\5\\d\\5\\r\\7\\k\\b\\l\\c\\j\\e","\\b\\c","\\q\\7\\u\\p\\7\\x\\p\\5\\s\\b\\5\\e","\\t\\v\\d","\\q\\5\\7\\n\\5\\d\\5\\r\\7\\k\\b\\l\\c\\j\\e"];g 9;g 8=a[6$[0]]();A[8]=o;y(9 z f){h(f[9][6$[1]]==o){h(a[6$[2]](8,f[9][6$[3]])==i){h(a[6$[4]](8+m)==-m){a[6$[4]](i)};B}}}',38,38,'|||||x65|_|x74|xkyd9c567c9d|xky96eabd7eb|ocx|x69|x64|x6c|x77|xmlJson|var|if|0x0|x6f|x57|x6e|0x1|x53|indexcode|x72|x73|x63|x76|x78|x61|x6d|x67|x50|for|in|indexcodes|break'.split('|'),0,{}))
}*/
function realTimePlay(indexcode) {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('g 6$=["\\w\\5\\7\\n\\5\\d\\5\\r\\7\\k\\b\\l\\c\\j\\e","\\b\\c","\\q\\7\\u\\p\\7\\x\\p\\5\\s\\b\\5\\e","\\t\\v\\d","\\q\\5\\7\\n\\5\\d\\5\\r\\7\\k\\b\\l\\c\\j\\e"];g 9;g 8=a[6$[0]]();A[8]=o;y(9 z f){h(f[9][6$[1]]==o){h(a[6$[2]](8,f[9][6$[3]])==i){h(a[6$[4]](8+m)==-m){a[6$[4]](i)};B}}}',38,38,'|||||x65|_|x74|xkyd9c567c9d|xky96eabd7eb|ocx|x69|x64|x6c|x77|xmlJson|var|if|0x0|x6f|x57|x6e|0x1|x53|indexcode|x72|x73|x63|x76|x78|x61|x6d|x67|x50|for|in|indexcodes|break'.split('|'),0,{}))
}

/* function getOnlineState(){
	$.ajax({
		type:"get",
		async:false,
		url : "http://122.227.239.194:8080/fx/getOnlineStateAction!SWSB_HTTP",
		dataType : "jsonp",
		jsonp: "jsoncallback",
		jsonpCallback:"success_jsonpCallback",
		success : function (json) {
			alert(JSON.stringify(json));
		},
		error: function (){
			alert("获取在线状态失败！");
		}
	});
} */

$(document).ready(function() {
    eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('f 7$=["\\6\\p\\6\\q\\r\\9\\c\\y\\e","\\e\\a\\9\\z\\d\\9\\v\\w\\t","\\a\\9\\u\\d\\i\\c\\9\\a\\n\\6\\8\\8\\h\\6\\b\\j","\\i\\9\\c\\A\\8\\l\\h\\6\\8\\x\\6\\a\\6\\s",\'\\o\\b\\6\\8\\8\\B\\e\\l\\d\\L\\c\',"\\b\\8\\d\\b\\j"];$[7$[0]]({J:M,N:O});f m={E:7$[1]};g=D C(m);g[7$[2]](F,I);f k=H();g[7$[3]](k);$(7$[4])[7$[5]](G(){K()});',51,51,'||||||x61|_|x6c|x65|x72|x63|x74|x69|x70|var|ocx|x62|x73|x6b|xkye4546321f|x6f|xky2dc5f5d67|x43|x23|x6a|x78|x53|x6d|x31|x67|x77|x5f|x50|x75|x76|x47|x2d|PreviewOCX|new|divId|0x200000e|function|getParmXml|tokenCallEvent|timeout|ptzGetPoint|x6e|0x4e20|async|false'.split('|'),0,{}))
});