// Partials in EJS :
//          - Partials are reusable EJS files (snippets) that you include in multiple views.
//          - They help you avoid repeating the same code (like headers, footers, navbars).


// Structure :

//                views/
//                ├── partials/
//                │    ├── header.ejs
//                │    ├── footer.ejs
//                ├── home.ejs
//                ├── about.ejs

// Layouts in EJS :
//          - Unlike some templating engines (like Handlebars), EJS doesn’t have layouts built-in.

// Structure :
            /*
            
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title><%= title %></title>
    </head>
    <body>
        <%- include("partials/header") %>

        <!-- Page-specific content goes here -->
        <main>
            <%- body %>
        </main>

        <%- include("partials/footer") %>
        </body>
    </html>
*/
