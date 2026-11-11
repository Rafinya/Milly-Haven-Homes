const PHONE="254720209232";
const STAGNANT=false;      // master switch for the pointer / tilt / film effects
const STORY_MOTION=true;   // scroll-driven tower rise on the home page
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=t=>`https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
$$('[data-wa]').forEach(a=>a.href=wa(a.dataset.wa));

/* Edit your lofts here. Every photo below is a real Dazzling Crest photograph
   matched to the apartment it belongs to. Leave "photo" empty when no
   verified photograph exists — the illustration is used instead. */
const STAYS=[
 {n:'One-Bedroom Loft — Ngara Fig Tree (Option 1)',slug:'ngara-1',
  loc:'Ngara, Fig Tree',price:2500,priceFormatted:'KSh 2,500',
  d:'A stylish, bright one-bedroom loft situated at Ngara Fig Tree. Features an open living lounge, modern fully equipped kitchen, plush bedroom with built-in wardrobe, dedicated dining corner, and access to the shared resident gym, parking, and convenience shop.',
  f:['2 guests','1 bedroom','1 bed','1 bath','Resident Gym Access','Ngara, Fig Tree'],
  photo:'assets/photos/ngara-01.jpg',
  tour:[
   {t:'The living room',d:'A welcoming cream modular corner sofa with burnt-orange accent cushions, handcrafted coffee table and warm ambient lighting.',img:'assets/photos/ngara-01.jpg',alt:'Cream sectional sofa with orange cushions in Ngara Fig Tree One-Bedroom Loft'},
   {t:'The entertainment area',d:'Mounted flatscreen TV with full media setup, indoor planter and views toward the balcony.',img:'assets/photos/ngara-08.jpg',alt:'TV media console and lounge area in Ngara loft'},
   {t:'The open-plan lounge',d:'Spacious perspective taking in the modern chandelier, dining alcove and open living space.',img:'assets/photos/ngara-02.jpg',alt:'Open view of the living room and window light in Ngara loft'},
   {t:'The modern kitchen',d:'Fitted cabinetry with oven, microwave, large refrigerator, water dispenser and essential cookware ready for meals.',img:'assets/photos/ngara-07.jpg',alt:'Fitted kitchen with cooker, microwave and fridge in Ngara loft'},
   {t:'The dining alcove',d:'A cozy round dining table for two by the window with high-floor natural light.',img:'assets/photos/ngara-05.jpg',alt:'Round dining table set for two by the balcony window'},
   {t:'The bedroom',d:'An inviting upholstered fluted headboard, fresh crisp white linen, and a tall wooden wardrobe.',img:'assets/photos/ngara-10.jpg',alt:'Plush bed with fluted headboard and wardrobe in Ngara loft'},
   {t:'Resident rooftop gym',d:'Fully equipped fitness center available on-site for daily workouts with cardio machines and weights.',img:'assets/photos/amenities/ngara-gym.jpg',alt:'Equipped resident fitness gym in Ngara Fig Tree'}
  ],
  gallery:[
   {img:'assets/photos/ngara-09.jpg',cap:'Lounge & kitchen overview'},
   {img:'assets/photos/ngara-03.jpg',cap:'Living room & chandelier'},
   {img:'assets/photos/ngara-04.jpg',cap:'Lounge & balcony window'},
   {img:'assets/photos/ngara-06.jpg',cap:'Kitchenette & appliances'},
   {img:'assets/photos/amenities/ngara-gym.jpg',cap:'Resident fitness gym'},
   {img:'assets/photos/amenities/ngara-parking.jpg',cap:'Secure resident parking'},
   {img:'assets/photos/amenities/ngara-shop.jpg',cap:'Ground-floor convenience shop'}
  ]},
 {n:'One-Bedroom Loft — Ngara Fig Tree (Option 2)',slug:'ngara-2',
  loc:'Ngara, Fig Tree',price:2500,priceFormatted:'KSh 2,500',
  d:'A calm and inviting one-bedroom loft also in Ngara Fig Tree. Features a carpeted bedroom with cushioned headboard, sunny sitting room, dining area, full wooden kitchen, and resident gym access.',
  f:['2 guests','1 bedroom','1 bed','1 bath','Resident Gym Access','Ngara, Fig Tree'],
  photo:'assets/photos/one-bed-sitting.jpg',
  tour:[
   {t:'The bedroom',d:'A calm, carpeted bedroom with an upholstered double bed, generous wardrobe and room to unpack.',img:'assets/photos/one-bed-bedroom.jpg',alt:'Double bed with a padded headboard and grey rug in Ngara Fig Tree Loft Option 2'},
   {t:'The sitting room',d:'A proper lounge: a deep sofa, a TV wall and a dining table set by the window.',img:'assets/photos/one-bed-sitting.jpg',alt:'Cream sofa, coffee table and window in sitting room'},
   {t:'The dining corner',d:'A table for two in the window light — breakfast, or a quiet place to work.',img:'assets/photos/one-bed-dining.jpg',alt:'Round dining table set for two beside the window'},
   {t:'The kitchen',d:'A full kitchen with oven, hob, microwave and everything you need to cook properly.',img:'assets/photos/one-bed-kitchen.jpg',alt:'Full kitchen with oven, hob, sink and wooden cabinets'},
   {t:'The bathroom',d:'A clean, tiled bathroom with a walk-in shower and a pedestal basin.',img:'assets/photos/one-bed-bathroom.jpg',alt:'Tiled bathroom with walk-in shower, toilet and pedestal basin'},
   {t:'Resident rooftop gym',d:'Dedicated resident fitness facility with weights, treadmills and panoramic building views.',img:'assets/photos/amenities/ngara-gym.jpg',alt:'Equipped resident fitness gym in Ngara Fig Tree'}
  ],
  gallery:[
   {img:'assets/photos/one-bed-living.jpg',cap:'Living room'},
   {img:'assets/photos/one-bed-sitting-wide.jpg',cap:'Sofa & TV'},
   {img:'assets/photos/one-bed-sitting-tv.jpg',cap:'The media wall'},
   {img:'assets/photos/one-bed-sitting-sofa.jpg',cap:'Sitting room'},
   {img:'assets/photos/one-bed-dining-sofa.jpg',cap:'Dining by the window'},
   {img:'assets/photos/one-bed-kitchen-open.jpg',cap:'Open-plan kitchen'},
   {img:'assets/photos/one-bed-bedroom-wardrobe.jpg',cap:'Bedroom storage'},
   {img:'assets/photos/amenities/ngara-gym.jpg',cap:'Resident fitness gym'},
   {img:'assets/photos/amenities/ngara-parking.jpg',cap:'Secure resident parking'},
   {img:'assets/photos/amenities/ngara-shop.jpg',cap:'Ground-floor convenience shop'}
  ]},
 {n:'Executive One-Bedroom Loft — Westlands',slug:'westlands',
  loc:'Westlands',price:2500,priceFormatted:'KSh 2,500',
  d:'A contemporary luxury one-bedroom apartment in prime Westlands. Features an electric-blue sectional sofa, dedicated office workspace, high-gloss kitchen with integrated oven & hood, in-unit washing machine, and building children playground.',
  f:['2 guests','1 bedroom','1 bed','1 bath','Dedicated Workspace','Westlands'],
  photo:'assets/photos/westlands/westlands-01.jpg',
  tour:[
   {t:'The designer lounge',d:'Plush ocean-blue sectional sofa with contemporary accents, sunflower art, and full-height window drape leading to the balcony.',img:'assets/photos/westlands/westlands-01.jpg',alt:'Modern living room with blue sectional in Westlands'},
   {t:'The open-plan perspective',d:'Expansive view of the lounge, ultra-thin flatscreen TV, and modern chef kitchen with breakfast counter.',img:'assets/photos/westlands/westlands-05.jpg',alt:'Open view of the Westlands living room and kitchen'},
   {t:'The executive workspace',d:'A dedicated work desk with ergonomic rolling office chair, fiber Wi-Fi, and natural light — tailored for remote professionals.',img:'assets/photos/westlands/westlands-02.jpg',alt:'Work desk and executive office chair in Westlands loft'},
   {t:'The gourmet kitchen',d:'High-gloss white and graphite soft-close cabinetry, built-in burner & oven, stainless range hood, and water station.',img:'assets/photos/westlands/westlands-03.jpg',alt:'Contemporary fitted kitchen with oven and range hood in Westlands'},
   {t:'The serene bedroom',d:'Fluted plush cream velvet headboard, premium mattress, crisp linens, side console, and extensive built-in wardrobes.',img:'assets/photos/westlands/westlands-04.jpg',alt:'Luxury bed with velvet headboard and white linens in Westlands'},
   {t:'Kids play zone & amenities',d:'Safe, colorful indoor children play gym with slide and trampoline within the residential complex.',img:'assets/photos/westlands/westlands-08.jpg',alt:'Children indoor playground and fun play structures'}
  ],
  gallery:[
   {img:'assets/photos/westlands/westlands-06.jpg',cap:'Balcony & skyline vista'},
   {img:'assets/photos/westlands/westlands-07.jpg',cap:'Master bedroom suite'},
   {img:'assets/photos/westlands/westlands-09.jpg',cap:'In-unit laundry station'},
   {img:'assets/photos/westlands/westlands-10.jpg',cap:'Modern tiled bathroom'},
   {img:'assets/photos/westlands/westlands-08.jpg',cap:'Building children playground'}
  ]},
 {n:'Two-Bedroom Family Loft — Ngara Fig Tree',slug:'ngara-2bed',
  loc:'Ngara, Fig Tree',price:4500,priceFormatted:'KSh 4,500',
  d:'A spacious, fully furnished two-bedroom residence in Ngara Fig Tree. Ideal for families and groups, featuring a complete lounge, dining area, balcony laundry setup with washing machine, on-site gym, parking, and mini-mart.',
  f:['4 guests','2 bedrooms','2 beds','1 bath','Resident Gym Access','Ngara, Fig Tree'],
  photo:'assets/photos/ngara4/01-living-dining.jpg',
  tour:[
   {t:'The main living & media lounge',d:'Warm cream sectional sofa with vibrant geometric pillows, circular glass & gold coffee table, and large smart TV.',img:'assets/photos/ngara4/01-living-dining.jpg',alt:'Two-bedroom living room with sectional sofa in Ngara'},
   {t:'The dining room',d:'Round black dining table set for four with cushioned chairs, ambient wall sconce and floral centerpiece.',img:'assets/photos/ngara4/02-dining.jpg',alt:'Dining table for four in the two-bedroom Ngara loft'},
   {t:'The balcony & laundry suite',d:'Private high-floor balcony with washing machine, laundry basket and open cityscape views.',img:'assets/photos/ngara4/03-laundry-balcony.jpg',alt:'Balcony with automatic washing machine and city view'},
   {t:'The master bedroom',d:'Comfortable double bed with upholstered headboard, fine linens and tall built-in wardrobes.',img:'assets/photos/ngara4/04-bedroom1.jpg',alt:'Master bedroom in the two-bedroom loft'},
   {t:'The second bedroom',d:'Bright and quiet second bedroom with cozy bedding, nightstand and storage.',img:'assets/photos/ngara4/05-bedroom2.jpg',alt:'Second bedroom in the two-bedroom loft'},
   {t:'The fully fitted kitchen',d:'Cooker, oven, microwave, kettle, cookware and full cabinetry for preparing family meals.',img:'assets/photos/ngara4/06-kitchen.jpg',alt:'Full kitchen with appliances and cabinetry in Ngara'},
   {t:'The bathroom',d:'Clean tiled bathroom with hot shower, modern fixtures and mirror vanity.',img:'assets/photos/ngara4/07-bathroom.jpg',alt:'Tiled bathroom with shower and vanity'},
   {t:'Resident rooftop gym',d:'Fully equipped on-site gym with treadmills, weight machines and dumbbells.',img:'assets/photos/amenities/ngara-gym.jpg',alt:'Shared resident gym in Ngara complex'}
  ],
  gallery:[
   {img:'assets/photos/ngara4/08-lounge-detail.jpg',cap:'Lounge seating area'},
   {img:'assets/photos/ngara4/09-media-tv.jpg',cap:'Smart TV & entertainment console'},
   {img:'assets/photos/ngara4/10-master-wardrobe.jpg',cap:'Master bedroom storage'},
   {img:'assets/photos/amenities/ngara-gym.jpg',cap:'Resident fitness gym'},
   {img:'assets/photos/amenities/ngara-parking.jpg',cap:'Secure resident parking'},
   {img:'assets/photos/amenities/ngara-shop.jpg',cap:'Forest Shop mini-mart'}
  ]}
];

/* drawing used until a verified photograph exists */
const art=(s,i)=>{if(s.photo)return`<img src="${s.photo}" alt="${s.n} interior" decoding="async">`;let w='';
 for(let r=0;r<6;r++)for(let c=0;c<4;c++){const on=((i+2)*(r*4+c+3)*7)%5<2;w+=`<rect x="${150+c*28}" y="${70+r*32}" width="18" height="22" fill="${on?'#e3c987':'#2a2318'}" opacity="${on?.9:1}"/>`}
 return`<svg viewBox="0 0 400 300" role="img" aria-label="${s.n}"><defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a3a1e"/><stop offset="1" stop-color="#17130d"/></linearGradient></defs><rect width="400" height="300" fill="url(#g${i})"/><rect x="132" y="50" width="136" height="250" fill="#1b160f" stroke="#c9a24b"/><path d="M132 50l34-22h68l34 22" fill="none" stroke="#c9a24b"/>${w}<rect x="0" y="286" width="400" height="14" fill="#0e0c08"/></svg>`};
