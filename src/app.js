export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', ''], redirect: 'tweeter' },
            { route: 'tweeter', name: 'tweets', moduleId: 'tweeter', nav: true,  title:'Tweeter' },
            { route: 'teste',    name: 'teste',  moduleId: 'teste',  nav: true,  title:'Teste'   }
        ]);
        this.router = router;
    }
}


