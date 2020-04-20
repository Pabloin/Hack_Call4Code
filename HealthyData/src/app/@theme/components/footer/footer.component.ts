import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">With ♥ to 
       <b><a href="https://developer.ibm.com/callforcode/getstarted/covid-19/" target="_blank">CallForCode @ 2020</a></b>
       &nbsp; Track COVID-19</span>
  `,
})
export class FooterComponent {
}
