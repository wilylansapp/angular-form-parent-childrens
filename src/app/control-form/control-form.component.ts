import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.css'],
})
export class ControlFormComponent implements OnInit {
  @Input() controlName: string;
  get formGroupParent(): FormGroup {
    return this.rootFormGroup.form;
  }
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {}
}
