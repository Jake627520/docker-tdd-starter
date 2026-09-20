// TDD 範例的「綠燈」實作：先有失敗測試，再寫這個最小實作讓它通過。
export function sum(numbers: number[]): number {
  return numbers
    .filter((n) => !Number.isNaN(n))
    .reduce((total, n) => total + n, 0);
}
