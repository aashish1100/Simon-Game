let gameseq=[];
let userseq=[];
let btnclasses=['.btn1','.btn2','.btn3','.btn4'];
let started = false;
let level=0;
let h2 = document.querySelector('h2');
let startbtn = document.querySelector('button');
startbtn.addEventListener('click',function()
{
    if(started==false)
    {
        started=true;
        console.log('game started')
        levelup();
    }
    
})


function flashbtn(btnclass)
{
    let btn = document.querySelector(btnclass);
   btn.classList.add("flash");
   setTimeout(()=>{
     btn.classList.remove("flash");
   },300);

}

function levelup()
{
  level++;
  h2.innerText=`Level ${level}`;
   let r = Math.floor(Math.random()*4);
   
   console.log(r);
   let btnclass = btnclasses[r];
   gameseq.push(btnclass);
  flashbtn(btnclass);

}

for(let btnclass of btnclasses)
{
    let btn = document.querySelector(btnclass);
    btn.addEventListener('click',function()
{
    if(userseq.length!=gameseq.length)
    {
        if(gameseq[userseq.length]==btnclass)
        {
            flashbtn(btnclass);
            userseq.push(btnclass);
            if(userseq.length==gameseq.length)
            {
               setTimeout(()=>{
                levelup();
                userseq=[];
               },1000);
            }
        }
        else
        {
            h2.innerText="Game over ,press any key to start again";
            userseq=[];
            gameseq=[];
            level=0;
            started=false;
        }
    }
    
})
}