const tourHref=s=>s.tour?`loft.html?p=${s.slug}`:'stays.html';

if($('#feat'))$('#feat').innerHTML=STAYS.map((s,i)=>`<a class="card" href="${tourHref(s)}"><div class="art" data-t>${art(s,i)}<span class="art-price-badge"><span class="amount">${s.priceFormatted}</span><span class="period">/ night</span></span></div><h3>${s.n}</h3><p>${s.f.slice(0,3).join(', ')}</p>${s.tour?'<span class="card-cta">Step inside</span>':''}</a>`).join('');

if($('#list'))$('#list').innerHTML=STAYS.map((s,i)=>{
 const media=s.photo?`<img src="${s.photo}" alt="${s.n} interior" decoding="async">`:art(s,i+4);
 const artBlock=s.tour?`<a class="art art-link" href="${tourHref(s)}" data-t aria-label="Step inside ${s.n}">${media}<span class="art-price-badge"><span class="amount">${s.priceFormatted}</span><span class="period">/ night</span></span></a>`:`<div class="art" data-t>${media}<span class="art-price-badge"><span class="amount">${s.priceFormatted}</span><span class="period">/ night</span></span></div>`;
 return`<article class="row rv" id="stay-${s.slug}">${artBlock}<div class="tx"><h2>${s.n}</h2><div class="stay-price-row"><span class="price-badge-lg"><span class="amount">${s.priceFormatted}</span><span class="period">per night</span></span></div><p>${s.d}</p><ul>${s.f.map(x=>`<li>${x}</li>`).join('')}</ul>
 <div class="row-actions">${s.tour?`<a class="bt fill" href="${tourHref(s)}">Step inside</a>`:''}<a class="bt" target="_blank" rel="noopener" href="${wa('Hello Dazzling Crest Homes, I’m interested in '+s.n+' ('+s.priceFormatted+'/night). Is it available?')}">Ask about this loft</a></div>
 ${s.tour?'':`<span class="row-note">We do not have verified photographs of this loft yet — message us and we will send the current ones.</span>`}</div></article>`}).join('');

