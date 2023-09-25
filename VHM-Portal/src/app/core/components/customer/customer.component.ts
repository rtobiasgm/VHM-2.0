import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerDto } from '../../models/responses/CustomerDto';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastName', 'documentId', 'birthDate', 'personType', 'actions'];
  dataSource = new MatTableDataSource<CustomerDto>

  constructor(private _customerService: CustomerService, private _liveAnnouncer: LiveAnnouncer, ) {}

  ngOnInit(): void {
    this.getAllCustomer();
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  search(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }
   

  getAllCustomer(){
    return this._customerService.getCustomers().subscribe((data) => {
      this.dataSource = new MatTableDataSource<CustomerDto>(data)
    })

  }
}
