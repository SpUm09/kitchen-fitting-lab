(function(){
var P={
  cloud:{name:'Cloud Dancer',code:'11-4201',hex:'#F0EEE9'},
  antique:{name:'Antique White',code:'11-0105',hex:'#ECE8DC'},
  anise:{name:'Anise Flower',code:'12-0717',hex:'#E6E0B5'},
  tarragon:{name:'Tarragon',code:'15-0326',hex:'#8C9566'},
  arrow:{name:'Arrowwood',code:'16-0954',hex:'#B58E4A'},
  dolphin:{name:'Dolphin',code:'16-2901',hex:'#8E8A8C'},
  waterfall:{name:'Waterfall',code:'15-5516',hex:'#6FB3A8'}
};
var SURF=[
 {id:'wall',label:'Стены',classic:[['greige','Серо-бежевый','#D9D1C5'],['milk','Молочный','#F2EEE6'],['vanilla','Ваниль','#F1E8D2'],['limewash','Известковый крем','#E6DCC6'],['sand','Песочный','#D8C7A9'],['taupe','Тёплый тауп','#CBBFB1'],['plaster','Глиняная штукатурка','#CDA88E'],['lgray','Светло-серый','#CFCDC6'],['dustyblue','Пыльно-голубой','#C6D3DC'],['sagemist','Шалфейная дымка','#C9CFC2'],['sagedeep','Глубокий шалфей','#6F8570']],pan:['cloud','antique','anise','tarragon','dolphin']},
 {id:'floor',label:'Пол',classic:[['warmgray','Тёплый серый','#C7C0B4'],['ivory','Слоновая кость','#EDE6D6'],['micro','Светлый микроцемент','#D4D0C8'],['cream','Кремовый','#E3DACB'],['lightoak','Светлый дуб','#CDB08A'],['walnut','Орех','#7A573F'],['terrafl','Терракотовая плитка','#B27A5C'],['mid','Серо-коричневый','#8E8579'],['concrete','Бетон','#9A958C'],['dark','Тёмный бетон','#6B6A68'],['blackstone','Тёмный камень','#3E3F42']],pan:['cloud','antique','dolphin','arrow']},
 {id:'front',label:'Фасады',classic:[['mushroom','Грибной тауп','#A89B8C'],['mocha','Мокко','#7A5F50'],['cream','Кремовый','#E8DDC4'],['milk','Молочный','#E9E5DC'],['butter','Сливочно-жёлтый','#E6D49A'],['pink','Пыльно-розовый','#D9B8B0'],['ochre','Охра','#C08A3E'],['clay','Глиняный','#B59A87'],['wine','Винный','#6E2E3A'],['aubergine','Баклажан','#4A3346'],['teal','Дымчатый бирюзовый','#3F6B6B'],['navy','Чернильно-синий','#2E3F58'],['bluegray','Серо-голубой','#8FA1AA'],['olive','Оливковый','#7C7F4E'],['sage','Шалфей матовый','#8F9E91'],['forest','Тёмно-зелёный','#4F6352'],['graphite','Графит','#4A4D4F'],['black','Матовый чёрный','#232325']],pan:['tarragon','waterfall','dolphin','cloud']},
 {id:'handle',label:'Ручки',classic:[['dark','Тёмные','#2B2B2A'],['black','Чёрные матовые','#171717'],['steel','Хром','#B9BCBE'],['brass','Латунь','#B08D4A'],['gold','Золото сатин','#C9A961'],['bronze','Бронза','#8B6B4A'],['copper','Медь','#B06A4A'],['white','Белые','#F1F1EF']],pan:[]},
 {id:'body',label:'Корпуса',classic:[['white','Белый','#F2F1EC'],['lgray','Светло-серый','#C9CBC8'],['graphite','Графит','#3A3D3F'],['black','Чёрный','#1F1F1E'],['oak','Дуб','#B58A5B']],pan:['cloud','dolphin']},
 {id:'plinth',label:'Цоколь',classic:[['dark','Тёмный','#34322F'],['black','Чёрный','#1F1F1E'],['alu','Алюминий','#A9ABAD'],['white','Белый','#F2F1EC'],['oak','Дуб','#B58A5B']],pan:['dolphin']},
 {id:'top',label:'Столешница',classic:[['oak','Дуб натуральный','#B58A5B'],['lightoak','Светлый дуб','#D2B48C'],['limedoak','Известковый дуб','#CDBFA6'],['walnut','Тёмный орех','#6B4A33'],['whitestone','Белый камень','#E6E3DC'],['taj','Тадж-Махал','#D8CFC0'],['terrazzo','Светлый терраццо','#DAD6CE'],['darkstone','Тёмный камень','#3A3B3D']],pan:['arrow','antique','dolphin']},
 {id:'tile',label:'Фартук',classic:[['white','Белая плитка','#F6F4EF'],['milk','Молочная','#EDE6D8'],['lgray','Светло-серая','#D5D6D2'],['sand','Песочная','#D8C7A9'],['butter','Сливочная','#EBDDAE'],['pinkt','Нежно-розовая','#E3C9C4'],['blue','Пыльно-голубая','#B9CAD6'],['sagetile','Шалфейная','#B7C4B8'],['tealt','Бирюзовая','#5D8A87'],['terra','Терракотовая','#B66B50'],['dkgreen','Тёмно-зелёная','#3F5A4A'],['ink','Чернильная','#2E3F58'],['dark','Тёмная','#3B3B39']],pan:['cloud','antique','tarragon','anise']},
 {id:'fridge',label:'Холодильник',classic:[['steel','Нержавеющая сталь','#C4C7C9'],['white','Белый','#F1F1EF'],['black','Чёрный матовый','#2B2C2E'],['cream','Кремовый ретро','#E8DFC9'],['graphf','Графит','#4A4D4F']],pan:['cloud','dolphin','tarragon']},
 {id:'oven',label:'Духовка',classic:[['steel','Нержавеющая сталь','#C4C7C9'],['black','Чёрный','#1E1F22'],['white','Белый','#F1F1EF'],['graphite','Графит','#4A4D4F'],['bronze','Бронза','#8B6B4A'],['cream','Кремовый ретро','#E8DFC9']],pan:['cloud','dolphin']},
 {id:'micro',label:'Микроволновка',classic:[['steel','Нержавеющая сталь','#C4C7C9'],['black','Чёрный','#1E1F22'],['white','Белый','#F1F1EF'],['graphite','Графит','#4A4D4F'],['bronze','Бронза','#8B6B4A'],['cream','Кремовый ретро','#E8DFC9']],pan:['cloud','dolphin']},
 {id:'hood',label:'Вытяжка',classic:[['dark','Тёмная','#2F2F2D'],['steel','Нержавеющая сталь','#B9BCBE'],['white','Белая','#F1F1EF'],['graphite','Графит','#4A4D4F'],['black','Чёрная матовая','#1F2023'],['brass','Латунь','#B08D4A'],['copper','Медь','#B06A4A'],['cream','Кремовая ретро','#E8DFC9']],pan:['cloud','dolphin']},
 {id:'hob',label:'Плита',classic:[['glass','Чёрное стекло','#1B1C1E'],['graphite','Графит','#4A4D4F'],['steel','Нержавеющая сталь','#B9BCBE'],['white','Белое стекло','#EDEDEA'],['cream','Кремовая','#E8DFC9']],pan:[]},
 {id:'sink',label:'Мойка',classic:[['steel','Нержавеющая сталь','#B9BCBE'],['black','Чёрный композит','#2A2B2D'],['graphite','Графит','#4A4D4F'],['white','Белая керамика','#F1F1EF'],['sand','Песочный композит','#CDBFA6'],['terra','Терракота','#B27A5C']],pan:[]},
 {id:'faucet',label:'Смеситель',classic:[['steel','Хром','#B9BCBE'],['dark','Тёмный','#2B2B2A'],['black','Чёрный матовый','#171717'],['brass','Латунь','#B08D4A'],['gold','Золото сатин','#C9A961'],['bronze','Бронза','#8B6B4A'],['copper','Медь','#B06A4A'],['white','Белый','#F1F1EF']],pan:[]},
 {id:'pendant',label:'Светильники',classic:[['dark','Тёмные','#2B2B2A'],['black','Чёрные матовые','#171717'],['white','Белые','#F1F1EF'],['brass','Латунь','#B08D4A'],['copper','Медь','#B06A4A'],['graphite','Графит','#4A4D4F'],['cream','Кремовые','#E8DFC9']],pan:[]}
];
SURF.forEach(function(s){
  s.opts=s.classic.map(function(c){return {id:c[0],name:c[1],hex:c[2]}}).concat(s.pan.map(function(k){return {id:'p-'+k,name:P[k].name,hex:P[k].hex,code:P[k].code,pan:true}}));
});
SURF.filter(function(s){return s.id==='body'})[0].opts.unshift({id:'tone',name:'В тон фасадов',hex:null,src:'front',f:.28});
SURF.filter(function(s){return s.id==='fridge'})[0].opts.unshift({id:'tone',name:'В тон фасадов',hex:null,src:'front',f:0});
SURF.filter(function(s){return s.id==='handle'})[0].opts.unshift({id:'tone',name:'Под цвет фасадов',hex:null,src:'front',f:.4});
SURF.filter(function(s){return s.id==='plinth'})[0].opts.unshift({id:'tone',name:'Как корпуса',hex:null,src:'body',f:0});
['oven','micro'].forEach(function(id){SURF.filter(function(s){return s.id===id})[0].opts.unshift({id:'tone',name:'В тон фасадов',hex:null,src:'front',f:0})});
SURF.filter(function(s){return s.id==='hood'})[0].opts.unshift({id:'tone',name:'В тон фасадов',hex:null,src:'front',f:.12});
SURF.filter(function(s){return s.id==='sink'})[0].opts.unshift({id:'tone',name:'Под столешницу',hex:null,src:'top',f:.1});
['faucet','pendant'].forEach(function(id){SURF.filter(function(s){return s.id===id})[0].opts.unshift({id:'tone',name:'Как ручки',hex:null,src:'handle',f:0})});
SURF.forEach(function(s){s.opts.push({id:'custom',name:'Свой цвет',hex:null,cust:true})});
var PRESETS=[
 {name:'Грибной тауп',blurb:'Тёплый серо-коричневый матовый фасад и светлое дерево.',pick:{wall:'vanilla',floor:'warmgray',front:'mushroom',top:'lightoak',tile:'milk',floorTex:'slabs'}},
 {name:'Дымчатый бирюзовый',blurb:'Тёмная бирюза на тёплом белом фоне, терраццо и дерево.',pick:{wall:'p-antique',floor:'lightoak',front:'teal',frontTex:'fluted',handle:'brass',top:'terrazzo',tile:'white',floorTex:'planks'}},
 {name:'Cloud Dancer',blurb:'Цвет года Pantone: матовый белый, графичные соты на фартуке.',pick:{wall:'taupe',floor:'micro',front:'p-cloud',top:'whitestone',tile:'lgray',tileType:'hex',grout:'graphite',floorTex:'plain'}},
 {name:'Мокко и терракота',blurb:'Кофейные фасады, светлый микроцемент, терракотовая плитка.',pick:{wall:'limewash',floor:'micro',front:'mocha',top:'whitestone',topTex:'marble',tile:'terra',tileType:'square',floorTex:'plain'}},
 {name:'Винный и камень',blurb:'Глубокий винный цвет, светлый камень, чёрный холодильник.',pick:{wall:'taupe',floor:'mid',front:'wine',top:'whitestone',topTex:'marble',tile:'white',fridge:'black',floorTex:'herring'}},
 {name:'Pantone Tarragon',blurb:'Травяной оттенок Pantone на фасадах, тёплые нейтральные стены.',pick:{wall:'p-antique',floor:'warmgray',front:'p-tarragon',handle:'brass',top:'lightoak',tile:'p-cloud',tileType:'herring'}},
 {name:'Оливковый и дерево',blurb:'Тёплый оливковый, натуральный дуб, ванильные стены.',pick:{wall:'vanilla',floor:'lightoak',front:'olive',top:'oak',topTex:'wood',tile:'white',tileType:'subv',floorTex:'planks'}},
 {name:'Чернильно-синий',blurb:'Глубокий синий фасад и светлые нейтральные стены.',pick:{wall:'milk',floor:'warmgray',front:'navy',top:'whitestone',tile:'white',tileType:'herring',grout:'lgray',floorTex:'slabs'}},
 {name:'Пыльно-розовый',blurb:'Мягкий розовый, белый камень и светлый пол.',pick:{wall:'p-cloud',floor:'micro',front:'pink',top:'whitestone',topTex:'marble',tile:'white',tileType:'square',floorTex:'terrazzo'}},
 {name:'Баклажан и орех',blurb:'Тёмный баклажан, орех на полу и светлые стены.',pick:{wall:'greige',floor:'walnut',front:'aubergine',handle:'brass',top:'taj',tile:'milk',fridge:'black',floorTex:'herring'}},
 {name:'Матовый чёрный',blurb:'Чёрные фасады, светлое дерево и белый камень.',pick:{wall:'lgray',floor:'lightoak',front:'black',frontTex:'gloss',handle:'brass',top:'whitestone',topTex:'speckle',tile:'white',grout:'graphite',fridge:'black',body:'black',floorTex:'planks'}},
 {name:'Охра и земля',blurb:'Охристые фасады, песочные стены, терракотовый пол.',pick:{wall:'sand',floor:'terrafl',front:'ochre',handle:'bronze',top:'taj',tile:'milk',fridge:'cream'}},
 {name:'Графит и Dolphin',blurb:'Тёмные фасады, серый пол Pantone, орех на столешнице.',pick:{wall:'p-cloud',floor:'p-dolphin',front:'graphite',top:'walnut',tile:'p-cloud',tileType:'square',grout:'graphite',body:'graphite',fridge:'black',floorTex:'checker'}},
 {name:'Лофт',blurb:'Бетонные стены и пол, дерево как тёплый акцент.',pick:{wall:'lgray',floor:'concrete',front:'graphite',top:'oak',topTex:'wood',tile:'lgray',tileType:'slab',floorTex:'plain'}}
];
PRESETS.forEach(function(p){p.pick.body=p.pick.body||'tone';p.pick.handle=p.pick.handle||'dark';p.pick.hood=p.pick.hood||'dark';p.pick.hob=p.pick.hob||'glass';p.pick.sink=p.pick.sink||'steel';p.pick.faucet=p.pick.faucet||'tone';p.pick.pendant=p.pick.pendant||'tone';p.pick.topTex=p.pick.topTex||'plain';p.pick.frontTex=p.pick.frontTex||'matte';p.pick.fridge=p.pick.fridge||'steel';p.pick.plinth=p.pick.plinth||'tone';var ap=['steel','white','black','cream'].indexOf(p.pick.fridge)>=0?p.pick.fridge:'steel';p.pick.oven=p.pick.oven||ap;p.pick.micro=p.pick.micro||ap;p.pick.floorTex=p.pick.floorTex||'tile'});
var TYPES=[['subway','Кабанчик','Классика'],['subv','Кабанчик вертикально','Вертикально'],['herring','Ёлочка','Зигзаг'],['square','Квадратная','Сетка'],['hex','Шестигранник','Соты'],['mosaic','Мозаика','Мелкая'],['slab','Сплошная панель','Без швов'],['match','В цвет столешницы','Сплошная']];
var TOPTEX=[['plain','Однотонная','Гладкая'],['wood','Дерево','Волокна'],['marble','Мрамор','Прожилки'],['speckle','Крапинка','Гранит']];
var FRONTTEX=[['matte','Матовый','Гладкий'],['gloss','Глянец','Блик'],['wood','Шпон','Дерево'],['fluted','Рифлёный','Рейки']];
var FLOORTEX=[['tile','Плитка','Сетка'],['planks','Доска','Доски'],['plain','Однотонный','Без рисунка'],['herring','Паркет ёлочка','Ёлочка'],['checker','Шахматка','Клетка'],['terrazzo','Терраццо','Крапинки'],['slabs','Крупные плиты','Широкие швы']];
var GROUTS=[['tone','В тон плитки',null],['white','Белый','#FFFFFF'],['lgray','Светло-серый','#BDBDB8'],['beige','Тёплый бежевый','#CBBFA9'],['graphite','Графит','#4A4A48']];
function shade(hex,f){var n=parseInt(hex.slice(1),16),r=n>>16&255,g=n>>8&255,b=n&255;function c(v){return Math.round(v*(1-f))}return '#'+((1<<24)+(c(r)<<16)+(c(g)<<8)+c(b)).toString(16).slice(1).toUpperCase()}
function baseTileHex(){return find('tile',sel.tile).hex}
function topHex(){return find('top',sel.top).hex}
function rowHidden(id){return (id==='pendant'&&!sel.pendOn)||(id==='fridge'&&!sel.fridgeOn)||((id==='oven'||id==='micro')&&!sel.colOn)}
function floorHex(){return find('floor',sel.floor).hex}
function floorTexName(){return FLOORTEX.filter(function(t){return t[0]===sel.floorTex})[0][1]}
function isSolid(){return sel.tileType==='slab'||sel.tileType==='match'}
function tileHex(){return sel.tileType==='match'?topHex():baseTileHex()}
function groutHex(){if(sel.grout==='custom')return custom.grout;var g=GROUTS.filter(function(x){return x[0]===sel.grout})[0];return g[2]||shade(tileHex(),.2)}
function typeName(){return TYPES.filter(function(t){return t[0]===sel.tileType})[0][1]}
function groutName(){if(sel.grout==='custom')return 'Свой цвет';return GROUTS.filter(function(x){return x[0]===sel.grout})[0][1]}
function el(tag,cls,text){var e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e}
function rawOpt(sid,oid){var s=SURF.filter(function(x){return x.id===sid})[0];return s.opts.filter(function(o){return o.id===oid})[0]}
function resolveHex(sid,oid,pick){var o=rawOpt(sid,oid);if(o.cust)return custom[sid];return o.src?shade(resolveHex(o.src,pick[o.src],pick),o.f):o.hex}
function find(sid,oid){var o=rawOpt(sid,oid);if(!o)return o;return (o.src||o.cust)?{id:o.id,name:o.name,hex:resolveHex(sid,oid,sel)}:o}
var scene=document.getElementById('scene'),grid=document.getElementById('grid'),tabs=document.getElementById('tabs'),presetsEl=document.getElementById('presets'),sumlist=document.getElementById('sumlist'),msg=document.getElementById('msg');
var sel={},custom={};
SURF.forEach(function(s){sel[s.id]=PRESETS[0].pick[s.id]});sel.tileType='subway';sel.grout='tone';sel.floorTex=PRESETS[0].pick.floorTex;sel.topTex=PRESETS[0].pick.topTex;sel.frontTex=PRESETS[0].pick.frontTex;sel.fridgeOn=true;sel.colOn=true;sel.pendOn=true;sel.ledOn=true;
SURF.forEach(function(s){custom[s.id]=resolveHex(s.id,sel[s.id],sel)});custom.grout=shade(tileHex(),.2);
try{
  var saved=JSON.parse(localStorage.getItem('kitchen-fitting-sel')||'null');
  if(saved){SURF.forEach(function(s){if(saved[s.id]&&find(s.id,saved[s.id]))sel[s.id]=saved[s.id]});if(TYPES.some(function(t){return t[0]===saved.tileType}))sel.tileType=saved.tileType;if(saved.grout==='custom'||GROUTS.some(function(g){return g[0]===saved.grout}))sel.grout=saved.grout;if(FLOORTEX.some(function(t){return t[0]===saved.floorTex}))sel.floorTex=saved.floorTex;['fridgeOn','colOn','pendOn','ledOn'].forEach(function(k){if(typeof saved[k]==='boolean')sel[k]=saved[k]});if(TOPTEX.some(function(t){return t[0]===saved.topTex}))sel.topTex=saved.topTex;if(FRONTTEX.some(function(t){return t[0]===saved.frontTex}))sel.frontTex=saved.frontTex;if(saved.custom){Object.keys(custom).forEach(function(k){if(/^#[0-9a-fA-F]{6}$/.test(saved.custom[k]))custom[k]=saved.custom[k]})}}
}catch(e){}
var active='wall';
function cur(){return SURF.filter(function(s){return s.id===active})[0]}

function renderTabs(){
  tabs.innerHTML='';
  SURF.forEach(function(s){
    var b=el('button','tab',s.label);b.type='button';b.setAttribute('role','tab');b.dataset.id=s.id;
    b.setAttribute('aria-selected',String(s.id===active));b.tabIndex=s.id===active?0:-1;
    b.onclick=function(){setTab(s.id)};
    b.onkeydown=function(e){
      var i=SURF.findIndex(function(x){return x.id===active});
      if(e.key==='ArrowRight'){setTab(SURF[(i+1)%SURF.length].id,true)}
      else if(e.key==='ArrowLeft'){setTab(SURF[(i+SURF.length-1)%SURF.length].id,true)}
    };
    tabs.appendChild(b);
  });
}
function setTab(id,focus){
  var sl=tabs.scrollLeft;active=id;renderTabs();renderGrid();tabs.scrollLeft=sl;
  var st=tabs.querySelector('[aria-selected="true"]');
  if(st){if(st.offsetLeft-24<tabs.scrollLeft)tabs.scrollLeft=st.offsetLeft-24;else if(st.offsetLeft+st.offsetWidth+24>tabs.scrollLeft+tabs.clientWidth)tabs.scrollLeft=st.offsetLeft+st.offsetWidth+24-tabs.clientWidth}
  if(focus){var t=tabs.querySelector('[data-id="'+id+'"]');if(t)t.focus()}
}
function renderGrid(){
  var s=cur();grid.innerHTML='';if(s.id==='fridge')renderToggle('Показывать холодильник','fridgeOn');if(s.id==='oven'||s.id==='micro')renderToggle('Показывать колонну с духовкой и микроволновкой','colOn');if(s.id==='floor')renderFloorGroup();if(s.id==='top')renderTexGroup('Фактура столешницы',TOPTEX,'topTex','toptex','top');if(s.id==='front')renderTexGroup('Фактура фасадов',FRONTTEX,'frontTex','fronttex','front');if(s.id==='pendant'){renderToggle('Подвесные светильники','pendOn');renderToggle('Подсветка под шкафами','ledOn')}if(s.id==='tile'){renderTypeGroup();var mn=el('p','note','Фартук берёт цвет столешницы. Цвет плитки ниже начнёт действовать, если выбрать другой тип.');mn.id='matchNote';mn.hidden=sel.tileType!=='match';grid.appendChild(mn)}
  [['Классика',s.opts.filter(function(o){return !o.pan&&!o.cust})],['Pantone в тренде',s.opts.filter(function(o){return o.pan})]].forEach(function(g){
    var box=el('div','group');box.appendChild(el('div','gh',s.id==='tile'?'Цвет плитки · '+g[0]:g[0]));
    var row=el('div','chips');
    g[1].forEach(function(o){
      var b=el('button','chip');b.type='button';b.dataset.id=o.id;b.dataset.kind='color';
      b.setAttribute('aria-pressed',String(sel[s.id]===o.id));
      var blk=el('span','blk');var oh=o.src?resolveHex(s.id,o.id,sel):o.hex;blk.style.background=oh;if(o.src)blk.dataset.dyn=o.id;
      var m=el('span','meta');m.appendChild(el('span','nm',o.name));var cdt=el('span','cd',o.pan?'Pantone '+o.code:oh);if(o.src)cdt.dataset.dyn=o.id;m.appendChild(cdt);
      b.appendChild(blk);b.appendChild(m);
      b.onclick=function(){sel[s.id]=o.id;apply()};
      row.appendChild(b);
    });
    box.appendChild(row);grid.appendChild(box);
  });
  if(s.id==='tile')renderGroutGroup();renderCustomGroup(s);grid.setAttribute('aria-label',s.label);
}
function renderToggle(label,key){
  var box=el('div','group');
  var lab=el('label','toggle');
  var inp=document.createElement('input');inp.type='checkbox';inp.checked=!!sel[key];inp.dataset.key=key;
  inp.addEventListener('change',function(){sel[key]=inp.checked;apply()});
  lab.appendChild(inp);lab.appendChild(el('span',null,label));
  box.appendChild(lab);grid.appendChild(box);
}
function renderFloorGroup(){
  var box=el('div','group');box.appendChild(el('div','gh','Фактура пола'));
  var row=el('div','chips');
  FLOORTEX.forEach(function(t){
    var b=el('button','chip');b.type='button';b.dataset.id=t[0];b.dataset.kind='floortex';
    b.setAttribute('aria-pressed',String(sel.floorTex===t[0]));
    var blk=el('span','blk');
    blk.innerHTML='<svg viewBox="0 0 130 62" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect class="fvfill" width="130" height="62" fill="'+floorHex()+'"/>'+(t[0]==='plain'?'':'<rect width="130" height="62" fill="url(#fp-'+t[0]+')"/>')+'</svg>';
    var m=el('span','meta');m.appendChild(el('span','nm',t[1]));m.appendChild(el('span','cd',t[2]));
    b.appendChild(blk);b.appendChild(m);
    b.onclick=function(){sel.floorTex=t[0];apply()};
    row.appendChild(b);
  });
  box.appendChild(row);grid.appendChild(box);
}
function renderTexGroup(title,list,key,kind,sid){
  var box=el('div','group');box.appendChild(el('div','gh',title));
  var row=el('div','chips');
  list.forEach(function(t){
    var b=el('button','chip');b.type='button';b.dataset.id=t[0];b.dataset.kind=kind;
    b.setAttribute('aria-pressed',String(sel[key]===t[0]));
    var blk=el('span','blk');var plain=(t[0]==='plain'||t[0]==='matte');
    blk.innerHTML='<svg viewBox="0 0 130 62" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect class="txfill" data-sid="'+sid+'" width="130" height="62" fill="'+find(sid,sel[sid]).hex+'"/>'+(plain?'':'<rect width="130" height="62" fill="url(#tx-'+sid+'-'+t[0]+')"/>')+'</svg>';
    var m=el('span','meta');m.appendChild(el('span','nm',t[1]));m.appendChild(el('span','cd',t[2]));
    b.appendChild(blk);b.appendChild(m);
    b.onclick=function(){sel[key]=t[0];apply()};
    row.appendChild(b);
  });
  box.appendChild(row);grid.appendChild(box);
}
function renderCustomGroup(s){
  var box=el('div','group');box.appendChild(el('div','gh','Свой цвет'));
  var row=el('div','picks');
  var targets=s.id==='tile'?[['tile','Плитка'],['grout','Шов']]:[[s.id,'Любой оттенок']];
  targets.forEach(function(t){
    var key=t[0];
    var wrap=el('label','pickbox');wrap.dataset.key=key;
    var inp=document.createElement('input');inp.type='color';inp.value=custom[key];inp.id='pick-'+key;
    inp.setAttribute('aria-label','Свой цвет: '+(s.id==='tile'?t[1].toLowerCase():s.label.toLowerCase()));
    var txt=el('span','pickt');txt.appendChild(el('span','pn',t[1]));
    var hx=el('span','code',custom[key].toUpperCase());hx.dataset.hexof=key;txt.appendChild(hx);
    inp.addEventListener('input',function(){custom[key]=inp.value;sel[key]='custom';apply()});
    wrap.appendChild(inp);wrap.appendChild(txt);row.appendChild(wrap);
  });
  box.appendChild(row);grid.appendChild(box);
}
function renderTypeGroup(){
  var box=el('div','group');box.appendChild(el('div','gh','Тип укладки'));
  var row=el('div','chips');
  TYPES.forEach(function(t){
    var b=el('button','chip');b.type='button';b.dataset.id=t[0];b.dataset.kind='type';
    b.setAttribute('aria-pressed',String(sel.tileType===t[0]));
    var blk=el('span','blk');
    blk.innerHTML='<svg viewBox="0 0 130 62" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect class="tvfill" data-t="'+t[0]+'" width="130" height="62" fill="'+(t[0]==='match'?topHex():baseTileHex())+'"/>'+(t[0]==='slab'||t[0]==='match'?'':'<rect width="130" height="62" fill="url(#pat-'+t[0]+')"/>')+'</svg>';
    var m=el('span','meta');m.appendChild(el('span','nm',t[1]));m.appendChild(el('span','cd',t[2]));
    b.appendChild(blk);b.appendChild(m);
    b.onclick=function(){sel.tileType=t[0];apply()};
    row.appendChild(b);
  });
  box.appendChild(row);grid.appendChild(box);
}
function renderGroutGroup(){
  var box=el('div','group');box.appendChild(el('div','gh','Цвет шва'));
  var row=el('div','chips');
  GROUTS.forEach(function(g){
    var b=el('button','chip');b.type='button';b.dataset.id=g[0];b.dataset.kind='grout';
    b.setAttribute('aria-pressed',String(sel.grout===g[0]));
    var blk=el('span','blk');var hx=g[2]||shade(tileHex(),.2);blk.style.background=hx;if(!g[2])blk.dataset.tone='1';
    var m=el('span','meta');m.appendChild(el('span','nm',g[1]));var cd=el('span','cd',hx);if(!g[2])cd.dataset.tone='1';m.appendChild(cd);
    b.appendChild(blk);b.appendChild(m);
    b.onclick=function(){sel.grout=g[0];apply()};
    row.appendChild(b);
  });
  box.appendChild(row);
  box.appendChild(el('p','note','Для сплошной панели швов нет, цвет шва на неё не влияет.'));
  grid.appendChild(box);
}
function renderPresets(){
  presetsEl.innerHTML='';
  PRESETS.forEach(function(p,i){
    var b=el('button','preset');b.type='button';b.dataset.i=i;
    var strip=el('span','strip');
    ['wall','floor','front','top','tile','handle'].forEach(function(id){var d=document.createElement('i');d.style.background=resolveHex(id,p.pick[id],p.pick);strip.appendChild(d)});
    b.appendChild(strip);b.appendChild(el('span','pn',p.name));b.appendChild(el('span','pb',p.blurb));
    b.onclick=function(){SURF.forEach(function(s){sel[s.id]=p.pick[s.id]});sel.tileType=p.pick.tileType||'subway';sel.grout=p.pick.grout||'tone';sel.floorTex=p.pick.floorTex;sel.topTex=p.pick.topTex;sel.frontTex=p.pick.frontTex;apply()};
    presetsEl.appendChild(b);
  });
}
function renderSummary(){
  sumlist.innerHTML='';
  SURF.forEach(function(s){
    var o=find(s.id,sel[s.id]);if(s.id==='tile'&&sel.tileType==='match')o={name:'В цвет столешницы',hex:topHex()};
    if(rowHidden(s.id))return;
    var li=el('li');var d=el('span','dot');d.style.background=o.hex;
    var t=el('span','sumtxt');t.appendChild(el('b',null,s.label));
    t.appendChild(el('span',null,o.name));
    t.appendChild(el('span','code',o.pan?'Pantone '+o.code+' · '+o.hex:o.hex));
    if(s.id==='floor')t.appendChild(el('span','code','Фактура: '+floorTexName()));
    if(s.id==='top')t.appendChild(el('span','code','Фактура: '+texName(TOPTEX,sel.topTex)));
    if(s.id==='front')t.appendChild(el('span','code','Фактура: '+texName(FRONTTEX,sel.frontTex)));
    if(s.id==='tile')t.appendChild(el('span','code','Укладка: '+typeName()+(isSolid()?'':' · шов: '+groutName().toLowerCase()+' '+groutHex())));
    var lb=el('button','lockbtn');lb.type='button';lb.setAttribute('aria-pressed',String(!!locked[s.id]));lb.title='Зафиксировать при случайном подборе';lb.setAttribute('aria-label','Зафиксировать: '+s.label);lb.innerHTML=lockSvg(!!locked[s.id]);
    lb.onclick=function(){locked[s.id]=!locked[s.id];renderSummary()};
    li.appendChild(d);li.appendChild(t);li.appendChild(lb);sumlist.appendChild(li);
  });
}
function apply(){
  SURF.forEach(function(s){scene.style.setProperty('--c-'+s.id,find(s.id,sel[s.id]).hex)});
  scene.style.setProperty('--c-tile',tileHex());
  function dsp(id,on){var n=document.getElementById(id);if(n)n.setAttribute('display',on?'inline':'none')}
  var ft=sel.floorTex;
  dsp('fl-persp',ft==='tile'||ft==='planks');dsp('fl-horiz',ft==='tile');
  document.getElementById('floorov').setAttribute('fill',['herring','checker','terrazzo','slabs'].indexOf(ft)>=0?'url(#fp-'+ft+')':'none');
  dsp('fridgeG',sel.fridgeOn);dsp('colG',sel.colOn);
  grid.querySelectorAll('.fvfill').forEach(function(r){r.setAttribute('fill',floorHex())});
  grid.querySelectorAll('.toggle input').forEach(function(i){i.checked=!!sel[i.dataset.key]});
  grid.querySelectorAll('.chip').forEach(function(b){var k=b.dataset.kind,v=k==='type'?sel.tileType:k==='grout'?sel.grout:k==='floortex'?sel.floorTex:k==='toptex'?sel.topTex:k==='fronttex'?sel.frontTex:sel[cur().id];b.setAttribute('aria-pressed',String(v===b.dataset.id))});
  var gx=groutHex();
  document.querySelectorAll('#sceneSvg .gp').forEach(function(p){p.setAttribute('stroke',gx);p.setAttribute('stroke-opacity','1');p.setAttribute('stroke-width','1')});
  document.getElementById('tileov').setAttribute('fill',sel.tileType==='match'?texFill('top'):isSolid()?'none':'url(#pat-'+sel.tileType+')');
  dsp('pendG',sel.pendOn);dsp('glowPend',sel.pendOn);dsp('ledG',sel.ledOn);dsp('glowLed',sel.ledOn);
  TEXOV.forEach(function(n){n.setAttribute('fill',texFill(n.dataset.tx))});
  grid.querySelectorAll('.txfill').forEach(function(r){r.setAttribute('fill',find(r.dataset.sid,sel[r.dataset.sid]).hex)});
  grid.querySelectorAll('.tvfill').forEach(function(r){r.setAttribute('fill',r.dataset.t==='match'?topHex():baseTileHex())});
  var mnote=document.getElementById('matchNote');if(mnote)mnote.hidden=sel.tileType!=='match';
  grid.querySelectorAll('[data-dyn]').forEach(function(n){var h=resolveHex(cur().id,n.dataset.dyn,sel);if(n.classList.contains('cd'))n.textContent=h;else n.style.background=h});
  grid.querySelectorAll('.pickbox').forEach(function(w){var k=w.dataset.key;w.dataset.on=String(sel[k]==='custom');var i=w.querySelector('input');if(i.value.toLowerCase()!==custom[k].toLowerCase())i.value=custom[k];w.querySelector('[data-hexof]').textContent=custom[k].toUpperCase()});
  grid.querySelectorAll('[data-tone]').forEach(function(n){var h=shade(tileHex(),.2);if(n.classList.contains('cd'))n.textContent=h;else n.style.background=h});
  presetsEl.querySelectorAll('.preset').forEach(function(b){
    var p=PRESETS[+b.dataset.i];
    b.setAttribute('aria-pressed',String(SURF.every(function(s){return sel[s.id]===p.pick[s.id]})&&sel.tileType===(p.pick.tileType||'subway')&&sel.grout===(p.pick.grout||'tone')&&sel.floorTex===p.pick.floorTex&&sel.topTex===p.pick.topTex&&sel.frontTex===p.pick.frontTex));
  });
  renderSummary();renderWarn();record();
  try{localStorage.setItem('kitchen-fitting-sel',JSON.stringify(Object.assign({custom:custom},sel)))}catch(e){}
}
function say(t){msg.textContent=t;clearTimeout(say.t);say.t=setTimeout(function(){msg.textContent=''},3000)}
document.getElementById('copy').onclick=function(){
  var text=SURF.filter(function(s){return !rowHidden(s.id)}).map(function(s){var o=find(s.id,sel[s.id]);if(s.id==='tile'&&sel.tileType==='match')o={name:'В цвет столешницы',hex:topHex()};return s.label+': '+o.name+(o.pan?' (Pantone '+o.code+')':'')+', '+o.hex+(s.id==='floor'?', фактура: '+floorTexName():'')+(s.id==='top'?', фактура: '+texName(TOPTEX,sel.topTex):'')+(s.id==='front'?', фактура: '+texName(FRONTTEX,sel.frontTex):'')+(s.id==='tile'?', укладка: '+typeName()+(isSolid()?'':', шов: '+groutName().toLowerCase()+' '+groutHex()):'')}).join('\n');
  var fallback=function(){var r=document.createRange();r.selectNodeContents(sumlist);var g=window.getSelection();g.removeAllRanges();g.addRange(r);say('Список выделен, нажмите Ctrl+C')};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){say('Скопировано')},fallback)}else{fallback()}
};
var zoomBtn=document.getElementById('zoomBtn'),zoomPh=null,zoomBack=null;
function setZoom(on){
  if(on===scene.classList.contains('zoomed'))return;
  if(on){
    zoomPh=document.createComment('scene');scene.parentNode.insertBefore(zoomPh,scene);
    zoomBack=el('div','zoomback');zoomBack.addEventListener('click',function(){setZoom(false)});
    document.body.appendChild(zoomBack);document.body.appendChild(scene);
    scene.classList.add('zoomed');document.body.classList.add('zooming');
  }else{
    scene.classList.remove('zoomed');document.body.classList.remove('zooming');
    zoomPh.parentNode.insertBefore(scene,zoomPh);zoomPh.parentNode.removeChild(zoomPh);zoomPh=null;
    if(zoomBack&&zoomBack.parentNode)zoomBack.parentNode.removeChild(zoomBack);zoomBack=null;
  }
  zoomBtn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21M7.5 10.5h6'+(on?'':'M10.5 7.5v6')+'"/></svg>';
  zoomBtn.title=on?'Свернуть':'Увеличить';
  zoomBtn.setAttribute('aria-expanded',String(on));
  zoomBtn.setAttribute('aria-label',on?'Свернуть схему':'Увеличить схему');
  zoomBtn.focus();
}
document.getElementById('sceneSvg').addEventListener('click',function(e){
  if(scene.classList.contains('zoomed'))return;
  var g=e.target.closest('[data-s]');if(g)setTab(g.dataset.s);
});
zoomBtn.addEventListener('click',function(e){e.stopPropagation();setZoom(!scene.classList.contains('zoomed'))});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setZoom(false)});
var LIGHTS=[
 {id:'day',name:'День',tint:'#FFFFFF',ta:0,va:0,glow:0},
 {id:'morning',name:'Утро',tint:'#CFE0FA',ta:.4,va:0,glow:0},
 {id:'evening',name:'Вечер',tint:'#F5B27A',ta:.45,va:.22,glow:.7},
 {id:'lamp',name:'Лампа',tint:'#FFC97A',ta:.5,va:.36,glow:1}
];
var light='day';
try{var svl=localStorage.getItem('kitchen-fitting-light');if(LIGHTS.some(function(l){return l.id===svl}))light=svl}catch(e){}
var glowRoot=document.getElementById('glowG'),lightSeg=document.getElementById('lightSeg'),lightTint=document.getElementById('lightTint'),lightVig=document.getElementById('lightVig');
function setLight(id,save){
  light=id;var L=LIGHTS.filter(function(l){return l.id===id})[0];
  lightTint.setAttribute('fill',L.tint);glowRoot.setAttribute('opacity',L.glow);glowRoot.setAttribute('display',L.glow?'inline':'none');document.querySelectorAll('.ledstrip').forEach(function(n){n.setAttribute('fill',L.glow?'#FFF1C9':'#D8D3C8')});lightTint.setAttribute('fill-opacity',L.ta);lightVig.setAttribute('fill-opacity',L.va);
  lightSeg.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.l===id))});
  if(save){try{localStorage.setItem('kitchen-fitting-light',id)}catch(e){}}
}
LIGHTS.forEach(function(l){var b=el('button',null,l.name);b.type='button';b.dataset.l=l.id;b.onclick=function(){setLight(l.id,true)};lightSeg.appendChild(b)});
setLight(light,false);