if($('#fs'))$('#fs').innerHTML=STAYS.map(s=>`<option value="${s.n}">${s.n} — ${s.priceFormatted}/night</option>`).join('')+'<option>Not sure yet</option>';
if($('#send'))$('#send').onclick=()=>{const g=id=>$('#'+id).value.trim();let t=`Hello Dazzling Crest Homes, ${g('fn')?'my name is '+g('fn')+'. ':''}I’d like to book ${g('fs')}`;
 if(g('fi'))t+=` from ${g('fi')}`;if(g('fo'))t+=` to ${g('fo')}`;t+='.';if(g('fm'))t+=' '+g('fm');window.open(wa(t),'_blank','noopener')};

/* 3d tower */
const W=[170,170,146,146,122,122,98,74],H=34;
const face=(w,t,c='')=>`<i class="f ${c}" style="width:${w}px;height:${H}px;margin:${-H/2}px 0 0 ${-w/2}px;transform:${t}"></i>`;
const tower=()=>'<div class="tw">'+W.map((w,i)=>{const z=`translateZ(${w/2}px)`;
 return`<div class="fl" style="--i:${i};--y:${-(i*H+H/2)}px">${face(w,z)}${face(w,'rotateY(180deg) '+z)}${face(w,'rotateY(90deg) '+z)}${face(w,'rotateY(-90deg) '+z)}<i class="f top" style="width:${w}px;height:${w}px;margin:${-w/2}px 0 0 ${-w/2}px;transform:rotateX(90deg) translateZ(${H/2}px)"></i></div>`}).join('')+'</div>';
