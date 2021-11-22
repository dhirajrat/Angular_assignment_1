import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  addUserForm = this.fb.group({
    name: ['', Validators.required],
    website: ['', Validators.required],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AdduserComponent>
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {}

  get f() {
    return this.addUserForm.controls;
  }
}
