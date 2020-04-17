
/*
Studio: Classes
Let’s create a class to handle new animal crew candidates!

Part 1 - Add Class Properties
Declare a class called CrewCandidate with a constructor that 
takes three parameters—name, mass, and scores. Note that scores 
will be an array of test results.

Create objects for the following candidates: 
Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.

Use console.log for each object to verify that your class correctly assigns the key/value pairs.
*/
// class CrewCandidate {
//     constructor (name, mass, scores) {
//         this.name = name;
//         this.mass = mass;
//         // Array of tests results
//         this.scores = scores; 
//     }
// }

// let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
// let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
// let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);

/*
Part 2 - Add First Class Method
As our candidates complete more tests, we need to be able to add the new scores to their records.

Create an addScore method in CrewCandidate. The function must take a 
new score as a parameter. Code this function OUTSIDE of constructor. 
(If you need to review the syntax, revisit Assigning Class Methods).
When passed a score, the function adds the value to this.scores with 
the push array method.
Test out your new method by adding a score of 83 to Bubba’s record, 
then print out the new score array with objectName.scores.
*/
// class CrewCandidate {
//     constructor (name, mass, scores) {
//         this.name = name;
//         this.mass = mass;
//         // Array of tests results
//         this.scores = scores; 
//     }

//     addScore(newScoreToAdd) {
//         return this.scores.push(newScoreToAdd);
//     }
// }

// let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
// let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
// let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);
// console.log(bubbaBear);
// bubbaBear.addScore(100);

// console.log(bubbaBear);
/*
Part 3 - Add More Methods
Now that we can add scores to our candidates’ records, we need to be able 
to evaluate their fitness for our astronaut program. Let’s add two more 
methods to CrewCandidate—one to average the test scores and the other 
to indicate if the candidate should be admitted.

Calculating the Test Average:
Add an average() method outside constructor. The function does NOT need a parameter.
To find the average, add up the entries from this.scores, then divide 
the sum by the number of scores.
To make the average easier to look at, round it to 1 decimal place, 
then return the result from the function.

Verify your code by evaluating and printing Merry’s average test score (92.7).
*/
class CrewCandidate {
    constructor (name, mass, scores) {
        this.name = name;
        this.mass = mass;
        // Array of tests results
        this.scores = scores; 
    }

    addScore(newScoreToAdd) {
        return this.scores.push(newScoreToAdd);
    }

    average(){
        // let sum = 0;
        // for(let i = 0; i < this.scores.length;i++){
        //     sum+= this.scores[i];
        // }
        // let average = sum/this.scores.length;
        const average = this.scores.reduce((a,b) => a + b, 0) / this.scores.length;
        return Number(average.toFixed(1));
    }

    status(){
        let average = this.average();
        if (average >= 90){
            return 'Accepted';
        } else if (average <= 89 && average >= 80){
            return 'Reserve';
        } else if (average <= 79 && average >= 70){
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);
console.log(bubbaBear);
bubbaBear.addScore(100);
console.log(bubbaBear.average());
console.log(bubbaBear);

for (const candidate of [bubbaBear, merryMaltese, gladGator]){
    let message = `${candidate.name} earned an average test score of ${candidate.average()}%`;
    message += ` and has a status of ${candidate.status()}.`
    console.log(message);
} 

/*
Determining Candidate Status:
Candidates with averages at or above 90% are automatically accepted to 
our training program. Reserve candidates average between 80 - 89%, while 
probationary candidates average between 70 - 79%. Averages below 70% lead to a rejection notice.

Add a status() method to CrewCandidate. The method returns a string (Accepted, 
    Reserve, Probationary, or Rejected) depending on a candidate’s average.
The status method requires the average test score, which can be called as a 
parameter OR from inside the function. That’s correct - methods can call other 
methods inside a class! Just remember to use the this keyword.
Once status has a candidate’s average score, evaluate that score, and return the 
appropriate string.
Test the status method on each of the three candidates. Use a template literal 
to print out '___ earned an average test score of ___% and has a status of ___.'

Part 4 - Play a Bit
Use the three methods to boost Glad Gator’s status to Reserve or higher.
How many tests will it take to reach Reserve status? How many to reach Accepted? 
Remember, scores cannot exceed 100%.

Tip: Rather than adding one score at a time, could you use a loop?
*/