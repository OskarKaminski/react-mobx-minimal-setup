// const r = require("request");
var txUrl = "http://localhost:7474/db/neo4j/tx";
function cypher(query,cb) {
    fetch(txUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic bmVvNGo6QXNkZjEyMyQ='
        },
        body: JSON.stringify({statements:[{statement:query}]})
    }).then(response => {
        console.log({'response': response});
    })

    // r.post({uri:txUrl,
    //         json:{statements:[{statement:query,parameters:params}]}},
    //     function(err,res) { cb(err,res.body)})
}

var query='MATCH(root:Concept {name: "-"})<-[*1..10]-(c) RETURN root,c'
var cb=function(err,data) { console.log(JSON.stringify(data)) }

cypher(query,cb)