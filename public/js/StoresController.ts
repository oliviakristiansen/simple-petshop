namespace App {
    export class StoresController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public storeList;
        public newStore;



        constructor ($http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            console.log ('test:', this.stateService);

            this.storeList = [];
            this.newStore = {};

            this.getStoreList ();

        }

        public getStoreList () {
            console.log ('here');
            this.httpService ({
                url: '/stores',
                method: 'GET',
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.storeList = response;
            })
            .error ((response) => {
            })
        }

        public getStores (id) {
            console.log ('here');
            this.httpService ({
                url:'/stores',
                method: 'GET',
                params: {
                    id: id
                }
            })
        }

        public getStoresById (id) {
            console.log ('here');
            this.httpService ({
                url: '/stores',
                method: 'GET',
                params: {
                    id: id
                }
            })
        }
    }
}
