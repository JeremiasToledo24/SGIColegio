import {Component, OnInit} from '@angular/core';
import {UiService} from "../../../servicios/ui/ui.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  enable = true;
  currentUser: any;
  constructor(private uiService: UiService) {
  }

  ngOnInit() {
    this.uiService.getEnable().subscribe(enable => {
      this.enable = enable;
    });
    this.uiService.getUser().subscribe(data => {
      this.currentUser = data;
    });
  }

}
