  define(function(){
  var config = {

    url:{},

    //默认上传地址
    uploadUrl : '',

    //默认上传类型，全部支持为 *
    uploadType : 'jpeg|jpg|png|gif',

    //默认上传文件大小，以MB为单位
    uploadSize : '8',

    //懒加载的显示类型，可以是show或者是fadeIn
    lazyLoadShowType : 'show',

    //懒加载临界点
    lazyLoadThreshold : 100,

    //ajax请求返回数据成功与否的标示字段
    dataFlag : 'Result.Header.resultID',

    //ajax请求返回数据中的描述信息，用于向用户展示
    dataInfo : 'Result.Header.resultMessage',

    //ajax请求返回数据成功与否的判断数值
    dataSuccessVal : '0',

    //ajax请求返回数据中用于定义业务异常展示的数值
    dataDefaultAlertVal : '5',

    //ajax请求返回数据中用于获得跳转地址的字段
    dataJumpFlag : 'jump',

    //模板引擎解析时使用的开始标示符
    tplOpenTag : "<%",

    //模板引擎解析时使用的结束标示符
    tplCloseTag : "%>",

    //默认写cookie域名
    cookieDomain : '.tootoo.cn',

    //cookie默认过期时间 单位/天
    cookieExpires : 30,

    validator : {
      "required"        : "不能为空",
      "email"           : "请填写正确的电子邮箱",
      "mobile"          : "请填写正确的手机号码",
      "telphone"        : "请填写正确的固定电话",
      "range"           : "请输入区间在@的数字或字母",
      "min"             : "请输入不小于@的数字或字母",
      "max"             : "请输入不大于@的数字或字母",
      "rangeEqual"      : "请输入@位的数字或字母",
      "rangelength"     : "请输入@位的数字或字母",
      "minLength"       : "请输入不小于@位的数字或字母",
      "maxLength"       : "请输入不大于@位的数字或字母",
      "byteRangeEqual"  : "请输入@位的数字或字母",
      "byteRangeLength" : "请输入@位的数字或字母",
      "byteMinLength"   : "请输入不小于@位的数字或字母",
      "byteMaxLength"   : "请输入不大于@位的数字或字母",
      "equalTo"         : "请保持所填写的内容一致",
      "digits"          : "请填写数字",
      "post"            : "请填写正确的邮编号码",
      "cardId"          : "请填写正确的身份证号码",
      "noSymbol"        : "不能有符号",
      "date"            : "日期填写不正确",
      "money"           : "请填写正确的金额",
      "ajax"            : "填写不正确",
      "regExp"          : "填写不正确",
      "url"             : "请使用正确格式，如http://www.website.com"
    },

    //弹出框loading结构
    loading: '<table class="ui-dialog">\
      <tbody>\
          <td class="ui-dialog-body">\
            <div class="ui-dialog-content"><%content||"&nbsp;&nbsp;&nbsp;请等待..."%></div>\
          </td>\
        </tr>\
      </tbody>\
    </table>',

   alert:'<div class="tip_order ">\
            <div class="tip_detail">\
              <div class="tipbg">\
                <a href="javascript:;" class="udel Js-dialog-close"><img src="http://misc.ttmimg.com/images/cn/cart/cart_cols.png"></a>\
                <div class="tip_text">\
                    <s><img src="http://misc.ttmimg.com/images/cn/tip-box/tip_ico.png"></s>\
                    <div class="tip_content">\
                        <h3></h3>\
                        <p><%content%></p>\
                        <div class="tip_btn_box"><a href="javascript:;" class="Js-dialog-close">确定</a>\
                            <a href="javascript:;" class="tip_quit Js-dialog-close">关闭</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>',

    //弹出框confirm结构
   confirm:'<div class="tip_order ">\
            <div class="tip_detail">\
              <div class="tipbg">\
                <a href="javascript:;" class="udel Js-dialog-close"><img src="http://misc.ttmimg.com/images/cn/cart/cart_cols.png"></a>\
                <div class="tip_text">\
                    <s><img src="http://misc.ttmimg.com/images/cn/tip-box/tip_ico.png"></s>\
                    <div class="tip_content">\
                        <h3></h3>\
                        <p><%content%></p>\
                        <div class="tip_btn_box"><a id="Js-dialog-confirm" href="javascript:;">确定</a>\
                            <a href="javascript:;" class="tip_quit Js-dialog-close">关闭</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>',

    //弹出框通用样式
     pop:'<div class="ui-dialog">\
       <%content%>\
     </div>'
   }

   config.getStatus = function(data){
       try {
           return new Function('data', 'return data.' + config.dataFlag)(data);
       }catch(e){
           return null;
       }
   }

    config.getInfo = function(data){
        try {
            return new Function('data','return data.'+config.dataInfo)(data);
        }catch(e){
            return null;
        }
   }

  if(window.location.href.indexOf('test3') >= 0){
      config.url={
        web    : "http://test3.tootoo.cn/",
        web_en : "http://en.test3.tootoo.cn/",
        pay    : "http://pay.test3.tootoo.cn/",
        img    : "http://img.test3.tootoo.cn/",
        js     : "http://js.test3.tootoo.cn/",
        res    : "http://res.test3.tootoo.cn/",
        user   : "http://user.test3.tootoo.cn/",
        shop   : "http://shop.test3.tootoo.cn/",
        api    : 'http://sapi.test.tootoo.cn/',
        api_m  : 'http://sapi.test.tootoo.cn/authorize/MainServlet?req_fmt_type=jsonp&method=',
        api_s  : 'https://portal.tootoo.cn/sapi/beta/',
        user_s : 'https://portal.tootoo.cn/user/v3beta/',
        pay_s  : 'https://portal.tootoo.cn/pay/v3beta/'
      };
  } else if(window.location.href.indexOf('v3beta') >= 0){
      config.url={
        web     : "http://v3beta.tootoo.cn/",
        web_en  : "http://en.v3beta.tootoo.cn/",
        pay     : "http://pay.v3beta.tootoo.cn/",
        img     : "http://img.v3beta.tootoo.cn/",
        js      : "http://js.v3beta.tootoo.cn/",
        res     : "http://res.v3beta.tootoo.cn/",
        user    : "http://user.v3beta.tootoo.cn/",
        shop    : "http://shop.v3beta.tootoo.cn/",
        api     : 'http://sapi.beta.tootoo.cn/',
        api_m   : 'http://sapi.beta.tootoo.cn/authorize/MainServlet?req_fmt_type=jsonp&method=',
        api_s   : 'https://portal.tootoo.cn/sapi/beta/',
        user_s  : 'https://portal.tootoo.cn/user/v3beta/',
        pay_s   : 'https://portal.tootoo.cn/pay/v3beta/'
      };
  } else {
      config.url={
        web     : "http://www.tootoo.cn/",
        web_en  : "http://en.tootoo.cn/",
        pay     : "http://pay.tootoo.cn/",
        img     : "http://misc.ttmimg.com/",
        js      : "http://js.ttmimg.com/",
        res     : "http://res.ttmimg.com/",
        user    : "http://user.tootoo.cn/",
        shop    : "http://shop.tootoo.cn/",
        api     : 'http://sapi.tootoo.cn/',
        api_m   : 'http://sapi.tootoo.cn/authorize/MainServlet?req_fmt_type=jsonp&method=',
        api_s   : 'https://portal.tootoo.cn/sapi/',
        user_s  : 'http://user.tootoo.cn/',
        pay_s   : 'http://pay.tootoo.cn/'
      };
  }
  return config;
 });