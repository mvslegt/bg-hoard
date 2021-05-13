import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreSharedUiModule } from '@bg-hoard/store/shared-ui';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, StoreSharedUiModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'store'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.title = 'Board Game Hoard';
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Board Game Hoard');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.title = 'Board Game Hoard';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain(
      'Board Game Hoard'
    );
  });
});
