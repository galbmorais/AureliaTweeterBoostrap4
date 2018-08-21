import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

export class App {

  attached() {
    $('[data-toggle="tooltip"]').tooltip();
  }

}
