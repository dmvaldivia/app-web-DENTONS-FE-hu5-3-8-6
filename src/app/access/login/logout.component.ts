import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
    template: ''
})

export class LogoutComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        sessionStorage.clear();

        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
            this.router.navigate(['home']);
            window.location.reload();
          })
    }
}