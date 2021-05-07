if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['city'];
var subtitle = obj['country']  + obj['isp'];
var ip = obj['query'];
var description = "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['isp'] + '\n' + "数据中心" + ":" + obj['org'];

$done({title, subtitle, ip, description});
