namespace App {
    export class StoreService {
        static $inject = ['$http'];

        private httpService;



        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
        }

        public getStoreList () {
            let promise = this.httpService ({
                url: '/stores',
                method: 'GET',
            })

            return promise;
        }
    }
    let app = angular.module ('App');
    app.service ('StoreService', StoreService);
}
