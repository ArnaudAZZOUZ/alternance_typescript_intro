import {Character} from "./Character";

export class Enemy {
    private _username: string;
    private _life: number = Math.floor(Math.random() * (100 - 1)) + 1;

    constructor(username: string) {
        this._username = username;

    }

    attack(charac: Character) {
        let attack = 0.5 * (Math.floor(Math.random() * (100 - 1)) + 1);
        console.log("the enemy attack is: " + attack);
        charac.life -= attack;
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

}