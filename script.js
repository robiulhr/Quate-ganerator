// select element

let quotecontainerVar = document.getElementById("quote-container")
let quoteVar = document.getElementById("quote")
let authorVar = document.getElementById("author")
let quoteFontSize = document.getElementById("quote-text")
// select buttons
let twitterVar = document.getElementById("twitter")
let newquoteVar = document.getElementById("new-quote")

// loader 
let loader = document.getElementById("loader")

// loader animation on
  function loaderanimationOn(){
    loader.hidden = false;
    quotecontainerVar.hidden = true
  }
// loader animation off
  function loaderanimationOff(){
    loader.hidden = true;
    quotecontainerVar.hidden = false
  }
//  get Quate function
async function getQuote() {
  loaderanimationOn()
  let proxyUrl = "https://apps.blogdesire.com/cors/?url="
  let apiUrl =  'https://type.fit/api/quotes'
  try{
    let randomQuate = parseInt( Math.random()*1642)
      const response = await fetch (proxyUrl +  apiUrl) 
      const data = await response.json();
        //  generate random number
        let textLength = await data[randomQuate].text.length 
        // let authorNull = await data[randomQuate].author
      quoteVar.innerText = data[randomQuate].text
      // console.log(data[randomQuate]);
        //  authorNull === "" ? authorVar.innerText = "Unknown": authorVar.innerText = data[randomQuate].author
      authorVar.innerText = data[randomQuate].author
      if(textLength > 90){
          quoteFontSize.classList.replace("quote-text","long-quote")
      }
      loaderanimationOff()
  }catch(err){
    console.log("woops," , err);
  }
}
getQuote()  

function tweetQuate (){
    const quoteText = quoteVar.innerText
    const autherText = authorVar.innerText
    const tweetUrl =  `https://twitter.com/intent/tweet?text=${quoteText} - ${autherText}`

    window.open(tweetUrl, "_blank")
}


twitterVar.addEventListener("click",tweetQuate)
newquoteVar.addEventListener("click",getQuote)