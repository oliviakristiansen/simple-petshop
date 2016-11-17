namespace App {
    export class StoreService {
        static $inject = ['http'];

        private httpService;



        cunstructor ($http: angular.IHttpService) {
            this.httpService = $http;
        }
    }
}
