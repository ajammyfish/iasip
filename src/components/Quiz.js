import { useState } from 'react'

const Quiz = () => {

    const [gameActive, setGameActive] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [quotes, setQuotes] = useState(
        {
            charlie: [
                "I got followed here by like ten cats. Yeah, they’re starting to follow me these days.",
                "Bro, I can handle my sedatives.",
                "I drink it every morning, so I can fight like a crow!",
                "I am going to smack everyone into tiny little pieces.",
                "Look at that door, dude. See that door right there? The one marked ‘pirate’? Do you think a pirate lives in there?",
                "I’m relaxing, I’m getting blackout drunk, and you’re leaving me alone.",
                "I’ll get high. I’ll get sad. People can laugh at me. I hate high school, man!",
                "What is this word ‘spa?’ I feel like you’re starting to say a word and you’re not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?",
                "‘Just get a job?’ Why don’t I strap on my job helmet and squeeze down into a job cannon, and fire off into job land, where jobs grow on jobbies?!"
            ],
            mac: [
                "I do backflips every single day of my life.",
                "It turns out I am – I am too muscular, and I can’t fit through.",
                "Throughout history, the ass kickers have always known carpentry – Jesus Christ, Harrison Ford.",
                "I’m not fat. I’m cultivating mass.",
                "That is about as low-brow as it gets.",
                "Give it a rest. You’re not the Messiah. You don’t know dick about the Bible.",
                "I drank three bottles of champagne and hung out with a stray dog all night under a bridge.",
                "Science is a liar sometimes."
            ],
            dennis: [ 
                "Let me tell you something. I haven’t even begun to peak. And when I do peak, you’ll know. Because I’m gonna peak so hard that everybody in Philadelphia’s gonna feel it.",
                "Talking to myself, but that’s just ’cause I, you know, I’ve got shit to say, you know?",
                "I am the golden god.",
                "I’m eating because I’m very uncomfortable.",
                "Don’t you play coy with me, you little bitch. I’m gonna stay right here, and I’m gonna wait for my minions to swarm me. And swarm they will, Tim. Alone, you’ll be.",
                "I’ve got the stride of a gazelle.",
                "I am sexually attractive. I’m an attractive man.",
                "My nose was chiseled by the Gods themselves, Frank.",
                "I've contained my rage for as long as poissible, but I shall unleashe my fury upon you like the crushing of a thousand waves!"
            ]
        }
    )

    const resetQuotes = {
        charlie: [
            "I got followed here by like ten cats. Yeah, they’re starting to follow me these days.",
            "Bro, I can handle my sedatives.",
            "I drink it every morning, so I can fight like a crow!",
            "I am going to smack everyone into tiny little pieces.",
            "Look at that door, dude. See that door right there? The one marked ‘pirate’? Do you think a pirate lives in there?",
            "I’m relaxing, I’m getting blackout drunk, and you’re leaving me alone.",
            "I’ll get high. I’ll get sad. People can laugh at me. I hate high school, man!",
            "What is this word ‘spa?’ I feel like you’re starting to say a word and you’re not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?",
            "‘Just get a job?’ Why don’t I strap on my job helmet and squeeze down into a job cannon, and fire off into job land, where jobs grow on jobbies?!"
        ],
        mac: [
            "I do backflips every single day of my life.",
            "It turns out I am – I am too muscular, and I can’t fit through.",
            "Throughout history, the ass kickers have always known carpentry – Jesus Christ, Harrison Ford.",
            "I’m not fat. I’m cultivating mass.",
            "That is about as low-brow as it gets.",
            "Give it a rest. You’re not the Messiah. You don’t know dick about the Bible.",
            "I drank three bottles of champagne and hung out with a stray dog all night under a bridge.",
            "Science is a liar sometimes."
        ],
        dennis: [ 
            "Let me tell you something. I haven’t even begun to peak. And when I do peak, you’ll know. Because I’m gonna peak so hard that everybody in Philadelphia’s gonna feel it.",
            "Talking to myself, but that’s just ’cause I, you know, I’ve got shit to say, you know?",
            "I am the golden god.",
            "I’m eating because I’m very uncomfortable.",
            "Don’t you play coy with me, you little bitch. I’m gonna stay right here, and I’m gonna wait for my minions to swarm me. And swarm they will, Tim. Alone, you’ll be.",
            "I’ve got the stride of a gazelle.",
            "I am sexually attractive. I’m an attractive man.",
            "My nose was chiseled by the Gods themselves, Frank.",
            "I've contained my rage for as long as poissible, but I shall unleashe my fury upon you like the crushing of a thousand waves!"
        ]
    }

    const [question, setQuestion] = useState(['', '']);

    const startGame = () => {
        setGameActive(true)
        generateQuestion()
    }

    const generateQuestion = () => {
        const persons = Object.keys(quotes);
        console.log(persons)
        let personIndex = Math.floor(Math.random() * 3);
        let person = persons[personIndex];
        
        let personsQuotes = quotes[person];

        console.log(personsQuotes.length)

        if (total === 14) {
            setGameActive(false)
            setGameOver(true)
        }
        else if (quotes['charlie'].length === 0 && quotes['dennis'].length === 0 && quotes['mac'].length === 0) {
            setGameActive(false)
            setGameOver(true)
        }
        else if (personsQuotes.length > 0) {

            let quoteIndex = Math.floor(Math.random() * personsQuotes.length);
            let randomQuote = personsQuotes[quoteIndex]

            setQuotes(quotes => {
                // Create a copy of the quotes state object
                const newQuotes = {...quotes};
                // Remove the quote from the personsQuotes array
                newQuotes[person] = personsQuotes.filter((quote, index) => index !== quoteIndex);
                return newQuotes;
            });

            console.log(quotes)

            setQuestion([randomQuote, person])
        } else {
            generateQuestion()
        }
    }

    const checkAnswer = (chosenPerson) => {
        chosenPerson === question[1] && setScore(score + 1);
        setTotal(total + 1)
        generateQuestion() 
    }

    const reset = () => {
        setQuotes(resetQuotes)
        setGameActive(true)
        setGameOver(false)
        setTotal(0)
        setScore(0, () => { 
            generateQuestion();
        });
        
    }

    return (
    <div className='quiz'>

        {!gameActive && !gameOver ? 
        <div>
            <h1>WELCOME TO THE IASIP QUIZ</h1>
            <h3>Test Your Knowledge</h3>
            <button className='start' onClick={startGame}>Start Game!</button>
        </div>
             : 
        !gameOver ?
        <div id='quiz-container'>
            <div id="score">Score: {score}</div>
            <h3 id='question'>{question[0]}</h3>
            <button className='pick' id="charlie" onClick={() => checkAnswer('charlie')}></button>
            <button className='pick' id="mac" onClick={() => checkAnswer('mac')}></button>
            <button className='pick' id="dennis" onClick={() => checkAnswer('dennis')}></button>
        </div> : 
        <div className='endgame'>
        <h1>Score: {score}/15</h1>
        <button className='start' onClick={reset}>Reset!</button>
        </div>
        }
    </div>
  )
}

export default Quiz