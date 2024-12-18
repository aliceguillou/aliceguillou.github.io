let currentQuestion = 0;
let answers = [];

const questions =
  [


    {question: "What is your dog's favorite activity?", options: ["Running", "Playing fetch", "Relaxing on the couch"], points: [3, 2, 1],},


    {question: "Does your dog like to take a nap?", options: ["Yes, often", "Sometimes, but get bored", "No, always active"], points: [1, 2, 3],},


    {question: "Is your dog excited to go to the dog park?", options: ["Yes, loves it!", "Enjoy it but can be a bit shy", "Prefer staying at home"], points: [3, 2, 1],},


    {question:"What is your dog's favorite toy?", options: ["A squeaky ball", "A rope to tug on", "A plush stuffed animal"], points: [3, 2, 1],},

    
    {question: "What is your dog's reaction when meeting new people?", options: ["Super friendly and excited", "A little shy but warms up quickly", "Very cautious and standoffish"], points: [3, 2, 1],}


  ];


    function startQuiz() 
  {
    document.querySelector("button").style.display = "none";

    document.querySelector(".quiz-container").style.display = "block"; showQuestion();
  }


    function showQuestion()
  {
    const question = questions[currentQuestion]; document.getElementById("question-text").innerText = question.question; const buttons = document.querySelectorAll(".answer-buttons button"); for (let i = 0; i < question.options.length; i++) {buttons[i].innerText = question.options[i];}
  }


    function answerQuestion(answerIndex) 
  {
      answers[currentQuestion] = answerIndex; nextQuestion();
  }


    function nextQuestion()
  {
    currentQuestion++;
    if (currentQuestion < questions.length) {showQuestion();} else {showResults();}
  }


    function showResults()
  {
    document.querySelector(".quiz-container").style.display = "none"; let totalPoints = 0; for (let i = 0; i < answers.length; i++)


  {
    totalPoints += questions[i].points[answers[i]];
  }


    let personality = '';
    let dogImageSrc = '';


    if (totalPoints <= 7)
  {
    personality = "Relaxed"; dogImageSrc = "Pexelimages/relaxed.jpg";
  } 


    else if (totalPoints <= 12)
  {
    personality = "Playful"; dogImageSrc = "Pexelimages/playful.jpg";
  }


    else 
  {
    personality = "Active"; dogImageSrc = "Pexelimages/active.jpg";
  }



  document.getElementById('dogPersonality').innerText = personality;
  document.getElementById('dogImage').src = dogImageSrc;
  document.getElementById('result-container').style.display = "block";


  }