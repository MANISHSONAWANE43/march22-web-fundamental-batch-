const reviews = [
    {
      id: 1,
      name: "michael lawson",
      email: "michael.lawson@reqres.in",
      img: "https://reqres.in/img/faces/7-image.jpg",
      text: "michael lawson get the music here Get the latest news & event updates here... Latest News Check out Michael's weekly livestreams, occurring Every Tuesday at 6:00pm Central (US) on the IG "
    },
    {
      id: 2,
      name: "lindsay ferguson",
      email: "lindsay.ferguson@reqres.in",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Lindsay Ferguson is a partner in the Corporate Practice Group in the firm's Dallas office. Areas of Practice Lindsay’s practice focuses on mergers and acquisitions and private equity."
    },
    {
      id: 3,
      name: "tobias funke",
      email: "tobias.funke@reqres.in",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "He was both a psychoanalyst and psychotherapist but lost his licenses after harming a man during CPR. He has since been seeking work as an actor with little success."
    },
    {
      id: 4,
      name: "byron.fields",
      email: "byron.fields@reqres.in",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Byron Fields is an investment advisor based in San Antonio, Texas. Currently a registered advisor with Titleist Asset Management, LTD, Fields has 17 years of practice in the financial advisory",
    },
    {
    id: 5,
    name:"george edwards",
    email: "george.edwards@reqres.in",
    img: "https://reqres.in/img/faces/11-image.jpg",
    text: "At George Edwards we care about your story and understand that selling or letting your home, or investment, can be one of the most stressful times in any family’s life."
    },

    {
        id: 6,
        name: "rachel.howell",
        email: "rachel.howell@reqres.in",
        img:"https://reqres.in/img/faces/12-image.jpg",
        text:"Rachel has won numerous art awards, these include, but are not limited to: Finalist and Hangers Choice Glover Art Prize 2016, Finalist Bay of Fires Art Prize 2016 and winner of 'Meandering' Aquistive Award 2011. She is also an active member of Launceston Art Society."
    }
  ];

let indexToBeDisplayed = 0

const currentElement = reviews[indexToBeDisplayed]

const imageElement = document.querySelector("#image")
const nameElement = document.querySelector(".name")
const emailElement = document.querySelector(".email")
const textElement = document.querySelector(".text")

const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
const randomBtn = document.querySelector("#random")

nextBtn.addEventListener('click', displayNext)
prevBtn.addEventListener('click', displayPrev)

randomBtn.addEventListener('click', displayRandom)

function displayNext(){
    if(indexToBeDisplayed === reviews.length-1){
        indexToBeDisplayed = 0
    }else{
        indexToBeDisplayed++
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function displayPrev(){
    if(indexToBeDisplayed === 0){
        indexToBeDisplayed = reviews.length-1
    }else{
        indexToBeDisplayed--
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function displayRandom(){
    console.log("display random user details")
}

function updateScreen(virat){
    nameElement.innerText = virat.name
    emailElement.innerText = virat.email
    textElement.innerText = virat.text
    imageElement.src = virat.img
}

updateScreen(currentElement)