if($('#lt'))$('#lt').innerHTML=tower();
if($('#hs'))$('#hs').innerHTML=tower();
const fls=$('#hs')?$$('#hs .fl'):[],tw=$('#hs .tw'),cps=$$('.cp'),story=$('#story');
const cl=v=>Math.min(1,Math.max(0,v));
let storyRaf=0;
function renderStory(){
 if(!STORY_MOTION||document.body.dataset.page!=='home'||!story)return;
 const r=story.getBoundingClientRect(),p=cl(-r.top/(r.height-innerHeight));
 fls.forEach((f,i)=>{const l=cl(p/.7*fls.length-i);f.style.opacity=l;f.style.transform=`translateY(calc(var(--y) - ${(1-l)*90}px))`});
 tw.style.transform=`rotateX(-18deg) rotateY(${20+p*330}deg)`;
 const k=p<.34?0:p<.68?1:2;
 cps.forEach((c,i)=>c.classList.toggle('on',i===k));
}
function scroll(){
 if(!STORY_MOTION||document.body.dataset.page!=='home'||!story||storyRaf)return;
 storyRaf=requestAnimationFrame(()=>{storyRaf=0;renderStory()});
}
addEventListener('scroll',scroll,{passive:true});
addEventListener('resize',scroll,{passive:true});
renderStory();

