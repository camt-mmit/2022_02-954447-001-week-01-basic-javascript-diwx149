import * as readline from 'readline';

const rl = readline.createInterface(process.stdin,process.stdout);

rl.question('Input Size : ', (size)=>
{
    const n = parseInt(size);
    for(let j=1; j<=n; j++)
    {
        let line = ''
        for(let i=1; i<=j; i++)
        {
            line=`${line}*`;
        }
        console.log(line);
        
    }
    rl.close();
});