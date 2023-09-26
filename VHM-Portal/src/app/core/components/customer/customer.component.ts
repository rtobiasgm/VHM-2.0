import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDto } from '../../models/responses/customer-dto';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerRegistrationRequest } from '../../models/requests/customer-registration-request';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CustomerUpdateRequest } from '../../models/requests/customer-update-request';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'lastName', 'documentId', 'birthDate', 'personType', 'actions'];
  dataSource = new MatTableDataSource<CustomerDto>
  modalValue!: FormGroup
  showEdit: boolean = false;
  customerRegistration: CustomerRegistrationRequest = new CustomerRegistrationRequest;

  
  ngOnInit(): void {
    this.getAllCustomer();

    this.modalValue = this.fb.group({
      id: [],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      documentId: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      personType: ['', [Validators.required]]
    });

  }

  constructor(private customerService: CustomerService, private liveAnnouncer: LiveAnnouncer, private fb: FormBuilder, private notificationService: NotificationService ) {}


  get f() {
    return this.modalValue.controls;
  }

  addCustomer(){
    this.customerRegistration = this.modalValue.value;
    this.customerService.addCustomer(this.customerRegistration).subscribe({
      next: (v) => {
        console.log(v)
        this.getAllCustomer(), this.notificationService.showSuccess("Customer Added")
      }
    })
    this.modalValue.reset();
  }

  edit(customer: CustomerDto, id: number){
    this.modalValue.patchValue({
      id: id,
      name: customer.name,
      lastname: customer.lastName,
      birthdate: customer.birtDate,
      documentId: customer.documentId,
      personType: customer.personType
    });
    this.showEdit = true;
  }

  updateCustomer(id: number, customer: CustomerUpdateRequest){
    customer.Id = id;
     this.customerService.updateCustomer(id,customer).subscribe({
      next: (v) => {
        this.getAllCustomer(), this.notificationService.showInfo("Customer updated")
      }
     })
     this.modalValue.reset();
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      complete: () => {
        this.getAllCustomer();
        this.notificationService.showInfo("Customer deleted");
      }
    });
  }

  clickAddProp(){
    this.modalValue.reset();
    this.showEdit = false;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  search(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }   

  getAllCustomer(){
    return this.customerService.getCustomers().subscribe((data) => {
      this.dataSource = new MatTableDataSource<CustomerDto>(data)
    })
  }

}
