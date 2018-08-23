export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'tweets'], name: 'tweets', moduleId: 'tweeter', nav: true,  title:'Tweeter' },
            { route: 'home',         name: 'teste',   moduleId: 'teste',  nav: true,  title:'Teste'   }
        ]);
        this.router = router;
    }
}


