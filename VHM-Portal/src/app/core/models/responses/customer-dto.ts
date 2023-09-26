export class CustomerDto {
    id!: number;
    name: string = '';
    lastName: string = '';
    documentId: string = '';
    birtDate!: Date;
    personType: string = '';
}