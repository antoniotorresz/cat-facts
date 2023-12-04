import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrl: './posts-create.component.css'
})
export class PostsCreateComponent implements OnInit {
  miFormulario: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  users: Map<number, string> = new Map();

  http = inject(HttpClient);

  enviarDatos() {
    if (this.miFormulario.valid) {
      const formData = this.miFormulario.value;
      this.http.post('https://jsonplaceholder.typicode.com/posts', formData)
        .subscribe((response: any) => {
          alert("Post creado. HTTP STATUS: " + response.status + '\n' + response);
          this.miFormulario.reset(); // Resetear el formulario
        }, (error: any) => {
          // Manejar el error en caso de que ocurra
          alert("error");
        });
        
    }
  }

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        data.forEach((user: any) => {
          this.users.set(user.id, `${user.name} - ${user.email}`);
        });
      });
    //initialize the form
    this.miFormulario = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required], 
      userId: [null, [Validators.required]]
    });
  }

}
