/* PARTICLES */
const c=document.getElementById("particles");
const ctx=c.getContext("2d");
function resize(){c.width=innerWidth;c.height=innerHeight}
resize();addEventListener("resize",resize);
let pts=[];
for(let i=0;i<60;i++){
  pts.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*0.7,vy:(Math.random()-.5)*0.7,r:Math.random()*2+1});
}
function loop(){
  ctx.clearRect(0,0,c.width,c.height);
  for(const p of pts){
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>c.width)p.vx*=-1;
    if(p.y<0||p.y>c.height)p.vy*=-1;
    ctx.beginPath();
    ctx.fillStyle="rgba(58,123,255,0.15)";
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  }
  requestAnimationFrame(loop);
}
loop();

/* TILT 3D */
document.querySelectorAll('.tilt').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    el.style.transform=`rotateX(${y/20}deg) rotateY(${x/-20}deg)`;
  });
  el.addEventListener('mouseleave',()=>el.style.transform="rotateX(0) rotateY(0)");
});
