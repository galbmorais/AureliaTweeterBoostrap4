export class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = 'Tweeter';
        config.map([
          { route: ['', 'tweets'],     name: 'tweets',     moduleId: 'tweeter',  title:'Tweeter' },
        ]);
      }
}
