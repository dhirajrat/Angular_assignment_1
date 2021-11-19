import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditnoteComponent } from '../editnote/editnote.component';
import { UserPayload } from '../models/UserPayload';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.scss'],
})
export class UserlogComponent implements OnInit {
  users: any = [];
  userImage = 'assets/images/user.svg';
  constructor(private auth: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.auth.getUserData().subscribe(
      (data) => {
        console.log('data we got : ', data);
        this.users = data;
      },
      (error) => {
        console.log('error');
      }
    );
  }

  onEdit() {
    console.log('Edit Form');
  }

  openDialog(user: UserPayload): void {
    const dialogRef = this.dialog.open(EditnoteComponent, {
      width: '500px',
      data: user,
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result != undefined) {
    //     this.auth.updateNote(result.value).subscribe(
    //       (data) => {
    //         this.displayNotes();
    //       },
    //       (error) => {}
    //     );
    //   }
    // });
  }
}
