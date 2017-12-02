export class User {
    constructor(
        public FirstName: string = '',
        public LastName: string = '',
        public Email: string = '',
        public Password: string = '',
        public ConfirmPassword: string = '',
        public Address: string = '',
        public Unit: string = '',
        public City: string = '',
        public State: string = '',
        public Lucky: boolean = false
    ) {}
}
