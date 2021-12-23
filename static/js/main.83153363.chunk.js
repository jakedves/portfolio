(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),n=a(3),s=a.n(n),c=(a(9),a(10),a(11),a(12),a(13),a(4)),r=a(0);function l(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),a=t[0];t[1];return Object(r.jsx)("div",{className:"home",children:Object(r.jsxs)("div",{className:"home-content",children:[Object(r.jsx)("h1",{className:"home-header",children:"Jake Davies"}),Object(r.jsx)("div",{className:"title-box",children:Object(r.jsx)("h3",{id:"my-title",children:["Software Engineer","iOS","Java","Web","Embedded Systems","Computer Scientist"][a]})})]})})}function d(e){var t=e.title,a=e.body;return Object(r.jsxs)("div",{className:"about-text",children:[Object(r.jsx)("h1",{className:"about-title",children:t}),Object(r.jsx)("h2",{className:"about-body",children:a})]})}function u(){return Object(r.jsx)("div",{className:"about",children:Object(r.jsx)(d,{title:"Hi, I'm Jake.",body:"I love experimenting with technology and trying new things."})})}function h(e){var t=e.tools,a=["yellow","orange","white","lightblue","skyblue"];return t.map((function(e){return Object(r.jsx)("div",{className:"tool",style:{background:e.color,color:a.includes(e.color)?"black":"white"},children:e.tool})}))}function m(e){var t=e.project,a=e.rightAligned;return Object(r.jsxs)("div",{className:"showcase-item ".concat(a?"right-aligned":"left-aligned"),children:[t.image?Object(r.jsx)("img",{src:t.image,alt:"".concat(t.name)}):null,Object(r.jsxs)("div",{className:"showcase-text",children:[Object(r.jsx)("strong",{children:t.name}),Object(r.jsx)("p",{children:t.desc}),t.tools?Object(r.jsx)(h,{tools:t.tools}):null]})]})}function j(e){return Object(r.jsx)("div",{className:"showcase",children:e.projects.map((function(e){return Object(r.jsx)(m,{project:e,rightAligned:!1})}))})}var b=a.p+"static/media/RecipeBuilderiOS.36eaa072.png",p=a.p+"static/media/SleepAndMood.db4ebf32.png",g=a.p+"static/media/WorldsApart.e7425338.png";function w(){var e=[{name:"Recipe Builder for iOS",desc:"Recipe Builder is the ultimate recipe-building app, made for iOS. It is simple. Fast. Easy to use.\n       Recipe Builder is an app that cuts out all the details of other recipe-building apps. No need to enter the cost\n       of a recipe, how many calories it has, or anything else you don't care about. Aimed at students, Recipe Builder is \n       the most convenient solution available. Download on the App Store today.",image:b,tools:[{tool:"Swift",color:"orange"},{tool:"SwiftUI",color:"blue"},{tool:"UIKit",color:"skyblue"},{tool:"Core Data",color:"blue"},{tool:"CloudKit",color:"skyblue"}]},{name:"Sleep & Mood Tracker for Desktop",desc:"This application was built for Windows and macOS devices, and is a Java application that encourages users\n      to be more healthy and meet their sleep requirements, by logging their sleep against their mood and providing insights.",image:p,tools:[{tool:"Java",color:"orange"},{tool:"Java Swing",color:"yellow"},{tool:"Scrum Methodology",color:"blue"},{tool:"SQL",color:"blue"}]},{name:"GMTK 2021 Game Jam: Worlds Apart",desc:"This game was a submission for a Game Jam, where we have 48 hours to design and develop a game based on the theme:\n       'Joined Together'. This game was built using Unity3D, along with C# and developed with pair programming. The concept behind\n       the game is that there's two worlds that you exist in simultaneously, and you're trying to bring them back together. Each world\n       replies on you to solve a puzzle that's based in the other world to progress.",image:g,tools:[{tool:"C#",color:"purple"},{tool:"Unity 3D",color:"grey"},{tool:"Unity Animator",color:"grey"},{tool:"Scripting",color:"red"},{tool:"Pair Programming",color:"green"},{tool:"Level Design",color:"blue"}]},{name:"This Website!",desc:"This website is my portfolio. Built using HTML, CSS, JavaScript and React.",tools:[{tool:"HTML",color:"red"},{tool:"CSS",color:"blue"},{tool:"JavaScript",color:"yellow"},{tool:"React",color:"blue"}]}];return Object(r.jsxs)("div",{className:"projects",children:[Object(r.jsx)("h1",{className:"section-title",children:"Take a look."}),Object(r.jsx)(j,{projects:e})]})}function f(e){var t=e.unit;return Object(r.jsxs)("div",{className:"unit-card",children:[Object(r.jsx)("a",{href:t.unitLink,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("h4",{className:"unit-card-head",children:t.unitTitle})}),Object(r.jsx)("p",{className:"unit-card-desc",children:t.unitDesc}),Object(r.jsxs)("footer",{className:"unit-card-grade",children:["Grade: ",t.unitGrade?t.unitGrade:"N/A"]})]})}function O(){return Object(r.jsxs)("section",{className:"education",children:[Object(r.jsx)("h1",{className:"section-title",children:"Education"}),Object(r.jsx)("section",{className:"unit-card-container",children:[{unitTitle:"Machine Learning",unitDesc:"A look into a wide variety of techniques used in modern machine learning. Including deep neural networks, and reinforcement learning.\n      This unit had a practical focus on libraries such as sklearn, and TensorFlow.",unitLink:"https://www.bath.ac.uk/catalogues/2021-2022/cm/CM20315.html"},{unitTitle:"Data Structures & Algorithms",unitDesc:"This unit was a comprehensive look at the ways we can analyse different data structures and algorithms, and included looking at some more\n      advanced and abstract types, and when to apply them.",unitLink:"https://www.bath.ac.uk/catalogues/2021-2022/cm/CM20254.html"},{unitTitle:"Principles of Programming",unitDesc:"A practical based introduction to writing high quality software, with object orientation in C, Java and Python. This unit covered GUIs,\n      multi-threading, networking, object orientation, memory management and was driven by practical based assignments.",unitLink:"https://www.bath.ac.uk/catalogues/2021-2022/cm/CM10228.html",unitGrade:"87%"},{unitTitle:"Visual Computing",unitDesc:"A study of the fundamental concepts used for graphics rendering, image manipulation, animation and more. This unit provided a way to \n      interact with graphics in WebGL, using Three.js and Python Labs to apply these concepts.",unitLink:"https://www.bath.ac.uk/catalogues/2021-2022/cm/CM20219.html"}].map((function(e){return Object(r.jsx)(f,{unit:e})}))})]})}function x(){return Object(r.jsxs)("section",{className:"private-projects",children:[Object(r.jsx)("div",{className:"image-row",children:[{path:"",caption:""}].map((function(e){return Object(r.jsx)("img",{src:Image.path,caption:e.caption,alt:e.caption})}))}),Object(r.jsx)("h1",{className:"section-title",children:"Want to see more?"}),Object(r.jsx)("h5",{className:"teaser-text",children:"I have numerous, fully documented University projects that I can't make public for plagiarism reasons,\n  however, I can still show off the code so don't hesitate to ask to see it!"})]})}function v(){return Object(r.jsx)("div",{className:"contact-form",children:Object(r.jsx)("a",{className:"send-email",href:"mailto:jakedves@gmail.com",children:Object(r.jsx)("h4",{children:"Send me an email"})})})}var y=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(u,{}),Object(r.jsx)(w,{}),Object(r.jsx)(O,{}),Object(r.jsx)(x,{}),Object(r.jsx)(v,{})]})};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.83153363.chunk.js.map