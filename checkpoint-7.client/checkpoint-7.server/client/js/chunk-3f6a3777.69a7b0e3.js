(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f6a3777"],{"345b":function(t,e,a){"use strict";a("9ad5")},"5bd8":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const s=Object(c["I"])("data-v-5a7d8908");Object(c["u"])("data-v-5a7d8908");const d={class:"BugPage container-fluid"},n={class:"row"},l=Object(c["h"])("div",{class:"col-12 d-flex justify-content-between align-items-center"},[Object(c["h"])("h2",{class:"pl-3 mt-3"}," Bugs "),Object(c["h"])("i",{class:"far fa-plus-square pr-3 mt-3","data-toggle":"modal","data-target":"#addBugModal"})],-1),i={class:"modal fade",id:"addBugModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o={class:"modal-dialog"},r={class:"modal-content"},u=Object(c["h"])("div",{class:"modal-header"},[Object(c["h"])("h5",{class:"modal-title",id:"exampleModalLabel"}," Add A Bug "),Object(c["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["h"])("span",{"aria-hidden":"true",class:"color"},"×")])],-1),b={class:"modal-body"},g=Object(c["h"])("button",{type:"submit",class:"btn btn-outline-secondary my-2"}," Submit Bug ",-1),p=Object(c["f"])('<div class="row text p-2 my-3 mx-2" data-v-5a7d8908><div class="col-3 text-center p-2 d-flex align-items-center justify-content-center" data-v-5a7d8908><h5 class="mb-0" data-v-5a7d8908> Bug Title </h5></div><div class="col-3 text-center p-2 d-flex align-items-center justify-content-center" data-v-5a7d8908><h5 class="mb-0" data-v-5a7d8908> Reported By </h5></div><div class="col-3 text-center p-2 d-flex align-items-center justify-content-center" data-v-5a7d8908><h5 class="mb-0" data-v-5a7d8908> Status </h5></div><div class="col-3 text-center p-2 d-flex align-items-center justify-content-center" data-v-5a7d8908><h5 class="mb-0" data-v-5a7d8908> Last Modified </h5></div></div>',1);Object(c["s"])();const h=s((function(t,e,a,s,h,j){const v=Object(c["y"])("BugComponent");return Object(c["r"])(),Object(c["e"])("div",d,[Object(c["h"])("div",n,[l,Object(c["h"])("div",i,[Object(c["h"])("div",o,[Object(c["h"])("div",r,[u,Object(c["h"])("div",b,[Object(c["h"])("form",{onSubmit:e[3]||(e[3]=Object(c["H"])(t=>s.createBug(s.profile.name),["prevent"]))},[Object(c["G"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>s.state.newBug.title=t),placeholder:"Bug Title",class:"my-2"},null,512),[[c["D"],s.state.newBug.title]]),Object(c["G"])(Object(c["h"])("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.state.newBug.description=t),cols:"35",rows:"10",placeholder:"Bug Description",class:"my-2"},null,512),[[c["D"],s.state.newBug.description]]),g],32)])])])])]),p,(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(s.bugs,t=>(Object(c["r"])(),Object(c["e"])(v,{"bug-prop":t,key:t._id},null,8,["bug-prop"]))),128))])}));var j=a("83fc"),v=a("d2fe"),m={name:"BugPage",setup(){const t=Object(c["v"])({newBug:{}});return Object(c["p"])(()=>{v["a"].getAllBugs()}),{state:t,bugs:Object(c["c"])(()=>j["a"].bugs),profile:Object(c["c"])(()=>j["a"].profile),createBug(e){t.newBug.reportedBy=e,v["a"].createBug(t.newBug),t.newBug={}}}},components:{}};a("345b");m.render=h,m.__scopeId="data-v-5a7d8908";e["default"]=m},"9ad5":function(t,e,a){},d2fe:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var c=a("83fc"),s=a("2b20"),d=a("8a4e");class n{async deleteBug(t,e){try{await s["a"].put("/api/bugs/"+t,e),this.getActiveBug(t)}catch(a){d["a"].error(a)}}async editBug(t,e){try{await s["a"].put("/api/bugs/"+t,e),this.getActiveBug(t)}catch(a){d["a"].error(a)}}async getActiveBug(t){try{const e=await s["a"].get("/api/bugs/"+t);c["a"].activeBug=e.data}catch(e){d["a"].error(e)}}async createBug(t){try{await s["a"].post("/api/bugs",t),this.getAllBugs()}catch(e){d["a"].error(e)}}async getAllBugs(){try{const t=await s["a"].get("/api/bugs");c["a"].bugs=t.data}catch(t){d["a"].error(t)}}}const l=new n}}]);