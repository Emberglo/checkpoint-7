(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15248152"],{"0770":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const s=Object(c["I"])("data-v-be78e082");Object(c["u"])("data-v-be78e082");const d={class:"ActiveBug container-fluid"},o={class:"row justify-content-center"},l={class:"col-12"},b={class:"mt-3 align-self-center text-center"},n={class:"row flex-column justify-content-center align-items-center"},i={class:"col-10 border-top border-bottom mt-4"},u={class:"col-8"},r={class:"py-4"},g={class:"row py-3 justify-content-between"},j={class:"col ml-4"},p={class:"ml-5 pl-1"},O={class:"col d-flex justify-content-end mr-5"},m=Object(c["h"])("button",{class:"btn btn-sm btn-outline-secondary","data-toggle":"modal","data-target":"#addNoteModal"}," Add Note ",-1),h=Object(c["h"])("button",{class:"btn btn-sm btn-outline-secondary ml-2","data-toggle":"modal","data-target":"#editBugModal"}," Edit Bug ",-1),B={class:"modal fade",id:"editBugModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},y={class:"modal-dialog"},v={class:"modal-content"},f=Object(c["h"])("div",{class:"modal-header"},[Object(c["h"])("h5",{class:"modal-title",id:"exampleModalLabel"}," Edit Bug "),Object(c["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["h"])("span",{"aria-hidden":"true",class:"color"},"×")])],-1),w={class:"modal-body"},N=Object(c["h"])("button",{type:"submit",class:"btn btn-outline-secondary my-2"}," Submit Bug ",-1),x={class:"modal fade",id:"addNoteModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},A={class:"modal-dialog"},I={class:"modal-content"},M=Object(c["h"])("div",{class:"modal-header"},[Object(c["h"])("h5",{class:"modal-title",id:"exampleModalLabel"}," Add Note "),Object(c["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["h"])("span",{"aria-hidden":"true",class:"color"},"×")])],-1),k={class:"modal-body"},C=Object(c["h"])("button",{type:"submit",class:"btn btn-outline-secondary my-2"}," Submit Note ",-1);Object(c["s"])();const D=s((function(e,t,a,s,D,L){const S=Object(c["y"])("NoteComponent");return Object(c["r"])(),Object(c["e"])("div",d,[Object(c["h"])("div",o,[Object(c["h"])("div",l,[Object(c["h"])("h2",b,Object(c["B"])(s.bug.title),1)])]),Object(c["h"])("div",n,[Object(c["h"])("div",i,[Object(c["h"])("div",u,[Object(c["h"])("p",r,Object(c["B"])(s.bug.description),1)])])]),Object(c["h"])("div",g,[Object(c["h"])("div",j,[Object(c["h"])("p",p," Open Issue: "+Object(c["B"])(s.bug.status),1)]),Object(c["h"])("div",O,[m,h,Object(c["h"])("button",{class:"btn btn-sm btn-outline-secondary ml-2 mr-4",onClick:t[1]||(t[1]=e=>s.deleteBug())}," Close Bug ")]),Object(c["h"])("div",B,[Object(c["h"])("div",y,[Object(c["h"])("div",v,[f,Object(c["h"])("div",w,[Object(c["h"])("form",{onSubmit:t[4]||(t[4]=Object(c["H"])(e=>s.editBug(),["prevent"]))},[Object(c["G"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>s.state.editedBug.title=e),placeholder:"Bug Title",class:"my-2"},null,512),[[c["D"],s.state.editedBug.title]]),Object(c["G"])(Object(c["h"])("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.state.editedBug.description=e),cols:"35",rows:"10",placeholder:"Bug Description",class:"my-2"},null,512),[[c["D"],s.state.editedBug.description]]),N],32)])])])]),Object(c["h"])("div",x,[Object(c["h"])("div",A,[Object(c["h"])("div",I,[M,Object(c["h"])("div",k,[Object(c["h"])("form",{onSubmit:t[6]||(t[6]=Object(c["H"])(e=>s.addNote(s.profile.name),["prevent"]))},[Object(c["G"])(Object(c["h"])("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>s.state.newNote.body=e),cols:"35",rows:"10",placeholder:"Note",class:"my-2"},null,512),[[c["D"],s.state.newNote.body]]),C],32)])])])])]),(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(s.notes,e=>(Object(c["r"])(),Object(c["e"])(S,{"note-prop":e,"bug-prop":s.bug,key:e._id},null,8,["note-prop","bug-prop"]))),128))])}));var L=a("83fc"),S=a("d2fe"),G=a("4be5"),U=a("6c02"),V={name:"ActiveBug",setup(){const e=Object(c["v"])({editedBug:{},deletedBug:{},newNote:{}}),t=Object(U["c"])();return Object(c["p"])(async()=>{await S["a"].getActiveBug(t.params.bugId),await G["a"].getBugNotes(t.params.bugId)}),{state:e,bug:Object(c["c"])(()=>L["a"].activeBug),profile:Object(c["c"])(()=>L["a"].profile),notes:Object(c["c"])(()=>L["a"].notes),editBug(){S["a"].editBug(t.params.bugId,e.editedBug),e.editedBug={}},deleteBug(){e.deletedBug.status=!0,S["a"].deleteBug(t.params.bugId,e.deletedBug)},addNote(a){e.newNote.creatorName=a,G["a"].addNote(t.params.bugId,e.newNote)}}},components:{}};a("7a0d");V.render=D,V.__scopeId="data-v-be78e082";t["default"]=V},"7a0d":function(e,t,a){"use strict";a("b70e")},b70e:function(e,t,a){},d2fe:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("83fc"),s=a("2b20"),d=a("8a4e");class o{async deleteBug(e,t){try{await s["a"].put("/api/bugs/"+e,t),this.getActiveBug(e)}catch(a){d["a"].error(a)}}async editBug(e,t){try{await s["a"].put("/api/bugs/"+e,t),this.getActiveBug(e)}catch(a){d["a"].error(a)}}async getActiveBug(e){try{const t=await s["a"].get("/api/bugs/"+e);c["a"].activeBug=t.data}catch(t){d["a"].error(t)}}async createBug(e){try{await s["a"].post("/api/bugs",e),this.getAllBugs()}catch(t){d["a"].error(t)}}async getAllBugs(){try{const e=await s["a"].get("/api/bugs");c["a"].bugs=e.data}catch(e){d["a"].error(e)}}}const l=new o}}]);