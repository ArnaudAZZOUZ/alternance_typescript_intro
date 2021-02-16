import {Character} from "./Character";

const prompts = require('prompts');
const questions = [
    {
        type: 'text',
        name: 'username',
        message: 'What\'s your mother f.. name??'
    },
    {
        type: 'number',
        name: 'life',
        message: 'How alive are you?'
    },
    {
        type: 'text',
        name: 'sex',
        message: 'what gender are you?'
    }
];

const combat = [
    {
        type: 'number',
        name: 'choice',
        message: 'You\'re facing an enemy! press 1 to fight or press 2 to run away '
    }
];
(async () => {

    const response = await prompts(questions);
    // console.log(response.username, response.life, response.sex);
    let player1 = new Character(response.username, response.life, response.sex);
    player1.summary(response);
    console.log('Ennemi en approche !');
    const respfirtFight = await prompts(combat);
    if (respfirtFight.choice === 1) {
        console.log('you r brave!');
    }else
    if (respfirtFight.choice === 2) {
        console.log('you r looser!');
    } else {
        console.log('what haven\'t you got??')
    }

})();