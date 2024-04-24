
# Matterport on NextJS

This is a quick guide to implement Matterport in your Next.js project.  
This project is built with Typescript, so we are going to maintain strict typing throughout the project


## Matterport Typescript declarations
If you are using typescript then add Matterport declaration types could help you with intellisense
and some errors.  
[Click here to visit a link and download its declaration types](https://matterport.github.io/showcase-sdk/sdk_types.html)

After downloading the declaration you can add it in the root of your application:

> types/sdk.d.ts

If you are using the src directory:
> src/types/sdk.d.ts

## App Router
First, we are going to add the 3D Showcase SDK in our web application

__/app/layout.tsx__ or wherever you need it.

``` 
  import Script from 'next/script';
  <>
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
    <Script src='https://static.matterport.com/showcase-sdk/latest.js'/>
  </>
```

Then, we are going to create a client component and set-up everything to connect with our matterport sdk.
```

```

## Pages Router
In your _app.tsx, you are going to add the 3D Showcase SDK, the same way we just did with App Router

__/pages/_app.tsx__ or wherever you need it.

```

```

## Documentation links

[Matterport Docs](https://matterport.github.io/showcase-sdk/)

