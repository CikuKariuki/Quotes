export class Quote {
  public showDescription:boolean;
  public upVote:number;
  constructor(public id:number, 
    public name:string, 
    public author:string,
    public submitter:string,
    public downVote:number,
    public completeDate:Date){
    this.showDescription=false
    this.upVote=0
  }

}