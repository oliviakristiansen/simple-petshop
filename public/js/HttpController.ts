namespace App {
    export class HttpController {
        static $inject = ['$http'];

        private httpService;
        public messageResult;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.messageResult = '';
        }

        public getRequest (){
            this.httpService ({
                method: 'GET',
                url:'/test'
            })

            .success ((response) => {
                console.log ('Call was successful.');
                console.log ('This is the response message', response.message);
                this.messageResult = response.message;
            })

            .error (function (){
                console.error ('The call failed.');
            })
        }
        public getRoute () {
            this.httpService ({
                method: 'GET',
                url:'/someroute'
            })

            .success (function (response) {
                console.log ('The call was successful.');
                console.log ('This is the response message', response.message);
            })

            .error (function () {
                console.error ('The call failed.');
            });
        }
    }
}
