const appRelationsDiscovery = require('@asyncapi/app-relations-discovery');

const {getAsyncApiExamples} = require('./util'); 

let flightServicedocs = getAsyncApiExamples();

// For default output syntax
// const defaultOutput = appRelationsDiscovery.getRelations(...docs);
// console.log(defaultOutput);

// For mermaid Flowchart 
console.log(flightServicedocs);
(async()=>{
    try{
        const mermaidFlowchart = await appRelationsDiscovery.getRelations(...flightServicedocs,{syntax:'mermaid'});
        console.log(mermaidFlowchart);
    } catch(err){
        console.log(err);
    }
})();

// For plantUML classDiagram 
// const plantUMLClassDiagram = appRelationsDiscovery.getRelations(...docs,{syntax:'plantUML'});
// console.log(plantUMLClassDiagram);

// For reactFlow nodes
// const reactFlowNodes = appRelationsDiscovery.getRelations(...docs,{syntax:'reactFlow'});
// console.log(reactFlowNodes);
