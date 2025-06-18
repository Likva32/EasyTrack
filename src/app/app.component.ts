import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { DUMMY_USERS } from 'src/assets/dummy-users';
import { User } from './user/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'first-angular-project';
  users = DUMMY_USERS;
  selectedUserId: string;

  searchControl = new FormControl();

  onSelectUser(id: string): void{
    this.selectedUserId = id;
    console.log('Selected UserId:', id);
  }

  get selectedUser(): User {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      console.log('Search term:', value);
    });
  }
}
