const fs = require("fs")

fs.writeFileSync("./test.txt","This is test file")

// fs.write("./test.txt","this is async file content",(err,data)=>{
//     if(err){
//         console.log(err)

//     }
//     else{
//         console.log("File is created")
//     }
// })
fs.appendFileSync("test.txt",new Date ().toLocalSgtring())
const file= fs.readFileSync("test.tsxt","utf-8")