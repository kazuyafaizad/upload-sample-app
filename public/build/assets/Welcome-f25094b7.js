import{T as g,o,f as a,a as b,u as l,b as t,e as u,t as r,F as d,A as h,B as p,Z as m}from"./app-21e7c864.js";const x={class:"relative sm:flex min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"},_={class:"w-full max-w-7xl mx-auto p-6 lg:p-8"},f={class:"mt-16"},y=["onSubmit"],v={class:"grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-8"},w={class:"relative scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"},k=p('<div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 stroke-red-500"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Drag or upload your files here</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"></p></div>',1),q={class:"text-red-700"},S=t("button",{type:"submit",class:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"},"UPLOAD",-1),B={class:"flex justify-center mt-16 px-0 sm:items-center sm:justify-between"},N={class:"table-auto text-gray-900 bg-white w-full"},z=t("thead",null,[t("tr",null,[t("th",{class:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"},"Time."),t("th",{class:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"},"File Name"),t("th",{class:"px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"},"Status")])],-1),A={class:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},F={class:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},T={class:"px-5 py-5 border-b border-gray-200 bg-white text-sm"},E={__name:"Welcome",setup(j){const s=g({file:""});function n(){s.post(route("upload"))}return(c,i)=>(o(),a(d,null,[b(l(m),{title:"Welcome"}),t("div",x,[t("div",_,[t("div",f,[t("form",{onSubmit:u(n,["prevent"])},[t("div",v,[t("div",w,[k,t("input",{type:"file",name:"file",id:"csv",onInput:i[0]||(i[0]=e=>l(s).file=e.target.files[0]),required:"required",multiple:"multiple",class:"absolute w-full h-full top-0 left-0 right-0 bottom-0"},null,32)])]),t("p",q,r(l(s).errors.file),1),S],40,y)]),t("div",B,[t("table",N,[z,t("tbody",null,[(o(!0),a(d,null,h(c.$page.props.uploaded,e=>(o(),a("tr",{key:e.id},[t("td",A,r(e.created_at),1),t("td",F,r(e.FILENAME),1),t("td",T,r(e.STATUS),1)]))),128))])])])])])],64))}};export{E as default};
