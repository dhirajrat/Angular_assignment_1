import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss'],
})
export class EditnoteComponent implements OnInit {
  updateUserForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    website: ['', Validators.required],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditnoteComponent>,
    @Inject(MAT_DIALOG_DATA)
    public user: any
  ) {
    console.log('constr: ', user.id);
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {}

  get f() {
    return this.updateUserForm.controls;
  }
}
