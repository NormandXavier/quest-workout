import { expect, test } from 'vitest'
import { APP_NAME, BUILD_STEP } from './version'

test('test runner is wired up', () => {
  expect(APP_NAME).toBe('Quest Workout')
  expect(BUILD_STEP).toBeGreaterThanOrEqual(1)
})
