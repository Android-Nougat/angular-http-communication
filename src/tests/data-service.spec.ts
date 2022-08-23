import { HttpClient } from "@angular/common/http";
import { DataService } from "app/core/data.service"

// // import { Book } from "app/models/book";
// // import { BookTrackerError } from "app/models/bookTrackerError";

// // describe('test service',()=>{
// //     let service : DataService,
// //     mockHttp:any;
// //     // mockHttp:HttpClient;
// //     beforeEach(()=>{
// //         mockHttp = jasmine.createSpyObj('mockHttp',['delete','post']);
// //         service = new DataService(mockHttp);
// //     });
// //     it('test delete request',()=>{
// //         service.deleteBook('2');
// //         service.getAllBooks().subscribe(
// //             (data :Book[]|BookTrackerError)=>{
// //                 expect(<Book[]>data.length).toBe(6);
// //             }
// //         )
// //     })
// // })

// import {allBooks} from '../app/data';

describe("test jasmine", () => {
    let service : DataService,
    httpClientSpy:HttpClient;
    beforeEach(()=>{
        const httpClientSpy = jasmine.createSpyObj('HttpClient',['delete','post']);
        service = new DataService(httpClientSpy);
    })
    it('creating stub on original copy',()=>{
        //getAllBooks spy on obj pointing to DataService
        httpClientSpy.getAllBooks().and.returnValue(allBooks);

        // expect(service.getAllBooks()).toBe(allBooks);
    })
});
