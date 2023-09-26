export class CustomerRegistrationRequest {
    id!: number;
    name: string = '';
    lastname: string = '';
    documentId: string = '';
    birthdate!: Date;
    personType: string = '';
}