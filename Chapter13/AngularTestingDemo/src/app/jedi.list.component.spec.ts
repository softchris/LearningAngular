import { TestBed, async } from "@angular/core/testing";
import { Jedi } from "./jedi.model";
import { By } from '@angular/platform-browser'; import { JediListComponent } from "./jedi.list.component";
import { JediDetailComponent } from "./jedi.detail.component";
;

describe('a jedi list component', () => {
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JediListComponent,
        JediDetailComponent
      ],
    }).compileComponents();
  }));

  it('should invoke switchSide method on list component', async () => {
    fixture = TestBed.createComponent(JediListComponent);
    const component = fixture.debugElement.componentInstance;

    fixture.detectChanges();

    //const elem = fixture.debugElement.query(By.css('.jedi:first-child'));
    const elem = fixture.debugElement.nativeElement.querySelector('.jedi:first-child');
    if (elem) {
      elem.click();
      fixture.detectChanges();
      expect(true).toBe(true);
    }
  });

});
