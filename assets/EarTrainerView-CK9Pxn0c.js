import{u as y,_ as I,a as M}from"./InstrumentFretboard-BY8uL95z.js";import{d as O,r as v,t as k,o as g,c as p,b as c,e as z,n as h,u as t,F as T,f as V,w as A,v as F,i as N,g as S,a as q}from"./index-C0A3cyRD.js";const B=O("quiz",()=>{const m=y(),r=a=>{const e={notes:[],noteNames:[]},s={notes:[],noteNames:[]};let d;for(let n=0;n<m.strings.length;n++)m.strings[n].isMuted||(e.notes=e.notes.concat(k(m.strings[n].notes)),e.noteNames=e.noteNames.concat(k(m.strings[n].noteNames)));for(let n=0;n<a;n++)d=Math.floor(Math.random()*e.notes.length),s.notes.push(e.notes[d]),s.noteNames.push(e.noteNames[d]);return s};async function _(a){return a}let l=v(!1);function f(){l.value=!0}return{defineSingleNotes:r,getNote:_,isFunctionCalled:l,setFunctionCalled:f}}),R={class:"single-note-quiz"},U=["onClick"],j={class:"single-note-quiz-settings"},D=["disabled"],P=c("i",{class:"fa-solid fa-music fa-2xl"},null,-1),G=[P],H={class:"buttons"},J=["disabled"],K=["disabled"],W={__name:"SingleNoteQuiz",setup(m){const r=y(),_=B();let l="",f={},a=v(3),e=v(0),s=v(!1),d=v(!1),n=v("");const b=()=>{document.querySelectorAll(".note").forEach(o=>{o.classList.remove("selected")}),document.querySelector(".next-question").classList.remove("answer-correct")},w=()=>`Current progress: ${e.value}/${a.value}`,C=o=>{b(),f=_.defineSingleNotes(o),s.value=!0,d.value=!1,n.value="",e.value=1,setTimeout(r.playNote(f.notes[0]),3e3)},x=o=>{l=o.target.innerText,o.target.parentElement.querySelectorAll(".note").forEach(i=>{i.classList.remove("selected")}),o.target.classList.contains("note")&&o.target.classList.add("selected"),console.log(l)},Q=()=>{r.playNote(f.notes[e.value-1])},$=()=>{l==f.noteNames[e.value-1]?(d.value=!0,n.value="Correct!"):n.value=E()},L=()=>{b(),e.value+=1,e.value==a.value+1&&(e.value=0,s.value=!1),d.value=!1,n.value="",setTimeout(r.playNote(f.notes[e.value-1]),2e3)},E=()=>{document.querySelector(".quiz-message").classList.remove("hot","warm","cold");const o=r.notes.indexOf(f.noteNames[e.value-1]);return l==r.notes[o-1]||l==r.notes[o+1]?"hot":l==r.notes[o-2]||l==r.notes[o+2]?"warm":"cold"};return(o,i)=>(g(),p("div",R,[c("p",{class:h(["current",t(s)==!1?"current-hidden":""])},z(w()),3),c("div",{class:"notes",onClick:i[0]||(i[0]=u=>x(u))},[(g(!0),p(T,null,V(t(r).notes,u=>(g(),p("div",{class:"note",key:u,onClick:X=>(N(l)?l.value=u:l=u,o.isUserInput=!0)},z(u),9,U))),128))]),c("div",j,[A(c("input",{type:"number",id:"quiz-length","onUpdate:modelValue":i[1]||(i[1]=u=>N(a)?a.value=u:a=u),name:"quiz-length",min:"1",max:"25",required:"",onChange:i[2]||(i[2]=u=>N(s)?s.value=!1:s=!1)},null,544),[[F,t(a)]]),t(s)==!1?(g(),p("button",{key:0,onClick:i[3]||(i[3]=u=>C(t(a))),class:h(["quiz-button",t(s)==!1?"answer-correct":""])}," Start Quiz ",2)):S("",!0),t(s)==!0?(g(),p("button",{key:1,onClick:i[4]||(i[4]=u=>C(t(a))),class:"quiz-button"}," Restart Quiz ")):S("",!0)]),c("button",{class:"repeat-sound",onClick:Q,disabled:t(s)==!1||t(e)==t(a)+1},G,8,D),c("div",H,[c("button",{class:"check-answer quiz-button",onClick:$,disabled:t(s)==!1||t(e)==t(a)+1}," Check answer ",8,J),c("button",{class:h(["next-question quiz-button",t(d)==!0?"answer-correct":""]),disabled:t(d)==!1,onClick:L}," Next ",10,K)]),c("p",{class:h(["quiz-message",`${t(n)}`])},z(t(n)),3)]))}},ee={__name:"EarTrainerView",setup(m){return(r,_)=>(g(),p("div",null,[q(I,{"header-view":"eartrainer"}),q(M,{class:"instrument"}),q(W)]))}};export{ee as default};
