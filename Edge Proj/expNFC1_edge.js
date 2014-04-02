/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'tag2Sym',
            type:'rect',
            rect:['734','38px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.56979','0.56979']]
         },
         {
            id:'tag1Sym',
            type:'rect',
            rect:['-659','58px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.54684','0.54684']]
         },
         {
            id:'Text2',
            type:'text',
            rect:['41px','9px','auto','auto','auto','auto'],
            text:"please scan tag<br>",
            align:"center",
            font:['Arial, Helvetica, sans-serif',42,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'tag2Sym',
            symbolName:'tag2Sym'
         },
         {
            id:'tag1Sym',
            symbolName:'tag1Sym'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '480px'],
            ["style", "width", '320px']
         ],
         "${_tag2Sym}": [
            ["style", "top", '38px'],
            ["transform", "scaleY", '0.56979'],
            ["style", "left", '852px'],
            ["transform", "scaleX", '0.56979']
         ],
         "${_Text2}": [
            ["style", "top", '9px'],
            ["style", "left", '41px'],
            ["style", "font-size", '42px']
         ],
         "${_tag1Sym}": [
            ["style", "top", '58px'],
            ["transform", "scaleX", '0.54684'],
            ["transform", "scaleY", '0.54684'],
            ["style", "left", '-519px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "play1": 250,
            "play2": 1250
         },
         timeline: [
            { id: "eid2", tween: [ "style", "${_tag1Sym}", "left", '-126px', { fromValue: '-519px'}], position: 250, duration: 750 },
            { id: "eid5", tween: [ "style", "${_tag1Sym}", "left", '-682px', { fromValue: '-126px'}], position: 1250, duration: 0 },
            { id: "eid4", tween: [ "style", "${_tag2Sym}", "left", '-114px', { fromValue: '852px'}], position: 1250, duration: 750 }         ]
      }
   }
},
"tag1Sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','571px','379px','auto','auto'],
      borderRadius: ['29px 29px','29px 29px','29px 29px','29px 29px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(104,223,53,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',63,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'tag1',
      text: 'Hello TAG ONE',
      align: 'center',
      rect: ['23px','58px','548px','337px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tag1}": [
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["style", "left", '23px'],
            ["style", "font-size", '63px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [29,29], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [29,29], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [29,29], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [29,29], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(104,223,53,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '395px'],
            ["style", "width", '571px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"tag2Sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['29px','0px','490px','426px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(53,104,223,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',63,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'tag2',
      text: 'Hello TAG TWO<br>',
      align: 'center',
      rect: ['0px','171px','548px','337px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tag2}": [
            ["style", "top", '171px'],
            ["style", "left", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '63px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "left", '29px'],
            ["color", "background-color", 'rgba(53,104,223,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '508px'],
            ["style", "width", '548px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "PhoneExpNFC-1-0");
