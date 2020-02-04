export class MatchEntity {
  private _id: number;
  private _ctime: number;
  private _etime: number;
  private _rating: boolean;
  private _winnerScore: number;


  get winnerScore(): number {
    return this._winnerScore;
  }

  set winnerScore(value: number) {
    this._winnerScore = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get ctime(): number {
    return this._ctime;
  }

  set ctime(value: number) {
    this._ctime = value;
  }

  get etime(): number {
    return this._etime;
  }

  set etime(value: number) {
    this._etime = value;
  }

  get rating(): boolean {
    return this._rating;
  }

  set rating(value: boolean) {
    this._rating = value;
  }
}
