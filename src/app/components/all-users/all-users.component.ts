import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  userList: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }



  getAllUser() {
    this.userService.getAllUser().subscribe((res) => {
      this.userList = res;
      console.log(res);

    })
  }

  deleteUser(username: any) {
    this.userService.deleteUser(username).subscribe((res)=>{
      alert(res)
      this.getAllUser();
    })
    }

}
