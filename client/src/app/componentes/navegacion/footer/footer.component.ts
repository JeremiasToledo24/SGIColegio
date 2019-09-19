import {Component, OnInit} from '@angular/core';
import {UiService} from "../../../servicios/ui/ui.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  enable = true;
  constructor(private uiService: UiService) {
  }

  ngOnInit() {
    this.uiService.getEnable().subscribe(enable => {
      this.enable = enable;
    });
  }

}
