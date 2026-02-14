(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const u=[{id:"j1",title:"SDE Intern",company:"Flipkart",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Java","Python","Data Structures","Algorithms"],source:"LinkedIn",postedDaysAgo:1,salaryRange:"₹25k–₹50k/month Internship",applyUrl:"https://jobs.lever.co/flipkart/j1",description:"Work on scalable systems serving millions of users. You will build features for our e-commerce platform alongside senior engineers. Strong problem-solving skills and fundamentals in CS required."},{id:"j2",title:"Graduate Engineer Trainee",company:"TCS",location:"Mumbai",mode:"Onsite",experience:"Fresher",skills:["Java","SQL","Spring Boot","Git"],source:"Naukri",postedDaysAgo:3,salaryRange:"3–5 LPA",applyUrl:"https://careers.tcs.com/job/j2",description:"Join our graduate program and get trained on enterprise technologies. You will be assigned to live projects after initial onboarding. Candidates from engineering backgrounds preferred."},{id:"j3",title:"Junior Backend Developer",company:"Razorpay",location:"Bangalore",mode:"Hybrid",experience:"0-1",skills:["Python","PostgreSQL","Redis","AWS"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"6–10 LPA",applyUrl:"https://razorpay.com/careers/j3",description:"Build payment infrastructure that powers millions of transactions. You will work on APIs, background jobs, and data pipelines. Prior internship or project experience in backend development required."},{id:"j4",title:"Frontend Intern",company:"Swiggy",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["React","JavaScript","HTML","CSS"],source:"Indeed",postedDaysAgo:2,salaryRange:"₹15k–₹40k/month Internship",applyUrl:"https://careers.swiggy.com/jobs/j4",description:"Contribute to our consumer and partner apps. You will build responsive UIs and integrate with backend APIs. Knowledge of React or similar frameworks is a plus."},{id:"j5",title:"QA Intern",company:"Infosys",location:"Pune",mode:"Onsite",experience:"Fresher",skills:["Manual Testing","SQL","JIRA","Test Cases"],source:"Naukri",postedDaysAgo:5,salaryRange:"₹20k–₹35k/month Internship",applyUrl:"https://career.infosys.com/job/j5",description:"Learn software quality assurance practices on real projects. You will write test cases, execute test plans, and report bugs. Good attention to detail and analytical thinking required."},{id:"j6",title:"Data Analyst Intern",company:"Amazon",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["SQL","Python","Excel","Tableau"],source:"LinkedIn",postedDaysAgo:1,salaryRange:"₹30k–₹55k/month Internship",applyUrl:"https://amazon.jobs/j6",description:"Support analytics for our India business. You will query large datasets, build reports, and derive actionable insights. Strong SQL and basic Python or R expected."},{id:"j7",title:"Java Developer (0-1)",company:"Wipro",location:"Chennai",mode:"Hybrid",experience:"0-1",skills:["Java","Spring","Hibernate","REST APIs"],source:"Indeed",postedDaysAgo:4,salaryRange:"4–6 LPA",applyUrl:"https://careers.wipro.com/j7",description:"Develop enterprise applications for our banking and retail clients. You will work on REST APIs and microservices. Training provided on client-specific technologies."},{id:"j8",title:"Python Developer (Fresher)",company:"Zoho",location:"Chennai",mode:"Onsite",experience:"Fresher",skills:["Python","Django","PostgreSQL","Linux"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"3–5 LPA",applyUrl:"https://www.zoho.com/careers/j8.html",description:"Join our product teams building SaaS tools. You will write clean Python code and contribute to features used by millions globally. Strong fundamentals and eagerness to learn required."},{id:"j9",title:"React Developer (1-3)",company:"Freshworks",location:"Chennai",mode:"Remote",experience:"1-3",skills:["React","TypeScript","Redux","REST APIs"],source:"LinkedIn",postedDaysAgo:2,salaryRange:"10–18 LPA",applyUrl:"https://www.freshworks.com/company/careers/j9",description:"Build customer engagement products used by 50,000+ companies. You will own features end-to-end, write tests, and participate in code reviews. Prior React experience mandatory."},{id:"j10",title:"SDE Intern",company:"Microsoft",location:"Hyderabad",mode:"Hybrid",experience:"Fresher",skills:["C++","C#","Algorithms","Problem Solving"],source:"LinkedIn",postedDaysAgo:6,salaryRange:"₹40k–₹80k/month Internship",applyUrl:"https://careers.microsoft.com/j10",description:"Work on Azure, Office 365, or Windows products. You will pair with mentors and ship code to production. Competitive programming or strong CS fundamentals preferred."},{id:"j11",title:"Graduate Engineer Trainee",company:"Accenture",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Java","SQL","Agile","Cloud Basics"],source:"Naukri",postedDaysAgo:7,salaryRange:"3–5 LPA",applyUrl:"https://www.accenture.com/in-en/careers/j11",description:"Join our technology practice and work on digital transformation projects. Training on cloud, DevOps, and modern development practices. B.E/B.Tech in CS or related required."},{id:"j12",title:"Frontend Intern",company:"CRED",location:"Bangalore",mode:"Remote",experience:"Fresher",skills:["React","JavaScript","CSS","Web Performance"],source:"LinkedIn",postedDaysAgo:1,salaryRange:"₹35k–₹60k/month Internship",applyUrl:"https://cred.club/careers/j12",description:"Build beautiful, performant UIs for our fintech app. You will work on React components and ensure great UX. Portfolio of web projects strongly preferred."},{id:"j13",title:"Junior Backend Developer",company:"Juspay",location:"Bangalore",mode:"Hybrid",experience:"0-1",skills:["Java","Kotlin","PostgreSQL","Kafka"],source:"Indeed",postedDaysAgo:3,salaryRange:"6–10 LPA",applyUrl:"https://juspay.io/careers/j13",description:"Build payment processing systems handling high transaction volumes. You will work on APIs and event-driven architectures. Prior internship in backend development required."},{id:"j14",title:"Data Analyst Intern",company:"PhonePe",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["SQL","Python","Data Visualization","Statistics"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"₹25k–₹45k/month Internship",applyUrl:"https://www.phonepe.com/careers/j14",description:"Analyze user behaviour and transaction data to drive product decisions. You will build dashboards and run A/B test analysis. Strong analytical and communication skills required."},{id:"j15",title:"Java Developer (0-1)",company:"Capgemini",location:"Mumbai",mode:"Onsite",experience:"0-1",skills:["Java","Spring Boot","Microservices","Docker"],source:"Naukri",postedDaysAgo:8,salaryRange:"4–6 LPA",applyUrl:"https://www.capgemini.com/in-en/careers/j15",description:"Develop solutions for our global clients across banking and manufacturing. You will work in agile squads and deploy to cloud. Training on client domain provided."},{id:"j16",title:"React Developer (1-3)",company:"Postman",location:"Bangalore",mode:"Remote",experience:"1-3",skills:["React","TypeScript","Node.js","GraphQL"],source:"LinkedIn",postedDaysAgo:2,salaryRange:"12–20 LPA",applyUrl:"https://www.postman.com/careers/j16",description:"Build the API platform used by 25M+ developers. You will work on our web application and design systems. Strong React and TypeScript experience expected."},{id:"j17",title:"QA Intern",company:"Paytm",location:"Noida",mode:"Hybrid",experience:"Fresher",skills:["Automation","Selenium","API Testing","SQL"],source:"Indeed",postedDaysAgo:4,salaryRange:"₹18k–₹35k/month Internship",applyUrl:"https://paytm.com/careers/j17",description:"Automate test cases for our payment and fintech products. You will learn test automation frameworks and CI/CD. Basic programming knowledge required."},{id:"j18",title:"Python Developer (Fresher)",company:"Thoughtworks",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Python","TDD","Clean Code","Pair Programming"],source:"LinkedIn",postedDaysAgo:5,salaryRange:"5–8 LPA",applyUrl:"https://www.thoughtworks.com/careers/j18",description:"Join our graduate program and work on client projects using agile practices. You will pair with senior developers and learn TDD. Strong problem-solving and communication skills required."},{id:"j19",title:"SDE Intern",company:"Google",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["C++","Java","Algorithms","System Design Basics"],source:"LinkedIn",postedDaysAgo:10,salaryRange:"₹80k–₹1.2L/month Internship",applyUrl:"https://careers.google.com/jobs/j19",description:"Work on products used by billions. You will be matched with a team based on interests and skills. Strong CS fundamentals and coding skills required. Apply early."},{id:"j20",title:"Graduate Engineer Trainee",company:"Cognizant",location:"Chennai",mode:"Onsite",experience:"Fresher",skills:["Java","C#","SQL","SDLC"],source:"Naukri",postedDaysAgo:6,salaryRange:"3–5 LPA",applyUrl:"https://careers.cognizant.com/j20",description:"Join our GenC program and get trained on full-stack development. You will work on client projects after training. B.E/B.Tech or MCA required."},{id:"j21",title:"Junior Backend Developer",company:"ShareChat",location:"Bangalore",mode:"Remote",experience:"0-1",skills:["Python","Django","Redis","PostgreSQL"],source:"Indeed",postedDaysAgo:1,salaryRange:"6–10 LPA",applyUrl:"https://sharechat.com/careers/j21",description:"Build backend services for our social media platform serving 400M+ users. You will work on APIs and data pipelines. Prior project or internship experience in backend required."},{id:"j22",title:"Frontend Intern",company:"Razorpay",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["React","TypeScript","Tailwind CSS","REST APIs"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"₹30k–₹50k/month Internship",applyUrl:"https://razorpay.com/careers/j22",description:"Build dashboards and internal tools for our finance and operations teams. You will work with React and design systems. Good understanding of JavaScript and web fundamentals required."},{id:"j23",title:"Data Analyst Intern",company:"Swiggy",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["SQL","Python","Excel","Looker"],source:"Indeed",postedDaysAgo:3,salaryRange:"₹22k–₹42k/month Internship",applyUrl:"https://careers.swiggy.com/jobs/j23",description:"Analyze delivery and restaurant data to improve operations. You will build reports and support business decisions. Strong SQL and analytical mindset required."},{id:"j24",title:"Java Developer (0-1)",company:"IBM",location:"Bangalore",mode:"Hybrid",experience:"0-1",skills:["Java","Cloud","Kubernetes","Microservices"],source:"LinkedIn",postedDaysAgo:7,salaryRange:"5–8 LPA",applyUrl:"https://www.ibm.com/in-en/careers/j24",description:"Work on IBM Cloud and Watson products. You will develop microservices and integrate with AI services. Training on IBM technologies provided."},{id:"j25",title:"React Developer (1-3)",company:"BrowserStack",location:"Mumbai",mode:"Remote",experience:"1-3",skills:["React","JavaScript","Testing","CI/CD"],source:"Indeed",postedDaysAgo:4,salaryRange:"10–18 LPA",applyUrl:"https://www.browserstack.com/careers/j25",description:"Build the testing platform used by developers worldwide. You will work on our web app and developer tools. Prior React and testing experience required."},{id:"j26",title:"SDE Intern",company:"Intuit",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Java","Python","Databases","Web Development"],source:"LinkedIn",postedDaysAgo:2,salaryRange:"₹45k–₹75k/month Internship",applyUrl:"https://www.intuit.com/careers/j26",description:"Work on TurboTax or QuickBooks products. You will build features used by millions of small businesses. Strong fundamentals and willingness to learn required."},{id:"j27",title:"Graduate Engineer Trainee",company:"LTIMindtree",location:"Pune",mode:"Onsite",experience:"Fresher",skills:["Java","Angular","SQL","Agile"],source:"Naukri",postedDaysAgo:9,salaryRange:"3–5 LPA",applyUrl:"https://www.ltimindtree.com/careers/j27",description:"Join our graduate program and work on digital transformation projects. Training on full-stack development. B.Tech in CS, IT, or ECE required."},{id:"j28",title:"Junior Backend Developer",company:"Unacademy",location:"Bangalore",mode:"Remote",experience:"0-1",skills:["Node.js","MongoDB","Redis","AWS"],source:"Indeed",postedDaysAgo:1,salaryRange:"5–9 LPA",applyUrl:"https://unacademy.com/careers/j28",description:"Build scalable backend for our learning platform. You will work on APIs and real-time features. Prior Node.js or similar backend experience preferred."},{id:"j29",title:"QA Intern",company:"MakeMyTrip",location:"Gurgaon",mode:"Hybrid",experience:"Fresher",skills:["Manual Testing","Mobile Testing","JIRA","Test Planning"],source:"Naukri",postedDaysAgo:5,salaryRange:"₹20k–₹38k/month Internship",applyUrl:"https://careers.makemytrip.com/j29",description:"Test our travel and hotel booking applications. You will write test cases and perform regression testing. Attention to detail and good communication required."},{id:"j30",title:"Python Developer (Fresher)",company:"Dunzo",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Python","Django","Celery","PostgreSQL"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"4–6 LPA",applyUrl:"https://www.dunzo.com/careers/j30",description:"Build backend services for our hyperlocal delivery platform. You will work on order management and logistics APIs. Strong Python fundamentals required."},{id:"j31",title:"React Developer (1-3)",company:"Hike",location:"Bangalore",mode:"Remote",experience:"1-3",skills:["React","Redux","WebSockets","Performance"],source:"Indeed",postedDaysAgo:6,salaryRange:"10–16 LPA",applyUrl:"https://hike.in/careers/j31",description:"Build web experiences for our gaming and social products. You will work on SPAs and real-time features. Prior React and state management experience required."},{id:"j32",title:"SDE Intern",company:"Ola",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Java","Kotlin","Android Basics","REST APIs"],source:"LinkedIn",postedDaysAgo:3,salaryRange:"₹35k–₹60k/month Internship",applyUrl:"https://www.olacabs.com/careers/j32",description:"Work on our ride-hailing or electric vehicle products. You will build features used by millions daily. Strong problem-solving and CS fundamentals required."},{id:"j33",title:"Data Analyst Intern",company:"Zomato",location:"Gurgaon",mode:"Hybrid",experience:"Fresher",skills:["SQL","Python","Excel","Power BI"],source:"Indeed",postedDaysAgo:4,salaryRange:"₹25k–₹45k/month Internship",applyUrl:"https://www.zomato.com/careers/j33",description:"Analyze restaurant and delivery data to drive growth. You will build dashboards and support experiments. Strong SQL and analytical skills required."},{id:"j34",title:"Graduate Engineer Trainee",company:"Tech Mahindra",location:"Hyderabad",mode:"Onsite",experience:"Fresher",skills:["Java","Python","SQL","Communication"],source:"Naukri",postedDaysAgo:8,salaryRange:"3–5 LPA",applyUrl:"https://www.techmahindra.com/careers/j34",description:"Join our campus hiring program. You will be trained and deployed on client projects. B.E/B.Tech in any engineering stream required."},{id:"j35",title:"Junior Backend Developer",company:"Groww",location:"Bangalore",mode:"Remote",experience:"0-1",skills:["Go","PostgreSQL","Redis","gRPC"],source:"LinkedIn",postedDaysAgo:2,salaryRange:"6–10 LPA",applyUrl:"https://groww.in/careers/j35",description:"Build fintech infrastructure for our investing platform. You will work on high-throughput APIs. Prior backend internship or strong projects required."},{id:"j36",title:"Frontend Intern",company:"Instamojo",location:"Bangalore",mode:"Remote",experience:"Fresher",skills:["React","JavaScript","HTML","CSS"],source:"Indeed",postedDaysAgo:5,salaryRange:"₹18k–₹35k/month Internship",applyUrl:"https://www.instamojo.com/careers/j36",description:"Build merchant dashboards and payment flows. You will work with React and integrate with APIs. Good JavaScript and web basics required."},{id:"j37",title:"Java Developer (0-1)",company:"Oracle",location:"Bangalore",mode:"Hybrid",experience:"0-1",skills:["Java","Spring","Oracle DB","Cloud"],source:"LinkedIn",postedDaysAgo:7,salaryRange:"6–10 LPA",applyUrl:"https://www.oracle.com/in/corporate/careers/j37",description:"Work on Oracle Cloud or database products. You will develop enterprise applications. Training on Oracle stack provided. B.Tech required."},{id:"j38",title:"React Developer (1-3)",company:"CleverTap",location:"Mumbai",mode:"Hybrid",experience:"1-3",skills:["React","TypeScript","D3.js","Analytics"],source:"Indeed",postedDaysAgo:1,salaryRange:"10–18 LPA",applyUrl:"https://clevertap.com/careers/j38",description:"Build analytics and engagement dashboards for marketers. You will work on data visualization and complex UIs. Prior React and charting library experience required."},{id:"j39",title:"QA Intern",company:"Dream11",location:"Mumbai",mode:"Hybrid",experience:"Fresher",skills:["Manual Testing","API Testing","Postman","Test Cases"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"₹25k–₹45k/month Internship",applyUrl:"https://www.dream11.com/careers/j39",description:"Test our fantasy sports platform. You will write and execute test cases for web and mobile. Interest in sports and gaming a plus."},{id:"j40",title:"Python Developer (Fresher)",company:"Red Hat",location:"Pune",mode:"Hybrid",experience:"Fresher",skills:["Python","Linux","Open Source","Automation"],source:"LinkedIn",postedDaysAgo:9,salaryRange:"5–8 LPA",applyUrl:"https://www.redhat.com/en/jobs/j40",description:"Contribute to open source projects and Red Hat products. You will write Python automation and tools. Passion for Linux and open source required."},{id:"j41",title:"SDE Intern",company:"Adobe",location:"Noida",mode:"Hybrid",experience:"Fresher",skills:["C++","JavaScript","Algorithms","Creative Tools"],source:"LinkedIn",postedDaysAgo:4,salaryRange:"₹50k–₹90k/month Internship",applyUrl:"https://careers.adobe.com/j41",description:"Work on Creative Cloud or Document Cloud products. You will build features for millions of creatives. Strong algorithms and problem-solving required."},{id:"j42",title:"Data Analyst Intern",company:"Flipkart",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["SQL","Python","Excel","Statistics"],source:"Indeed",postedDaysAgo:2,salaryRange:"₹28k–₹50k/month Internship",applyUrl:"https://jobs.lever.co/flipkart/j42",description:"Analyze e-commerce data to optimize supply chain and recommendations. You will build reports and support data-driven decisions. Strong SQL required."},{id:"j43",title:"Junior Backend Developer",company:"Mediabrand",location:"Mumbai",mode:"Remote",experience:"0-1",skills:["Node.js","MongoDB","AWS","REST APIs"],source:"Naukri",postedDaysAgo:6,salaryRange:"4–7 LPA",applyUrl:"https://mediabrand.com/careers/j43",description:"Build backend for our media and advertising platform. You will work on APIs and data processing. Prior Node.js or Python backend experience preferred."},{id:"j44",title:"Graduate Engineer Trainee",company:"HCLTech",location:"Noida",mode:"Onsite",experience:"Fresher",skills:["Java","C","SQL","Networking Basics"],source:"Naukri",postedDaysAgo:10,salaryRange:"3–5 LPA",applyUrl:"https://www.hcltech.com/careers/j44",description:"Join our engineering graduate program. You will be trained and assigned to IT services projects. B.Tech in CS, IT, or ECE required."},{id:"j45",title:"React Developer (1-3)",company:"Mercari",location:"Bangalore",mode:"Remote",experience:"1-3",skills:["React","TypeScript","GraphQL","Mobile Web"],source:"LinkedIn",postedDaysAgo:3,salaryRange:"12–20 LPA",applyUrl:"https://careers.mercari.com/j45",description:"Build the Indian version of our marketplace app. You will work on React web and PWA. Prior React and TypeScript experience required."},{id:"j46",title:"Frontend Intern",company:"Practo",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["React","JavaScript","CSS","Responsive Design"],source:"Indeed",postedDaysAgo:1,salaryRange:"₹22k–₹40k/month Internship",applyUrl:"https://www.practo.com/careers/j46",description:"Build patient and doctor-facing web applications. You will work on healthcare UI components. Good JavaScript and React basics required."},{id:"j47",title:"Java Developer (0-1)",company:"SAP",location:"Bangalore",mode:"Hybrid",experience:"0-1",skills:["Java","SAP Cloud","REST","SQL"],source:"LinkedIn",postedDaysAgo:5,salaryRange:"6–10 LPA",applyUrl:"https://jobs.sap.com/j47",description:"Develop extensions for SAP Cloud Platform. You will work with SAP APIs and build integrations. Training on SAP technologies provided."},{id:"j48",title:"QA Intern",company:"Slack",location:"Pune",mode:"Remote",experience:"Fresher",skills:["Manual Testing","Slack API","Documentation","Bug Reporting"],source:"LinkedIn",postedDaysAgo:7,salaryRange:"₹40k–₹70k/month Internship",applyUrl:"https://slack.com/careers/j48",description:"Test our collaboration platform. You will write test cases and verify features across platforms. Good communication and attention to detail required."},{id:"j49",title:"Python Developer (Fresher)",company:"InterviewBit",location:"Bangalore",mode:"Remote",experience:"Fresher",skills:["Python","Django","PostgreSQL","Algorithms"],source:"Indeed",postedDaysAgo:2,salaryRange:"4–6 LPA",applyUrl:"https://www.interviewbit.com/careers/j49",description:"Build features for our coding interview platform. You will work on backend APIs and problem infrastructure. Strong Python and DSA preferred."},{id:"j50",title:"SDE Intern",company:"Udaan",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Java","Kotlin","Android","REST APIs"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"₹30k–₹55k/month Internship",applyUrl:"https://udaan.com/careers/j50",description:"Work on our B2B commerce platform. You will build features for buyers and sellers. Strong fundamentals and willingness to learn required."},{id:"j51",title:"Data Analyst Intern",company:"Policybazaar",location:"Gurgaon",mode:"Hybrid",experience:"Fresher",skills:["SQL","Excel","Python","Reporting"],source:"Naukri",postedDaysAgo:8,salaryRange:"₹20k–₹38k/month Internship",applyUrl:"https://www.policybazaar.com/careers/j51",description:"Analyze insurance and customer data. You will build reports for sales and product teams. Strong Excel and SQL skills required."},{id:"j52",title:"Junior Backend Developer",company:"Curefit",location:"Bangalore",mode:"Hybrid",experience:"0-1",skills:["Python","Django","PostgreSQL","Redis"],source:"Indeed",postedDaysAgo:4,salaryRange:"5–8 LPA",applyUrl:"https://www.curefit.com/careers/j52",description:"Build backend for our fitness and wellness apps. You will work on booking and user APIs. Prior Python or Node backend experience preferred."},{id:"j53",title:"React Developer (1-3)",company:"Licious",location:"Bangalore",mode:"Remote",experience:"1-3",skills:["React","Redux","Next.js","E-commerce"],source:"LinkedIn",postedDaysAgo:6,salaryRange:"10–16 LPA",applyUrl:"https://www.licious.in/careers/j53",description:"Build our D2C e-commerce web experience. You will work on product and checkout flows. Prior React and e-commerce experience required."},{id:"j54",title:"Graduate Engineer Trainee",company:"Dell",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Java","Python","Linux","Scripting"],source:"LinkedIn",postedDaysAgo:9,salaryRange:"4–6 LPA",applyUrl:"https://jobs.dell.com/j54",description:"Join our infrastructure or software teams. You will work on Dell products and cloud solutions. B.Tech in CS or related required."},{id:"j55",title:"Frontend Intern",company:"Dunzo",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["React","JavaScript","CSS","Mobile-first"],source:"Indeed",postedDaysAgo:1,salaryRange:"₹20k–₹40k/month Internship",applyUrl:"https://www.dunzo.com/careers/j55",description:"Build consumer and partner app UIs. You will work on React components and responsive design. Good JavaScript fundamentals required."},{id:"j56",title:"Java Developer (0-1)",company:"Paytm",location:"Noida",mode:"Onsite",experience:"0-1",skills:["Java","Spring","Kafka","Microservices"],source:"Naukri",postedDaysAgo:3,salaryRange:"5–8 LPA",applyUrl:"https://paytm.com/careers/j56",description:"Build payment and fintech services. You will work on high-throughput APIs. Prior Java backend internship or projects required."},{id:"j57",title:"QA Intern",company:"Byju's",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Manual Testing","Mobile Testing","JIRA","Test Documentation"],source:"Indeed",postedDaysAgo:5,salaryRange:"₹22k–₹42k/month Internship",applyUrl:"https://byjus.com/careers/j57",description:"Test our learning apps and web platform. You will write test cases and perform regression. Interest in edtech and attention to detail required."},{id:"j58",title:"Python Developer (Fresher)",company:"Practo",location:"Bangalore",mode:"Hybrid",experience:"Fresher",skills:["Python","Django","PostgreSQL","Healthcare APIs"],source:"LinkedIn",postedDaysAgo:0,salaryRange:"4–6 LPA",applyUrl:"https://www.practo.com/careers/j58",description:"Build backend for our healthcare platform. You will work on booking and doctor APIs. Strong Python fundamentals required."},{id:"j59",title:"React Developer (1-3)",company:"Zepto",location:"Mumbai",mode:"Remote",experience:"1-3",skills:["React","TypeScript","PWA","Performance"],source:"LinkedIn",postedDaysAgo:2,salaryRange:"12–20 LPA",applyUrl:"https://www.zeptonow.com/careers/j59",description:"Build our quick commerce web app. You will work on fast, performant UIs. Prior React and e-commerce experience required."},{id:"j60",title:"SDE Intern",company:"Deutsche Bank",location:"Pune",mode:"Hybrid",experience:"Fresher",skills:["Java","SQL","Financial Systems","Testing"],source:"LinkedIn",postedDaysAgo:4,salaryRange:"₹45k–₹75k/month Internship",applyUrl:"https://careers.db.com/j60",description:"Work on banking technology projects. You will develop and test financial applications. Strong Java and SQL required. B.Tech in CS or related."}],Q="jobTrackerPreferences",ke={roleKeywords:"",preferredLocations:[],preferredMode:[],experienceLevel:"",skills:"",minMatchScore:40};function h(){try{const e=localStorage.getItem(Q);if(!e)return null;const t=JSON.parse(e);return{...ke,...t}}catch{return null}}function be(e){const t={roleKeywords:String(e.roleKeywords??"").trim(),preferredLocations:Array.isArray(e.preferredLocations)?e.preferredLocations.filter(Boolean):[],preferredMode:Array.isArray(e.preferredMode)?e.preferredMode.filter(Boolean):[],experienceLevel:String(e.experienceLevel??"").trim()||"",skills:String(e.skills??"").trim(),minMatchScore:Math.min(100,Math.max(0,Number(e.minMatchScore)||40))};return localStorage.setItem(Q,JSON.stringify(t)),t}function k(){var t,o;const e=h();return e?e.roleKeywords||((t=e.preferredLocations)==null?void 0:t.length)>0||((o=e.preferredMode)==null?void 0:o.length)>0||e.experienceLevel||e.skills:!1}function T(e,t){if(!t)return 0;let o=0;const a=N(t.roleKeywords),s=N(t.skills);if(a.length>0&&e.title){const c=e.title.toLowerCase();a.some(i=>c.includes(i.toLowerCase().trim()))&&(o+=25)}if(a.length>0&&e.description){const c=e.description.toLowerCase();a.some(i=>c.includes(i.toLowerCase().trim()))&&(o+=15)}const n=t.preferredLocations||[];n.length>0&&e.location&&n.includes(e.location)&&(o+=15);const r=t.preferredMode||[];if(r.length>0&&e.mode&&r.includes(e.mode)&&(o+=10),t.experienceLevel&&e.experience&&t.experienceLevel===e.experience&&(o+=10),s.length>0&&e.skills&&Array.isArray(e.skills)){const c=e.skills.map(p=>String(p).toLowerCase());s.some(p=>{const f=p.toLowerCase().trim();return c.some(g=>g===f||g.includes(f)||f.includes(g))})&&(o+=15)}return typeof e.postedDaysAgo=="number"&&e.postedDaysAgo<=2&&(o+=5),e.source==="LinkedIn"&&(o+=5),Math.min(100,o)}function N(e){return!e||typeof e!="string"?[]:e.split(",").map(t=>t.trim()).filter(Boolean)}function G(e=new Date){const t=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`jobTrackerDigest_${t}-${o}-${a}`}function b(){const e=G();try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function ve(){if(!k())return null;const e=G(),t=b();if(t)return t;const o=h(),n=[...u.map(c=>({...c,matchScore:T(c,o)}))].sort((c,i)=>{const p=(i.matchScore??0)-(c.matchScore??0);return p!==0?p:(c.postedDaysAgo??999)-(i.postedDaysAgo??999)}).slice(0,10),r={date:new Date().toISOString().slice(0,10),generatedAt:new Date().toISOString(),jobs:n};return localStorage.setItem(e,JSON.stringify(r)),r}function Y(e){var o;return!e||!((o=e.jobs)!=null&&o.length)?"":["Top 10 Jobs For You — 9AM Digest",e.date,"",...e.jobs.map((a,s)=>[`${s+1}. ${a.title}`,`   Company: ${a.company}`,`   Location: ${a.location} | Experience: ${a.experience} | Match: ${a.matchScore??0}%`,`   Apply: ${a.applyUrl}`,""].join(`
`)),"This digest was generated based on your preferences."].join(`
`)}const z="jobTrackerStatus",K="jobTrackerStatusUpdates",W="Not Applied";function C(){try{const e=localStorage.getItem(z);return e?JSON.parse(e):{}}catch{return{}}}function V(e){return C()[e]??W}function X(e,t,o=null){const a=C();if(a[e]=t,localStorage.setItem(z,JSON.stringify(a)),t!==W&&(t==="Applied"||t==="Rejected"||t==="Selected")){const s=Z();s.unshift({jobId:e,title:(o==null?void 0:o.title)??"",company:(o==null?void 0:o.company)??"",status:t,dateChanged:new Date().toISOString()}),localStorage.setItem(K,JSON.stringify(s.slice(0,50)))}}function Z(){try{const e=localStorage.getItem(K);return e?JSON.parse(e):[]}catch{return[]}}function L(e={}){return Z().map(o=>{var a,s;return{...o,title:o.title||((a=e[o.jobId])==null?void 0:a.title),company:o.company||((s=e[o.jobId])==null?void 0:s.company)}})}const $="jobTrackerTestChecklist",_=[{id:"t1",label:"Preferences persist after refresh",howTo:"Save preferences on Settings, refresh page, confirm fields are prefilled."},{id:"t2",label:"Match score calculates correctly",howTo:"Set role keywords and skills, check job cards show match badges."},{id:"t3",label:'"Show only matches" toggle works',howTo:"Enable toggle on Dashboard, confirm only jobs above threshold appear."},{id:"t4",label:"Save job persists after refresh",howTo:"Save a job on Dashboard, refresh, confirm it appears on Saved."},{id:"t5",label:"Apply opens in new tab",howTo:"Click Apply on any job card, confirm new tab opens."},{id:"t6",label:"Status update persists after refresh",howTo:"Change job status to Applied, refresh, confirm status remains."},{id:"t7",label:"Status filter works correctly",howTo:"Filter by Applied on Dashboard, confirm only Applied jobs show."},{id:"t8",label:"Digest generates top 10 by score",howTo:"Generate digest, confirm 10 jobs sorted by match score."},{id:"t9",label:"Digest persists for the day",howTo:"Generate digest, refresh page, confirm same digest loads."},{id:"t10",label:"No console errors on main pages",howTo:"Navigate Dashboard, Saved, Digest, Settings; check DevTools console."}];function ee(){try{const e=localStorage.getItem($);return e?JSON.parse(e):{}}catch{return{}}}function Se(e,t){const o=ee();o[e]=t,localStorage.setItem($,JSON.stringify(o))}function te(e){return!!ee()[e]}function oe(){return _.filter(e=>te(e.id)).length}function E(){return oe()===_.length}function we(){localStorage.removeItem($)}const ae="jobTrackerProof",_e=/^https?:\/\/.+/i;function m(e){if(!e||typeof e!="string")return!1;const t=e.trim();if(!t)return!1;try{return new URL(t),_e.test(t)}catch{return!1}}function v(){try{const e=localStorage.getItem(ae);return e?JSON.parse(e):{lovableLink:"",githubLink:"",deployedLink:""}}catch{return{lovableLink:"",githubLink:"",deployedLink:""}}}function Ae(e,t){const o=v();o[e]=(t||"").trim(),localStorage.setItem(ae,JSON.stringify(o))}function B(){const e=v();return m(e.lovableLink)&&m(e.githubLink)&&m(e.deployedLink)}const U="job-tracker-saved",se=["Not Applied","Applied","Rejected","Selected"],ne=De(u,"location"),re=["Remote","Hybrid","Onsite"],ie=["Fresher","0-1","1-3","3-5"];function S(){try{const e=localStorage.getItem(U);return e?JSON.parse(e):[]}catch{return[]}}function Le(e){const t=S();t.includes(e)||(t.push(e),localStorage.setItem(U,JSON.stringify(t)))}function le(e){const t=S().filter(o=>o!==e);localStorage.setItem(U,JSON.stringify(t))}function je(e){return e===0?"Today":e===1?"1 day ago":`${e} days ago`}function De(e,t){return[...new Set(e.map(a=>a[t]).filter(Boolean))].sort()}function O(e){if(!e)return 0;const t=e.match(/[\d.]+/);return t?parseFloat(t[0]):0}function Ie(e,t,o){let a=[...e];if(t.keyword){const n=t.keyword.toLowerCase();a=a.filter(r=>r.title.toLowerCase().includes(n)||r.company.toLowerCase().includes(n))}if(t.location&&(a=a.filter(n=>n.location===t.location)),t.mode&&(a=a.filter(n=>n.mode===t.mode)),t.experience&&(a=a.filter(n=>n.experience===t.experience)),t.source&&(a=a.filter(n=>n.source===t.source)),t.status){const n={};a.forEach(r=>{n[r.id]=V(r.id)}),a=a.filter(r=>n[r.id]===t.status)}if(t.onlyMatches&&o){const n=o.minMatchScore??40;a=a.filter(r=>(r.matchScore??0)>=n)}const s=t.sort||"Latest";return s==="Latest"?a.sort((n,r)=>n.postedDaysAgo-r.postedDaysAgo):s==="Oldest"?a.sort((n,r)=>r.postedDaysAgo-n.postedDaysAgo):s==="Match Score"?a.sort((n,r)=>(r.matchScore??0)-(n.matchScore??0)):s==="Salary"&&a.sort((n,r)=>O(r.salaryRange)-O(n.salaryRange)),a}function ce(){return`
    <div class="app-page app-page--landing">
      <h1 class="app-page__heading">Stop Missing The Right Jobs.</h1>
      <p class="app-page__subtext">Precision-matched job discovery delivered daily at 9AM.</p>
      <a href="/settings" class="kodnest-btn kodnest-btn--primary app-page__cta">Start Tracking</a>
    </div>
  `}function de(e){const t=e||{},o=l(t.roleKeywords||""),a=l(t.skills||""),s=t.experienceLevel||"",n=t.minMatchScore??40,r=t.preferredLocations||[],c=t.preferredMode||[];return`
    <div class="app-page app-page--settings">
      <h1 class="app-page__heading">Settings</h1>
      <p class="app-page__subtext">Configure your job preferences.</p>
      <div class="app-settings">
        <div class="app-settings__field">
          <label class="app-settings__label">Role keywords</label>
          <input type="text" class="kodnest-input app-settings__role-keywords" placeholder="e.g. React, Backend, SDE" value="${o}">
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Preferred locations</label>
          <select multiple class="kodnest-input app-settings__locations" size="5">
            ${ne.map(i=>`<option value="${l(i)}" ${r.includes(i)?"selected":""}>${l(i)}</option>`).join("")}
          </select>
          <span class="app-settings__hint">Hold Ctrl/Cmd to select multiple</span>
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Preferred mode</label>
          <div class="app-settings__checkboxes">
            ${re.map(i=>`
              <label class="app-settings__checkbox">
                <input type="checkbox" value="${i}" ${c.includes(i)?"checked":""}>
                <span>${i}</span>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Experience level</label>
          <select class="kodnest-input app-settings__experience">
            <option value="">Select</option>
            ${ie.map(i=>`<option value="${i}" ${s===i?"selected":""}>${i}</option>`).join("")}
          </select>
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label">Skills</label>
          <input type="text" class="kodnest-input app-settings__skills" placeholder="e.g. Java, Python, React" value="${a}">
        </div>
        <div class="app-settings__field">
          <label class="app-settings__label" id="min-match-label">Min match score (${n})</label>
          <input type="range" class="app-settings__slider" min="0" max="100" value="${n}">
        </div>
        <button type="button" class="kodnest-btn kodnest-btn--primary app-settings__save">Save Preferences</button>
      </div>
    </div>
  `}function Pe(e){return e>=80?"match-score--high":e>=60?"match-score--medium":e>=40?"match-score--neutral":"match-score--low"}function pe(e,t,o){const a=o??0,s=Pe(a),n=o!==void 0?`<span class="job-card__match ${s}">${a}% match</span>`:"",r=V(e.id),c=ue(r);return`
    <article class="job-card kodnest-card" data-job-id="${e.id}">
      <div class="job-card__header">
        <h3 class="job-card__title">${l(e.title)}</h3>
        <div class="job-card__badges">
          ${n}
          <span class="job-card__source">${l(e.source)}</span>
        </div>
      </div>
      <p class="job-card__company">${l(e.company)}</p>
      <p class="job-card__meta">
        ${l(e.location)} · ${l(e.mode)} · ${l(e.experience)}
      </p>
      <p class="job-card__salary">${l(e.salaryRange)}</p>
      <p class="job-card__posted">${je(e.postedDaysAgo)}</p>
      <div class="job-card__status">
        <label class="job-card__status-label">Status:</label>
        <select class="kodnest-input job-card__status-select ${c}" data-status-for="${e.id}">
          ${se.map(i=>`<option value="${l(i)}" ${r===i?"selected":""}>${i}</option>`).join("")}
        </select>
      </div>
      <div class="job-card__actions">
        <button type="button" class="kodnest-btn kodnest-btn--secondary job-action" data-action="view" data-id="${e.id}">View</button>
        <button type="button" class="kodnest-btn kodnest-btn--secondary job-action" data-action="${t?"unsave":"save"}" data-id="${e.id}">${t?"Unsave":"Save"}</button>
        <a href="${l(e.applyUrl)}" target="_blank" rel="noopener" class="kodnest-btn kodnest-btn--primary job-action job-action--apply">Apply</a>
      </div>
    </article>
  `}function ue(e){return e==="Applied"?"status--applied":e==="Rejected"?"status--rejected":e==="Selected"?"status--selected":"status--neutral"}function Re(e,t){const o=t.locations,a=["LinkedIn","Naukri","Indeed"];return`
    <div class="filter-bar">
      <input type="text" class="kodnest-input filter-bar__search" placeholder="Search title or company" value="${l(e.keyword||"")}">
      <select class="kodnest-input filter-bar__select" data-filter="location">
        <option value="">All locations</option>
        ${o.map(s=>`<option value="${l(s)}" ${e.location===s?"selected":""}>${l(s)}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="mode">
        <option value="">All modes</option>
        ${re.map(s=>`<option value="${s}" ${e.mode===s?"selected":""}>${s}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="experience">
        <option value="">All experience</option>
        ${ie.map(s=>`<option value="${s}" ${e.experience===s?"selected":""}>${s}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="source">
        <option value="">All sources</option>
        ${a.map(s=>`<option value="${s}" ${e.source===s?"selected":""}>${s}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="status">
        <option value="">All</option>
        ${se.map(s=>`<option value="${s}" ${e.status===s?"selected":""}>${s}</option>`).join("")}
      </select>
      <select class="kodnest-input filter-bar__select" data-filter="sort">
        <option value="Latest" ${e.sort==="Latest"?"selected":""}>Latest</option>
        <option value="Oldest" ${e.sort==="Oldest"?"selected":""}>Oldest</option>
        <option value="Match Score" ${e.sort==="Match Score"?"selected":""}>Match Score</option>
        <option value="Salary" ${e.sort==="Salary"?"selected":""}>Salary</option>
      </select>
    </div>
  `}function ge(e={}){const t=h(),o=S(),a={locations:ne},s=u.map(i=>({...i,matchScore:T(i,t)})),n=Ie(s,{sort:"Latest",...e},t),r=!k(),c=n.length===0?"No roles match your criteria. Adjust filters or lower threshold.":null;return`
    <div class="app-page app-page--dashboard">
      <h1 class="app-page__heading">Dashboard</h1>
      ${r?'<div class="app-banner">Set your preferences to activate intelligent matching.</div>':""}
      ${Re(e,a)}
      <label class="app-toggle">
        <input type="checkbox" class="app-toggle__input" data-toggle="onlyMatches" ${e.onlyMatches?"checked":""}>
        <span class="app-toggle__label">Show only jobs above my threshold</span>
      </label>
      <div class="job-grid" id="job-grid">
        ${n.length?n.map(i=>pe(i,o.includes(i.id),i.matchScore)).join(""):`<div class="kodnest-empty"><p class="kodnest-empty__message">${c||"No jobs match your filters."}</p></div>`}
      </div>
    </div>
  `}function xe(){const e=S(),t=u.filter(a=>e.includes(a.id)),o=h();return`
    <div class="app-page app-page--saved">
      <h1 class="app-page__heading">Saved</h1>
      ${t.length?`<div class="job-grid">${t.map(a=>pe(a,!0,T(a,o))).join("")}</div>`:'<div class="kodnest-empty"><p class="kodnest-empty__message">Saved jobs will appear here once you start tracking.</p></div>'}
    </div>
  `}function Te(e){return e?new Date(e).toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):""}function Ce(){const e=k();let t=b();if(!e)return`
      <div class="app-page app-page--digest">
        <h1 class="app-page__heading">Digest</h1>
        <div class="digest-block">
          <p class="digest-block__message">Set preferences to generate a personalized digest.</p>
          <a href="/settings" class="kodnest-btn kodnest-btn--primary">Go to Settings</a>
        </div>
      </div>
    `;const o=!t,a=(t==null?void 0:t.jobs)??[],s=t&&a.length===0;if(o){const i=L(j());return`
      <div class="app-page app-page--digest">
        <h1 class="app-page__heading">Digest</h1>
        <p class="app-page__subtext">Generate your personalized daily job digest.</p>
        ${D(i)}
        <button type="button" class="kodnest-btn kodnest-btn--primary digest-generate">
          Generate Today's 9AM Digest (Simulated)
        </button>
        <p class="digest-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
      </div>
    `}if(s){const i=L(j());return`
      <div class="app-page app-page--digest">
        <h1 class="app-page__heading">Digest</h1>
        ${D(i)}
        <div class="digest-card">
          <div class="digest-empty">
            <p class="digest-empty__message">No matching roles today. Check again tomorrow.</p>
          </div>
        </div>
        <p class="digest-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
      </div>
    `}const n=Te(t.date),r=L(j());return`
    <div class="app-page app-page--digest">
      <h1 class="app-page__heading">Digest</h1>
      ${D(r)}
      <div class="digest-card">
        <header class="digest-header">
          <h2 class="digest-header__title">Top 10 Jobs For You — 9AM Digest</h2>
          <p class="digest-header__date">${l(n)}</p>
        </header>
        <div class="digest-jobs">
          ${a.map(i=>`
            <div class="digest-job">
              <div class="digest-job__main">
                <h3 class="digest-job__title">${l(i.title)}</h3>
                <p class="digest-job__company">${l(i.company)}</p>
                <p class="digest-job__meta">${l(i.location)} · ${l(i.experience)}</p>
                <span class="digest-job__score match-score--${$e(i.matchScore??0)}">${i.matchScore??0}% match</span>
              </div>
              <a href="${l(i.applyUrl)}" target="_blank" rel="noopener" class="kodnest-btn kodnest-btn--primary digest-job__apply">Apply</a>
            </div>
          `).join("")}
        </div>
        <footer class="digest-footer">
          This digest was generated based on your preferences.
        </footer>
      </div>
      <div class="digest-actions">
        <button type="button" class="kodnest-btn kodnest-btn--secondary digest-copy">Copy Digest to Clipboard</button>
        <a href="#" class="kodnest-btn kodnest-btn--secondary digest-email" data-digest-email>Create Email Draft</a>
      </div>
      <p class="digest-note">Demo Mode: Daily 9AM trigger simulated manually.</p>
    </div>
  `}function $e(e){return e>=80?"high":e>=60?"medium":e>=40?"neutral":"low"}function j(){const e={};return u.forEach(t=>{e[t.id]=t}),e}function Ee(e){return e?new Date(e).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}function D(e){return!e||e.length===0?"":`
    <div class="digest-status-updates digest-card">
      <h3 class="digest-status-updates__title">Recent Status Updates</h3>
      <ul class="digest-status-updates__list">
        ${e.slice(0,10).map(t=>`
          <li class="digest-status-updates__item">
            <span class="digest-status-updates__job">${l(t.title||"Job")} at ${l(t.company||"")}</span>
            <span class="digest-status-updates__status status-badge status-badge--${ue(t.status)}">${l(t.status)}</span>
            <span class="digest-status-updates__date">${l(Ee(t.dateChanged))}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `}const Be=[{id:"s1",label:"Preferences configured",check:()=>k()},{id:"s2",label:"Match score active",check:()=>k()},{id:"s3",label:"Jobs displayed",check:()=>!0},{id:"s4",label:"Save job works",check:()=>S().length>0},{id:"s5",label:"Status tracking",check:()=>Object.values(C()).some(e=>e!=="Not Applied")},{id:"s6",label:"Digest generated",check:()=>!!b()},{id:"s7",label:"Test checklist complete",check:()=>E()},{id:"s8",label:"Artifacts submitted",check:()=>B()}];function M(){var s,n,r;const e=E(),t=B();if(e&&t)return"Shipped";const o=v(),a=!!((s=o.lovableLink)!=null&&s.trim()||(n=o.githubLink)!=null&&n.trim()||(r=o.deployedLink)!=null&&r.trim());return e||t||a?"In Progress":"Not Started"}function Ue(){return`
    <div class="app-page app-page--proof">
      <h1 class="app-page__heading">Proof</h1>
      <p class="app-page__subtext">Placeholder for artifact collection.</p>
    </div>
  `}function Me(){const e=v();return`
    <div class="app-page app-page--jt-proof">
      <h1 class="app-page__heading">Project 1 — Job Notification Tracker</h1>

      <section class="proof-section digest-card">
        <h2 class="proof-section__title">A) Step Completion Summary</h2>
        <ul class="proof-steps">
          ${Be.map(t=>`
            <li class="proof-step">
              <span class="proof-step__status ${t.check()?"proof-step__status--done":""}">${t.check()?"Completed":"Pending"}</span>
              <span class="proof-step__label">${l(t.label)}</span>
            </li>
          `).join("")}
        </ul>
      </section>

      <section class="proof-section digest-card">
        <h2 class="proof-section__title">B) Artifact Collection</h2>
        <div class="proof-artifacts">
          <div class="app-settings__field">
            <label class="app-settings__label">Lovable Project Link</label>
            <input type="url" class="kodnest-input proof-input ${e.lovableLink&&!m(e.lovableLink)?"proof-input--invalid":""}" data-proof-key="lovableLink" placeholder="https://..." value="${l(e.lovableLink)}">
          </div>
          <div class="app-settings__field">
            <label class="app-settings__label">GitHub Repository Link</label>
            <input type="url" class="kodnest-input proof-input ${e.githubLink&&!m(e.githubLink)?"proof-input--invalid":""}" data-proof-key="githubLink" placeholder="https://github.com/..." value="${l(e.githubLink)}">
          </div>
          <div class="app-settings__field">
            <label class="app-settings__label">Deployed URL (Vercel or equivalent)</label>
            <input type="url" class="kodnest-input proof-input ${e.deployedLink&&!m(e.deployedLink)?"proof-input--invalid":""}" data-proof-key="deployedLink" placeholder="https://..." value="${l(e.deployedLink)}">
          </div>
        </div>
        <button type="button" class="kodnest-btn kodnest-btn--primary proof-copy-submission">Copy Final Submission</button>
      </section>
    </div>
  `}function Je(){const e=oe(),t=_.length,o=e===t;return`
    <div class="app-page app-page--test">
      <h1 class="app-page__heading">Built-In Test Checklist</h1>
      <div class="test-summary ${o?"":"test-summary--warning"}">
        <span class="test-summary__count">Tests Passed: ${e} / ${t}</span>
        ${o?"":'<p class="test-summary__warning">Resolve all issues before shipping.</p>'}
      </div>
      <button type="button" class="kodnest-btn kodnest-btn--secondary test-reset">Reset Test Status</button>
      <div class="test-checklist kodnest-card">
        ${_.map(a=>`
          <label class="test-item">
            <input type="checkbox" class="test-item__checkbox" data-test-id="${a.id}" ${te(a.id)?"checked":""}>
            <span class="test-item__label">${l(a.label)}</span>
            ${a.howTo?`<span class="test-item__tooltip" title="${l(a.howTo)}">?</span>`:""}
          </label>
        `).join("")}
      </div>
    </div>
  `}function qe(){const e=v();return`------------------------------------------
Job Notification Tracker — Final Submission

Lovable Project:
${e.lovableLink||""}

GitHub Repository:
${e.githubLink||""}

Live Deployment:
${e.deployedLink||""}

Core Features:
- Intelligent match scoring
- Daily digest simulation
- Status tracking
- Test checklist enforced
------------------------------------------`}function Fe(){const e=M();if(!(e==="Shipped")){const a=[];E()||a.push("all 10 tests"),B()||a.push("all 3 artifact links");const s=a.length?`Complete ${a.join(" and ")} to unlock Ship.`:"Complete all 10 tests and provide all 3 artifact links to unlock Ship.";return`
      <div class="app-page app-page--ship">
        <h1 class="app-page__heading">Ship</h1>
        <div class="ship-status-badge ship-status-badge--${e.toLowerCase().replace(" ","-")}">${e}</div>
        <div class="ship-locked digest-card">
          <p class="ship-locked__message">${l(s)}</p>
          <a href="/jt/07-test" class="kodnest-btn kodnest-btn--secondary ship-locked__link">Test Checklist</a>
          <a href="/jt/proof" class="kodnest-btn kodnest-btn--primary ship-locked__link">Proof & Artifacts</a>
        </div>
      </div>
    `}return`
    <div class="app-page app-page--ship">
      <h1 class="app-page__heading">Ship</h1>
      <div class="ship-status-badge ship-status-badge--shipped">${e}</div>
      <div class="digest-card">
        <p class="ship-success">Project 1 Shipped Successfully.</p>
      </div>
    </div>
  `}function l(e){if(!e)return"";const t=document.createElement("div");return t.textContent=e,t.innerHTML}function y(e){let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",t.className="toast-container",document.body.appendChild(t));const o=document.createElement("div");o.className="toast",o.textContent=e,t.appendChild(o),setTimeout(()=>{o.classList.add("toast--visible")},10),setTimeout(()=>{o.classList.remove("toast--visible"),setTimeout(()=>o.remove(),200)},2500)}function me(e){const t=e.skills?e.skills.join(", "):"",o=document.createElement("div");o.className="modal-overlay",o.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal__header">
        <h2 id="modal-title" class="modal__title">${l(e.title)}</h2>
        <button type="button" class="modal__close" aria-label="Close">&times;</button>
      </div>
      <p class="modal__company">${l(e.company)}</p>
      ${t?`<p class="modal__skills"><strong>Skills:</strong> ${l(t)}</p>`:""}
      <div class="modal__description">${l(e.description)}</div>
    </div>
  `;function a(){o.remove(),document.body.style.overflow=""}o.addEventListener("click",s=>{(s.target===o||s.target.closest(".modal__close"))&&a()}),document.addEventListener("keydown",function s(n){n.key==="Escape"&&(a(),document.removeEventListener("keydown",s))}),document.body.style.overflow="hidden",document.body.appendChild(o)}const Ne={"/":ce,"/dashboard":ge,"/saved":xe,"/digest":Ce,"/settings":()=>de(h()),"/proof":Ue,"/jt/07-test":Je,"/jt/08-ship":Fe,"/jt/proof":Me};let w={};function H(){return window.location.pathname.replace(/\/$/,"")||"/"}function d(e){const t=document.getElementById("main-content");if(e==="/dashboard")t.innerHTML=ge(w),I(t);else if(e==="/settings")t.innerHTML=de(h()),Ye(t);else{const o=Ne[e]||ce;t.innerHTML=o(),e==="/saved"&&R(t),e==="/digest"&&ye(t),e==="/jt/07-test"&&P(t),e==="/jt/proof"&&he(t)}}function Ye(e){const t=e.querySelector(".app-settings__save");if(!t)return;t.addEventListener("click",()=>{var J,q,F;const s=((J=e.querySelector(".app-settings__role-keywords"))==null?void 0:J.value)??"",n=((q=e.querySelector(".app-settings__skills"))==null?void 0:q.value)??"",r=((F=e.querySelector(".app-settings__experience"))==null?void 0:F.value)??"",c=e.querySelector(".app-settings__slider"),i=c?parseInt(c.value,10):40,p=e.querySelector(".app-settings__locations"),f=p?[...p.selectedOptions].map(A=>A.value):[],g=[];e.querySelectorAll(".app-settings__checkbox input:checked").forEach(A=>{g.push(A.value)}),be({roleKeywords:s,preferredLocations:f,preferredMode:g,experienceLevel:r,skills:n,minMatchScore:i}),t.textContent="Saved",t.disabled=!0,setTimeout(()=>{t.textContent="Save Preferences",t.disabled=!1},1500)});const o=e.querySelector(".app-settings__slider"),a=e.querySelector("#min-match-label");o&&a&&o.addEventListener("input",s=>{a.textContent=`Min match score (${s.target.value})`})}function I(e){const t=Oe(o=>{w.keyword=o.trim()||void 0,d("/dashboard")},300);e.querySelectorAll(".filter-bar__search").forEach(o=>{o.addEventListener("input",a=>t(a.target.value))}),e.querySelectorAll(".filter-bar__select").forEach(o=>{o.addEventListener("change",a=>{const s=o.dataset.filter;w[s]=o.value||void 0,d("/dashboard")})}),e.querySelectorAll(".app-toggle__input").forEach(o=>{o.addEventListener("change",a=>{w.onlyMatches=a.target.checked,d("/dashboard")})}),e.querySelectorAll(".job-action[data-action='view']").forEach(o=>{o.addEventListener("click",()=>{const a=u.find(s=>s.id===o.dataset.id);a&&me(a)})}),e.querySelectorAll(".job-action[data-action='save'], .job-action[data-action='unsave']").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.id;o.dataset.action==="save"?Le(a):le(a),d("/dashboard"),I(document.getElementById("main-content"))})}),e.querySelectorAll(".job-card__status-select").forEach(o=>{o.addEventListener("change",a=>{const s=o.dataset.statusFor,n=a.target.value,r=u.find(c=>c.id===s);X(s,n,r),(n==="Applied"||n==="Rejected"||n==="Selected")&&y(`Status updated: ${n}`),d("/dashboard"),I(document.getElementById("main-content"))})})}function ye(e){const t=e.querySelector(".digest-generate");t&&t.addEventListener("click",()=>{ve(),d("/digest"),ye(document.getElementById("main-content"))});const o=e.querySelector(".digest-copy");o&&o.addEventListener("click",async()=>{const s=b(),n=Y(s);try{await navigator.clipboard.writeText(n),o.textContent="Copied",setTimeout(()=>{o.textContent="Copy Digest to Clipboard"},2e3)}catch{o.textContent="Copy failed",setTimeout(()=>{o.textContent="Copy Digest to Clipboard"},2e3)}});const a=e.querySelector("[data-digest-email]");if(a){const s=b(),n=encodeURIComponent(Y(s)),r=encodeURIComponent("My 9AM Job Digest");a.href=`mailto:?subject=${r}&body=${n}`}}function he(e){e.querySelectorAll(".proof-input").forEach(o=>{const a=o.dataset.proofKey;a&&o.addEventListener("blur",()=>{Ae(a,o.value),d("/jt/proof"),he(document.getElementById("main-content"))})});const t=e.querySelector(".proof-copy-submission");t&&t.addEventListener("click",async()=>{const o=qe();try{await navigator.clipboard.writeText(o),y("Final submission copied to clipboard.")}catch{y("Copy failed.")}})}function P(e){e.querySelectorAll(".test-item__checkbox").forEach(o=>{o.addEventListener("change",a=>{Se(a.target.dataset.testId,a.target.checked),d("/jt/07-test"),P(document.getElementById("main-content"))})});const t=e.querySelector(".test-reset");t&&t.addEventListener("click",()=>{we(),d("/jt/07-test"),P(document.getElementById("main-content"))})}function R(e){e.querySelectorAll(".job-action[data-action='view']").forEach(t=>{t.addEventListener("click",()=>{const o=u.find(a=>a.id===t.dataset.id);o&&me(o)})}),e.querySelectorAll(".job-action[data-action='unsave']").forEach(t=>{t.addEventListener("click",()=>{le(t.dataset.id),d("/saved"),R(document.getElementById("main-content"))})}),e.querySelectorAll(".job-card__status-select").forEach(t=>{t.addEventListener("change",o=>{const a=t.dataset.statusFor,s=o.target.value,n=u.find(r=>r.id===a);X(a,s,n),(s==="Applied"||s==="Rejected"||s==="Selected")&&y(`Status updated: ${s}`),d("/saved"),R(document.getElementById("main-content"))})})}function Oe(e,t){let o;return(...a)=>{clearTimeout(o),o=setTimeout(()=>e(...a),t)}}function x(e){document.querySelectorAll(".app-nav__link[data-route]").forEach(t=>{const o=(t.getAttribute("data-route")||"/").replace(/\/$/,"")||"/";t.classList.toggle("active",o===e)})}function fe(e){history.pushState({path:e},"",e||"/"),d(e),x(e)}function He(e){const t=e.target.closest(".app-nav a[href^='/']");if(!t)return;e.preventDefault();let o=(t.getAttribute("href")||"/").replace(/\/$/,"")||"/";if(o==="/jt/08-ship"&&M()!=="Shipped"){y("Complete all 10 tests and all 3 artifact links to unlock Ship.");return}fe(o),Qe()}function Qe(){const e=document.querySelector(".app-nav__toggle"),t=document.querySelector(".app-nav__links");e&&e.setAttribute("aria-expanded","false"),t&&t.classList.remove("is-open")}function Ge(){const e=document.querySelector(".app-nav__toggle"),t=document.querySelector(".app-nav__links"),o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open",!o)}function ze(e){const t=e.target.closest("#main-content a[href^='/']");if(!t||t.classList.contains("job-action--apply"))return;e.preventDefault();let o=(t.getAttribute("href")||"/").replace(/\/$/,"")||"/";if(o==="/jt/08-ship"&&M()!=="Shipped"){y("Complete all 10 tests and all 3 artifact links to unlock Ship.");return}fe(o)}function Ke(){var t,o,a;const e=H();d(e),x(e),(t=document.querySelector(".app-nav"))==null||t.addEventListener("click",He),(o=document.getElementById("main-content"))==null||o.addEventListener("click",ze),(a=document.querySelector(".app-nav__toggle"))==null||a.addEventListener("click",Ge),window.addEventListener("popstate",s=>{var r;const n=((r=s.state)==null?void 0:r.path)??H();d(n),x(n)})}Ke();
