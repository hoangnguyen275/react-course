export function formatMoney(ammountCents) {

  return (ammountCents >= 0 ? `$${(ammountCents / 100).toFixed(2)}` : `-$${(-ammountCents / 100).toFixed(2)}`);

}