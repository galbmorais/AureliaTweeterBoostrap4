export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', ''], redirect: 'tweeter' },
            { route: 'tweeter',    name: 'tweeter',    moduleId: 'tweeter',    nav: true,  title:'Tweeter' },
            { route: 'formulario', name: 'formulario', moduleId: 'formulario', nav: true,  title:'Formulário'},
            // { route: 'formulario', name: 'formulario', moduleId: 'formulario', nav: true,  title:'Formulário2'}
        ]);
        this.router = router;
    }
}


