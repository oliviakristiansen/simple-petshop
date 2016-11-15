namespace App {
    let app = angular.module ('App', ['ui.router']);

    app.config ([
        '$stateProvider',

        ($stateProvider) => {
            $stateProvider
                .state ('home', {
                    url:'/',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'homeController'
                })
                .state ('about', {
                    url:'/about',
                    templateUrl: 'templates/about.html',
                    controller: App.AboutController,
                    controllerAs: 'aboutController'
                })
                .state ('contact', {
                    url:'/contact',
                    templateUrl: 'templates/contact.html',
                    controller: App.ContactController,
                    controllerAs: 'contactController'
                })
                .state ('pets', {
                    url:'/pets',
                    templateUrl: 'templates/pets.html',
                    controller: App.PetsController,
                    controllerAs: 'petsController'
                })
                .state ('stores', {
                    url:'/stores',
                    templateUrl: 'templates/stores.html',
                    controller: App.StoresController,
                    controllerAs: 'storesController'
                })
                .state ('pets-edit', {
                    url:'/pets/edit',
                    templateUrl: 'templates/pets-edit.html',
                    controller: App.PetsEditController,
                    controllerAs: 'petsEditController',
                    params: {
                        id: null
                    }
                })
                .state ('stores-edit', {
                    url:'/stores/edit',
                    templateUrl: 'templates/stores-edit.html',
                    controller: App.StoresEditController,
                    controllerAs: 'storesEditController',
                    params: {
                        id: null
                    }
                })
        }
    ])
}
