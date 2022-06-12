/*
 * Scaffolding - Schematic library for Minestom
 *  Copyright (c) 2022-latest The Scaffolding Library Authors
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the “Software”), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Scaffolding',
  description: 'Schematic library for Minestom',

  themeConfig: {
    sidebar: {
      '/': getSidebar()
    }
  }
})

function getSidebar() {
  return [
    {
      text: 'Introduction',
      link: '/'
    },
    {
      text: 'Setup',
      children: [
        { text: 'Getting Started', link: '/setup/getting-started' },
      ]
    },
    {
      text: 'Using Schematics',
      children: [
        { text: 'Load', link: '/usage/read' },
        { text: 'Copy', link: '/usage/copy' },
        { text: 'Build', link: '/usage/build ' },
        { text: 'Write', link: '/usage/write ' },
      ]
    }, 
    {
      text: 'Utilities',
      children: [
        { text: 'Region', link: '/utilities/region' },
      ]
    },
  ]
}