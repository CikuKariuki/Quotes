export class Quote {
  public showDescription:boolean;
  constructor(public id:number, public name:string, public author:string){
    this.showDescription=false
  }

}
