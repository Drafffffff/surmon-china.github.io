(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{225:function(e,n,t){},235:function(e,n,t){"use strict";var o=t(225);t.n(o).a},236:function(e,n,t){},237:function(e,n,t){"use strict";var o=t(239),r=t(16),l=t(230),c=t(238),m=t(243),d=t(244),h=Object(r.b)({name:"homepage-examples",props:{examples:{type:Array,required:!0},disabledAutoAd:{type:Boolean,default:!1},exampleClass:{type:String,required:!1,default:""},contentClass:{type:String,required:!1}},components:{Mammon:l.c,Loading:d.a,HomepageBasicCard:m.a,HomepageExampleCard:c.a},setup:function(e,n){var t=n.root,c=Object(r.g)(e.examples.map((function(){return null}))),m=t.$store.state,d=Object(r.a)((function(){return m.inited}));return Object(r.e)((function(){var n=e.examples.length,t=Object(r.a)((function(){return m.isMobileDevice})),d=Object(r.a)((function(){return m.isChinaGuest})),h=Object(r.a)((function(){return!d.value||t.value}));if(n<=6){var f=Math.ceil(n/2);c[f-1]=h.value?l.d[0]:Math.ceil(10*Math.random())>6?l.b[0]:l.d[0]}else{var v=h.value?l.d:[].concat(Object(o.a)(l.b),Object(o.a)(l.d)),x=n/(v.length+1);v.forEach((function(e,n){c[Math.ceil(x*(n+1))-1]=e}))}console.log("AutoMammonProviders",c.slice())})),{inited:d,adProviders:c}}}),f=(t(235),t(12)),component=Object(f.a)(h,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"homepage-examples"},[t("transition",{attrs:{name:"module",mode:"out-in"}},[e.inited?t("client-only",[t("div",e._l(e.examples,(function(n,o){return t("div",{key:n.name,staticClass:"example-item"},[t("homepage-example-card",{attrs:{path:n.path,title:n.title||n.name,"content-class":e.contentClass}},[t(n.name,{tag:"component",staticClass:"example-component",class:e.exampleClass})],1),e._v(" "),!e.disabledAutoAd&&e.adProviders[o]?t("homepage-basic-card",{staticClass:"example-mammon"},[t("client-only",[t("mammon",{attrs:{provider:e.adProviders[o]}})],1)],1):e._e()],1)})),0)]):t("Loading",{staticClass:"loading"})],1)],1)}),[],!1,null,"2f331bae",null);component.options.__file="examples.vue";n.a=component.exports},272:function(e,n,t){"use strict";var o=t(236);t.n(o).a},281:function(e,n,t){},282:function(e,n,t){},283:function(e,n,t){},300:function(e,n,t){"use strict";var o=t(16),r=Object(o.b)({name:"homepage-link",props:{text:String,href:String,icon:String},setup:function(e,n){n.root;return{iconPath:Object(o.a)((function(){return e.icon&&"iconfont icon-".concat(e.icon)}))}}}),l=(t(272),t(12)),component=Object(l.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"homepage-link"},[n("a",{staticClass:"link",attrs:{target:"_blank",href:this.href}},[n("i",{class:this.iconPath}),this._v(" "),n("span",[this._v(this._s(this.text))])])])}),[],!1,null,"340878e1",null);component.options.__file="link.vue";n.a=component.exports},333:function(e,n,t){"use strict";var o=t(281);t.n(o).a},338:function(e,n,t){"use strict";var o=t(282);t.n(o).a},363:function(e,n,t){"use strict";var o=t(283);t.n(o).a},561:function(e,n,t){"use strict";t.r(n);var o=t(224),r=t(223),l=t.n(r),c=t(84);t(129),t(130),t(324),t(229),t(302),t(226),t(274),t(275),t(303),t(254),t(255),t(276),t(256),t(277),t(278),t(304),t(305),t(306),t(307),t(279),t(308),t(309),t(310),t(280);function m(){var data=Object(o.a)(['\n        <template>\n          <h1>Hello World!</h1>\n          <codemirror v-model="code" :options="cmOption" />\n        </template>\n\n        <script>\n          // import \'some-codemirror-resource\'\n          export default {\n            data() {\n              return {\n                code: \'const A = 10\',\n                cmOption: {\n                  tabSize: 4,\n                  styleActiveLine: true,\n                  lineNumbers: true,\n                  line: true,\n                  foldGutter: true,\n                  styleSelectedText: true,\n                  mode: \'text/javascript\',\n                  keyMap: "sublime",\n                  matchBrackets: true,\n                  showCursorWhenSelecting: true,\n                  theme: "monokai",\n                  extraKeys: { "Ctrl": "autocomplete" },\n                  hintOptions:{\n                    completeSingle: false\n                  }\n                }\n              }\n            }\n          }\n        ',"\n\n        <style lang=\"scss\">\n          @import './sass/mixins';\n          @import './sass/variables';\n          main {\n            position: relative;\n          }\n        </style>\n      "]);return m=function(){return data},data}var d={name:"codemirror-example-vue",title:"Mode: text/x-vue & Theme: base16-dark",components:{codemirror:c.codemirror},data:function(){return{code:l()(m(),"<\/script>"),cmOption:{tabSize:4,foldGutter:!0,styleActiveLine:!0,lineNumbers:!0,line:!0,keyMap:"sublime",mode:"text/x-vue",theme:"base16-dark",extraKeys:{F11:function(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc:function(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}}}}},methods:{onCmCursorActivity:function(e){console.debug("onCmCursorActivity",e)},onCmReady:function(e){console.debug("onCmReady",e)},onCmFocus:function(e){console.debug("onCmFocus",e)},onCmBlur:function(e){console.debug("onCmBlur",e)}}},h=(t(333),t(12)),component=Object(h.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"example"},[t("div",{staticClass:"codemirror"},[t("codemirror",{attrs:{options:e.cmOption},on:{cursorActivity:e.onCmCursorActivity,ready:e.onCmReady,focus:e.onCmFocus,blur:e.onCmBlur},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})],1),e._v(" "),t("pre",{staticClass:"pre"},[e._v(e._s(e.code))])])}),[],!1,null,"64ba4206",null);component.options.__file="01-text-x-vue.vue";var f=component.exports;t(246),t(334),t(335),t(336),t(337);function v(){var data=Object(o.a)(["\n        import someResource from 'codemirror/some-resource'\n        export default {\n          data () {\n            // 这是一个包含、代码提示、折叠、选中、sublime模式...的编辑器\n            // 按下Ctrl键可以体验代码提示\n            // 可以尝试sublime下的快捷键操作\n            return {\n              exampleCode: 'const a = 10',\n              cmOption: {\n                tabSize: 4,\n                styleActiveLine: true,\n                lineNumbers: true,\n                line: true,\n                mode: 'text/javascript',\n                lineWrapping: true,\n                theme: 'default'\n              }\n            }\n          },\n          components: examples\n        }\n      "]);return v=function(){return data},data}var x={name:"codemirror-example-javascript",title:"Mode: text/javascript & Theme: monokai",components:{codemirror:c.codemirror},data:function(){return{code:l()(v()),cmOption:{tabSize:4,styleActiveLine:!1,lineNumbers:!0,styleSelectedText:!1,line:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],highlightSelectionMatches:{showToken:/\w/,annotateScrollbar:!0},mode:"text/javascript",hintOptions:{completeSingle:!1},keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"}}}},mounted:function(){var e=this;setTimeout((function(){e.styleSelectedText=!0,e.cmOption.styleActiveLine=!0}),1800)}},y=(t(338),Object(h.a)(x,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null));y.options.__file="02-text-javascript.vue";var w=y.exports;t(242),t(339);function _(){var data=Object(o.a)(['\n        /* Some example CSS */\n        @import url("something.css");\n\n        body {\n          margin: 0;\n          padding: 3em 6em;\n          font-family: tahoma, arial, sans-serif;\n          color: #000;\n        }\n\n        #navigation a {\n          font-weight: bold;\n          text-decoration: none !important;\n        }\n\n        h1 {\n          font-size: 2.5em;\n        }\n\n        h2 {\n          font-size: 1.7em;\n        }\n\n        h1:before, h2:before {\n          content: "::";\n        }\n\n        code {\n          font-family: courier, monospace;\n          font-size: 80%;\n          color: #418A8A;\n        }\n      ']);return _=function(){return data},data}var O={name:"codemirror-example-css",title:"Mode: text/css & Theme: paraiso-light",components:{codemirror:c.codemirror},data:function(){return{cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/css",theme:"paraiso-light"},code:l()(_())}}},k=Object(h.a)(O,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);k.options.__file="03-text-css.vue";var C=k.exports;t(247),t(340),t(341);function S(){var data=Object(o.a)(['\n        <html style="color: green">\n          \x3c!-- this is a comment --\x3e\n          <head>\n            <title>HTML Example</title>\n          </head>\n          <body>\n            \x3c!-- 可以尝试输入<p>，会自动补全 --\x3e\n            \x3c!-- 下翻，尝试删除外文，你会发现编辑器支持语言反转 --\x3e\n            The indentation tries to be <em>somewhat &amp;quot;do what\n            I mean&amp;quot;</em>... but might not match your style.\n            \x3c!-- Piece of the CodeMirror manual, \'translated\' into Arabic by Google Translate --\x3e\n            <dl>\n              <dt id=option_value><code>value (string or Doc)</code></dt>\n              <dd>قيمة البداية المحرر. يمكن أن تكون سلسلة، أو. كائن مستند.</dd>\n              <dt id=option_mode><code>mode (string or object)</code></dt>\n              <dd>وضع الاستخدام. عندما لا تعطى، وهذا الافتراضي إلى الطريقة الاولى\n              التي تم تحميلها. قد يكون من سلسلة، والتي إما أسماء أو ببساطة هو وضع\n              MIME نوع المرتبطة اسطة. بدلا من ذلك، قد يكون من كائن يحتوي على\n              خيارات التكوين لواسطة، مع <code>name</code> الخاصية التي وضع أسماء\n              (على سبيل المثال <code>{name: "javascript", json: true}</code>).\n              صفحات التجريبي لكل وضع تحتوي على معلومات حول ما معلمات تكوين وضع\n              يدعمها. يمكنك أن تطلب CodeMirror التي تم تعريفها طرق وأنواع MIME\n              الكشف على <code>CodeMirror.modes</code>\n              و <code>CodeMirror.mimeModes</code> الكائنات. وضع خرائط الأسماء\n              الأولى لمنشئات الخاصة بهم، وخرائط لأنواع MIME 2 المواصفات\n              واسطة.</dd>\n              <dt id=option_theme><code>theme (string)</code></dt>\n              <dd>موضوع لنمط المحرر مع. يجب عليك التأكد من الملف CSS تحديد\n              المقابلة <code>.cm-s-[name]</code> يتم تحميل أنماط (انظر\n              <a href="../theme/"><code>theme</code></a> الدليل في التوزيع).\n              الافتراضي هو <code>"default"</code> ، والتي تم تضمينها في\n              الألوان <code>codemirror.css</code>. فمن الممكن استخدام فئات متعددة\n              في تطبيق السمات مرة واحدة على سبيل المثال <code>"foo bar"</code>\n              سيتم تعيين كل من <code>cm-s-foo</code> و <code>cm-s-bar</code>\n              الطبقات إلى المحرر.</dd>\n            </dl>\n          </body>\n        </html>\n      ']);return S=function(){return data},data}var A={name:"codemirror-example-html",title:"Mode: text/html & Theme: ambiance",components:{codemirror:c.codemirror},data:function(){return{code:l()(S()),cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,autoCloseTags:!0,line:!0,mode:"text/html",theme:"ambiance"}}}},j=Object(h.a)(A,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);j.options.__file="04-text-html.vue";var T=j.exports;t(342),t(343);function M(){var data=Object(o.a)(["\n        <?php\n          $a = array('a' => 1, 'b' => 2, 3 => 'c');\n\n          echo \"$a[a] ${a[3] /* } comment */} {$a[b]} $a[a]\";\n\n          function hello($who) {\n            return \"Hello $who!\";\n          }\n        ?>\n        <p>The program says <?= hello(\"World\") ?>.</p>\n      "],["\n        <?php\n          $a = array('a' => 1, 'b' => 2, 3 => 'c');\n\n          echo \"$a[a] \\${a[3] /* } comment */} {$a[b]} $a[a]\";\n\n          function hello($who) {\n            return \"Hello $who!\";\n          }\n        ?>\n        <p>The program says <?= hello(\"World\") ?>.</p>\n      "]);return M=function(){return data},data}var L={name:"codemirror-example-php",title:"Mode: application/x-httpd-php & Theme: cobalt",components:{codemirror:c.codemirror},data:function(){return{code:l()(M()),cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"application/x-httpd-php",lineWrapping:!0,theme:"cobalt"}}}},E=Object(h.a)(L,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);E.options.__file="05-application-x-httpd-php.vue";var P=E.exports;t(344),t(345),t(346),t(347);function $(){var data=Object(o.a)(["\n        # emacs键位的编辑器\n        # Literals\n        1234\n        0.0e101\n        .123\n        0b01010011100\n        0o01234567\n        0x0987654321abcdef\n        7\n        2147483647\n        3L\n        79228162514264337593543950336L\n        0x100000000L\n        79228162514264337593543950336\n        0xdeadbeef\n        3.14j\n        10.j\n        10j\n        .001j\n        1e100j\n        3.14e-10j\n\n        # String Literals\n        'For''\n        \"God\"\"\n        \"\"\"so loved\n        the world\"\"\"\n        '''that he gave\n        his only begotten' '''\n        'that whosoever believeth in him'\n        ''\n\n        # Identifiers\n        __a__\n        a.b\n        a.b.c\n\n        #Unicode identifiers on Python3\n        # a = xddot\n        a⃗ = ẍ\n        # a = vdot\n        a⃗ = v̇\n\n        #F\vec = m cdot a\vec\n        F⃗ = m•a⃗\n\n        # Operators\n        + - * / % & | ^ ~ < >\n        == != <= >= <> << >> // **\n        and or not in is\n\n        #infix matrix multiplication operator (PEP 465)\n        A @ B\n\n        # Keywords\n        as assert break class continue def del elif else except\n        finally for from global if import lambda pass raise\n        return try while with yield\n\n        # Python 2 Keywords (otherwise Identifiers)\n        exec print\n\n        # Python 3 Keywords (otherwise Identifiers)\n        nonlocal\n\n        # Types\n        bool classmethod complex dict enumerate float frozenset int list object\n        property reversed set slice staticmethod str super tuple type\n\n        # Python 2 Types (otherwise Identifiers)\n        basestring buffer file long unicode xrange\n\n        # Python 3 Types (otherwise Identifiers)\n        bytearray bytes filter map memoryview open range zip\n\n        # Some Example code\n        import os\n        from package import ParentClass\n\n        @nonsenseDecorator\n        def doesNothing():\n            pass\n\n        class ExampleClass(ParentClass):\n            @staticmethod\n            def example(inputStr):\n                a = list(inputStr)\n                a.reverse()\n                return ''.join(a)\n\n            def __init__(self, mixin = 'Hello'):\n                self.mixin = mixin\n      "]);return $=function(){return data},data}var I={name:"codemirror-example-python",title:"Mode: text/x-python & Theme: base16-light",components:{codemirror:c.codemirror},data:function(){return{cmOption:{autoCloseBrackets:!0,tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-python",theme:"base16-light",keyMap:"emacs"},code:l()($())}}},N=Object(h.a)(I,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);N.options.__file="06-python.vue";var D=N.exports;t(348),t(349);function z(){var data=Object(o.a)(["\n        ⍝ Conway's game of life\n        ⍝ This example was inspired by the impressive demo at\n        ⍝ http://www.youtube.com/watch?v=a9xAKttWgP4\n\n        ⍝ Create a matrix:\n        ⍝     0 1 1\n        ⍝     1 1 0\n        ⍝     0 1 0\n        creature ← (3 3 ⍴ ⍳ 9) ∈ 1 2 3 4 7   ⍝ Original creature from demo\n        creature ← (3 3 ⍴ ⍳ 9) ∈ 1 3 6 7 8   ⍝ Glider\n\n        ⍝ Place the creature on a larger board, near the centre\n        board ← ¯1 ⊖ ¯2 ⌽ 5 7 ↑ creature\n\n        ⍝ A function to move from one generation to the next\n        life ← {∨/ 1 ⍵ ∧ 3 4 = ⊂+/ +⌿ 1 0 ¯1 ∘.⊖ 1 0 ¯1 ⌽¨ ⊂⍵}\n\n        ⍝ Compute n-th generation and format it as a\n        ⍝ character matrix\n        gen ← {' #'[(life ⍣ ⍵) board]}\n\n        ⍝ Show first three generations\n        (gen 1) (gen 2) (gen 3)\n      "]);return z=function(){return data},data}var F={name:"codemirror-example-apl",title:"Mode: text/apl & Theme: paraiso-dark",components:{codemirror:c.codemirror},data:function(){return{code:l()(z()),cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/apl",lineWrapping:!1,theme:"paraiso-dark"}}}},H=Object(h.a)(F,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);H.options.__file="07-text-apl.vue";var B=H.exports;t(350),t(351);function W(){var data=Object(o.a)(["\n        //\n        //  TipCalculatorModel.swift\n        //  TipCalculator\n        //\n        //  Created by Main Account on 12/18/14.\n        //  Copyright (c) 2014 Razeware LLC. All rights reserved.\n        //\n\n        import Foundation\n\n        class TipCalculatorModel {\n\n          var total: Double\n          var taxPct: Double\n          var subtotal: Double {\n            get {\n              return total / (taxPct + 1)\n            }\n          }\n\n          init(total: Double, taxPct: Double) {\n            self.total = total\n            self.taxPct = taxPct\n          }\n\n          func calcTipWithTipPct(tipPct: Double) -> Double {\n            return subtotal * tipPct\n          }\n\n          func returnPossibleTips() -> [Int: Double] {\n\n            let possibleTipsInferred = [0.15, 0.18, 0.20]\n            let possibleTipsExplicit:[Double] = [0.15, 0.18, 0.20]\n\n            var retval = [Int: Double]()\n            for possibleTip in possibleTipsInferred {\n              let intPct = Int(possibleTip*100)\n              retval[intPct] = calcTipWithTipPct(possibleTip)\n            }\n            return retval\n\n          }\n        }\n      "]);return W=function(){return data},data}var R={name:"codemirror-example-swift",title:"Mode: text/x-swift & Theme: rubyblue",components:{codemirror:c.codemirror},data:function(){return{code:l()(W()),cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-swift",lineWrapping:!0,theme:"rubyblue"}}}},U=Object(h.a)(R,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);U.options.__file="08-text-x-swift.vue";var G=U.exports;t(352),t(353);function K(){var data=Object(o.a)(["\n        // Prime Sieve in Go.\n        // Taken from the Go specification.\n        // Copyright © The Go Authors.\n\n        package main\n\n        import \"fmt\"\n\n        // Send the sequence 2, 3, 4, ... to channel 'ch'.\n        func generate(ch chan<- int) {\n          for i := 2; ; i++ {\n            ch <- i  // Send 'i' to channel 'ch'\n          }\n        }\n\n        // Copy the values from channel 'src' to channel 'dst',\n        // removing those divisible by 'prime'.\n        func filter(src <-chan int, dst chan<- int, prime int) {\n          for i := range src {    // Loop over values received from 'src'.\n            if i%prime != 0 {\n              dst <- i  // Send 'i' to channel 'dst'.\n            }\n          }\n        }\n\n        // The prime sieve: Daisy-chain filter processes together.\n        func sieve() {\n          ch := make(chan int)  // Create a new channel.\n          go generate(ch)       // Start generate() as a subprocess.\n          for {\n            prime := <-ch\n            fmt.Print(prime, \"\n        \")\n            ch1 := make(chan int)\n            go filter(ch, ch1, prime)\n            ch = ch1\n          }\n        }\n\n        func main() {\n          sieve()\n        }\n      "]);return K=function(){return data},data}var Q={name:"codemirror-example-go",title:"Mode: text/x-go & Theme: mbo",components:{codemirror:c.codemirror},data:function(){return{cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-go",theme:"mbo"},code:l()(K())}}},V=Object(h.a)(Q,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);V.options.__file="09-text-x-go.vue";var J=V.exports;t(354),t(355);function Y(){var data=Object(o.a)(['\n        --[[\n        example useless code to show lua syntax highlighting\n        this is multiline comment\n        ]]\n\n        function blahblahblah(x)\n\n          local table = {\n            "asd" = 123,\n            "x" = 0.34,\n          }\n          if x ~= 3 then\n            print( x )\n          elseif x == "string"\n            my_custom_function( 0x34 )\n          else\n            unknown_function( "some string" )\n          end\n\n          --single line comment\n\n        end\n\n        function blablabla3()\n\n          for k,v in ipairs( table ) do\n            --abcde..\n            y=[=[\n          x=[[\n              x is a multi line string\n          ]]\n          but its definition is iside a highest level string!\n          ]=]\n            print(" "" ")\n\n            s = math.sin( x )\n          end\n\n        end\n      ']);return Y=function(){return data},data}var X={name:"codemirror-example-lua",title:"Mode: text/x-lua & Theme: hopscotch",components:{codemirror:c.codemirror},data:function(){return{cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-lua",theme:"hopscotch"},code:l()(Y())}}},Z=Object(h.a)(X,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);Z.options.__file="10-text-x-lua.vue";var ee=Z.exports;t(356),t(311);function ne(){var data=Object(o.a)(["\n        -- SQL Mode for CodeMirror\n        SELECT SQL_NO_CACHE DISTINCT\n            @var1 AS `val1`, @'val2', @global.'sql_mode',\n            1.1 AS `float_val`, .14 AS `another_float`, 0.09e3 AS `int_with_esp`,\n            0xFA5 AS `hex`, x'fa5' AS `hex2`, 0b101 AS `bin`, b'101' AS `bin2`,\n            DATE '1994-01-01' AS `sql_date`, { T \"1994-01-01\" } AS `odbc_date`,\n            'my string', _utf8'your string', N'her string',\n                TRUE, FALSE, UNKNOWN\n          FROM DUAL\n          -- space needed after '--'\n          # 1 line comment\n          /* multiline\n          comment! */\n          LIMIT 1 OFFSET 0;\n      "],["\n        -- SQL Mode for CodeMirror\n        SELECT SQL_NO_CACHE DISTINCT\n            @var1 AS \\`val1\\`, @'val2', @global.'sql_mode',\n            1.1 AS \\`float_val\\`, .14 AS \\`another_float\\`, 0.09e3 AS \\`int_with_esp\\`,\n            0xFA5 AS \\`hex\\`, x'fa5' AS \\`hex2\\`, 0b101 AS \\`bin\\`, b'101' AS \\`bin2\\`,\n            DATE '1994-01-01' AS \\`sql_date\\`, { T \"1994-01-01\" } AS \\`odbc_date\\`,\n            'my string', _utf8'your string', N'her string',\n                TRUE, FALSE, UNKNOWN\n          FROM DUAL\n          -- space needed after '--'\n          # 1 line comment\n          /* multiline\n          comment! */\n          LIMIT 1 OFFSET 0;\n      "]);return ne=function(){return data},data}var te={name:"codemirror-example-mysql",title:"Mode: text/x-mysql & Theme: solarized light",components:{codemirror:c.codemirror},data:function(){return{cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"text/x-mysql",theme:"solarized light"},code:l()(ne())}}},oe=Object(h.a)(te,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);oe.options.__file="11-text-x-mysql.vue";var ie=oe.exports,re=(t(126),t(122));t.n(re).a.defineMode("mymode",(function(){return{token:function(e,n){return e.match("const")?"keyword":e.match("111")?"number":(e.next(),null)}}}));var ae={name:"codemirror-example-custom",title:"Mode: custom & Theme: solarized light",components:{codemirror:c.codemirror},data:function(){return{code:"const bbb = 222;\nconst ccc = 111;\neee fff ggg",cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,line:!0,mode:"mymode",theme:"solarized light"}}}},se=Object(h.a)(ae,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);se.options.__file="12-text-custom-mode.vue";var le=se.exports;t(357),t(359);function ce(){var data=Object(o.a)(["\n        An h1 header\n        ============\n\n        Paragraphs are separated by a blank line.\n\n        2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\n        look like:\n\n          * this one\n          * that one\n          * the other one\n\n        Note that --- not considering the asterisk --- the actual text\n        content starts at 4-columns in.\n\n        > Block quotes are\n        > written like so.\n        >\n        > They can span multiple paragraphs,\n        > if you like.\n\n        Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., \"it's all\n        in chapters 12--14\"). Three dots ... will be converted to an ellipsis.\n        Unicode is supported. ☺\n\n\n\n        An h2 header\n        ------------\n\n        Here's a numbered list:\n\n        1. first item\n        2. second item\n        3. third item\n\n        Note again how the actual text starts at 4 columns in (4 characters\n        from the left side). Here's a code sample:\n\n            # Let me re-iterate ...\n            for i in 1 .. 10 { do-something(i) }\n\n        As you probably guessed, indented 4 spaces. By the way, instead of\n        indenting the block, you can use delimited blocks, if you like:\n\n        ~~~\n        define foobar() {\n            print \"Welcome to flavor country!\";\n        }\n        ~~~\n\n        (which makes copying & pasting easier). You can optionally mark the\n        delimited block for Pandoc to syntax highlight it:\n\n        ~~~python\n        import time\n        # Quick, count to ten!\n        for i in range(10):\n            # (but not *too* quick)\n            time.sleep(0.5)\n            print i\n        ~~~\n\n\n\n        ### An h3 header ###\n\n        Now a nested list:\n\n        1. First, get these ingredients:\n\n              * carrots\n              * celery\n              * lentils\n\n        2. Boil some water.\n\n        3. Dump everything in the pot and follow\n            this algorithm:\n\n                find wooden spoon\n                uncover pot\n                stir\n                cover pot\n                balance wooden spoon precariously on pot handle\n                wait 10 minutes\n                goto first step (or shut off burner when done)\n\n            Do not bump wooden spoon or it will fall.\n\n        Notice again how text always lines up on 4-space indents (including\n        that last line which continues item 3 above).\n\n        Here's a link to [a website](http://foo.bar), to a [local\n        doc](local-doc.html), and to a [section heading in the current\n        doc](#an-h2-header). Here's a footnote [^1].\n\n        [^1]: Footnote text goes here.\n\n        Tables can look like this:\n\n        size  material      color\n        ----  ------------  ------------\n        9     leather       brown\n        10    hemp canvas   natural\n        11    glass         transparent\n\n        Table: Shoes, their sizes, and what they're made of\n\n        (The above is the caption for the table.) Pandoc also supports\n        multi-line tables:\n\n        --------  -----------------------\n        keyword   text\n        --------  -----------------------\n        red       Sunsets, apples, and\n                  other red or reddish\n                  things.\n\n        green     Leaves, grass, frogs\n                  and other things it's\n                  not easy being.\n        --------  -----------------------\n\n        A horizontal rule follows.\n\n        ***\n\n        Here's a definition list:\n\n        apples\n          : Good for making applesauce.\n        oranges\n          : Citrus!\n        tomatoes\n          : There's no \"e\" in tomatoe.\n\n        Again, text is indented 4 spaces. (Put a blank line between each\n        term/definition pair to spread things out more.)\n\n        Here's a \"line block\":\n\n        | Line one\n        |   Line too\n        | Line tree\n\n        and images can be specified like so:\n\n        ![example image](example-image.jpg \"An exemplary image\")\n\n        Inline math equations go in like so: $omega = dphi / dt$. Display\n        math should get its own line and be put in in double-dollarsigns:\n\n        $$I = int \rho R^{2} dV$$\n\n        And note that you can backslash-escape any punctuation characters\n        which you wish to be displayed literally, ex.: `foo`, *bar*, etc.\n      "],["\n        An h1 header\n        ============\n\n        Paragraphs are separated by a blank line.\n\n        2nd paragraph. *Italic*, **bold**, and \\`monospace\\`. Itemized lists\n        look like:\n\n          * this one\n          * that one\n          * the other one\n\n        Note that --- not considering the asterisk --- the actual text\n        content starts at 4-columns in.\n\n        > Block quotes are\n        > written like so.\n        >\n        > They can span multiple paragraphs,\n        > if you like.\n\n        Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., \"it's all\n        in chapters 12--14\"). Three dots ... will be converted to an ellipsis.\n        Unicode is supported. ☺\n\n\n\n        An h2 header\n        ------------\n\n        Here's a numbered list:\n\n        1. first item\n        2. second item\n        3. third item\n\n        Note again how the actual text starts at 4 columns in (4 characters\n        from the left side). Here's a code sample:\n\n            # Let me re-iterate ...\n            for i in 1 .. 10 { do-something(i) }\n\n        As you probably guessed, indented 4 spaces. By the way, instead of\n        indenting the block, you can use delimited blocks, if you like:\n\n        ~~~\n        define foobar() {\n            print \"Welcome to flavor country!\";\n        }\n        ~~~\n\n        (which makes copying & pasting easier). You can optionally mark the\n        delimited block for Pandoc to syntax highlight it:\n\n        ~~~python\n        import time\n        # Quick, count to ten!\n        for i in range(10):\n            # (but not *too* quick)\n            time.sleep(0.5)\n            print i\n        ~~~\n\n\n\n        ### An h3 header ###\n\n        Now a nested list:\n\n        1. First, get these ingredients:\n\n              * carrots\n              * celery\n              * lentils\n\n        2. Boil some water.\n\n        3. Dump everything in the pot and follow\n            this algorithm:\n\n                find wooden spoon\n                uncover pot\n                stir\n                cover pot\n                balance wooden spoon precariously on pot handle\n                wait 10 minutes\n                goto first step (or shut off burner when done)\n\n            Do not bump wooden spoon or it will fall.\n\n        Notice again how text always lines up on 4-space indents (including\n        that last line which continues item 3 above).\n\n        Here's a link to [a website](http://foo.bar), to a [local\n        doc](local-doc.html), and to a [section heading in the current\n        doc](#an-h2-header). Here's a footnote [^1].\n\n        [^1]: Footnote text goes here.\n\n        Tables can look like this:\n\n        size  material      color\n        ----  ------------  ------------\n        9     leather       brown\n        10    hemp canvas   natural\n        11    glass         transparent\n\n        Table: Shoes, their sizes, and what they're made of\n\n        (The above is the caption for the table.) Pandoc also supports\n        multi-line tables:\n\n        --------  -----------------------\n        keyword   text\n        --------  -----------------------\n        red       Sunsets, apples, and\n                  other red or reddish\n                  things.\n\n        green     Leaves, grass, frogs\n                  and other things it's\n                  not easy being.\n        --------  -----------------------\n\n        A horizontal rule follows.\n\n        ***\n\n        Here's a definition list:\n\n        apples\n          : Good for making applesauce.\n        oranges\n          : Citrus!\n        tomatoes\n          : There's no \"e\" in tomatoe.\n\n        Again, text is indented 4 spaces. (Put a blank line between each\n        term/definition pair to spread things out more.)\n\n        Here's a \"line block\":\n\n        | Line one\n        |   Line too\n        | Line tree\n\n        and images can be specified like so:\n\n        ![example image](example-image.jpg \"An exemplary image\")\n\n        Inline math equations go in like so: $\\omega = d\\phi / dt$. Display\n        math should get its own line and be put in in double-dollarsigns:\n\n        $$I = \\int \\rho R^{2} dV$$\n\n        And note that you can backslash-escape any punctuation characters\n        which you wish to be displayed literally, ex.: \\`foo\\`, \\*bar\\*, etc.\n      "]);return ce=function(){return data},data}var me={name:"codemirror-example-markdown",title:"Mode: text/x-markdown & Theme: lesser-dark",components:{codemirror:c.codemirror},mounted:function(){var e=this;setTimeout((function(){e.code+="haha~"}),2e3)},data:function(){return{cmOption:{tabSize:4,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!1,line:!0,mode:"text/x-markdown",theme:"lesser-dark"},code:l()(ce())}}},de=Object(h.a)(me,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("codemirror",{attrs:{options:e.cmOption},model:{value:e.code,callback:function(n){e.code=n},expression:"code"}})}),[],!1,null,null,null);de.options.__file="13-text-x-markdown.vue";var ue=de.exports,pe=(t(89),t(273),t(360),t(361),t(362)),he=t.n(pe);window.diff_match_patch=he.a,window.DIFF_DELETE=-1,window.DIFF_INSERT=1,window.DIFF_EQUAL=0;var fe={name:"codemirror-example-merge-view",title:"Mode: text/html & merge view",components:{codemirror:c.codemirror},data:function(){var html=document.documentElement.innerHTML.replace(/<style([\s\S]*?)<\/style>/gi,"").replace(/></gi,">\n<"),e=html.replace("body","body2").replace('content="320"','content="360"').replace(/<title>([\s\S]*?)<\/title>/gi,"<title>test title</title>");return{cmOption:{value:html,origLeft:null,orig:e,connect:"align",mode:"text/html",lineNumbers:!0,collapseIdentical:!1,highlightDifferences:!0}}},methods:{onCmCursorActivity:function(a,b,e){console.debug("onCmCursorActivity",a,b,e)},onCmReady:function(a,b,e){console.debug("onCmReady",a,b,e)},onCmFocus:function(a,b,e){console.debug("onCmFocus",a,b,e)},onCmBlur:function(a,b,e){console.debug("onCmBlur",a,b,e)},onCmInput:function(code){console.debug("onCmInput",code)},onCmScroll:function(){console.debug("onCmScroll")}}},be=Object(h.a)(fe,(function(){var e=this.$createElement;return(this._self._c||e)("codemirror",{attrs:{merge:!0,options:this.cmOption},on:{cursorActivity:this.onCmCursorActivity,ready:this.onCmReady,focus:this.onCmFocus,blur:this.onCmBlur,input:this.onCmInput,scroll:this.onCmScroll}})}),[],!1,null,null,null);be.options.__file="14-merge-view.vue";var ge=be.exports;n.default={example01:f,example02:w,example03:C,example04:T,example05:P,example06:D,example07:B,example08:G,example09:J,example10:ee,example11:ie,example12:le,example13:ue,example14:ge}},570:function(e,n,t){"use strict";t.r(n);t(85),t(45),t(28),t(14),t(61),t(27);var o=t(5),r=t(231),l=t(16),c=t(245),m=t(17),d=t(35),h=t(237),f=t(300),v=t(250);function x(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var y=m.a.VueCodemirror,w=[];d.a&&Object(c.a)(t(561).default).forEach((function(e){var component=e.component,n=e.fileName,t=Object(r.a)(e,["component","fileName"]);w.push(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},t,{path:n&&"projects/".concat(y,"/examples/").concat(n)})),Object.assign(h.a.components,Object(o.a)({},component.name,component))}));var _=Object(l.b)({name:"page-".concat(y),components:{Homepage:v.a,HomepageLink:f.a,HomepageExamples:h.a},head:Object(c.b)(y),setup:function(){return{repositorieId:y,examples:w}}}),O=(t(363),t(12)),k=Object(O.a)(_,(function(){var e=this.$createElement,n=this._self._c||e;return n("homepage",{class:this.repositorieId,attrs:{"repositorie-id":this.repositorieId}},[n("template",{slot:"actions"},[n("homepage-link",{attrs:{icon:"doc",text:"CodeMirror User manual",href:"https://codemirror.net/doc/manual.html#config"}}),this._v(" "),n("homepage-link",{attrs:{icon:"doc",text:"CodeMirror themes",href:"https://codemirror.net/demo/theme.html"}}),this._v(" "),n("homepage-link",{attrs:{icon:"doc",text:"CodeMirror Language modes",href:"https://codemirror.net/mode/"}})],1),this._v(" "),n("template",{slot:"content"},[n("homepage-examples",{attrs:{"example-class":"codemirror-example",examples:this.examples}})],1)],2)}),[],!1,null,null,null);k.options.__file="vue-codemirror.vue";n.default=k.exports}}]);