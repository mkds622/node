var http = require('http');
var bl = require('bl');
count = 0;
result = [];

function displayResult(){
    result.forEach(res => console.log(res));
}

function getData(i){
    http.get(process.argv[2+i], function(response){
        response.pipe(bl(function(err,data){
            if(err)
                return console.log(err);
            result[i]=data.toString();
            count++;
            if(count === 3){
                displayResult();
            }  
        }));
    }).on('error', function(e){
        console.log(e);
    })
}    


for(var i = 0; i< 3; ++i){
    getData(i);
}
