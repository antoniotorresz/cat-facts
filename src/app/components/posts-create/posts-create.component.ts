import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrl: './posts-create.component.css'
})
export class PostsCreateComponent implements OnInit {
  enviarDatos() {
    throw new Error('Method not implemented.');
  }

  miFormulario: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }
}