/* tilt */
if(!STAGNANT){
document.addEventListener('pointermove',e=>{const t=e.target.closest('[data-t]');if(!t)return;const b=t.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;t.style.transform=`perspective(800px) rotateX(${-y*10}deg) rotateY(${x*12}deg)`});
document.addEventListener('pointerout',e=>{const t=e.target.closest('[data-t]');if(t)t.style.transform=''});
/* card light follows the pointer */
document.addEventListener('pointermove',e=>{const c=e.target.closest('.rcard');if(!c)return;const b=c.getBoundingClientRect();c.style.setProperty('--cx',(e.clientX-b.left)+'px');c.style.setProperty('--cy',(e.clientY-b.top)+'px')},{passive:true});
}

/* home film — the real Dazzling Crest video, trimmed to the living-room walkthrough
   so it can loop natively from the first frame */
const bgv=$('#bgv');
if(bgv){
 const conn=navigator.connection||{};
 const light=conn.saveData||/^(slow-2g|2g|3g)$/.test(conn.effectiveType||'');
 const play=()=>{const p=bgv.play();if(p&&p.catch)p.catch(()=>{})};
 if(light){
  bgv.removeAttribute('autoplay');bgv.preload='none';bgv.pause();
 }else{
  play();
  addEventListener('pageshow',play);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)bgv.pause();else play()});
 }
}

