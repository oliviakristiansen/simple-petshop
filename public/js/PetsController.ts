namespace App {
    export class PetsController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public petList;
        public newPet;
        public name;
        public category;
        public breed;
        public adoptionPrice;



        constructor ($http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            console.log ('test:', this.stateService);

            this.petList = [];
            this.newPet = {};

            this.getPetList ();

        }

        public getPetList () {
            console.log ('here');
            this.httpService ({
                url: '/pets',
                method: 'GET',
                data: {
                    name: this.name,
                    category: this.category,
                    breed: this.breed,
                    adoptionPrice: this.adoptionPrice
                }
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.petList = response;
            })
            .error ((response) => {
            })
        }

        public getPets (id) {
            console.log ('here');
            this.httpService ({
                url:'/posts',
                method: 'GET',
                params: {
                    id: id
                }
            })
        }

        public getPetsById (id) {
            console.log ('here');
            this.httpService ({
                url: '/posts',
                method: 'GET',
                params: {
                    id: id
                }
            })
        }
    }
}
