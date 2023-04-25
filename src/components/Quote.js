const Quote = () => {

    const quotes = [
        {
        Charlie: [
            "Cat in the wall. Now you’re talking my language.",
            "I got followed here by like ten cats. Yeah, they’re starting to follow me these days.",
            "So you saw me eat that Hot Pocket I found in the garbage?",
            "Keep singing, bitch. You’re not gonna have a face by the time I’m done with you.",
            "Bro, I can handle my sedatives.",
            "I’m not an executioner. I’m the best goddamn bird lawyer in the world.",
            "I’m relaxing, I’m getting blackout drunk, and you’re leaving me alone.",
            "That’s politics, bitch!",
            "What is this word ‘spa?’ I feel like you’re starting to say a word and you’re not finishing it. Are you trying to say spaghetti? Are you taking me for a spaghetti day?",
            "‘Just get a job?’ Why don’t I strap on my job helmet and squeeze down into a job cannon, and fire off into job land, where jobs grow on jobbies?!",
            "I am going to smack everyone into tiny little pieces."
        ]
    },
    {
        Mac: [
            "I do backflips every single day of my life.",
            "That is about as low-brow as it gets.",
            "Give it a rest. You’re not the Messiah. You don’t know dick about the Bible.",
            "I drank three bottles of champagne and hung out with a stray dog all night under a bridge."
        ]
    },
    {
        Dennis: [
            "Let me tell you something. I haven’t even begun to peak. And when I do peak, you’ll know. Because I’m gonna peak so hard that everybody in Philadelphia’s gonna feel it.",
            "Talking to myself, but that’s just ’cause I, you know, I’ve got shit to say, you know?",
            "I am the golden god.",
            "I’ve got the stride of a gazelle."
        ]
    }
    ]


    const fetchQuote = () => {
        let num = Math.floor(Math.random() * 3);
        let name = Object.keys(quotes[num])[0];
        let allqs = Object.values(quotes[num])[0];
        let usequote = allqs[Math.floor(Math.random() * allqs.length)]
        document.querySelector('#quote').innerHTML = name + ": " + usequote;
    }
    

  return (
    <div id="randomquote">
        <h1>IASIP Quote Generator</h1>
        <button className="start" onClick={fetchQuote}>New Quote</button>
        <p id="quote"></p>
    </div>
  )
}

export default Quote