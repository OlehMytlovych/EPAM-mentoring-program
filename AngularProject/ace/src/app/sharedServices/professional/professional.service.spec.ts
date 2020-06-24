import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfessionalService } from './professional.service';
import { Professional, ProCategory } from '../../interfaces/professional';

describe('ProfessionalService', () => {
  let injector: TestBed;
  let service: ProfessionalService;
  let httpMock: HttpTestingController;
  const dummyProfs: Professional[] = [
    {
      _id: '5ed395a9408be5bec24406ce',
      index: 0,
      guid: 'd601340f-d87c-4ce9-852b-4799342359f4',
      isActive: false,
      picture: 'http://placehold.it/400x400',
      name: 'Roth Hudson',
      email: 'rothhudson@zedalis.com',
      phone: '+1 (864) 436-2705',
      address: '151 Rapelye Street, Oceola, Illinois, 1215',
      citizenId: 12345,
      about: 'eiusmod minim veniam esse eiusmod irure aliqua deserunt sit amet consectetur qui excepteur ut elit deserunt excepteur occaecat veniam elit',
      registered: '2014-09-08T12:37:47 -03:00',
      categories: [
        {
          categoryName: 'electricity',
          rating: 97,
        },
        {
          categoryName: 'plumbing',
          rating: 70,
        },
        {
          categoryName: 'roof',
          rating: 77,
        },
      ],
      experience: [
        {
          photos: [
            'http://placehold.it/50x50',
            'http://placehold.it/50x50',
            'http://placehold.it/50x50',
          ],
          about: 'do adipisicing commodo occaecat Lorem consectetur adipisicing ad eu aute incididunt excepteur enim labore nisi voluptate labore et quis Lorem quis minim consectetur consequat consectetur',
        },
        {
          photos: [
            'http://placehold.it/50x50',
            'http://placehold.it/50x50',
            'http://placehold.it/50x50',
          ],
          about: 'qui sit cillum tempor pariatur qui enim duis excepteur adipisicing fugiat non consectetur adipisicing anim sint do ipsum commodo sit in velit anim dolore et',
        },
      ],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfessionalService],
    });
    injector = getTestBed();
    service = injector.get(ProfessionalService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return professionals', () => {
    service.getProfessionals('electricity').subscribe(profs => {
      expect(profs.length).toBe(1);
      expect(profs).toEqual(dummyProfs);
    });

    const req = httpMock.expectOne(service.configUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProfs);
  });
});
