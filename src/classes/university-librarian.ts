import  * as Interfaces from './../intefaces';
import { sealed, logger, writable, logMethod, logParameter, format } from '../decorators';

@sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements Interfaces.Librarian {
  @format()
  name: string;
  email: string;
  department: string;

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty() {
    console.log(`Assisting faculty`);
  }

  @writable(false)
  teachCommunity() {
    console.log(`Teaching community`);
  }
}