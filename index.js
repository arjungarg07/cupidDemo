const appRelationsDiscovery = require('@asyncapi/app-relations-discovery');

const {getAsyncApiExamples} = require('./util'); 

let flightServiceDocs = getAsyncApiExamples();

// For default output syntax
// const defaultOutput = appRelationsDiscovery.getRelations(...docs);
// console.log(defaultOutput);

(async()=>{
    try{
        const output = await appRelationsDiscovery.getRelations(flightServiceDocs,{syntax:'reactFlow'});
        console.log(output);
    } catch(err){
        console.log(err);
    }
})();
