let names = `Tanvi
Karan
Yogesh
Sagar
Harkirat
Snawarjot
Caio
Yi Tzeng
Dona
Lee
Keyur
Yu-Hsuan
Chaitanyasinh
Harsimranjit
Jashandeep
Kirandeep
Mandeep
Navaldeep
Simranjeet
Puneet
Kai-Wei
Nidhi
Rutendo
Maitra
Maulik
Aakash
Aatekabanu
Sam
Meet
Pratham
Abhishek
Manjotbir
Sarvdeep
Samrath
Jacob
Vinay
Sahil
Kaushal`;

let students = names.split('\n'); //Requirement 3

const instructor = 'Jessica Gilfillan'; //Requirement 4

let welcomeType; //Requirement 5

function welcomeCOMP1073(){ //Requirement 6

    var greetings = ['Welcome ', 'Hi ', 'Good to see you again, '];
    if(welcomeType === 'learner'){
        students.forEach((studentName)=>{
            appendElement(greetings[Math.floor(Math.random()*3)] + studentName + '.', 'student');
        })
    }else if(welcomeType === 'instructor'){
        appendElement(greetings[Math.floor(Math.random()*3)] + instructor + '.', 'instructor');
    }
    //auto srcoll to bottom
    var scrollOptions = {
        left: 0,
        top: document.querySelector('#welcome').scrollHeight,
        behavior: 'smooth'
    }
    document.querySelector('#welcome').scrollTo(scrollOptions);

}

function appendElement(text, styleClass){
    var tag = document.createElement('span');
    tag.className = 'badge rounded-pill ' + styleClass;
    tag.innerHTML = text;
    var element = document.getElementById('welcome');
    element.appendChild(tag);
    console.log(text);
}

welcomeType = 'learner'; //Requirement 7

welcomeCOMP1073(); //Requirement 8

//for bonus 
//select different welcomeType to demo
const selectLinstener = document.querySelector('select');
selectLinstener.onchange = function(event){
    welcomeType = selectLinstener.value;
    welcomeCOMP1073();
}