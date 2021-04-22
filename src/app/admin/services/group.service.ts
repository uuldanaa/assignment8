import { Injectable } from '@angular/core';
import { Group } from '../group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups() {
    let groupList: Group[];
    groupList = [
      new Group(1, "IS1813", "Umarov"),
      new Group(2, "IS1814", "Umarov"),
      new Group(3, "IS1815", "Umarov"),
      new Group(4, "IS1816", "Umarov")
    ];

    return groupList;
  }
}
