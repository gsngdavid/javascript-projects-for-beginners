let people = [
    {
        name: 'Peter Jones',
        job: 'Intern',
        bio: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        imgPath: 'images/person-3.jpg'
    },
    {
        name: 'Iradukunda Jane',
        job: 'Intern',
        bio: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        imgPath: 'images/person-2.jpg'
    },
    {
        name: 'John Doe',
        job: 'Boss',
        bio: 'Sriracha Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        imgPath: 'images/person-4.jpg'
    },
    {
        name: 'Lebron James',
        job: 'Baller',
        bio: 'James built his wealth not only through his NBA earnings, but careful investments in property and businesses, which have given him ownership stakes in valuable franchises such as the Fenway Sports Group, the owner of the Boston Red Sox',
        imgPath: 'images/person-1.jpg'
    }
];

let image = document.querySelector('.image');
let username = document.querySelector('.name');
let job = document.querySelector('.job');
let bio = document.querySelector('.bio');

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let supriseBtn = document.getElementById('suprise');

let personIndex = 0;

supriseBtn.addEventListener('click', () => handlerChangeReview('random'));
prevBtn.addEventListener('click', () => handlerChangeReview('prev'));
nextBtn.addEventListener('click', () => handlerChangeReview('next'));

function handlerChangeReview(action) {
    if(action === 'prev') {
        personIndex = personIndex === 0 ? people.length - 1 : personIndex - 1;
    }
    if(action === 'next') {
        personIndex = personIndex === people.length - 1 ? 0 : personIndex + 1;
    }
    if(action === 'random') {
        personIndex = randomNumber(people.length);
    }

    let person = people[personIndex];

    image.setAttribute('src', person.imgPath);
    username.textContent = person.name;
    job.textContent = person.job;
    bio.textContent = person.bio;
    
}

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}