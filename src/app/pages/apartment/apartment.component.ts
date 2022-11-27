import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  project = []
  apartments = []

  constructor(private readonly projectService: ProjectService,
              private readonly apartmentService: ApartmentService,
              private activeRoute: ActivatedRoute) { }

  getProjectById(id: number) {
    this.projectService.getProject().subscribe((rest: any) => {
      this.project = rest.data.filter((item: { id: number }) => item.id == id);
    })
  }

  getApartmentById(id: number) {
    this.apartmentService.getApartments().subscribe((rest: any) => {
      this.apartments = rest.data.filter((item: { id: number }) => item.id == id);
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      if(params.id) {
        this.getProjectById(params.id);
        this.getApartmentById(params.id);
      }
    })
  }
}