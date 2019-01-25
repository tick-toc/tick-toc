import React, { Component } from 'react'
import '../styles/TestSvg.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const TEST_QUERY = gql`
  query {
    info
  }
`

export default class TestSvg extends Component {

  render() {
    return (
      <svg style={{width: '500px', height: '500px'}} viewBox='0 0 887 887' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
        fillRule='evenodd' clipRule='evenodd' strokeLinecap='round' strokeLinejoin='round'
        strokeMiterlimit='1.5'>
        <g transform='translate(-607 -1018)'>
          <clipPath className="what-is-this" id='a'>
            <path d='M607 1018h887v887H607z' />
          </clipPath>
          <g clipPath='url(#a)'>
            <use  xlinkHref='#_Image2' width='887' height='887' transform='translate(607 1018)'
            />
          </g>
          <path d='M1297.65 1301.72h98.7v517.67h-98.7zM659.51 1111.93h98.7v711.17h-98.7z'
            fill='#373c50' />
          <path d='M1323.38 1406.87h47.25v47.25h-47.25zM1323.38 1548.77h47.25v47.25h-47.25zM1323.38 1693.45h47.25v47.25h-47.25zM685.25 1430.5h47.24v47.24h-47.24zM685.25 1301.72h47.24v47.25h-47.24zM685.25 1177.95h47.24v47.25h-47.24z'
            fill='#494f53' />
          <Query query={TEST_QUERY} >
            {data => {
            console.log(data,'<<<DATA')
            return <path className="what-is-this" d='M1347 1430.49l-638.13-228.91' fill='none' stroke='#fff' strokeWidth='18.75'/>
          }}
          </Query>
          <path className="what-is-this" d='M1347 1430.49l-638.13-228.91' fill='none' stroke='#fff' strokeWidth='18.75'
          />
          <path className="what-is-this"  d='M1347 1572.39l-638.13-247.04' fill='none' stroke='#0402ff' strokeWidth='18.75'
          />
          <path className="what-is-this" d='M708.87 1454.12L1347 1717.07' fill='none' stroke='#99FF00' strokeWidth='18.75'
          />
        </g>
        <defs>
          <image id='_Image2' width='887' height='887' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3cAAAN3CAYAAACRM6MWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAATwElEQVR4nO3XsU2CAQAG0U9D4QIm7sOUxNKCXdjDIQwNO0Dxx8t7E1x7b5fvn89t1wEAAPBf3U7bPradjy4BAADgaff3owsAAAB4nbkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDA3AEAAASYOwAAgABzBwAAEGDuAAAAAswdAABAgLkDAAAIMHcAAAAB5g4AACDgtO1329fRIQAAADzt7wEhZg2LZxixFQAAAABJRU5ErkJggg=='
          />
          <filter id="shadow">
            <feDropShadow floodColor="yellow" stdDeviation="10" />
          </filter>
        </defs>
      </svg>
    )
  }
}