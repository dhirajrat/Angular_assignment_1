import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss'],
})
export class EditnoteComponent implements OnInit {
  updateUserForm = this.fb.group({
    name: ['', Validators.required],
    website: ['', Validators.required],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditnoteComponent>
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {}

  get f() {
    return this.updateUserForm.controls;
  }
}
