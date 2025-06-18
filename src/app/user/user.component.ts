import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Input() selected: boolean;
  @Output() select = new EventEmitter<string>();

  get userImageUrl(): string {
    return 'assets/users/' + this.user.avatar;
  }

  constructor() { }

  ngOnInit(): void {

  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
