namespace App {
    export class PetService {
        static $inject = ['$http'];

        private httpService;


        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
        }

        public getPetList () {
            let promise = this.httpService ({
                url: '/pets',
                method: 'GET'
            });

            return promise;
        }

        public getPets (id) {
            let promise = this.httpService ({
                url:'/posts',
                method: 'GET',
                params: {
                    id: id
                }
            });

            return promise;
        }

        public getPetsById (id) {
            let promise = this.httpService ({
                url: '/pets',
                method: 'GET',
                params: {
                    id: id
                }
            });

            return promise;
        }
//
        public save (post) {
            let promise = this.httpService ({
                url: '/pets',
                method: 'POST',
                data: post
            });

            return promise;
        }

        public deletePet (id) {
            let promise = this.httpService ({
                url: '/pets/' + id,
                method :'DELETE'
            });

            return promise;
        }
//
        public update (id, pet) {
            let promise = this.httpService ({
                url:'/pets/' + id,
                method: 'PUT',
                data: pet
            });

            return promise;
        }
    }

    let app = angular.module ('App');
    app.service ('PetService', PetService);
}
