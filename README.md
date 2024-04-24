
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
'use client';

import { useState, useEffect, useRef } from 'react';
import { ShowcaseEmbedWindow } from '@/types/sdk';

const SDK_KEY = process.env.NEXT_PUBLIC_MATTER_PORT_SDK ?? '';

export const MapFrame = () => {

  const [ matterWindow, setMatterWindow ] = useState<ShowcaseEmbedWindow>();
  const [ hasError, setHasError ] = useState<boolean>( false );
  const mapRef = useRef<HTMLIFrameElement>( null );

  useEffect(() => {
    setMatterWindow( window as ShowcaseEmbedWindow );
  }, [])
  
  useEffect(() => {

    const connectMatterport = async () => {

      // <--- Validates the HTML Object already exists --->
      if( !mapRef.current ) return;
      // <--- Validates if current window is already set --->
      if( !matterWindow?.MP_SDK ) return;

      try {
        
        await matterWindow.MP_SDK.connect(
          mapRef.current,
          SDK_KEY,
          ''
        );

      } catch ( error ) {
        console.error( error );
        setHasError( true );
      }

    }

    connectMatterport();

  }, [ mapRef, matterWindow ])
  
  // <--- Feel free to add a validation here in case an error ocurred --->
  // <--- It can be done thanks to our local state hasError --->
  if( hasError ) return (<>Ups, someting went wrong...</>)

  return (
    <iframe
      ref={ mapRef }
      width='853'
      height='480'
      src={`https://my.matterport.com/show?m=SxQL3iGyoDo&play=1&applicationKey=${ SDK_KEY }`}
      allow='fullscreen; vr'
      style={{
        width: '100%',
        height: '100%'
      }}
    >
  </iframe>
  )
}
```

>[!TIP]: This component is located in app/_components/map-frame.tsx

Finally we are going to use our component in the server page we need it.

## Pages Router
In your _app.tsx, you are going to add the 3D Showcase SDK, the same way we just did with App Router

__/pages/_app.tsx__ or wherever you need it.

```
  <>
    <Component { ...pageProps } />
    <Script src='https://static.matterport.com/showcase-sdk/latest.js' />
  </>
```

Then, the Pages Router works differently from the App Router.  
By default, everything inside the Pages Directory will be considered a client component,   
so we can simply copy and paste the implementation we have made for the client component from the App Router

>[!INFORMATION]: Check the full code on pages/map.tsx

__And well, that's basically it. Now you have set up Matterport in your Next.js app!__

## Documentation links

[Matterport Docs](https://matterport.github.io/showcase-sdk/)
[React](https://react.dev/learn)
[NextJS](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)

