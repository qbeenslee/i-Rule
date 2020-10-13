var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
} else if (url.indexOf('/user/privilege/list') != -1) {
	var obj = JSON.parse(body);
	obj.data = [
        {
          "id": 1,
          "effectObject": "video",
          "action": "play",
          "function": "originalPainting",
          "func": "originalPainting",
          "description": "解锁原画",
          "icon": "jiesuoyuanhua",
          "endTime": 1605362719000
        },
        {
          "id": 4,
          "effectObject": "video",
          "action": "play",
          "function": "noLimit",
          "func": "noLimit",
          "description": "看剧无限制",
          "icon": "kanjuwuxianzhi",
          "endTime": 1605362719000
        },
        {
          "id": 23,
          "effectObject": "video",
          "action": "play",
          "function": "noAd",
          "func": "noAd",
          "description": "看剧无广告",
          "icon": "kanjuwuguanggao",
          "endTime": 1605362719000
        },
        {
          "id": 43,
          "effectObject": "danmu",
          "action": "send",
          "function": "superBarrageBlue",
          "func": "superBarrageBlue",
          "description": "超级弹幕",
          "icon": "chaojidanmu",
          "endTime": 1605362719000
        },
        {
          "id": 46,
          "effectObject": "video",
          "action": "play",
          "function": "vipVideo",
          "func": "vipVideo",
          "description": "勋章专享剧集",
          "icon": "zhuanxiangjuji",
          "endTime": 1605362719000
        },
        {
          "id": 45,
          "effectObject": "mall",
          "action": "sale",
          "function": "mallDiscount",
          "func": "mallDiscount",
          "description": "龙醇商城九折",
          "icon": "longchunshangcheng",
          "endTime": 1605362719000
        },
        {
          "id": 37,
          "effectObject": "growth",
          "action": "play",
          "function": "0.4",
          "func": "0.4",
          "description": "看剧经验+40%",
          "icon": "jingyanzhijiacheng",
          "endTime": 1605362719000
        },
        {
          "id": 29,
          "effectObject": "growth",
          "action": "play",
          "function": "0.15",
          "func": "0.15",
          "description": "看剧经验+15%",
          "icon": "jingyanzhijiacheng",
          "endTime": 1605362719304
        }
      ];

}else if(url.indexOf('/rrtv-video/v4plus/season/detail') != -1){
	var obj = JSON.parse(body);

	obj.data['season']['feeMode'] = 'restriction';
} else if (url.indexOf('/user/profile')){
    var obj = JSON.parse(body);
    obj.medalList=[
        {
          "name": "大魔王",
          "endTime": "2020-11-14 22:05:19",
          "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
          "id": 1
        },
        {
          "name": "小蜜蜂",
          "endTime": "2020-11-14 22:05:19",
          "imgUrl": "http://img.rr.tv/screenshot/20171108/o_1510127551022.png",
          "id": 2
        }
      ];
    obj.privilegeList= [
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "video",
          "action": "play",
          "function": "originalPainting",
          "func": "originalPainting",
          "description": "解锁原画",
          "icon": "jiesuoyuanhua",
          "endTime": 1605362719000
        },
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "mall",
          "action": "sale",
          "function": "mallDiscount",
          "func": "mallDiscount",
          "description": "龙醇商城九折",
          "icon": "longchunshangcheng",
          "endTime": 1605362719000
        },
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "danmu",
          "action": "send",
          "function": "superBarrageBlue",
          "func": "superBarrageBlue",
          "description": "超级弹幕",
          "icon": "chaojidanmu",
          "endTime": 1605362719000
        },
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "growth",
          "action": "play",
          "function": "0.15",
          "func": "0.15",
          "description": "看剧经验+15%",
          "icon": "jingyanzhijiacheng",
          "endTime": 1605362719304
        },
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "video",
          "action": "play",
          "function": "vipVideo",
          "func": "vipVideo",
          "description": "勋章专享剧集",
          "icon": "zhuanxiangjuji",
          "endTime": 1605362719000
        },
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "growth",
          "action": "play",
          "function": "0.4",
          "func": "0.4",
          "description": "看剧经验+40%",
          "icon": "jingyanzhijiacheng",
          "endTime": 1605362719000
        },
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "video",
          "action": "play",
          "function": "noLimit",
          "func": "noLimit",
          "description": "看剧无限制",
          "icon": "kanjuwuxianzhi",
          "endTime": 1605362719000
        },
        {
          "id": null,
          "createTimeStr": "",
          "createTime": null,
          "updateTime": null,
          "effectObject": "video",
          "action": "play",
          "function": "noAd",
          "func": "noAd",
          "description": "看剧无广告",
          "icon": "kanjuwuguanggao",
          "endTime": 1605362719000
        }
      ];

}


body = JSON.stringify(obj);

$done({
	body
});
