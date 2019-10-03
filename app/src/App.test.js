import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import App from './App';

test('renders without crashing', () => {
  render(<App />)
});

test('renders count of balls and strikes', () => {
  const doc = render(<App />)
  // console.log(doc)
  doc.getByTestId('ball')
  doc.getByTestId('strike')
})

test('BALL button increases ball count by 1', () => {
  const doc = render(<App />)
  // console.log(doc)
  const counter = doc.getByTestId('ball')
  expect(counter.textContent).toBe('0')
  // const button = doc.getAllByText(/ball/i).filter(e => e.tagName === 'button')[0]
  const button = doc.getByTestId('ballButton')
  fireEvent.click(button)
  expect(counter.textContent).toBe('1')
  fireEvent.click(button)
  expect(counter.textContent).toBe('2')
  fireEvent.click(button)
  expect(counter.textContent).toBe('3')
})