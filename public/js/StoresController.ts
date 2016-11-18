namespace App {
    export class StoresController {
        static $inject = ['$http', '$state', 'StoreService'];

        private httpService;
        private stateService;
        private storeService;

        public storeList;
        public newStore;
        public currentStore;



        constructor ($http: angular.IHttpService,
            $state: angular.ui.IState,
            storeService: App.StoreService
        ) {
            this.httpService = $http;
            this.stateService = $state;
            this.storeService = storeService;

            console.log ('test:', this.stateService);

            this.storeList = [];
            this.newStore = {};

            this.getStoreList ();

        }

        public getStoreList () {
            console.log ('here');
            this.storeService.getStoreList ()
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
            .success ((response) => {
            })
            .error ((response) => {
                console.log ('There was an error')
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
            .success ((response) =>{
                console.log ('Test data: ', response);
                this.currentStore = response [0];
            })
            .error ((response)=>{
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
