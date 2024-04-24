import { useState, useEffect, useRef } from 'react';
import { ShowcaseEmbedWindow } from '@/types/sdk';

const SDK_KEY = process.env.NEXT_PUBLIC_MATTER_PORT_SDK ?? '';

const MapPage = () => {

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

export default MapPage