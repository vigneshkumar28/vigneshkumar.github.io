(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [10],
  {
    c52d: function (e, a, n) {},
    ca53: function (e, a, n) {
      "use strict";
      var l = n("c52d"),
        t = n.n(l);
      t.a;
    },
    e2de: function (e, a, n) {
      "use strict";
      n.r(a);
      var l = function () {
          var e = this,
            a = e.$createElement,
            n = e._self._c || a;
          return n(
            "q-page",
            {
              staticClass:
                "flex justify-around content-start skills-pg q-pa-sm",
            },
            [
              n("q-input", {
                staticClass: "full-width q-mt-xl q-px-xl",
                attrs: {
                  dark: e.$q.dark.isActive,
                  outlined: "",
                  clearable: "",
                  debounce: "500",
                  placeholder: "Search Skill",
                },
                scopedSlots: e._u([
                  {
                    key: "append",
                    fn: function () {
                      return [
                        n(
                          "q-avatar",
                          [n("q-icon", { attrs: { name: "search" } })],
                          1
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
                model: {
                  value: e.search,
                  callback: function (a) {
                    e.search = a;
                  },
                  expression: "search",
                },
              }),
              n(
                "div",
                { staticClass: "q-mt-md full-width flex justify-center" },
                [
                  n(
                    "div",
                    {
                      staticClass: "text-warning",
                      staticStyle: { "padding-top": "14.5px" },
                    },
                    [e._v("Graph")]
                  ),
                  n("q-toggle", {
                    staticClass: "text-warning",
                    attrs: {
                      dark: e.$q.dark.isActive,
                      color: "accent",
                      size: "lg",
                      label: "List",
                    },
                    model: {
                      value: e.is_list,
                      callback: function (a) {
                        e.is_list = a;
                      },
                      expression: "is_list",
                    },
                  }),
                ],
                1
              ),
              e._l(e.filtered_skills, function (a) {
                return n("div", { key: a.name }, [
                  a.skills.length > 0
                    ? n(
                        "h5",
                        {
                          staticClass:
                            "full-width q-my-lg q-mt-xl text-center text-bold",
                        },
                        [e._v(e._s(a.name))]
                      )
                    : e._e(),
                  a.skills.length > 0
                    ? n(
                        "div",
                        {
                          staticClass: "flex flex-wrap justify-center",
                          class: e.is_list ? "column items-center" : "",
                        },
                        e._l(a.skills, function (a) {
                          return n(
                            "div",
                            {
                              key: a.name,
                              staticClass:
                                "flex-wrap justify-start items-center",
                              class: e.is_list
                                ? "justify-center q-my-sm"
                                : "column",
                            },
                            [
                              e.is_list
                                ? e._e()
                                : n("q-circular-progress", {
                                    staticClass: "q-ma-md text-accent row",
                                    attrs: {
                                      "show-value": "",
                                      "font-size": "10px",
                                      value: a.value,
                                      size: "80px",
                                      thickness: 0.25,
                                      color: "secondary",
                                      "track-color": e.$q.dark.isActive
                                        ? "primary"
                                        : "white",
                                    },
                                  }),
                              n(
                                "div",
                                {
                                  staticClass:
                                    "text-bold text-warning text-center",
                                  staticStyle: {
                                    "max-width": "110px",
                                    "text-wrap": "wrap",
                                  },
                                },
                                [e._v(e._s(a.name))]
                              ),
                            ],
                            1
                          );
                        }),
                        0
                      )
                    : e._e(),
                ]);
              }),
            ],
            2
          );
        },
        t = [],
        s =
          (n("7f7f"),
          n("386d"),
          {
            name: "Skills",
            data: function () {
              return {
                all_skills: [
                  {
                    name: "Leadership and Management Skills",
                    skills: [
                      { name: "Problem Solving / Debugging", value: 90 },
                      { name: "Interpersonal Skills", value: 90 },
                    ],
                  },

                  {
                    name: "Programming Languages",
                    skills: [
                      { name: "Java", value: 90 },
                      { name: "C", value: 90 },
                      { name: "C++", value: 70 },
                      { name: "Javascript", value: 70 },
                      { name: "Node.js", value: 70 },
                      { name: "HTML", value: 60 },
                      { name: "CSS", value: 60 },
                      { name: "Python", value: 40 },
                      //{name:"Go",value:20},{name:"C#",value:20}
                    ],
                  },

                  {
                    name: "System Architectures",
                    skills: [
                      //    {name:"Microservices",value:90},
                      //{name:"Service Oriented Architecture (SOA)",value:90},
                      //{name:"Monolitic Architecture",value:90},{name:"3-Tier Architecture",value:90},{name:"N-Tier Architecture",value:90},
                      //{name:"Service Orchestration / Choreography",value:80},{name:"Cloud Architectures",value:70},
                      { name: "Amazon Web Services (AWS)", value: 60 },
                      { name: "Google Cloud Services (GCP)", value: 80 },
                    ],
                  },

                  /*{name:"Frontend Frameworks",skills:[{name:"Vue",value:90},{
        name:"Angular 2+",value:90},{name:"React",value:50},{name:"Ember",value:40},
        {name:"jQuery",value:90}]},*/

                  /*{name:"Frontend UI/Component Frameworks",skills:[{name:"Quasar",value:90},{name:"Ionic 2",value:90},
        {name:"Ionic 3",value:90}]},{name:"Frontend Bundlers",skills:[{name:"Gulp",value:60},{name:"Webpack",value:90},
        {name:"Grunt",value:40}]},
        
        {name:"Frontend CSS Preprocessors",skills:[{name:"SCSS",value:90},
        {name:"LESS",value:90},{name:"Stylus",value:90}]},
        
        {name:"Frontend Testing Frameworks",skills:[{name:"Mocha",value:80},{name:"Jasmine",value:60},
        {name:"Cypress",value:90},{name:"Puppeteer",value:90}]},*/

                  {
                    name: "Other Frontend Technologies",
                    skills: [
                      { name: "Typescript", value: 90 }, //{name:"D3",value:50},
                      //{name:"Cordova",value:60},{name:"ES Lint",value:75},{name:"ES6",value:90},
                      { name: "npm", value: 90 },
                      //{name:"Yarn",value:90},
                      { name: "Bootstrap", value: 70 },
                      //{name:"CORS",value:90},{name:"CSRF",value:90},{name:"CSP",value:90},
                      //{name:"Progressive Web Apps (PWA)",value:90},
                      //{name:"Single Page Apps (SPA)",value:90},
                      //{name:"Server Side Rendering (SSR)",value:90},{name:"Flux",value:80},
                      // {name:"Redux",value:50},{name:"Vuex",value:80},
                      { name: "Search Engine Optimization (SEO)", value: 70 },
                      { name: "Chrome Extensions", value: 70 },
                      //{name:"Content Delivery Networks (CDNs)",value:90},
                      // {name:"Babel",value:90},{name:"GraphQL",value:60}
                    ],
                  },

                  {
                    name: "Node Frameworks",
                    skills: [
                      { name: "Express", value: 80 },
                      //{name:"Fastify",value:90},{name:"Helmet",value:70},
                      //{name:"Sequelize",value:80}
                    ],
                  },

                  {
                    name: "Relational Databases",
                    skills: [
                      //{name:"Postgres (PgSQL)",value:90},
                      { name: "MySQL", value: 80 },
                    ],
                  },

                  {
                    name: "Non-Relational Databases",
                    skills: [
                      { name: "Firebase", value: 80 }, //,{name:"MongoDB",value:90},
                      //{name:"Redis",value:70},{name:"Neo4j",value:60}
                    ],
                  },

                  {
                    name: "Development Tools / DevOps Tools / OS",
                    skills: [
                      { name: "VS Code", value: 90 },
                      { name: "Atom", value: 70 },
                      { name: "Sublime", value: 90 },
                      { name: "Git", value: 90 }, //{name:"SVN",value:90},
                      //{name:"Docker",value:90},{name:"Kubernetes",value:60},
                      //{name:"Open Shift",value:40},
                      { name: "Windows OS", value: 90 },
                      //{name:"Mac OS",value:90},{name:"Linux",value:90}
                    ],
                  },

                  {
                    name: "Other Technical Skills",
                    skills: [
                      //{name:"Chatbots ( Dialogflow / Twilio )",value:70},
                      //{name:"VertX",value:60},{name:"OAuth",value:90},
                      //{name:"Kafka",value:75},{name:"AWS SQS",value:80},
                      //{name:"J2EE",value:75},{name:"Spring boot",value:75},
                      //{name:"Spring Reactive",value:75},{name:"Django",value:50},
                      { name: "UX / UI", value: 90 },
                      { name: "Algorithms", value: 90 },
                      { name: "Datastructures", value: 90 }, //{name:"Design Patterns",value:90},
                      { name: "Data Science / Data Analytics", value: 60 },
                      { name: "Machine Learning / AI", value: 70 },
                      {
                        name: "Microsoft Office (Excel, PPT, Word)",
                        value: 90,
                      },
                      { name: "Arduino / Raspberry Pi", value: 90 },
                      { name: "IBM Cloud", value: 90 },
                      { name: "Watson platform", value: 90 },
                    ],
                  },

                  {
                    name: "Non Technical Skills",
                    skills: [
                      { name: "Cooking / Baking", value: 90 },
                      { name: "Painting / Sketching", value: 90 },
                      { name: "Quizzing", value: 80 },
                    ],
                  },

                  {
                    name: "Favourite subjects in college",
                    skills: [
                      { name: "Digital Image Processing (DIP)", value: 90 },
                      { name: "Wireless Communications", value: 90 },
                      {
                        name: "Microprocessor and Microcontroller (MPMC)",
                        value: 80,
                      },
                      {
                        name: "Data structures and algorithms (DSA)",
                        value: 90,
                      },
                      {
                        name: "Object Orientation Programming and Structures (OOPS)",
                        value: 90,
                      },
                      {
                        name: "Web development essential : HTML, CSS, PHP, JavaScript",
                        value: 80,
                      },
                      { name: "Digital Electronics", value: 90 },
                      { name: "Analog Communications", value: 90 },
                      { name: "Digital Communications", value: 80 },
                      {
                        name: "Data Communication and Networks (DCN)",
                        value: 90,
                      },
                      { name: "Digital Signal Processing (DSP)", value: 90 },
                      { name: "Signals and systems (SS)", value: 80 },
                      { name: "Semiconductor Fabrications", value: 90 },
                      {
                        name: "Programming language : C, C++, Java",
                        value: 90,
                      },
                      { name: " Network Security", value: 80 },
                      { name: "Fibre optics communication (FOC)", value: 90 },
                      {
                        name: "Very Large Scale Integration (VLSI) Design",
                        value: 70,
                      },
                      {
                        name: "Application Specific Integrated Circuit (ASIC)",
                        value: 60,
                      },
                      { name: "Antenna and Wave Propagation (AWP)", value: 80 },
                    ],
                  },
                ],

                search: null,
                is_list: !1,
              };
            },
            computed: {
              filtered_skills: function () {
                var e = this;
                if (this.search) {
                  var a = this.all_skills.map(function (a) {
                    var n = {};
                    return (
                      (n.name = a.name),
                      (n.skills = a.skills.filter(function (a) {
                        return (
                          a.name.toLowerCase().indexOf(e.search.toLowerCase()) >
                          -1
                        );
                      })),
                      console.log(n),
                      n
                    );
                  });
                  return a;
                }
                return this.all_skills;
              },
            },
          }),
        i = s,
        u = (n("ca53"), n("2877")),
        r = n("eebe"),
        m = n.n(r),
        o = n("9989"),
        v = n("27f9"),
        c = n("cb32"),
        d = n("0016"),
        p = n("9564"),
        g = n("58ea"),
        S = Object(u["a"])(i, l, t, !1, null, "4f568a15", null);
      a["default"] = S.exports;
      m()(S, "components", {
        QPage: o["a"],
        QInput: v["a"],
        QAvatar: c["a"],
        QIcon: d["a"],
        QToggle: p["a"],
        QCircularProgress: g["a"],
      });
    },
  },
]);
