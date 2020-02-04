import {FactionEntity} from './FactionEntity';

export class FactionComboEntity {
  private _id: number;
  private _faction1Id: number;
  private _faction2Id: number;

  private _factionEntity1 : FactionEntity;
  private _factionEntity2 : FactionEntity;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get faction1Id(): number {
    return this._faction1Id;
  }

  set faction1Id(value: number) {
    this._faction1Id = value;
  }

  get faction2Id(): number {
    return this._faction2Id;
  }

  set faction2Id(value: number) {
    this._faction2Id = value;
  }

  get factionEntity1(): FactionEntity {
    return this._factionEntity1;
  }

  set factionEntity1(value: FactionEntity) {
    this._factionEntity1 = value;
  }

  get factionEntity2(): FactionEntity {
    return this._factionEntity2;
  }

  set factionEntity2(value: FactionEntity) {
    this._factionEntity2 = value;
  }
}
