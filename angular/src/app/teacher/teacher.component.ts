import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  features = [
    {
      title: 'Официальное трудоустройство',
      text: 'Накопление трудового стажа в школе или в учебном центре.',
      img: 'icons-teacher-01'
    },
    {
      title: 'Работа с опытными методистами',
      text: 'Среди наших методистов, эксперты ОГЭ и ЕГЭ, члены жюри многих олимпиад РФ и Франции.',
      img: 'icons-teacher-02'
    },
    {
      title: 'Инновационность',
      text: 'Наша система EdLabs поможет существенно сократить рутинные процессы и сосредоточиться на главном.',
      img: 'icons-teacher-03'
    },
    {
      title: 'Профессиональный рост',
      text: 'Наша программа рассчитана не только на подготовку к ЕГЭ, но и к уровневым и профильным олимпиадам.',
      img: 'icons-teacher-04'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    $(document).ready(() => {
      const container = $('.main-banner > .container');
      const h1 = container.find('h1');
      const p = container.find('p');
      const btn = container.find('.btn');
      const finalState = {opacity: 1, right: 0};
      const finalStateFeature = {opacity: 1, top: 0};
      const animationDuration = 600;

      h1.animate(finalState, animationDuration, () => {
        p.animate(finalState, animationDuration, () => {
          btn.animate(finalState, animationDuration);
        });
      });

      function animateFeatures(now) {
        if (!isAnimated) {
          isAnimated = true;
          features.each((i, feature) => {
            setTimeout(() => {
              $(feature).animate(finalStateFeature, animationDuration);
            }, ((now ? 3 : 0) + i)*animationDuration);
          });
        }
      }

      const features = $('.content > .row > div');
      let isAnimated = false;
      if ($('.main-banner').height() < .7*$(window).height()) {
        animateFeatures(true);
      } else {
        $(document).scroll(() => {
          animateFeatures(false)
        });
      }
    });
  }

  goToLanding() {
    this.router.navigate(['/']);
  }
}
