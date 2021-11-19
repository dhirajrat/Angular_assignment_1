import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EditnoteComponent } from '../editnote/editnote.component';
import { UserPayload } from '../models/UserPayload';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent implements OnInit, DoCheck, AfterContentInit {
  users: any = [];
  like: boolean = false;
  editingUser: any;
  userImages: any = [
    'assets/images/user1.svg',
    'assets/images/user2.svg',
    'assets/images/user3.svg',
    'assets/images/user4.svg',
  ];
  closeResult = '';

  constructor(
    private auth: AuthService,
    public dialog: MatDialog,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.auth.getUserData().subscribe(
      (data) => {
        this.users = data;
        let imgno = 0;
        this.users.forEach((value: any) => {
          value.like = false;
          value.image = this.userImages[imgno];
          imgno++;
          if (imgno == 4) {
            imgno = 0;
          }
        });
        console.log('data we got to check: ', this.users);
      },
      (error) => {
        console.log('error');
      }
    );
  }

  open(content: any, userdata: any) {
    this.editingUser = userdata;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngAfterContentInit() {}

  ngDoCheck() {}

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(EditnoteComponent, {
      width: '500px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        console.log('result: ', result.value);

        this.users.forEach((value: any) => {
          if (value.id == result.value.id) {
            if (result.value.name != '') {
              value.name = result.value.name;
            }
            if (result.value.email != '') {
              value.email = result.value.email;
            }
            if (result.value.phone != '') {
              value.phone = result.value.phone;
            }
            if (result.value.website != '') {
              value.website = result.value.website;
            }
            // value.email = f.value.email;
            // value.phone = f.value.phone;
            // value.website = f.value.website;
          }
        });
      }
    });
  }

  onFavClick(fuser: any) {
    console.log('user id liked: ', fuser);
    this.users.forEach(function (value: any) {
      if (value.id == fuser.id) {
        if (value.like == true) {
          value.like = false;
        } else {
          value.like = true;
        }
      }
    });
    console.log('after like: ', this.users);
  }

  onDelClick(user: any) {
    console.log('user id deleting: ', user);
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
    console.log('remaining user ', this.users);
  }

  submitForm(f: NgForm) {
    console.log('form Data: ', f.value);

    this.users.forEach((value: any) => {
      if (value.id == this.editingUser.id) {
        value.name = f.value.name;
        value.email = f.value.email;
        value.phone = f.value.phone;
        value.website = f.value.website;
      }
    });
  }
}
