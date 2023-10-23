import React from 'react';
import { render, screen } from '@testing-library/react';
import ApiSettings from '../../components/tabs/apiSettings';
import * as apiSettingsService from '../../services/tabs/apiSettingsService';
import * as apiRequestsInfra from '../../infra/tabs/requets'; 

describe('ApiSettings Service', () => {
  it('should create a mock for checkMicroservice', async () => {
    const mockCheckMicroserviceInfra = jest.spyOn(apiRequestsInfra, 'checkMicroservice');
    mockCheckMicroserviceInfra.mockResolvedValue(false);

    const result = await apiSettingsService.checkMicroservice();

    expect(result).toBe(false); 

    mockCheckMicroserviceInfra.mockRestore(); 
  });

  it('should create a mock for getData', async () => {
  const inputData = [];
  const mockGetDataInfra = jest.spyOn(apiRequestsInfra, 'getData');
  mockGetDataInfra.mockResolvedValue([]);

  const result = await apiSettingsService.getData(inputData);

  expect(result).toStrictEqual([]);
  
  mockGetDataInfra.mockRestore();
  });
});



describe('ApiSettings Component', () => {
  it('renders without errors when microservice is unavailable', async () => {
    const mockCheckMicroservice = jest.spyOn(apiSettingsService, 'checkMicroservice');
    mockCheckMicroservice.mockResolvedValue(false); // Simule o microserviço como indisponível

    render(<ApiSettings />);
    
    expect(screen.getByText('common.unavaible')).toBeInTheDocument();
    
    mockCheckMicroservice.mockRestore();
  });

});