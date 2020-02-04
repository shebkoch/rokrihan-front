export class FactionEntity {
  private _id: number;
  private _name: string;
  private _matchCount: number;
  private _winCount: number;
  private _score: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get matchCount(): number {
    return this._matchCount;
  }

  set matchCount(value: number) {
    this._matchCount = value;
  }

  get winCount(): number {
    return this._winCount;
  }

  set winCount(value: number) {
    this._winCount = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }
}
