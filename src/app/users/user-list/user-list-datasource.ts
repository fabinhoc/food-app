import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';



// TODO: Replace this with your own data model type
export interface UserListItem {
  _id:string,
  name:string,
  username:string,
  email:string,
  createdAt:Date,
  updatedAt:Date
  modules:[],
  status:string,
  __V:number
}


/**
 * Data source for the UserList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserListDataSource extends DataSource<UserListItem> {
  data: UserListItem[] = []
  
  constructor(private paginator: MatPaginator, private sort: MatSort, private userService) {
    super();
  }
 
  
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
 
  connect(): Observable<UserListItem[]> {
    return new Observable<UserListItem[]>(observer => {
      this.userService.subscribe((response) => {
        if (response) {
          return this.applyMutations(response).subscribe(data => {
            observer.next(data);
          });
        }
      });
    });
  }

  applyMutations(tmpData: UserListItem[]): Observable<UserListItem[]> {
    const dataMutations = [
      observableOf(tmpData),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...tmpData]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: UserListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UserListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case '_id': return compare(+a._id, +b._id, isAsc);
        case 'username': return compare(+a.username, +b.username, isAsc);
        case 'email': return compare(+a.email, +b.email, isAsc);
        case 'modules': return compare(+a.modules, +b.modules, isAsc);
        case 'status': return compare(+a.status, +b.status, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
