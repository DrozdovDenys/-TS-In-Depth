/*eslint-disable no-underscore-dangle */
import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from './../interfaces';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;
@logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`)
    }

    // @writable(true)
    assistFaculy(): void {
        console.log('Assist faculy');

    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian}