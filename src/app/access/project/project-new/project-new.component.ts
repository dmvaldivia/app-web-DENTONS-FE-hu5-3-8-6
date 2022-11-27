import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  projectForm = this.fb.group({
    nombre: ['', Validators.required],
    precio: ['', Validators.required],
    direccion: ['', Validators.required],
    ubicacion: ['', Validators.required],
    images: this.fb.array([
      this.fb.group({
        nombre: '',
        ruta: ''
      })
    ])
  });

  //Necesitamos una funcion para leer el arreglo de imagenes
  get imagesGroup() {
    return (<FormArray>(<FormGroup>this.projectForm).get('images')).controls;
  }

  constructor(private fb: FormBuilder,
              private readonly projectService: ProjectService,
              private router: Router) { }

  insert(data) {
    const token = sessionStorage.getItem('token');
    const header = { Authorization: 'Bearer ' + token };

    this.projectService.adminProjectInsert(data, header).subscribe((rest: any) => {
      if(rest.isSuccess) {
        alert('Proyecto generado con ID: ' + rest.data.id);
        this.router.navigate(['admin/project/index']);
      } else {
        alert(rest.errorMessage);
      }
    })
  }

  onSubmit() {
    if(this.projectForm.valid) {
      this.insert(this.projectForm.value);
    }
  }
  
  ngOnInit(): void {
  }

}
