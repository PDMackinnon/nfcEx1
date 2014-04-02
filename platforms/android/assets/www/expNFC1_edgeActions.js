
var NFCedgeApp;(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;AdobeEdge.bootstrapCallback(function(compId){var comp=AdobeEdge.getComposition(compId);NFCedgeApp=comp;});
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'tag1Sym'
(function(symbolName){})("tag1Sym");
//Edge symbol end:'tag1Sym'

//=========================================================

//Edge symbol: 'tag2Sym'
(function(symbolName){})("tag2Sym");
//Edge symbol end:'tag2Sym'
})(jQuery,AdobeEdge,"PhoneExpNFC-1-0");