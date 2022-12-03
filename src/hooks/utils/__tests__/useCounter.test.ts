import { renderHook, act } from '@testing-library/react';
import useCounter from '../useCounter';

test('should increment counter', async () => {
  const { result } = renderHook(() => useCounter());

  await act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
