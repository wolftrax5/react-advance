import * as React from 'react'
import { Svg } from './style'
export const Logo = (props) => {
  return (
    <Svg
      width={696.175}
      height={131.605}
      viewBox='-98.088 9.197 696.175 131.605'
      style={{
        background: '#fff'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-glowing-gradient'
          x1={0.379}
          x2={0.621}
          y1={0.015}
          y2={0.985}
        >
          <stop offset={0} stopColor='#46b52b' />
          <stop offset={1} stopColor='#a590ff' />
        </linearGradient>
        <filter
          id='prefix__editing-glowing'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feGaussianBlur
            in='SourceGraphic'
            result='blur'
            stdDeviation={12.5}
          />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#prefix__editing-glowing)'>
        <path
          d='M5.63 0v-46.06h7.5V0h-7.5zm20.75-18.13L36.88 0h-7.94l-8.69-16.69q-.19 0-.41.03-.21.03-.65.03h-3.5v-5.5h4.25q1.37 0 2.75-.46 1.37-.47 2.5-1.54 1.12-1.06 1.81-2.96.69-1.91.69-4.72 0-1.13-.31-2.6-.32-1.47-1.29-2.81-.96-1.34-2.71-2.25-1.75-.91-4.63-.91h-3.06v-5.68h3.19q2.93 0 5.81.93 2.87.94 5.15 2.82 2.29 1.87 3.69 4.53 1.41 2.65 1.41 5.97 0 5-2.31 8.5-2.32 3.5-6.25 5.18zM63-29.69v-5.87q3.38.31 6.09 1.81 2.72 1.5 4.66 3.87 1.94 2.38 2.97 5.44 1.03 3.06 1.03 6.38 0 1.5-.19 3H56.13v-5.5h14.43q0-1.63-.53-3.13t-1.56-2.78q-1.03-1.28-2.41-2.16-1.37-.87-3.06-1.06zm-.25 23.81q.69 0 1.72-.15 1.03-.16 2.19-.56 1.15-.41 2.31-1.04 1.16-.62 2.03-1.5l2.75 4.19q-2.06 2.56-4.81 3.88-2.75 1.31-7 1.31-3.44 0-6.44-1.41-3-1.4-5.12-3.84-2.13-2.44-3.38-5.69-1.25-3.25-1.25-7 0-3.56 1.16-6.75 1.15-3.19 3.15-5.59 2-2.41 4.66-3.91t5.72-1.69v6q-2.31.44-3.81 1.88t-2.35 3.28q-.84 1.84-1.19 3.78-.34 1.94-.34 3.31 0 2.44.59 4.54.6 2.09 1.85 3.62 1.25 1.53 3.09 2.44 1.85.9 4.47.9zm31.5-4.75q0 2.82 1.16 4.19 1.15 1.38 3.34 1.63V.25q-.25.06-.81.06-2.13 0-4.1-.56-1.96-.56-3.46-1.81t-2.35-3.32q-.84-2.06-.84-5.06 0-2.87 1.22-4.97 1.22-2.09 3.12-3.43 1.91-1.35 4.35-2 2.43-.66 4.93-.66h2.75v4.44h-1.37q-1.25 0-2.63.25-1.37.25-2.56.93-1.19.69-1.97 1.97t-.78 3.28zm19.44-.31v.5q0 .5.06 1.47T114-7q.19 1 .59 1.81.41.81 1.1 1.06l-2 4.19q-.81 0-1.72-.37-.91-.38-1.75-1.07-.84-.68-1.44-1.53-.59-.84-.9-1.84-.63 1.56-2.47 2.78-1.85 1.22-4.1 1.78v-4.75q1.5-.31 2.72-1.22 1.22-.9 2.1-2.15V-21.5q0-3.06-.32-4.88-.31-1.81-1.06-2.65-.75-.85-1.84-1.06-1.1-.22-2.6-.22-1.37 0-2.59.34-1.22.34-2.25.81-1.03.47-1.81 1.03-.78.57-1.16.88l-2.81-4.31q.62-.69 1.87-1.41t2.88-1.28q1.62-.56 3.53-.91 1.91-.34 3.97-.34 1.87 0 3.65.37 1.79.38 3.25 1.25 1.47.88 2.57 2.35 1.09 1.47 1.53 3.65.44 2.19.59 4.41.16 2.22.16 4.41v8.12zm38.75-19.25l-3.38 4.06q-.93-1.12-2.59-2.09-1.66-.97-4.41-1.16v-6q3.44.19 5.91 1.47t4.47 3.72zM142.06.25v-6.19q2.25-.25 3.85-1.09 1.59-.85 3.03-1.97l2.81 4.06q-1.94 2.44-4.19 3.72-2.25 1.28-5.5 1.47zm-17.43-17.88q0-3.56 1.03-6.68 1.03-3.13 3.03-5.5 2-2.38 4.72-3.85 2.72-1.47 6.09-1.72v6.07q-3.12.68-5 3.84-1.87 3.16-1.87 7.66 0 2.31.46 4.34.47 2.03 1.35 3.59.87 1.57 2.15 2.63 1.29 1.06 2.91 1.31V.25q-3.44-.19-6.19-1.66-2.75-1.47-4.68-3.87-1.94-2.41-2.97-5.6-1.03-3.18-1.03-6.75zm47.62-12.5v19.44q0 2.13.56 3.31.57 1.19 1.6 1.82 1.03.62 2.31.78 1.28.15 2.72.15V0q-.81.13-1.63.19-.68.06-1.65.09-.97.03-1.91.03t-1.91-.06q-.96-.06-1.65-.19-2.13-.37-3.31-1.84-1.19-1.47-1.79-3.25-.59-1.78-.75-3.47-.15-1.69-.15-2.63v-19h-4.63v-5.12h4.63v-10h7.56v10h5.63v5.12h-5.63zm16.06 8.69h19.88v6.31h-19.88v-6.31zM241-46l16 46h-7.75l-11.94-34.5L225.25 0h-7.81l16.12-46H241zm-7.94 31.37h8.38l1.81 5.07h-11.94l1.75-5.07zm55-33.93h7.63V0h-7.19l-.44-4.19v-44.37zm-24 30.43q0-4.87 1.35-8.18 1.34-3.32 3.47-5.38 2.12-2.06 4.71-2.97 2.6-.9 5.1-.9 1.94 0 3.69.43 1.75.44 3.12 1.25v6.63q-1.06-1.13-2.37-1.81-1.32-.69-2.94-.69-1.94 0-3.44.97t-2.53 2.65q-1.03 1.69-1.59 3.88-.57 2.19-.57 4.69 0 2.5.63 4.65.62 2.16 1.69 3.78 1.06 1.63 2.59 2.57 1.53.93 3.34.93 3.07 0 5.19-2.43v6.5q-1.5.81-3.47 1.34-1.97.53-4.15.53-2.5 0-4.91-.9-2.41-.91-4.28-2.97-2.38-2.69-3.5-6.66-1.13-3.97-1.13-7.91zm53 18.38l-12.37-35.5h8.56l7.44 25.06V.25h-3.63zm6.19-10.44l7.5-25.06h8.5L326.88.25h-3.63v-10.44zm30.25-.44q0 2.82 1.16 4.19 1.15 1.38 3.34 1.63V.25q-.25.06-.81.06-2.13 0-4.1-.56-1.96-.56-3.46-1.81t-2.35-3.32q-.84-2.06-.84-5.06 0-2.87 1.22-4.97 1.22-2.09 3.12-3.43 1.91-1.35 4.35-2 2.43-.66 4.93-.66h2.75v4.44h-1.37q-1.25 0-2.63.25-1.37.25-2.56.93-1.19.69-1.97 1.97t-.78 3.28zm19.44-.31v.5q0 .5.06 1.47t.25 1.97q.19 1 .59 1.81.41.81 1.1 1.06l-2 4.19q-.81 0-1.72-.37-.91-.38-1.75-1.07-.84-.68-1.44-1.53-.59-.84-.9-1.84-.63 1.56-2.47 2.78-1.85 1.22-4.1 1.78v-4.75q1.5-.31 2.72-1.22 1.22-.9 2.1-2.15V-21.5q0-3.06-.32-4.88-.31-1.81-1.06-2.65-.75-.85-1.84-1.06-1.1-.22-2.6-.22-1.37 0-2.59.34-1.22.34-2.25.81-1.03.47-1.81 1.03-.78.57-1.16.88l-2.81-4.31q.62-.69 1.87-1.41t2.88-1.28q1.62-.56 3.53-.91 1.91-.34 3.97-.34 1.87 0 3.65.37 1.79.38 3.25 1.25 1.47.88 2.57 2.35 1.09 1.47 1.53 3.65.44 2.19.59 4.41.16 2.22.16 4.41v8.12zm11.94-24.31h6.75l.81 3.56V0h-7.56v-35.25zm26.25 3.87q1.06 1.07 1.65 2.47.6 1.41.88 2.94t.34 3.09q.06 1.57.06 3.07V0h-7.62v-19.19q0-2.12-.19-4.06-.19-1.94-.87-3.44-.69-1.5-1.88-2.34-1.19-.85-3.31-.85-.88 0-2.35.29-1.46.28-2.84.9v-4.81q1.69-.88 3.66-1.5 1.97-.63 3.84-.63 2.81 0 4.75 1.16t3.88 3.09zm40.18 1.19l-3.37 4.06q-.94-1.12-2.6-2.09-1.65-.97-4.4-1.16v-6q3.44.19 5.9 1.47 2.47 1.28 4.47 3.72zM440.94.25v-6.19q2.25-.25 3.84-1.09 1.6-.85 3.03-1.97l2.82 4.06q-1.94 2.44-4.19 3.72-2.25 1.28-5.5 1.47zM423.5-17.63q0-3.56 1.03-6.68 1.03-3.13 3.03-5.5 2-2.38 4.72-3.85 2.72-1.47 6.1-1.72v6.07q-3.13.68-5 3.84-1.88 3.16-1.88 7.66 0 2.31.47 4.34t1.34 3.59q.88 1.57 2.16 2.63 1.28 1.06 2.91 1.31V.25q-3.44-.19-6.19-1.66-2.75-1.47-4.69-3.87-1.94-2.41-2.97-5.6-1.03-3.18-1.03-6.75zm53.94-12.06v-5.87q3.37.31 6.09 1.81 2.72 1.5 4.66 3.87 1.94 2.38 2.97 5.44 1.03 3.06 1.03 6.38 0 1.5-.19 3h-21.44v-5.5H485q0-1.63-.53-3.13t-1.56-2.78q-1.03-1.28-2.41-2.16-1.37-.87-3.06-1.06zm-.25 23.81q.69 0 1.72-.15 1.03-.16 2.18-.56 1.16-.41 2.32-1.04 1.15-.62 2.03-1.5l2.75 4.19q-2.06 2.56-4.81 3.88-2.75 1.31-7 1.31-3.44 0-6.44-1.41-3-1.4-5.13-3.84-2.12-2.44-3.37-5.69-1.25-3.25-1.25-7 0-3.56 1.15-6.75 1.16-3.19 3.16-5.59 2-2.41 4.66-3.91 2.65-1.5 5.72-1.69v6q-2.32.44-3.82 1.88t-2.34 3.28q-.84 1.84-1.19 3.78-.34 1.94-.34 3.31 0 2.44.59 4.54.6 2.09 1.85 3.62 1.25 1.53 3.09 2.44 1.84.9 4.47.9z'
          fill='url(#prefix__editing-glowing-gradient)'
          transform='translate(1.09 99.435)'
        />
      </g>
      <style />
    </Svg>
  )
}