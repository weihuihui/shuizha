/**
 * @author chenchu
 * @date 2015 05 08
 * @info 视频监控
 */

define([
	"dojo/_base/declare",
	"esri/geometry/Point",
	"esri/graphic",
	"htwater/Overlay",
	"htwater/OverlayLayer",
	"js/ModuleBase",
	"jquery",
	"underscore",
	"text!./vedio.html",
	"css!./vedio.css",
	"css!libs/ztree/ztreestyle.css",
	"ztree",
	"libs/jquery-cookie/jquery.cookie"
], function (declare, Point, Graphic, Overlay, OverlayLayer, ModuleBase, $, _, vedioTpl) {
		return declare(ModuleBase, {
			declaredClass: "module.vedio",
			width: 300,

			constructor: function (options) {
				declare.safeMixin(this, options || {});
				var template = _.template(vedioTpl);
				this.container.innerHTML = template({
					name: this.name || "视频"
				});
				this.startup();
			},

			destructor: function () {
				$.fn.zTree.destroy("vedio-tree");
				this.htMap.map.removeLayer(this.overlayLayer);
				if(window.WebPreviewControl && window.WebPreviewControl.StopAllPreview){
					window.WebPreviewControl.StopAllPreview();
				}
				$(document.body).children(".vedio-dialog").remove();
				$(document).off("click" ,".vedio-dialog .close");
				this.inherited(arguments);
				$(".vedio-dialog").remove();
				$("#vedio").remove();
			},

			startup: function () {
				var self=this;
				this.rolecode='';
				this.initOverlayLayer();
				this.initTree();
//				this.initFilterTree();
				$('.form-control').change(function(){
					self.initTree();
				});
				
				var rolecode = this.rolecode = $.cookie('role');
				
				var isFull=false;
				
				$(document).on('click','#fullScreen',function(){
					if(isFull==false){
						var _width=$(window).width()-300;
						var _height=$(window).height()-35;
						$("#video_pan").css('width',_width);
						$("#video_pan").css('height',_height);
						$('#fullScreen').attr('src','./images/min.png');
						isFull=true;
					}else{
						$("#video_pan").css('width','460px');
						$("#video_pan").css('height','335px');
						$('#fullScreen').attr('src','./images/max.png');
						isFull=false;
					}
				});
			},

			initOverlayLayer: function () {
				var self = this;
				var overlayLayer = new OverlayLayer();
				overlayLayer.on("click-overlay", function (event) {
					var overlay = event.overlay;
					if (!overlay) {
						return;
					}
					self.playVedio(overlay.graphic.attributes);
				});
				this.htMap.map.addLayer((this.overlayLayer = overlayLayer));
			},
			
			initFilterTree: function(){
				/*$(this.container).on("keyup", "#keyword", _.debounce(function(event){
					event.preventDefault();
					
					var value = $(this).val(),
						zTreeObj = $.fn.zTree.getZTreeObj("vedio-tree");
					
					zTreeObj.cancelSelectedNode();
					if(!$.trim(value)){
						return;
					}
					var toSelectedNodes = zTreeObj.getNodesByFilter(function(treeNode){
						return treeNode.name.indexOf(value) > -1;
					});
					$.each(toSelectedNodes, function(index, treeNode){
						zTreeObj.selectNode(treeNode, true);
							
						var parentNode = treeNode.getParentNode();
						while(parentNode){
							zTreeObj.expandNode(parentNode, true, false, false);
							parentNode = parentNode.getParentNode();
						}
					});
					//使输入框重新获得焦点
					this.focus();
				},200));*/
			},

			initTree: function () {
				
				//设置列表名称是否灰色显示
	    		/*function setFontCss(treeId, treeNode) {
	    			
	    		};*/
				
				var self = this;
				this.getTreeData().then(function (treeData) {
					var setting = {
						check: {
							enable: false,
							chkStyle: "checkbox"
						},
						data: {
							simpleData: {
								enable: true,
								idKey: "_id",
								pIdKey: "_pId",
								rootPId: 0,
							}
						},
						view: {
							//fontCss: setFontCss,
							txtSelectedEnable: true,
							fontCss: function (treeId, treeNode) {
								
								var set={},la1="",style="";
								
								if (treeNode.level === 0) {
									style = $.extend(style, { "font-weight": "bold" });
								}
				    			if(treeNode.online==0){
				    				style= $.extend(style, {"color":"rgba(128, 128, 128, 0.32)"});
				    			}else{
				    				if(treeNode.pixel==0){
				    					style= $.extend(style, {"color":"rgba(51, 51, 51, 1)"});
				    				//	style={"color":"rgba(51, 51, 51, 1)"};
				        			}else{
				        				style= $.extend(style, {"color":"rgba(0, 114, 255,1)"});
				        				//style={"color":"rgba(0, 114, 255,1)"};
				        			}
				    			}
				    			return style;
							},
							expandSpeed: "slow",
							showIcon: true,
							selectedMulti: true
						},
						callback: {
							onDblClick: function (event, treeId, treeNode) {
								if(treeNode.from_type=="outer" && treeNode.ISNeedOpenOutWindow=="1"){
									window.open(treeNode.videoWallUrl);
								}
								
								if(!treeNode.isParent && treeNode.isgray !== "true"){
									self.htMap.centerAt([treeNode.LGTD, treeNode.LATD]);
									self.playVedio(treeNode);
								}
							},
							onClick: function(event, treeId, treeNode){
								if(!treeNode.isParent && treeNode.videoUrl !== null && treeNode.belongCity == "象山县"){
									window.open(treeNode.videoUrl);
								}
							}
						}
					};
					
					var data = [];
					if(localStorage.getItem('curCity') == '海曙区' && self.rolecode != 'admin_hs'){
						$.each(treeData,function(i,v){
							if(self.rolecode == v.from_type){
								data.push(v);
							}
						});
						
						treeData = data;
					}
					
					treeData = $.map(treeData, function (item) {
						item.icon = "./modules/vedio/" + item.icon;
						return item;
					});
					var zTreeObj = $.fn.zTree.init($(self.container).find("#vedio-tree"), setting, treeData);
					//展开1-3级节点
					var toExpandedNodes = zTreeObj.getNodesByFilter(function (treeNode) {
						return treeNode.level < 3;
					});
					$.each(toExpandedNodes, function (index, treeNode) {
						zTreeObj.expandNode(treeNode, true, false, false);
					});
					//返回修改后的treeData给addOnMap方法
					return zTreeObj.transformToArray(zTreeObj.getNodes());
				}).then(function (treeData) {
					self.addOnMap(treeData);
					return treeData;
				});
			},

			getTreeData: function () {
				var pixel = $('#pixelselect').val();
				var type = $('#typeselect').val(); 
				
				var self = this;
				//return $.when($.getJSON("getsplist!GQ", {}), $.get("modules/vedio/GetALLCameraXML.txt", {}))
				//return $.when($.getJSON("modules/vedio/spList.json", {}), $.get("modules/vedio/GetALLCameraXML.txt", {}))
				return $.when($.getJSON("GetTreeAll!GQ", {gcType:gcType}), $.get("modules/vedio/GetALLCameraXML.txt", {}))
					.then(function (treeResponse, cameraResponse) {
//					self.cameraData = cameraResponse[0];
					var spdata=[];
					treeResponse[0].forEach(function (item) {
						var img1=item.pixel==1?"2":""
						if(item.cameraType !=null){
							item.icon=item.cameraType==0?"icons/camera5"+img1+".png":"icons/sp4"+img1+".png"
						}
						if (item.pId==0||((pixel=="不限"||item.pixel==pixel)&&(type=="不限"||item.cameraType==type))) {
							spdata.push(item);
						}
	                });
					return spdata;
				}, function (XMLHttpRequest, textStatus, errorThrown) {
					console.log(errorThrown);
					return errorThrown;
				});
			},

			addOnMap: function (treeData) {
				var self = this;
				this.overlayLayer.clear();
				if (!(treeData || treeData.length)) {
					return;
				}
				$.each(treeData, function (index, item) {
					var point = new Point(item.LGTD, item.LATD, self.htMap.map.spatialReference),
						graphic = new Graphic(point, null, item, null),
						htmlTpl = "<div id='shipin' >" +
									  "<img title='"+item.name+"' src='"+item.icon.replace("camera5","camera4")+"' width='25' height='25'>" +
									  "<div class='dotName' style='display: block; background: white;margin-left: -30px;padding: 4px 5px;box-shadow: 4px 4px 4px 1px rgba(0,0,0,.5);'><span style='display: block;'>"+item.name+"</span></div>"+
									  "<span style='width:100px;height:50px; display: none;color: #fff;background: #76c476;'>"+item.name+"</span>"+
								  "</div>";
					self.overlayLayer.add(new Overlay(graphic, htmlTpl));
				});
				
			},
            /*playVedio: function (treeNode) {
                $(".vedio-dialogmy").remove();
                if (!treeNode) {
                    return;
                }
                $(document).off("click" ,".vedio-dialogmy .close").on("click", ".vedio-dialogmy .close", function(){
                    $(this).closest(".vedio-dialogmy").remove();
                });
                var vedioDialogTpl="";

                //alert(treeNode.CODE);
                //	alert(treeNode.videoUrl);
                if(treeNode.from_type=="outer"){
                    vedioDialogTpl = "<div class='vedio-dialogmy' id='asd'>" +
                        "<div class='vedio-heading'>" +
                        "<span class='title'>"+treeNode.name+"</span>" +
                        "<img id='fullScreen' src='./images/max.png' title='放大/缩小'>"+
                        "<span class='close' title='关闭'>&times;</span>" +
                        "</div>"
                        +'<div  id="video_pan" style="width:460px;height:335px;"><iframe id="video" style="width:100%;height:100%;" src="'+treeNode.videoUrl+'"></iframe></div>'
                        +"</div>";
                }else{
                    vedioDialogTpl = "<div class='vedio-dialogmy'>" +
                        "<div class='vedio-heading'>" +
                        "<span class='title'>"+treeNode.name+"</span>"
                        + "<img id='fullScreen' src='./images/max.png' title='放大/缩小'>"
                        + "<span class='close' title='关闭'>&times;</span>" +
                        "</div>"
                        +'<div id="video_pan" style="width:460px;height:335px;"><iframe id="video" style="width:100%;height:100%;" src="modules/vedio/sp/onlyplay.html?id='+treeNode.CODE+'"></iframe></div>'
                        +"</div>";
                }
                $(document.body).append(vedioDialogTpl);
            },*/
			playVedio: function (treeNode) {
				 var iWidth = 420;
				 var iHeight = 420; 
				 var url = "http://www.baidu.com";
				 var name = "";
				 var iTop = (window.screen.availHeight - 30 - iHeight) / 2; 
		            //获得窗口的水平位置 
		         var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; 
	
		         
		         
				$(".vedio-dialog").remove();
				if (!treeNode) {
					return;
				}
				$(document).off("click" ,".vedio-dialog .close").on("click", ".vedio-dialog .close", function(){
					$(this).closest(".vedio-dialog").remove();
				});
				var vedioDialogTpl="";
				
				//alert(treeNode.CODE);
			//	alert(treeNode.videoUrl);
				if(treeNode.from_type=="outer"){
					vedioDialogTpl = "<div class='vedio-dialog' id='asd'>" +
					"<div class='vedio-heading'>" +
						"<span class='title'>"+treeNode.name+"</span>" +
						"<img id='fullScreen' src='./images/max.png' title='放大/缩小'>"+ 
						"<span class='close' title='关闭'>&times;</span>" +
					"</div>" 
					+'<div  id="video_pan" style="width:460px;height:335px;"><iframe id="video" style="width:100%;height:100%;" src="'+treeNode.videoUrl+'"></iframe></div>'
		    	+"</div>";
			/*		
					 var iTop = (window.screen.availHeight - 30 - 420) / 2; 
					 window.open(treeNode.videoUrl,treeNode.name,'width=420, height=420, top='+iTop+',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');*/
		
		
				}else{
			/*		vedioDialogTpl = "<div class='vedio-dialog'>" +
					"<div class='vedio-heading'>" +
						"<span class='title'>"+treeNode.name+"</span>"
						+ "<img id='fullScreen' src='./images/max.png' title='放大/缩小'>"
						+ "<span class='close' title='关闭'>&times;</span>" +
					"</div>" 
					+'<div id="video_pan" style="width:460px;height:335px;"><iframe id="video" style="width:100%;height:100%;" src="modules/vedio/sp/onlyplay.html?id='+treeNode.CODE+'"></iframe></div>'
		    	+"</div>";
/*					 var iTop = (window.screen.availHeight - 30 - 420) / 2; 
					 window.open('modules/vedio/sp/onlyplay.html?id='+treeNode.CODE,treeNode.name,'width=420, height=420, top='+iTop+',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
			
	*/			}
				vedioDialogTpl = "<div class='vedio-dialog'>" +
				"<div class='vedio-heading'>" +
					"<span class='title'>"+treeNode.name+"</span>"
					+ "<img id='fullScreen' src='./images/max.png' title='放大/缩小'>"
					+ "<span class='close' title='关闭'>&times;</span>" +
				"</div>" 
				+'<div id="video_pan" style="width:460px;height:335px;"><body class="monitor"><div class="win_container" data-index="1" id="preview_1" style="width: 100%; height: 100%;" name="ocx_1"></div></body></div>'
	    	+"</div>"
				
				
	    	
				$(document.body).append(vedioDialogTpl);
				eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('f 7$=["\\6\\p\\6\\q\\r\\9\\c\\y\\e","\\e\\a\\9\\z\\d\\9\\v\\w\\t","\\a\\9\\u\\d\\i\\c\\9\\a\\n\\6\\8\\8\\h\\6\\b\\j","\\i\\9\\c\\A\\8\\l\\h\\6\\8\\x\\6\\a\\6\\s",\'\\o\\b\\6\\8\\8\\B\\e\\l\\d\\L\\c\',"\\b\\8\\d\\b\\j"];$[7$[0]]({J:M,N:O});f m={E:7$[1]};g=D C(m);g[7$[2]](F,I);f k=H();g[7$[3]](k);$(7$[4])[7$[5]](G(){K()});',51,51,'||||||x61|_|x6c|x65|x72|x63|x74|x69|x70|var|ocx|x62|x73|x6b|xkye4546321f|x6f|xky2dc5f5d67|x43|x23|x6a|x78|x53|x6d|x31|x67|x77|x5f|x50|x75|x76|x47|x2d|PreviewOCX|new|divId|0x200000e|function|getParmXml|tokenCallEvent|timeout|ptzGetPoint|x6e|0x4e20|async|false'.split('|'),0,{}))
				$.ajaxSetup({
					timeout : 20000,
					async: false
				});
				login(treeNode.CODE);
				selectWindowType(1);
				
			}
		});
	});