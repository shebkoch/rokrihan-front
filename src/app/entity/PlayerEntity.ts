import {FactionEntity} from './FactionEntity';

export class PlayerEntity {
  private _id: number;
  private _name: string;
  private _matchCount: number;
  private _winCount: number;
  private _mmr: number;
  private _bestFaction: number;
  private _bestFactionEntity: FactionEntity;

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

  get mmr(): number {
    return this._mmr;
  }

  set mmr(value: number) {
    this._mmr = value;
  }

  get bestFaction(): number {
    return this._bestFaction;
  }

  set bestFaction(value: number) {
    this._bestFaction = value;
  }

  get bestFactionEntity(): FactionEntity {
    return this._bestFactionEntity;
  }

  set bestFactionEntity(value: FactionEntity) {
    this._bestFactionEntity = value;
  }
}
