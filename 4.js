import * as readline from 'readline';

const rl = readline.createInterface(process.stdin,process.stdout);

rl.question('Input Size : ', (size)=>
{
    const n = parseInt(size);
    for(let i=0; i<n; i++) //นอก 
    {
        let line = ''
        for(let j=0; j<n; j++) //ใน
        {
            if(i==0 || j==0) //เเถวเเรก บรรทัดแรกบน
            {
                line += "*";
            }
            else if(i==(n-1)|| j==(n-1)) //เเถวหลังสุด บรรทัดสุดท้าย
            {
                line += "*";
            }
            else
            {
                line += " ";
            }
            // line=`${line}*`;
            // // line += (i+j>=n-1) ? ' ':'*';
        }
        console.log(line);
        
    }
    rl.close();
});