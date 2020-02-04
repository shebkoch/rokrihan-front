import {FactionEntity} from './FactionEntity';
import {MatchEntity} from './MatchEntity';
import {PlayerEntity} from './PlayerEntity';

export class PlayerResultEntity {
  private _id: number;
  private _matchId: number;
  private _playerId: number;
  private _faction1Id: number;
  private _faction2Id: number;
  private _score: number;
  private _mmrChange: number;

  private _winner: boolean;

  private _factionEntity1: FactionEntity;
  private _factionEntity2: FactionEntity;
  private _matchEntity: MatchEntity;
  private _playerEntity: PlayerEntity;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get matchId(): number {
    return this._matchId;
  }

  set matchId(value: number) {
    this._matchId = value;
  }

  get playerId(): number {
    return this._playerId;
  }

  set playerId(value: number) {
    this._playerId = value;
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

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  get mmrChange(): number {
    return this._mmrChange;
  }

  set mmrChange(value: number) {
    this._mmrChange = value;
  }

  get winner(): boolean {
    return this._winner;
  }

  set winner(value: boolean) {
    this._winner = value;
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

  get matchEntity(): MatchEntity {
    return this._matchEntity;
  }

  set matchEntity(value: MatchEntity) {
    this._matchEntity = value;
  }

  get playerEntity(): PlayerEntity {
    return this._playerEntity;
  }

  set playerEntity(value: PlayerEntity) {
    this._playerEntity = value;
  }
}
