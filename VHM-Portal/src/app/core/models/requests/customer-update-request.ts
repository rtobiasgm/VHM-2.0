export class CustomerUpdateRequest{
    Id!: number;
    Name: string = '';
    LastName: string = '';
    DocumentId: string = '';
    BirtDate!: Date;
    PersonType: string = '';
}