function lab(hex){
  var n=parseInt(hex.slice(1),16),c=[n>>16&255,n>>8&255,n&255].map(function(v){v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)});
  var x=(c[0]*.4124+c[1]*.3576+c[2]*.1805)/.95047,y=c[0]*.2126+c[1]*.7152+c[2]*.0722,z=(c[0]*.0193+c[1]*.1192+c[2]*.9505)/1.08883;
  function f(t){return t>.008856?Math.cbrt(t):7.787*t+16/116}
  return [116*f(y)-16,500*(f(x)-f(y)),200*(f(y)-f(z))];
}
function dE(a,b){var p=lab(a),q=lab(b);return Math.sqrt(Math.pow(p[0]-q[0],2)+Math.pow(p[1]-q[1],2)+Math.pow(p[2]-q[2],2))}
var PAIRS=[['wall','front','Стены и фасады',12],['wall','floor','Стены и пол',5],['floor','plinth','Пол и цоколь',12],['front','handle','Ручки и фасады',14],['top','tile','Столешница и фартук',4],['wall','fridge','Холодильник и стены',4],['wall','hood','Вытяжка и стены',8],['tile','faucet','Смеситель и фартук',14],['top','sink','Мойка и столешница',6],['top','hob','Плита и столешница',10]];
function hexOf(p,id){if(id==='tile'&&p.tileType==='match')id='top';return resolveHex(id,p[id],p)}
function problems(p){
  return PAIRS.filter(function(x){
    if(x[0]==='tile'||x[1]==='tile'){if(p.tileType==='match')return false}
    if((x[0]==='fridge'||x[1]==='fridge')&&!p.fridgeOn)return false;
    return dE(hexOf(p,x[0]),hexOf(p,x[1]))<x[3];
  }).map(function(x){return {name:x[2]}});
}
var warnEl=document.getElementById('warn');
function renderWarn(){
  var pr=problems(sel);warnEl.hidden=!pr.length;warnEl.innerHTML='';
  if(!pr.length)return;
  warnEl.appendChild(el('b',null,'Слабый контраст'));
  var ul=el('ul');pr.forEach(function(x){ul.appendChild(el('li',null,x.name+' почти сливаются'))});
  warnEl.appendChild(ul);
  warnEl.appendChild(el('p',null,'Если это не задумано, сделайте один из цветов заметно светлее или темнее.'));
}

