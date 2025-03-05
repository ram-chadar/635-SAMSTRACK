import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private userService: UserService) { }

  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: ''

  }


  addUser() {
    this.userService.registerUser(this.user).subscribe((res) => {

      alert(res);
      this.user.username = '';
      this.user.password = '';
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.email = '';
      this.user.role = '';



    })
  }

}
