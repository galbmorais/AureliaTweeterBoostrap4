import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

const ID = 0;
const AVATAR = 'https://tinyurl.com/yb9d5vzk';
const NAME = 'TechWow';
const HANDLE = '@TechWow';

export class App {

  attached() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  //tweetToEdit = [{situation:null, id:null}];
  composedTweet = null;
  tweets = [];

  constructor() {
    this.tweets = [
      {
        id: 0,
        avatar: 'https://tinyurl.com/yb9d5vzk',
        name: 'TechWow',
        handle: '@TechWow',
        text: 'Naval Ravikant on China money into Silicon Valley: This trickle could become a tsunami'
      },
      {
        id: 1,
        avatar: 'https://pbs.twimg.com/profile_images/1332650890/strayfromthepath_flagtee_artworkslide_bigger.jpg',
        name: 'Stray From The Path',
        handle: '@strayfromdapath',
        text: 'This week has been such shit. The only thing that\'s made me happy is the impending STYG/Expire/KL tour and Shinsuke Nakamura entrance at NXT'
      },
      {
        id: 2,
        avatar: 'https://cde.peru.com//ima/0/1/6/5/9/1659406/611x458/foto-perfil.jpg',
        name: 'Chris Sacca',
        handle: '@sacca',
        text: 'A photographer records events and tells stories using images.'
      }
    ];
  }

  createTweet() {
    //if(this.tweetToEdit.situation == false){
      
    this.tweets.unshift({
      id: this.tweets.length + 1,
      avatar: AVATAR,
      name: NAME,
      handle: HANDLE,
      text: this.composedTweet
    });

    // else {
    //     debugger;
    //     this.tweets[this.tweetToEdit.id].text = this.composedTweet;
    // }
    // this.tweetToEdit.situation = true;
    // this.tweetToEdit.id = null; 

    this.composedTweet = null;
  }

  deleteTweet(tweet){
    let tweets = this.tweets; //array
    let id = tweet.tweet.id; //id de quem quero remover
    let tweetToRemove = tweets.filter(function(item) {
      return item.id == id;
    }); // retorna obj
    for(let tweet of tweetToRemove){
      let index = tweets.indexOf(tweet);    
      tweets.splice(index, 1); //remove tweet
    }   
  }

  editTweet(tweet){
    this.tweetToEdit = true;
    let tweets = this.tweets; //array
    let id = tweet.tweet.id; //id de quem quero editar
    this.composedTweet = tweet.tweet.text;
    //this.tweetToEdit.situation = true;
    //this.tweetToEdit.id = id;   
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
