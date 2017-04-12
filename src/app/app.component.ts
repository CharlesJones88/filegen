import { Component } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FileGenService } from './filegen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FileGenService ]
})
export class AppComponent {
  public checks: {selected: boolean}[][] = [];
  public message: string = '';
  constructor(private fileGenService: FileGenService) {
    const width = 5;
    const height = 7;
    for(var i = 0; i < height; ++i) {
      this.checks[i] = [];
      for(var j = 0; j < width; ++j) {
        this.checks[i][j] = {selected: false};
      }
    }
  }
  generateFile(number) {
    debugger;
    var params = {number: parseInt(number.value), values: this.checks};
    this.fileGenService.generateFile(params).subscribe(value => {
      this.message = value;
    });
  }
}
