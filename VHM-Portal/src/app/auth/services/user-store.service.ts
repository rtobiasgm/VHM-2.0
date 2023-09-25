import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private nameId: string | null = null;

  constructor() { }

  setNameId(nameId: string): void{
    this.nameId = nameId;
  }

  getNameId(): string | null {
    return this.nameId;
  }
  
}