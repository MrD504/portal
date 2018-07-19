import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SitesService } from './services/sites.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
describe('AppComponent', () => {
  let service, fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: 
      [
        SitesService,
        {provide: HttpClient, useValue: {}}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    service = TestBed.get(SitesService);
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'portal'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('portal');
  }));

  it('should render title in a h1 tag', async(() => {
    spyOn(service, 'getCategories').and.returnValue(of(['Sites', 'Applications', 'Partners']))
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const divDE = fixture.debugElement.queryAll(By.css('div'));
    
    expect(divDE.length).toBe(3);
  }));
});
