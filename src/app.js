import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

const AVATAR = 'https://tinyurl.com/yb9d5vzk';
const NAME = 'TechWow';
const HANDLE = '@TechWow';

export class App {

  attached() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  composedTweet = null;
  tweets = [];

  constructor() {
    this.tweets = [
      {
        avatar: 'https://tinyurl.com/yb9d5vzk',
        name: 'TechWow',
        handle: '@TechWow',
        text: 'Naval Ravikant on China money into Silicon Valley: This trickle could become a tsunami'
      },
      {
        avatar: 'https://pbs.twimg.com/profile_images/1332650890/strayfromthepath_flagtee_artworkslide_bigger.jpg',
        name: 'Stray From The Path',
        handle: '@strayfromdapath',
        text: 'This week has been such shit. The only thing that\'s made me happy is the impending STYG/Expire/KL tour and Shinsuke Nakamura entrance at NXT'
      },
      {
        avatar: 'https://cde.peru.com//ima/0/1/6/5/9/1659406/611x458/foto-perfil.jpg',
        name: 'Chris Sacca',
        handle: '@sacca',
        text: 'A photographer records events and tells stories using images.'
      }
    ];
  }

  createTweet() {

    this.tweets.unshift({
      avatar: AVATAR,
      name: NAME,
      handle: HANDLE,
      text: this.composedTweet
    });

    this.composedTweet = null;
  }

  deleteTweet(tweet){
    debugger;
  }

  handleKeyPress(evt) {
    if (evt.keyCode === 13 && ths.composedTweet) {
      this.createTweet();
      evt.preventDefault();
    } else {
      return true;
    }
  }

}
