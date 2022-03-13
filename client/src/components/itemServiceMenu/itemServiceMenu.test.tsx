import React from 'react';
import { render, screen } from '@testing-library/react';
import { dataServices21vek } from '../../shared/mocks';
import ItemServiceMenu from './itemServiceMenu';

describe('Test ItemServiceMenu component', () => {
  it('should render component', () => {
    render(<ItemServiceMenu info={dataServices21vek['476171'][0]} />);

    expect(screen.getByText(/сертификат «Негарантийный ремонт» на 1 год/i)).toBeInTheDocument();
    expect(screen.getByText(/ремонт устройства – 1 раз/i)).toBeInTheDocument();
    expect(screen.getByText(/44/i)).toBeInTheDocument();
    expect(screen.getByText(/подробнее/i)).toBeInTheDocument();
    expect(screen.queryByText(/стоимость может измениться/i)).not.toBeInTheDocument();
  });

  it("should don't render button 'подробнее'", () => {
    render(<ItemServiceMenu info={dataServices21vek['476171'][2]} />);

    expect(screen.queryByText(/подробнее/i)).not.toBeInTheDocument();
    expect(screen.getByText(/стоимость может измениться/i)).toBeInTheDocument();
  });

  it('should render price change information', () => {
    render(<ItemServiceMenu info={dataServices21vek['476171'][2]} />);

    expect(screen.getByText(/стоимость может измениться/i)).toBeInTheDocument();
  });
});
