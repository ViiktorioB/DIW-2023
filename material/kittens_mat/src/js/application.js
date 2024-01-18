import "/src/sass/application.scss"
import $ from "./jquery-2.1.0.min.js"
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';


// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCTabBar} from '@material/tab-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

var names = ['Tiger', 'Samuel', 'Leeloo',
             'Bella', 'Mo', 'Sly',
             'Beezy', 'Maple', 'Rodney',
             'Yonce', 'Reginald', 'Winifred'];

var ages  = ['9 Weeks', '12 Weeks', '3 Months',
             '8 Weeks', '1 Year', '15 Weeks',
             '4 Months', '2 Months', '14 Weeks',
             '6 Months', '10 Weeks', '8 Months'];

             $(document).ready(function () {
              var w = 250;
              var h = 250;
        
              $('.kitten-image').each(function (i, el) {
                $(el).attr('src', 'http://placekitten.com/' + w + '/' + h + '?image=' + i);
                var cardTitle = $(el).closest('.mdc-card').find('.mdc-card__title');
                cardTitle.after(`<button class="mdc-icon-button mdc-card__action mdc-card__action--icon" aria-label="Adopt">
                 <span class="material-icons">favorite_border</span> 
                <lable >${names[i] + " "} </lable>
                 <second>${ages[i]} </second></button>`);

              });
            });

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});
