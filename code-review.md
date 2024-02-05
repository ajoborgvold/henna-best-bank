# Code review: BestBank
**Code by: Henna**
**Reviewer: Ajo**


## Highlights
1. All requirements met
2. All stretch goals implemented
  - Column with spending bars
  - Animated hover effect on buttons
  - Data fetched from JS
3. Fully responsive design
  - CSS grid to make two column layout on larger screens
4. Firebase for storing data
5. Good understanding of React hooks (useState and useEffect)


## Suggestions for improvement
React/JSX:
[] Create separate components for accounts and spendings
[] Render spendings with ul and li instead of divs (improves accessibility)
[] Render "no spendings" message as p instead of div + h3; update styling
[] Improve error handling in try... catch block; render something to inform the user about the error

CSS:
[] Add more comments in file and group selectors together based on UI sections
[] Set border and background-color on .action-btn and .account individually to achieve better file structure
[] Set padding-left: 0 on all ul elements (ll. 18, 91, 101)
[] Add hover/focus styling to accounts






            <Accounts
              accounts={accounts}
              clickedAccount={clickedAccount}
              displaySpendings={displaySpendings}
            />
            <Spendings accountSpendings={accountSpendings} />