import React, { Fragment, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

// UI Elements
import { DarkMode } from 'components/molecules'

const Wrapper = styled.div(({ theme: { fontFamily } }) => ({
  height: '100%',
  flex: 1,
  padding: '0 1rem;',
  fontFamily
}))

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

export default function Page({ children, theme, isDarkmodeToggable }) {
  const [darkMode, setDarkMode] = useState(false)
  const getLayoutProps = () => ({
    isMobile: useWindowWidth() <= 360,
    darkMode
  })
  const { colors } = theme

  const childrenWithInjectedTheme = React.Children.map(children, child =>
    child
      ? React.cloneElement(child, {
          theme,
          ...getLayoutProps()
        })
      : null
  )

  return (
    <Fragment>
      {isDarkmodeToggable && (
        <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} />
      )}
      <Global
        styles={css`
          .react-toggle-track-x {
            margin-left: 0.2rem;
          }

          a {
            text-decoration: none;
          }

          body {
            .react-toggle-track,
            .react-toggle-track-check,
            .react-toggle-track-x {
              background-color: #4d4d4d !important;
            }

            svg {
              background-color: transparent !important;
            }

            background-color: ${colors.white};
            transition: all 0.2s ease-in;
            top: 0;
            left: 0;
            ${darkMode &&
              `
              * {
                color: white !important;
              }

              background-color: ${colors.black} !important;
              color: white !important;
              transition: all .2s ease-in;

              .react-toggle-track,
              .react-toggle-track-check,
              .react-toggle-track-x {
                background-color: ${colors.white} !important;
                transition: all .2s ease;
              }
            `}
          }
        `}
      />
      <Wrapper theme={theme}>{childrenWithInjectedTheme}</Wrapper>
    </Fragment>
  )
}

Page.defaultProps = {
  isDarkmodeToggable: true
}
