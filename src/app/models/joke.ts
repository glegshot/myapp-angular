export class Joke{

     setup:string | undefined;
     punchline:string | undefined;
     hide: boolean | undefined;

    constructor(setup:string,punchline:string,hide:boolean){
        this.setup = setup;
        this.punchline = punchline;
        this.hide = hide;
    }


}