/* contact light field — a soft glow plus a gold ring that trails the cursor */
const mf=$('#mfield');
if(mf){
 const fine=matchMedia('(pointer:fine)').matches;
 const glow=mf.querySelector('.mf-glow'),ring=$('.mf-ring');
 let tx=innerWidth*.5,ty=innerHeight*.45,gx=tx,gy=ty,rx=tx,ry=ty,px=-1,py=-1;
 const place=()=>{
  if(Math.abs(gx-px)>.1||Math.abs(gy-py)>.1){glow.style.transform=`translate3d(${gx.toFixed(1)}px,${gy.toFixed(1)}px,0)`;px=gx;py=gy}
  ring.style.transform=`translate3d(${rx.toFixed(1)}px,${ry.toFixed(1)}px,0)`};
 const show=()=>document.body.classList.add('has-pointer');
 if(STAGNANT){gx=rx=tx;gy=ry=ty;place()}
 else if(fine){
  const track=e=>{tx=e.clientX;ty=e.clientY;show()};
  addEventListener('pointermove',track,{passive:true});
  addEventListener('pointerdown',track,{passive:true});
  const tick=()=>{
   if(!document.hidden){gx+=(tx-gx)*.1;gy+=(ty-gy)*.1;rx+=(tx-rx)*.2;ry+=(ty-ry)*.2;place()}
   requestAnimationFrame(tick)};
  requestAnimationFrame(tick);
 }else{
  show();
  const tick=()=>{
   if(!document.hidden){
    const t=performance.now()*.00013;tx=innerWidth*(.5+Math.sin(t)*.2);ty=innerHeight*(.5+Math.cos(t*1.27)*.17);
    gx+=(tx-gx)*.06;gy+=(ty-gy)*.06;rx+=(tx-rx)*.09;ry+=(ty-ry)*.09;place()}
   requestAnimationFrame(tick)};
  requestAnimationFrame(tick);
 }
 addEventListener('resize',()=>{tx=Math.min(tx,innerWidth);ty=Math.min(ty,innerHeight)},{passive:true});
}

/* ------------------------------------------------------------
   PROPERTY TOUR — scroll-driven room walkthrough
   ------------------------------------------------------------ */
