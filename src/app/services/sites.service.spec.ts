import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SitesService } from './sites.service';

describe('SitesService', () => {
  const url = "http://localhost:4000/categories";
  const response = ["Application", "Sites", "Partner"];
  let service, httpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SitesService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(SitesService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([SitesService], (service: SitesService) => {
    expect(service).toBeTruthy();
  }));

  it(`should call ${url}`, () => {
    let testResult;
    service.getCategories().subscribe(_result => testResult = _result);

    const req = httpTestingController.expectOne(url);

    req.flush(response);
  })
});
