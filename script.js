const fs=require('fs');
// fs.writeFile('hello.txt','Hello World',function(err)
// fs.appendFile('hello.txt','\nWelcome to Node.js',function(err)
// fs.rename('hello.txt','greeting.txt',function(err)
// fs.copyFile('greeting.txt','copy_greeting.txt',function(err)
fs.unlink('copy_greeting.txt',function(err)
{
    if(err) console.error(err);
    else
    // console.log('File created successfully');
    // console.log('File updated successfully');
    // console.log('File renamed successfully');
    // console.log('File copied successfully');
    console.log('File deleted successfully');
}); 