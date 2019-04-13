import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  title = 'second-prooo';
  name = 'shlomi';
  enteredValue = '';

  onClickMe() {
 alert('hehe');
 this.name = this.enteredValue;
  }

}
