import {Character} from "./Character";
import {Enemy} from "./Enemy";

export class KungFuFighting{
// private enemy : Enemy;
// private charac : Character;
//
//
//     constructor(enemy: Enemy, charac: Character) {
//         this.enemy = enemy;
//         this.charac = charac;
//     }
    choice(){

    }

    fight(enemy: Enemy,charac: Character) {

        console.log("ur enemy is "+enemy.username+ " n "+enemy.life+" of life");
        charac.attack(enemy);
        console.log("ur enemy is "+enemy.life+" of life");
        if(enemy.life>0){
            console.log("L'ennemi riposte !");
            enemy.attack(charac);
            console.log("ur life is now "+charac.life)

            if(charac.life>0){
                this.fight(enemy,charac);
            }else{
                console.log("party over!")
            }
        }else{
            console.log('Congratulation! you won!');
        }
    }
}