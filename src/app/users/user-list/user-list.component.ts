import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserListDataSource } from './user-list-datasource';
import { UserService } from 'src/app/services/users/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'username', 'email', 'modules', 'status'];
  
  constructor(private userService: UserService) {}

  ngOnInit() {

    this.dataSource = new UserListDataSource(this.paginator, this.sort, this.userService.getUsers());
    
  }
}
