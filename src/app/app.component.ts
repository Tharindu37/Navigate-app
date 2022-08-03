import {Component, OnInit} from '@angular/core';
import {Data} from "@angular/router";

export class Customer{
  id: string;
  name: string;
  email: string;
  salary: number;
  dob: Data;
  status: boolean;

  constructor(id: string, name: string, email: string, salary: number,dob: Data, status: boolean) {
    this.id=id;
    this.name=name;
    this.email=email;
    this.salary=salary;
    this.dob=dob;
    this.status=status;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title='';
  customerArray: Customer[]=[];

  ngOnInit(): void {
    this.customerArray.push(new Customer('C001','Nimal','nimal@gmail.com',25000, new Date(),false));
    this.customerArray.push(new Customer('C001','Bandara','bandara@gmail.com',125000, new Date(), true));
    this.customerArray.push(new Customer('C001','Kamal','kamal@gmail.com',25000, new Date(), true));
    this.customerArray.push(new Customer('C001','Jayantha','jauyantha@gmail.com',25000, new Date() ,true));
    this.customerArray.push(new Customer('C001','Nihal','nihal@gmail.com',25000, new Date(),false));

  }
}
