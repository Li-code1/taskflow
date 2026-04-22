import { describe, test, expect } from 'vitest'; 
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthProvider';

describe('Página de Login', () => {
  test('deve renderizar os campos de input e o botão', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );

    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  test('deve permitir digitar no campo de e-mail', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText(/e-mail/i) as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'teste@exemplo.com' } });
    
    expect(emailInput.value).toBe('teste@exemplo.com');
  });
});