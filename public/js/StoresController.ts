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

        public deleteStore (id) {
            console.log ('Deleted!', + id)

            this.httpService ({
                //below adding +id will specify that you only delete that specific posts by the id. So If you click the 4th post it will only delete that one.
                url: '/stores/' + id,
                method :'DELETE'
            })
            .success ((response) => {
                console.log ('Store Deleted Successfully', response);
                this.stateService.go ('stores')
            })
            .error ((response) => {
                console.log ('Error Deleting Store', response);
            })
    }

        public editStore (storeId) {
            console.log ('store id: ' + storeId);

            this.stateService.go ('stores-edit',
                {
                    id: storeId
                }
            );

        }
    }
}
