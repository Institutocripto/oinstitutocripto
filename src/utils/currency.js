export function formatCurrency(currency) {
  return currency.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
