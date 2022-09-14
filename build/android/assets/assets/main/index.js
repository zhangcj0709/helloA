System.register("chunks:///_virtual/main",["./Main.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["cc"],(function(t){"use strict";var a,e,c,s;return{setters:[function(t){a=t.cclegacy,e=t.Component,c=t.native,s=t._decorator}],execute:function(){var n;a._RF.push({},"bd4faZC0/JFlpYqAZIDtOhF","Main",void 0);const{ccclass:i,property:r}=s;t("Main",i("Main")(n=class extends e{start(){}update(t){}callNative(){c.reflection.callStaticMethod("com/cocos/game/Test","alert","(Ljava/lang/String;)V","this is a message from JavaScript")}})||n);a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});