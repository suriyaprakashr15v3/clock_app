import { renderHook } from "@testing-library/react";
import useclock from "../../hooks/useclock";

test("useclock Hook", () => {
  const time = new Date();
  const { result } = renderHook(() => useclock());
  expect(result.current.hours).toEqual(time.getHours());
  expect(result.current.minutes).toEqual(time.getMinutes());
});
