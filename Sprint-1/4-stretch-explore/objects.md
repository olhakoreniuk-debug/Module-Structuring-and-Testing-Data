## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
It shows: `ƒ log() { [native code] }` — meaning `console.log` is a built-in function in the browser.

Now enter just `console` in the Console, what output do you get back?
It prints the `console` object. In Chrome it looks like `{debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}` (an expandable object with many methods).

Try also entering `typeof console`
It returns `"object"`.

Answer the following questions:

What does `console` store?
`console` stores an object provided by the browser (the Console API). It contains methods used for debugging, like `log`, `warn`, `error`, and `assert`.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
`console.log` means “access the `log` property on the `console` object”. The `.` is the property access operator: it lets you read a property (often a function/method) from an object. So `console.log(...)` calls the `log` method on the `console` object.