var locked={};
function lockSvg(on){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/>'+(on?'<path d="M8 11V8a4 4 0 0 1 8 0v3"/>':'<path d="M8 11V8a4 4 0 0 1 7.5-1.5"/>')+'</svg>'}
function rnd(a){return a[Math.floor(Math.random()*a.length)]}
function pickRandom(){
  var tries=0,p;
  do{
    p=Object.assign({},sel);
    SURF.forEach(function(s){if(locked[s.id])return;p[s.id]=rnd(s.opts.filter(function(o){return !o.cust})).id});
    if(!locked.tile){p.tileType=rnd(TYPES)[0];p.grout=rnd(GROUTS)[0]}
    if(!locked.floor)p.floorTex=rnd(FLOORTEX)[0];
    if(!locked.top)p.topTex=rnd(TOPTEX)[0];
    if(!locked.front)p.frontTex=rnd(FRONTTEX)[0];
    tries++;
  }while(problems(p).length&&tries<80);
  return p;
}
document.getElementById('rand').onclick=function(){
  var p=pickRandom();
  SURF.forEach(function(s){sel[s.id]=p[s.id]});sel.tileType=p.tileType;sel.grout=p.grout;sel.floorTex=p.floorTex;sel.topTex=p.topTex;sel.frontTex=p.frontTex;
  apply();say('Случайное сочетание');
};

var hist=[],hi=-1,lastPush=0,restoring=false;
var undoBtn=document.getElementById('undo'),redoBtn=document.getElementById('redo');
function snap(){return JSON.stringify({sel:sel,custom:custom})}
function updHist(){undoBtn.disabled=hi<=0;redoBtn.disabled=hi>=hist.length-1}
function record(){
  if(restoring)return;
  var s=snap();if(hi>=0&&hist[hi]===s)return;
  var now=Date.now();
  if(hi>0&&hi===hist.length-1&&now-lastPush<600){hist[hi]=s}
  else{hist=hist.slice(0,hi+1);hist.push(s);hi=hist.length-1;if(hist.length>60){hist.shift();hi--}}
  lastPush=now;updHist();
}
function restore(i){
  if(i<0||i>=hist.length)return;
  hi=i;var d=JSON.parse(hist[i]);
  Object.keys(d.sel).forEach(function(k){sel[k]=d.sel[k]});
  Object.keys(d.custom).forEach(function(k){custom[k]=d.custom[k]});
  restoring=true;apply();restoring=false;updHist();
}
function undo(){restore(hi-1)}
function redo(){restore(hi+1)}
undoBtn.onclick=undo;redoBtn.onclick=redo;
document.addEventListener('keydown',function(e){
  if(!(e.ctrlKey||e.metaKey))return;
  var t=e.target&&e.target.tagName;if(t==='INPUT'||t==='TEXTAREA')return;
  if(e.code==='KeyZ'&&!e.shiftKey){e.preventDefault();undo()}
  else if(e.code==='KeyY'||(e.code==='KeyZ'&&e.shiftKey)){e.preventDefault();redo()}
});
var TEXOV=[];
document.querySelectorAll('#sceneSvg .front,#sceneSvg .top').forEach(function(n){
  var c=n.cloneNode(false);c.removeAttribute('class');c.removeAttribute('id');c.setAttribute('stroke','none');c.setAttribute('pointer-events','none');c.setAttribute('fill','none');
  c.dataset.tx=n.classList.contains('front')?'front':'top';n.parentNode.insertBefore(c,n.nextSibling);TEXOV.push(c);
});
function texFill(kind){var t=kind==='top'?sel.topTex:sel.frontTex;return (t==='plain'||t==='matte')?'none':'url(#tx-'+kind+'-'+t+')'}
function texName(list,v){return list.filter(function(t){return t[0]===v})[0][1]}
var seg=document.getElementById('themeSeg');
function setTheme(t,save){var r=document.documentElement;if(t==='system')r.removeAttribute('data-theme');else r.setAttribute('data-theme',t);seg.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.t===t))});if(save){try{localStorage.setItem('kitchen-fitting-theme',t)}catch(e){}}}
seg.querySelectorAll('button').forEach(function(b){b.onclick=function(){setTheme(b.dataset.t,true)}});
var th='system';try{th=localStorage.getItem('kitchen-fitting-theme')||'system'}catch(e){}
if(['system','light','dark'].indexOf(th)<0)th='system';
setTheme(th,false);
renderTabs();renderGrid();renderPresets();apply();
tabs.addEventListener('wheel',function(e){var max=tabs.scrollWidth-tabs.clientWidth;if(max<=0||Math.abs(e.deltaY)<=Math.abs(e.deltaX))return;var n=tabs.scrollLeft+e.deltaY;if(n<0||n>max)return;tabs.scrollLeft=n;e.preventDefault()},{passive:false});
var SECRET={tolik:{wall:'greige',floor:'warmgray',front:'sage',handle:'dark',body:'tone',plinth:'tone',top:'oak',tile:'white',fridge:'steel',tileType:'subway',grout:'tone',oven:'steel',micro:'steel',hood:'dark',hob:'glass',sink:'steel',faucet:'tone',pendant:'tone',floorTex:'tile',topTex:'plain',frontTex:'matte'}};
function checkSecret(){
  var key='';
  try{key=new URLSearchParams(location.search).get('get')||''}catch(e){}
  if(!key)key=(location.hash||'').replace(/^#/,'');
  key=key.toLowerCase();
  if(!key||!SECRET[key])return;
  var p=SECRET[key];
  SURF.forEach(function(s){sel[s.id]=p[s.id]});
  sel.tileType=p.tileType;sel.grout=p.grout;sel.floorTex=p.floorTex;sel.topTex=p.topTex;sel.frontTex=p.frontTex;
  apply();
}
checkSecret();
window.addEventListener('hashchange',checkSecret);
})();
