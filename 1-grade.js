import * as readline from 'readline';

const rl = readline.createInterface(process.stdin,process.stdout);

rl.question('Input your score : ', (score)=>
{
    let grade='';
    if (score >= 80) 
    {
        grade = "Get A";
    }
    else if (score >= 70)
    {
        grade = "Get B";
    }
    else if (score >= 60)
    {
        grade = "Get C";
    }
    else if (score >= 50)
    {
        grade = "Get D";
    }
    else
    {
        grade = "Get F ";
    }

    console.log(`Result is  ${grade}.`);
    rl.close();
});