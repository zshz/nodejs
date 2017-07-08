/**
 * Created by huahua on 2017/7/8.
 */
var fs=require("fs");
//fs.readdir(__dirname,function(err,files){
//    console.log(files);
//})
var stdin=process.stdin;
var stdout=process.stdout;

fs.readdir(process.cwd(),function(err,files){
    console.log('');
    if(!files.length){
        return console.log('\033[31m Nofiles to show!\033[39m\n');
    }
    console.log('select which file to directory you want to see\n');
    function file(i){
        var filename=files[i];
        fs.stat(__dirname+'/'+filename,function(err,stat){
            if(stat.isDirectory()){
                console.log('   '+i+'   \033[36m'+filename+'/\033[39m');
            }else{
                console.log('   '+i+'   \033[90m'+filename+'\033[39m');

            }


            if(++i==files.length){
                read();
            }else{
                file(i);
            }


        });
    }
    function read(){
        console.log('');
        stdout.write(   '\033[33mEnter your choice:\033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data',option);
    }
    function option(data){
        if(!files[Number(data)]){
            stdout.write(   '\033[31mEnter your choice:\033[39m');
        }else{
            stdin.pause();
        }
    }
    file(0);
});