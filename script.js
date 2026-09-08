let selectedSet="A", questions=[], answers={}, marked={}, idx=0, endTime=0, timerId=null, student={};
const $=id=>document.getElementById(id);
document.querySelectorAll('.sets button').forEach(b=>b.onclick=()=>{selectedSet=b.dataset.set;document.querySelectorAll('.sets button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')});
document.querySelector('.sets button[data-set="A"]').classList.add('selected');
$('startBtn').onclick=()=>{
 student={name:$('name').value.trim()||"Student",class:$('class').value.trim()||"VII",roll:$('roll').value.trim()||"-"};
 questions=questionSets[selectedSet].map((q,i)=>({...q,id:i+1}));
 answers={};marked={};idx=0;endTime=Date.now()+30*60*1000;
 localStorage.setItem("mathCBT",JSON.stringify({selectedSet,questions,answers,marked,idx,endTime,student}));
 $('start').hidden=true;$('exam').hidden=false;$('setLabel').textContent="Set "+selectedSet+" • 60 Marks";buildNav();render();tick();timerId=setInterval(tick,500);
};
function persist(){localStorage.setItem("mathCBT",JSON.stringify({selectedSet,questions,answers,marked,idx,endTime,student}))}
function tick(){let left=Math.max(0,endTime-Date.now()),sec=Math.ceil(left/1000),m=Math.floor(sec/60),s=sec%60;$('timer').textContent=String(m).padStart(2,'0')+":"+String(s).padStart(2,'0');if(sec<=0){clearInterval(timerId);finish(true)}}
function buildNav(){let n=$('nav');n.innerHTML="";questions.forEach((q,i)=>{let b=document.createElement('button');b.className='qbtn';b.textContent=i+1;b.onclick=()=>{saveCurrent();idx=i;render()};n.appendChild(b)})}
function saveCurrent(){let el=document.querySelector('#answer');if(el) answers[idx]=el.value}
function render(){let q=questions[idx];$('progress').textContent=`Question ${idx+1} of ${questions.length} • ${q.marks} mark${q.marks>1?'s':''}`;
let h=`<div class="type">${q.type==="mcq"?"Multiple Choice":q.type==="short"?"Short Answer":"Problem Solving"}</div><div class="topic">${q.topic}</div><h2>${q.question}</h2>`;
if(q.type==="mcq"){h+=q.options.map((o,i)=>`<label class="option"><input type="radio" name="opt" value="${i}" ${answers[idx]==i?'checked':''}>${String.fromCharCode(65+i)}. ${o}</label>`).join("")}
else h+=`<textarea id="answer" class="answer" placeholder="Type your answer here...">${answers[idx]||""}</textarea>`;
$('question').innerHTML=h;
document.querySelectorAll('input[name=opt]').forEach(x=>x.onchange=()=>{answers[idx]=Number(x.value);persist();buildNav();renderNav()});
if(q.type!=="mcq")document.querySelector('#answer').oninput=e=>{answers[idx]=e.target.value;persist();renderNav()};
renderNav();$('prev').disabled=idx===0;$('next').textContent=idx===questions.length-1?"Finish":"Next";
}
function renderNav(){document.querySelectorAll('.qbtn').forEach((b,i)=>{b.className='qbtn'+(answers[i]!==undefined&&answers[i]!==''?' answered ':'')+(marked[i]?' review ':'')+(i===idx?' current':'')})}
$('prev').onclick=()=>{saveCurrent();if(idx>0){idx--;persist();render()}};
$('next').onclick=()=>{saveCurrent();if(idx<questions.length-1){idx++;persist();render()}else confirmSubmit()};
$('clear').onclick=()=>{delete answers[idx];persist();render()};
$('review').onclick=()=>{marked[idx]=!marked[idx];persist();renderNav()};
$('submitBtn').onclick=confirmSubmit;
function confirmSubmit(){saveCurrent();let a=Object.keys(answers).filter(k=>answers[k]!==""&&answers[k]!==undefined).length,r=Object.keys(marked).filter(k=>marked[k]).length;if(confirm(`Submit Set ${selectedSet}?\nAnswered: ${a}\nUnanswered: ${questions.length-a}\nMarked for review: ${r}`))finish(false)}
function normalize(x){return String(x).toLowerCase().replace(/₹|rs\.?|°c|km|cm|m|kg/g,"").replace(/[^a-z0-9./+=\- ]/g,"").replace(/\s+/g," ").trim()}
function grade(q,a){if(a===undefined||a==="")return 0;if(q.type==="mcq")return Number(a)===q.answer?q.marks:0;
let s=normalize(a), key=normalize(q.answer); if(s===key)return q.marks;
let nums=(s.match(/-?\d+(?:\.\d+)?/g)||[]), keynums=(key.match(/-?\d+(?:\.\d+)?/g)||[]);
if(nums.length&&keynums.length&&nums[0]===keynums[0])return q.marks;
if(key.split(/[;=]/).some(k=>k.trim()&&s.includes(k.trim())))return Math.max(1,Math.floor(q.marks/2)); return 0}
function finish(auto){saveCurrent();clearInterval(timerId);let score=0,correct=0,wrong=0,unanswered=0;questions.forEach((q,i)=>{let g=grade(q,answers[i]);score+=g;if(answers[i]===undefined||answers[i]==="")unanswered++;else if(g===q.marks)correct++;else wrong++});let pct=Math.round(score/60*100);let band=pct>=90?"Excellent":pct>=80?"Very Good":pct>=70?"Good":pct>=60?"Needs Improvement":"More Practice Recommended";
let wrongs=questions.map((q,i)=>({q,i,g:grade(q,answers[i])})).filter(x=>x.g<x.q.marks);
let topics=[...new Set(wrongs.map(x=>x.q.topic))];
$('exam').hidden=true;$('result').hidden=false;$('timer').textContent="00:00";
$('result').innerHTML=`<h2>🎯 Mathematics Result — Set ${selectedSet}</h2><p><b>${student.name}</b> • Class ${student.class} • Roll ${student.roll}</p><div class="resultScore">${score} / 60</div><p style="text-align:center;font-size:22px">${pct}% • <b>${band}</b></p><div class="stats"><div class="stat"><b>${correct}</b><br>Fully correct</div><div class="stat"><b>${wrong}</b><br>Needs review</div><div class="stat"><b>${unanswered}</b><br>Unanswered</div><div class="stat"><b>60</b><br>Total marks</div></div><h3>Topics to Revise</h3><p>${topics.length?topics.join(" • "):"Excellent — no topic needs immediate revision."}</p><button class="print" onclick="window.print()">Print / Save Result</button><h3>Review Your Mistakes</h3>${wrongs.length?wrongs.map(x=>`<div class="reviewItem"><b>Q${x.i+1} — ${x.q.topic}</b><p>${x.q.question}</p><p><b>Your answer:</b> ${answers[x.i]===undefined?"Not answered":x.q.type==="mcq"?x.q.options[answers[x.i]]:answers[x.i]}</p><p><b>Correct answer:</b> ${x.q.type==="mcq"?x.q.options[x.q.answer]:x.q.answer}</p><p><b>Explanation:</b> ${x.q.explanation}</p></div>`).join(""):"<p>Great work! No incorrect responses to review.</p>"}<hr><p><b>Note:</b> Short-answer and problem answers use approximate keyword/numerical matching for CBT scoring.</p>`;
localStorage.removeItem("mathCBT");
}
window.addEventListener("beforeunload",e=>{if(!$('exam').hidden){saveCurrent();}});
