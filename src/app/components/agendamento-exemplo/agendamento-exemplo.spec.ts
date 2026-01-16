import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoExemplo } from './agendamento-exemplo';

describe('AgendamentoExemplo', () => {
  let component: AgendamentoExemplo;
  let fixture: ComponentFixture<AgendamentoExemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoExemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoExemplo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
