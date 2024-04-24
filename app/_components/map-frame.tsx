'use client';

import { useState, useEffect, useRef } from 'react';

const SDK_KEY = process.env.NEXT_PUBLIC_MATTER_PORT_SDK ?? '';

export const MapFrame = () => {

  const mapRef = useRef<HTMLIFrameElement>( null );


  useEffect(() => {
  }, [])
  
  useEffect(() => {

    const connectMatterport = () => {

    }

  }, [])
  

  return (
    <iframe
      width='853'
      height='480'
      src='https://my.matterport.com/show?m=SxQL3iGyoDo&play=1&applicationKey=[YOUR_SDK_KEY_HERE]'
      allow='fullscreen; vr'
      style={{
        width: '100%',
        height: '100%'
      }}
    >
  </iframe>
  )
}
