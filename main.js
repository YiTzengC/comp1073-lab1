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

let students = names.split('\n');

const instructor = 'Jessica Gilfillan';

let welcomeType;

function welcomeCOMP1073(){
    if(welcomeType === 'learner'){
        students.forEach((studentName)=>{
            console.log(studentName);
        })
    }else if(welcomeType === 'instructor'){
        console.log(instructor);
    }
}

welcomeType = 'learner';

welcomeCOMP1073();