const tourRoot=$('#tour');
if(tourRoot){
 const slug=new URLSearchParams(location.search).get('p');
 const stay=STAYS.find(s=>s.slug===slug);
 const hero=$('#tour-hero'),gal=$('#tgallery'),end=$('#tour-end');
 if(!stay||!stay.tour){
  if(hero)hero.innerHTML=`<div class="wrap"><a class="tour-back" href="stays.html">All stays</a><span class="eyebrow">Our stays</span><h1>Photos are on their way.</h1><p style="margin-top:20px">We do not have verified photographs of this loft yet. Message us and we will send the current ones before you book.</p><p style="margin-top:34px"><a class="bt fill" target="_blank" rel="noopener" href="${wa('Hello Dazzling Crest Homes, please send me current photos of '+(stay?stay.n:'the loft')+'.')}">Ask for current photos</a> <a class="bt" href="stays.html">Back to all lofts</a></p></div>`;
  tourRoot.remove();if(gal)gal.remove();if(end)end.remove();
 }else{
  document.title=stay.n+' — Dazzling Crest Homes Accommodations';
  const n=stay.tour.length;
  if(hero)hero.innerHTML=`<div class="wrap"><a class="tour-back" href="stays.html">All stays</a><span class="eyebrow">The property tour</span><h1>${stay.n}</h1><p>${stay.d}</p><div class="tour-facts"><span class="tour-price-fact"><b>${stay.priceFormatted}</b> / night</span>${stay.f.map(x=>`<span>${x}</span>`).join('')}<span><b>${n}</b> spaces to explore</span></div><a class="bt fill" target="_blank" rel="noopener" href="${wa('Hello Dazzling Crest Homes, I’m interested in '+stay.n+' ('+stay.priceFormatted+'/night). Is it available?')}">Ask about this loft</a> <a class="bt" href="stays.html">All lofts</a></div>`;
  tourRoot.style.setProperty('--stops',n);
  tourRoot.innerHTML=`<div class="tour-stick"><div class="tstage">${stay.tour.map((r,i)=>`<img src="${r.img}" alt="${r.alt||r.t}" ${i===0?'fetchpriority="high" decoding="sync"':'decoding="async"'}>`).join('')}</div><span class="tveil"></span>
   <div class="trail"><span class="tcount"><b id="tc-num">01</b> / ${String(n).padStart(2,'0')}</span>
    <div class="tcaps">${stay.tour.map((r,i)=>`<div class="tcap${i===0?' on':''}"><h2>${r.t}</h2><p>${r.d}</p></div>`).join('')}</div>
    <div class="tdots">${stay.tour.map((_,i)=>`<span class="${i===0?'on':''}"></span>`).join('')}</div></div>
   <div class="tprog"><i id="tbar"></i></div></div>`;
  if(gal){
   if(stay.gallery&&stay.gallery.length){
    gal.className='tour-gallery';
    gal.innerHTML=`<div class="wrap"><div class="head"><span class="eyebrow">More of the loft</span><h2>Room by room.</h2><p>The same apartment, photographed as it is.</p></div><div class="tg">${stay.gallery.map(g=>`<figure><img src="${g.img}" alt="${stay.n} — ${g.cap}" loading="lazy" decoding="async"><figcaption>${g.cap}</figcaption></figure>`).join('')}</div></div>`;
   }else gal.innerHTML='';
  }
  if(end)end.innerHTML=`<div class="wrap"><div class="band"><span class="eyebrow">Ready when you are</span><h2>Stay in ${stay.n}.</h2><p style="margin:0 auto 12px;font-size:26px;color:var(--g2);font-family:'Cormorant Garamond',serif"><b>${stay.priceFormatted}</b> <span style="font-size:16px;color:#cfc3aa;font-family:'Jost',sans-serif">/ night</span></p><p style="margin:0 auto 32px">Tell us your dates and we will confirm availability. A real person replies on WhatsApp.</p><a class="bt fill" target="_blank" rel="noopener" href="${wa('Hello Dazzling Crest Homes, I’d like to book '+stay.n+' ('+stay.priceFormatted+'/night).')}">Check availability</a> <a class="bt" href="stays.html">See the other lofts</a></div></div>`;

  const stage=$$('#tour .tstage img'),caps=$$('#tour .tcap'),dots=$$('#tour .tdots span'),bar=$('#tbar'),num=$('#tc-num');
  let tRaf=0,active=-1;
  const preload=i=>{if(i<0||i>=n)return;const im=new Image();im.src=stay.tour[i].img};
  stay.tour.forEach(r=>{const im=new Image();im.src=r.img});
  function renderTour(){
   const rect=tourRoot.getBoundingClientRect();
   const denom=Math.max(1,rect.height-innerHeight);
   const p=cl(-rect.top/denom);
   const x=p*Math.max(1,n-1);
   const idx=Math.min(n-1,Math.floor(x));
   const t=x-idx;
   const ease=v=>v*v*(3-2*v);
   const blend=ease(cl((t-.55)/.45));
   stage.forEach((img,i)=>{
    let o=0;
    if(i===idx)o=1-blend;
    if(i===idx+1)o=blend;
    img.style.opacity=o.toFixed(4);
    const s=1+.04*cl(1-Math.abs(x-i));
    img.style.transform=`scale(${s.toFixed(4)})`;
   });
   const now=Math.min(n-1,idx+(t>=.78?1:0));
   if(now!==active){active=now;caps.forEach((c,i)=>c.classList.toggle('on',i===now));dots.forEach((d,i)=>d.classList.toggle('on',i===now));if(num)num.textContent=String(now+1).padStart(2,'0');preload(now+1)}
   if(bar)bar.style.transform=`scaleX(${p.toFixed(4)})`;
  }
  function tScroll(){if(!tRaf)tRaf=requestAnimationFrame(()=>{tRaf=0;renderTour()})}
  addEventListener('scroll',tScroll,{passive:true});
  addEventListener('resize',tScroll,{passive:true});
  renderTour();
 }
}

