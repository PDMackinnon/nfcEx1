/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/

var NFCedgeApp; //global external reference to the edge comp


(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

AdobeEdge.bootstrapCallback(function(compId) {
     var comp = AdobeEdge.getComposition(compId);
     
     	NFCedgeApp = comp;  //export to global variable

});

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'tag1Sym'
   (function(symbolName) {   
   
   })("tag1Sym");
   //Edge symbol end:'tag1Sym'

   //=========================================================
   
   //Edge symbol: 'tag2Sym'
   (function(symbolName) {   
   
   })("tag2Sym");
   //Edge symbol end:'tag2Sym'

})(jQuery, AdobeEdge, "PhoneExpNFC-1-0");