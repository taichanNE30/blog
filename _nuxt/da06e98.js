(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{214:function(t,e,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("1ada8026",content,!0,{sourceMap:!1})},219:function(t,e,n){"use strict";n(214)},220:function(t,e,n){var r=n(84)(!1);r.push([t.i,".tag[data-v-87b1f3f6]{background-color:#90ee90;border-radius:4px;display:inline-block;padding:2px 4px;margin:0 2px}.tag[data-v-87b1f3f6],.tag__link[data-v-87b1f3f6]{color:#696969;text-decoration:none}",""]),t.exports=r},223:function(t,e,n){"use strict";n.r(e);var r={props:{id:{type:String,required:!0},name:{type:String,required:!0}}},l=(n(219),n(26)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("object",{staticClass:"tag"},[n("nuxt-link",{staticClass:"tag__link",attrs:{to:"/tag/"+t.id}},[t._v(t._s(t.name))])],1)}),[],!1,null,"87b1f3f6",null);e.default=component.exports},227:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("cc3d03ec",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";n.r(e);var r={props:{article:{type:Object,required:!0}}},l=(n(244),n(26)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"article"},[n("nuxt-link",{staticClass:"article__link",attrs:{to:"/article/"+t.article.id}},[n("div",{staticClass:"article__image-container"}),t._v(" "),n("div",{staticClass:"article__details"},[n("h2",{staticClass:"article__title"},[t._v(t._s(t.article.title))]),t._v(" "),n("div",{staticClass:"article__description"},[t._v("\n        "+t._s(t.article.description)+"\n      ")]),t._v(" "),n("div",{staticClass:"article__bottom"},[n("div",{staticClass:"tags"},t._l(t.article.tags,(function(t){return n("Tag",{key:"tag-"+t.id,attrs:{id:t.id,name:t.name}})})),1),t._v(" "),n("div",{staticClass:"article__date"},[t._v(t._s(t.article.publishedAt.slice(0,10).replace(/-/gi,"/")))])])])])],1)}),[],!1,null,"0846e4b1",null);e.default=component.exports;installComponents(component,{Tag:n(223).default,Article:n(230).default})},244:function(t,e,n){"use strict";n(227)},245:function(t,e,n){var r=n(84)(!1);r.push([t.i,".article[data-v-0846e4b1]{background-color:#fcfcfc;display:flex;padding:12px;margin:12px 0}.article__link[data-v-0846e4b1]{color:#333;display:flex;text-decoration:none;width:100%}.article__image-container[data-v-0846e4b1]{height:120px;margin-right:20px;min-width:192px;width:192px;line-height:100%;background-color:#47494e}.article__details[data-v-0846e4b1]{display:flex;flex-direction:column;flex-grow:1}.article__title[data-v-0846e4b1]{margin:0;font-size:18px}.article__description[data-v-0846e4b1]{font-size:16px;flex-grow:1}.article__bottom[data-v-0846e4b1]{display:flex;justify-content:space-between;align-items:center}",""]),t.exports=r},273:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("0f77f19a",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(273)},324:function(t,e,n){var r=n(84)(!1);r.push([t.i,".articles[data-v-6da2462e]{display:flex;flex-direction:column}",""]),t.exports=r},326:function(t,e,n){"use strict";n.r(e);var r=n(6),l=(n(46),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,o,d,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=t.$microcms,l=t.redirect,"1"!==(null==n?void 0:n.p)){e.next=7;break}if(void 0!==(null==n?void 0:n.tagId)){e.next=6;break}return e.abrupt("return",l(301,"/"));case 6:return e.abrupt("return",l(301,"/tag/".concat(n.tagId)));case 7:return c=n.p||"1",o=n.tagId||null,d={offset:10*(c-1),limit:10},null!==o&&(d.filters="tags[contains]".concat(o)),e.next=13,r.get({endpoint:"article",queries:d});case 13:if(data=e.sent,Object.assign(data,{page:c,tagId:o}),!n.tagId){e.next=21;break}return e.next=18,r.get({endpoint:"tags/".concat(o)});case 18:data.tag=e.sent,e.next=22;break;case 21:data.tag=null;case 22:return e.abrupt("return",data);case 23:case"end":return e.stop()}}),e)})))()}}),c=(n(323),n(26)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.tag?n("h1",[t._v("タグ「"+t._s(t.tag.name)+"」のついた記事一覧")]):t._e(),t._v(" "),n("div",{staticClass:"articles"},t._l(t.contents,(function(content){return n("Article",{key:content.id,attrs:{article:content}})})),1),t._v(" "),t.totalCount>t.limit?n("ul",[t.page>1?n("li",[null===t.tagId?n("nuxt-link",{attrs:{to:"/page/"+(t.page-1)}},[t._v("<")]):n("nuxt-link",{attrs:{to:"/tags/"+t.tagId+"/page/"+(t.page-1)}},[t._v("<")])],1):t._e(),t._v(" "),t._l(t.totalCount/t.limit,(function(p){return n("li",{key:"pagination-"+p},[null===t.tagId?n("nuxt-link",{attrs:{to:"/page/"+p}},[t._v(t._s(p))]):n("nuxt-link",{attrs:{to:"/tags/"+t.tagId+"/page/"+p}},[t._v(t._s(p))])],1)})),t._v(" "),t.totalCount-t.page*t.limit>0?n("li",[null===t.tagId?n("nuxt-link",{attrs:{to:"/page/"+(Number(t.page)+1)}},[t._v(">")]):n("nuxt-link",{attrs:{to:"/tags/"+t.tagId+"/page/"+(Number(t.page)+1)}},[t._v(">")])],1):t._e()],2):t._e()])}),[],!1,null,"6da2462e",null);e.default=component.exports;installComponents(component,{Article:n(230).default})}}]);