/* reveal — starts once the loading screen begins to fade, so nothing is
   wasted behind it and the page assembles in view */
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('sh')),{threshold:.2,rootMargin:'0px 0px -6% 0px'});
/* pages + loading screen */
const ld=$('#ld'),bar=ld?ld.querySelector('.bar i'):null;
const page=document.body.dataset.page;
$$('nav a').forEach(a=>a.classList.toggle('ac',a.dataset.p===page));
scrollTo(0,0);scroll();
let fromNav=false;try{fromNav=sessionStorage.getItem('wl-nav')==='1';sessionStorage.removeItem('wl-nav')}catch(e){}
const startReveals=()=>$$('.rv').forEach(r=>io.observe(r));
/* The bar follows the real document lifecycle: it creeps while resources are
   still loading, and only reaches 100% once the load event has fired and the
   minimum display time has passed. No fake completion, no double loader. */
const minShow=fromNav?400:900;
const t0=performance.now();
let prog=0,ready=document.readyState!=='loading',finished=false;
if(!ready)addEventListener('DOMContentLoaded',()=>{ready=true},{once:true});
setTimeout(()=>{ready=true},9000); /* failsafe for a stalled third-party asset */
function finishLoad(){
 if(finished)return;finished=true;
 if(bar)bar.style.transform='scaleX(1)';
 setTimeout(()=>{
  if(ld)ld.classList.remove('on');
  setTimeout(startReveals,140);
 },150);
}
function loadTick(){
 if(finished)return;
 const el=performance.now()-t0;
 let target,rate;
 if(ready&&el>=minShow){target=1;rate=.3}
 else{target=Math.min(.9,.08+(el/minShow)*.82);rate=.09}
 prog+=(target-prog)*rate;
 if(bar)bar.style.transform=`scaleX(${prog.toFixed(4)})`;
 if(ready&&el>=minShow&&prog>.992){finishLoad();return}
 requestAnimationFrame(loadTick);
}
if(ld)requestAnimationFrame(loadTick);else startReveals();
addEventListener('pageshow',e=>{if(e.persisted){ready=true;if(ld)ld.classList.remove('on');startReveals()}});

document.addEventListener('click',e=>{
 const a=e.target.closest('a[href]');
 if(!a||a.target==='_blank'||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button>0)return;
 let url;try{url=new URL(a.getAttribute('href'),location.href)}catch(err){return}
 if(url.origin!==location.origin)return;
 const file=url.pathname.split('/').pop();
 if(!/^(home|stays|why-us|contact|loft)\.html$/.test(file))return;
 e.preventDefault();
 if(url.pathname===location.pathname&&url.search===location.search){scrollTo({top:0,behavior:'smooth'});return}
 try{sessionStorage.setItem('wl-nav','1')}catch(err){}
 location.href=url.href;
});
