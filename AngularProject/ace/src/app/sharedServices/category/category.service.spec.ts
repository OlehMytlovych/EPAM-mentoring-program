import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let injector: TestBed;
  let service: CategoryService;
  let httpMock: HttpTestingController;
  const dummyCategories = [
    'category1',
    'category2',
    'category3',
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService],
    });
    injector = getTestBed();
    service = injector.get(CategoryService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return categories', () => {
    service.getAll().subscribe(categories => {
      expect(categories.length).toBe(3);
      expect(categories).toEqual(dummyCategories);
    });

    const req = httpMock.expectOne(service.configUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCategories);
  });
});
