import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives:[CoursesComponent],
})
export class AppComponent {
  title = 'nicnic';
  // let isMobileInput: string;

  userInput(input: string) {
    if (input === 'mobile') {
      console.log('********');
      let emailBlock = document.getElementById('email-block');
      // emailBlock.style.display='none';
    } else if (input === 'email') {
      console.log('#######');

    } else if (input === 'chalan') {                                   
      console.log('@@@@@@@@@');
    }
  }
}
