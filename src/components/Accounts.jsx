export default function Accounts({accounts, clickedAccount, displaySpendings}) {
  const accountElements = accounts.map((account) => (
    <li
      className={`account ${clickedAccount == account.id ? "selected" : ""}`}
      key={account.id}
      onClick={() => displaySpendings(account.id)}
    >
      <p>{account.title} </p>
      <p>$ {Number(account.balance).toLocaleString("en-US")}</p>
    </li>
  ))

  return (
    <div className="account-list">
      <h2>Accounts</h2>
      <ul>{accountElements}</ul>
    </div>
  )
}
