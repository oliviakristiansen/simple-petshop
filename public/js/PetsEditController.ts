namespace App {
    export class PetsEditController {
        static $inject = ['$http', '$state', 'PetService']

        private stateService;
        private httpService;
        private petService;
        private updateId;

        public pet;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState,
            petService: App.PetService
        ) {
            this.httpService = $http;
            this.stateService = $state;
            this.petService = petService;

            this.updateId = this.stateService.params.id;

            console.log ('Passed parameters: ', this.stateService.params.id);

            this.petService.getPetsById (this.updateId)

            .success ((response)=>{
                console.log (response);
                this.pet = response [0];
            })
            .error (()=> {

            })
        }

        public savePetChanges () {
            console.log ('clicked');
            this.petService.update (this.updateId, this.pet)
                .success ((response) => {
                    console.log ('Data saved.');
                    this.stateService.go ('pets')
                })
                .error ((response) => {

                })
        }
    }
}
