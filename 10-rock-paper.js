let score =JSON.parse(localStorage.getItem('score'))
        || {
                win:0,
                losses:0,
                ties:0
            };
            updateScoreElement();


        function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result='';
        
       if(playerMove==='Rock'){
          if(computerMove==='Rock'){
            result='Tie';
        } else if(computerMove==='Paper'){
            result='You Lose';
        } else if(computerMove==='Scissor'){
            result='You Win!';
        }
        } 
        
        else if(playerMove==='Paper'){
         if(computerMove==='Rock'){
            result='You Win!';
        } else if(computerMove==='Paper'){
            result='Tie';
        } else if(computerMove==='Scissor'){
            result='You Lose';
        }
       } 
       
       else if(playerMove==='Scissor'){
          if(computerMove==='Rock'){
            result='You Lose';
        } else if(computerMove==='Paper'){
            result='You Win!';
        } else if(computerMove==='Scissor'){
            result='Tie';
        }
       }

       if(result==='You Win!'){
        score.win+=1;
       } else if(result==='You Lose'){
            score.losses+=1;
       } else if(result==='Tie'){
        score.ties+=1;
       }

       localStorage.setItem('score',JSON.stringify(score));

     updateScoreElement();
       document.querySelector('.js-result').
       innerHTML=`${result}`

       document.querySelector('.js-moves').
       innerHTML=`You <img src="images/${playerMove}.png" alt="" class="move-icon">
            <img src="images/${computerMove}.png" alt="" class="move-icon"> Computer`;
        }

        function updateScoreElement(){
            document.querySelector('.js-score')
                .innerHTML=`Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`
        }


        function pickComputerMove(){
        const randNum=Math.random();
       
        if(randNum>=0 && randNum<1/3){
            computerMove= 'Rock';
        } else if(randNum>=1/3 && randNum<2/3){
            computerMove='Paper';
        } else if(randNum>=2/3 && randNum<1){
            computerMove='Scissor'
        }
        return computerMove;
        }