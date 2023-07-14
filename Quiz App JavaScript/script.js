var timer = document.getElementById('timer');
var intt = "10";
var questions = ['2. What is The Textile City of Pakistan', '3. What Is The City Of Lights Of Pakistan', ' 4 What Is The City Of Tech Of Pakistan',]
var answers = [['Multan', 'Lahore', 'Karachi', 'Pashawar'], ['Larkana', 'Gambat', 'Karachi', 'Hydrabad'],
['Lahore', 'Rawalpindi', 'Sargodha', 'Chitral'],]

var nextbutton = document.getElementById('next');
var card = document.querySelector('.card')
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var q4 = document.getElementById('q4')
var questionid = document.getElementById('questionid')
var headingquestion = document.getElementById('heading-question');
var count = 0;
var result = document.querySelector('.result');
var score = document.getElementById('score');





var interval = setInterval(function () {

    timer.innerHTML = intt;
    intt--;

    if (intt === -1) {

        intt = 10;
        count++;
        console.log(count)

        switch (count) {

            case 1: {


                headingquestion.innerHTML = questions[0]
                q1.innerHTML = answers[0][0];
                q2.innerHTML = answers[0][1];
                q3.innerHTML = answers[0][2];
                q4.innerHTML = answers[0][3];


            } break;

            case 2: {
                headingquestion.innerHTML = questions[1]
                q1.innerHTML = answers[1][0];
                q2.innerHTML = answers[1][1];
                q3.innerHTML = answers[1][2];
                q4.innerHTML = answers[1][3];

            } break;

            case 3: {
                headingquestion.innerHTML = questions[2]
                q1.innerHTML = answers[2][0];
                q2.innerHTML = answers[2][1];
                q3.innerHTML = answers[2][2];
                q4.innerHTML = answers[2][3];

            } break;

            case 4: {

                clearInterval(interval);
            }





        }
    }

    questionid.innerHTML = count + 1;

    if(count ===4){

        questionid.innerHTML = 0;
        nextbutton.style.display = "inline"

    }


}, 1000)


nextbutton.addEventListener('click', function () {
    count++;
    switch (count) {

        case 1: {

            headingquestion.innerHTML = questions[0]
            q1.innerHTML = answers[0][0];
            q2.innerHTML = answers[0][1];
            q3.innerHTML = answers[0][2];
            q4.innerHTML = answers[0][3];

        } break;

        case 2: {
            headingquestion.innerHTML = questions[1]
            q1.innerHTML = answers[1][0];
            q2.innerHTML = answers[1][1];
            q3.innerHTML = answers[1][2];
            q4.innerHTML = answers[1][3];
        } break;

        case 3: {
            headingquestion.innerHTML = questions[2]
            q1.innerHTML = answers[2][0];
            q2.innerHTML = answers[2][1];
            q3.innerHTML = answers[2][2];
            q4.innerHTML = answers[2][3];

        }
    }

    if(count ===4){

        questionid.innerHTML = 0;
        nextbutton.style.display = "inline"
    }

})

q1.addEventListener('click', function () {

    if (q1.innerHTML === answers[0][0]) {
        alert("The Answer Is Right :)")
        score.innerHTML =  25+25;

    }

    else if (q1.innerHTML === "Islamabad - The City Of Tree") {

        alert("The Answer Is Right :)")
        score.innerHTML =  25;

    }

    else if (q1.innerHTML === answers[2][0]) {

        alert("The Answer Is Right :)")
        score.innerHTML =  75+25;

    }
    else {

        alert("Wrong Answer")
    }

})

q2.addEventListener('click', function () {

    alert("Answer Is Wrong")

})

q3.addEventListener('click', function () {

    if (q3.innerHTML === answers[1][2]) {
        alert("The Answer Is Right :)")
        score.innerHTML =  50+25;
    }

    else {

        alert("The Answer IS Wrong")
    }

})

q4.addEventListener('click', function () {


    alert("The Answer IS Wrong")


})

nextbutton.addEventListener('click', function(){

    result.style.display = "inline";

    
})