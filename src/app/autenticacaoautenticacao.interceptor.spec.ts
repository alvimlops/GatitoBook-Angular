import { TestBed } from '@angular/core/testing';

import { AutenticacaoautenticacaoInterceptor } from './autenticacaoautenticacao.interceptor';

describe('AutenticacaoautenticacaoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutenticacaoautenticacaoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutenticacaoautenticacaoInterceptor = TestBed.inject(AutenticacaoautenticacaoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
