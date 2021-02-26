import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './models/user-details-dto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor() { }
// - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject 
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _todos = new BehaviorSubject<IUser[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly todos$ = this._todos.asObservable();



  // the getter will return the last value emitted in _todos subject
  get todos(): IUser[] {
    return this._todos.getValue();
  }


  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  set todos(val: IUser[]) {
    this._todos.next(val);
  }

  async addTodo(user: IUser) {

    if(user !== null) {

      // This is called an optimistic update
      // updating the record locally before actually getting a response from the server
      // this way, the interface seems blazing fast to the enduser
      // and we just assume that the server will return success responses anyway most of the time.
      // if server returns an error, we just revert back the changes in the catch statement 

      
      this.todos = [
        ...this.todos, 
        user
      ];

    
      
    }

  }

}
