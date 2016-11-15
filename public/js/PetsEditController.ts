namespace App {
    export class PetsEditController {
        static $inject = ['$http', '$state']

        private stateService;
        private httpService;

        public pet;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            console.log ('Passed parameters: ', this.stateService.params.id);
            this.httpService({
                url:'/pets/' + this.stateService.params.id,
                method: 'GET'
            })
            .success ((response)=>{
                console.log (response);
                this.pet = response;
            })
            .error (()=> {

            })
        }

        public savePetChanges () {
            console.log ('clicked');
            this.httpService ({
                url:'/pets/' + this.stateService.params.id,
                method: 'PUT',
                data: {
                    name: this.pet.name,
                    category: this.pet.category,
                    breed: this.pet.breed,
                    adoptionPrice: this.pet.adoptionPrice,
                    imageUrl: this.pet.imageUrl
                }
            })
            .success ((response) => {
                console.log (response);
                this.stateService.go ('pets')
            })
            .error (() => {

            })
        }
    }
}
