import {Enemy} from "./Enemy";

export class Character {
    private _username: string;
    private _life: number;
    private _sex: string;


    constructor(username: string, life: number, sex: string) {
        this._username = username;
        this._life = life;
        this._sex = sex;
    }


    summary(perso: Character) {
        console.log(perso.username, perso.life, perso.sex)

    }

    attack(enemy: Enemy) {
        let attack = Math.floor(Math.random() * (100 - 1))+1;
        console.log("u attack is: "+ attack);
        enemy.life = enemy.life - attack;

    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get life(): number {
        return this._life;
    }

    set life(value: number) {
        this._life = value;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }


}