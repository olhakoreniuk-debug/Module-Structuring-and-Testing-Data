Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Calling `alert("Hello world!")` opens a **modal pop-up dialog** in the browser showing the message and an **OK** button.  
It **blocks interaction** with the page until the user clicks OK.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in a variable called `myName`.

What effect does calling the `prompt` function have?
Calling `prompt("What is your name?")` opens a modal input dialog that asks the user to type a value, with OK and Cancel buttons.  
It also blocks interaction with the page until the dialog is closed.

What is the return value of `prompt`?
If the user clicks OK, `prompt` returns the string the user typed (e.g. `"Olha"`).  
If the user clicks Cancel (or closes the dialog), `prompt` returns `null`.  
The returned value is stored in the variable `myName`.
