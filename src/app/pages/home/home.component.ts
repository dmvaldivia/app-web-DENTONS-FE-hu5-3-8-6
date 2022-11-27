import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects = [];

  constructor(private readonly projectService: ProjectService) { }

  getProjects() {
    this.projectService.getProject().subscribe((rest: any) => {
      console.log(rest.data);
      this.projects = rest.data;
    })
  }

  getProjectsBE() {
    this.projectService.getProjects().subscribe((rest: any) => {
      console.log(rest.data);
      this.projects = rest.data;
    })
  }

  ngOnInit(): void {
    //this.getProjects();
    this.getProjectsBE();
  }

}
