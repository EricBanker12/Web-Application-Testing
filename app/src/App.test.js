import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import App from './App';

test('renders without crashing', () => {
  render(<App />)
});

test('renders count of balls and strikes', () => {
  const doc = render(<App />)

  doc.getByTestId('ball')
  doc.getByTestId('strike')
})

test('renders buttons for BALL, STRIKE, FOUL, and HIT', () => {
  const doc = render(<App />)

  doc.getByTestId('ballButton')
  doc.getByTestId('strikeButton')
  doc.getByText(/FOUL/i)
  doc.getByText(/HIT/i)
})

test('BALL button increases ball count by 1', () => {
  const doc = render(<App />)
  
  const ballCounter = doc.getByTestId('ball')
  expect(ballCounter.textContent).toBe('0')

  const strikeCounter = doc.getByTestId('strike')
  expect(strikeCounter.textContent).toBe('0')
  
  const button = doc.getByTestId('ballButton')
  fireEvent.click(button)
  expect(ballCounter.textContent).toBe('1')
  expect(strikeCounter.textContent).toBe('0')
  fireEvent.click(button)
  expect(ballCounter.textContent).toBe('2')
  expect(strikeCounter.textContent).toBe('0')
  fireEvent.click(button)
  expect(ballCounter.textContent).toBe('3')
  expect(strikeCounter.textContent).toBe('0')
})

test('STRIKE button increases strike count by 1', () => {
  const doc = render(<App />)
  
  const ballCounter = doc.getByTestId('ball')
  expect(ballCounter.textContent).toBe('0')

  const strikeCounter = doc.getByTestId('strike')
  expect(strikeCounter.textContent).toBe('0')
  
  const button = doc.getByTestId('strikeButton')
  fireEvent.click(button)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('1')
  fireEvent.click(button)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('2')
})

test('BALL button resets ball and strike count on ball 4', () => {
  const doc = render(<App />)

  const ballCounter = doc.getByTestId('ball')
  expect(ballCounter.textContent).toBe('0')
  
  const strikeCounter = doc.getByTestId('strike')
  expect(strikeCounter.textContent).toBe('0')

  const strikeButton = doc.getByTestId('strikeButton')
  fireEvent.click(strikeButton)
  expect(strikeCounter.textContent).toBe('1')

  const ballButton = doc.getByTestId('ballButton')
  fireEvent.click(ballButton)
  fireEvent.click(ballButton)
  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe('3')
  expect(strikeCounter.textContent).toBe('1')

  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('0')

  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe('1')
  expect(strikeCounter.textContent).toBe('0')
})

test('STRIKE button resets ball and strike count on strike 3', () => {
  const doc = render(<App />)

  const ballCounter = doc.getByTestId('ball')
  expect(ballCounter.textContent).toBe('0')
  
  const strikeCounter = doc.getByTestId('strike')
  expect(strikeCounter.textContent).toBe('0')

  const ballButton = doc.getByTestId('ballButton')
  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe('1')

  const strikeButton = doc.getByTestId('strikeButton')
  fireEvent.click(strikeButton)
  fireEvent.click(strikeButton)
  expect(ballCounter.textContent).toBe('1')
  expect(strikeCounter.textContent).toBe('2')

  fireEvent.click(strikeButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('0')

  fireEvent.click(strikeButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('1')
})

test('FOUL button increases strike count by 1, up to 2', () => {
  const doc = render(<App />)

  const ballCounter = doc.getByTestId('ball')
  expect(ballCounter.textContent).toBe('0')
  
  const strikeCounter = doc.getByTestId('strike')
  expect(strikeCounter.textContent).toBe('0')

  const foulButton = doc.getByText(/FOUL/i)
  fireEvent.click(foulButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('1')

  fireEvent.click(foulButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('2')

  fireEvent.click(foulButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('2')
})

test('HIT button resets ball and strike count to 0', () => {
  const doc = render(<App />)

  const ballCounter = doc.getByTestId('ball')
  expect(ballCounter.textContent).toBe('0')
  
  const strikeCounter = doc.getByTestId('strike')
  expect(strikeCounter.textContent).toBe('0')

  const strikeButton = doc.getByTestId('strikeButton')
  fireEvent.click(strikeButton)
  expect(strikeCounter.textContent).toBe('1')

  const ballButton = doc.getByTestId('ballButton')
  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe('1')

  const hitButton = doc.getByText(/HIT/i)
  fireEvent.click(hitButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('0')

  fireEvent.click(strikeButton)
  fireEvent.click(strikeButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('2')

  fireEvent.click(hitButton)
  expect(ballCounter.textContent).toBe('0')
  expect(strikeCounter.textContent).toBe('0')
})