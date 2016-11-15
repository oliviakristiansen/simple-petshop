namespace App {
    export class StoresEditController {
        static $inject = ['$http', '$state']

        private stateService;
        private httpService;

        public store;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            //Load the contents of a specific psot by that post's id number
            console.log ('Passed parameters: ', this.stateService.params.id);
            this.httpService({
                url:'/stores/' + this.stateService.params.id,
                method: 'GET'
            })
            .success ((response)=>{
                console.log (response);
                this.store = response;
            })
            .error (()=> {

            })
        }

        public saveStoreChanges () {
            console.log ('clicked');
            this.httpService ({
                url:'/stores/' + this.stateService.params.id,
                method: 'PUT',
                data: {
                    name: this.store.name,
                    address: this.store.address,
                    city: this.store.city,
                    state: this.store.state,
                    postalCode: this.store.postalCode
                }
            })
            .success ((response) => {
                console.log (response);
                this.stateService.go ('stores')
            })
            .error (() => {

            })
        }
    }
}
