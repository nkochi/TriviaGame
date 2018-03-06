var questions = [
    {
        question: 'What is the capital of Arizona?',
        answer: 'Phoenix',
        options: ['Sacramento', 'Phoenix', 'Scottsdale', 'Flagstaff'],
    },
    {
        question: 'What is Arizona\'s state bird?',
        answer: 'Cactus Wren',
        options: ['Raven', 'Hawk', 'Cactus Wren', 'Bald Eagle'],
    },

    {
        question: 'What is Arizona\'s state flower?',
        answer: 'Saguaro',
        options: ['Daisy', 'Saguaro', 'Cactus', 'Echinopsis'],
    },

    {
        question: 'What is Arizona\'s state nickname?',
        answer: 'The Grand Canyon',
        options: ['The Grand Canyon', 'The Copper', 'The Golden', 'The Silver'],
    },

   {
        question: 'What is Arizona\'s state tree?',
        answer: 'Palo Verde',
        options: ['Palo Verde', 'Cactus', 'The Golden', 'The Silver'],
    },

    {
        question: 'What is Arizona\'s state animal?',
        answer: 'Ringtail Cat',
        options: ['Ringtail Cat', 'Tiger', 'Lion', 'Dog'],
        },

     {
        question: 'What is Arizona\'s state Gem?',
        answer: 'Turquoise',
        options: ['Turquoise', 'Diamond', 'Aquamarine', 'Carnelian'],
        },

    {
        question: 'What is Arizona\'s state fish?',
        answer: 'Trait',
        options: ['Trait', 'Bass', 'Cod', 'Haddock'],
        }, 
        
    {
        question: 'What is Arizona\'s state Butterfly?',
        answer: 'Two-tailed Swallowtall',
        options: ['Brush-footed', 'Giant skippers', 'Two-tailed Swallowtall', 'Gossamer-winged'],
        }, 

];

/* Algorithm:
    1. handle start button click
    2. hide start button
    3. display all questions & options
        3a. loop over questions array
        3b. display question
        3c. loop over options array
        3d. display options
    4. start timer
        4a. display timer every second
        4b. check to see if timer ran out
    5. handle finish button click
    6. calculate score
    7. display score to user
    8. ask user if they want to play again
        8a. if yes, clear questions and start again
*/

$('#finish-btn').hide();

$('#start-btn').click(function() { // 1
    console.log('start button clicked!');    
    $('#start-btn').hide(); // 2

    var  counter = 30;
    var timer = setInterval(function() {
    counter--;
    if(counter >= 0) 
         document.getElementById("timer").textContent = "Count down:  " + counter; 
    if(counter === 0)
        clearInterval(timer);
    },1000);

       // 3
    for (var i = 0; i < questions.length; i++) { // 3a
      
        var question = questions[i];
        console.log(question.question);
        // string interpolation
        // 3b
        $('#questions').append(`
            <div>${question.question}</div>
        `);
        // 3c
        for (var j = 0; j < question.options.length; j++) {
            var option = question.options[j];
            console.log('option', option);
            // 3d
            $('#questions').append(`
                <div>
                    <input type="radio" name="question-${i}" value="${option}"> ${option}<br>
                </div>
            `);
        }

        $('#questions').append('<br/>');
    }

    // 5
    $('#finish-btn').show();
    $('#finish-btn').click(function() {

        // 6
        var numberCorrect = 0;
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            // string interpolation - back tick `
            var userAnswer = $(`input[name=question-${i}]:checked`).val();
            //var userAnswer = $('input[name=question-' + i + '}]:checked').val();

            //console.log('userAnswer', userAnswer);
            if (userAnswer === question.answer) {
                numberCorrect++;
            }
        }

        console.log('numberCorrect', numberCorrect);

        // 7
        alert(`You got ${numberCorrect} right!`);
         //  for (var i = 0; i < questions.length; i++) {
         //   var question = questions[i];
            // string interpolation - back tick `
             userAnswer = false;
      //  }

    });
   
});
























