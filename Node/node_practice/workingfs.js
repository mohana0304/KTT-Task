const fs= require("fs");

const stream =fs.createReadStream("sample.txt","utf8");
stream.on("data",(chunk)=>{
    console.log("Chuck:",chunk);
});  

const stream1=fs.createWriteStream("sample.txt");
stream1.write('Handling more and more concurrent client’s request is very easy.');
stream1.write('Node JS application uses less Threads so that it can utilize only less resources or memory');
stream1.end();

// const path = require("path");

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));


//working with file

//create a new file

// fs.writeFile('sample.txt','this is new file',(err)=>{
//     if(err) throw err;
//     console.log('file is created');
// });

// //Old content is deleted and replaced.
// fs.writeFile('sample.txt','Handling more and more concurrent client’s request is very easy.',(err)=>{
//     if(err) throw err;
//     console.log('file updated');
// });

// fs.readFile('sample.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });


// fs.appendFile('sample.txt','\nNode JS application uses less Threads so that it can utilize only less resources or memory',(err)=>{
//     if(err) throw err;
//     console.log('content added');
// });

//delete file
// fs.unlink('info.txt',(err)=>{
//     if(err) throw err;
//     console.log('file deleted');
// });

// fs.rename('sample.txt','info.txt',(err)=>{
//     if(err) throw err;
//     console.log('file renamed');
// });




fs.writeFile('sample.txt','Hello',()=>{
    fs.appendFile('sample.txt','\nWorld',()=>{
        fs.readFile('sample.txt',(err,data)=>{
            if(err) throw err;
            console.log(data);

            fs.rename('sample.txt','info.txt',()=>{
                console.log("Done");
            });
        });
    });
});


fs.access('sample.txt',fs.constants.F_OK,(err)=>{
    if(err){
        fs.writeFile('sample.txt','hello from sample text',(err)=>{
            if(err) throw err;
            console.log("file is created");
        });
    }else{
        console.log("file already exists");
    }
})

fs.mkdir('myfolder',(err)=>{
    if(err) throw err;
    console.log('Folder created');
});

fs.readdir('.',(err,files)=>{
    if(err) throw err;
    console.log(files);
});

fs.rm('myfolder',{recursive:true,force:true},(err)=>{
    if(err) throw err;
    console.log('folder removed');
});//recursive - delete files in the folder without this it show error
//force - if folder doesn't exist no error with out this it show error

fs.stat('info.txt',(err,stats)=>{
    if(err) throw err;
    console.log(stats.isFile());
    console.log(stats.size);
});

