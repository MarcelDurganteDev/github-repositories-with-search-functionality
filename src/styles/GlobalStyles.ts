import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`  
  * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 } 

 body {
  overflow-x: hidden;
  width: 100%;
 }

  html {
    min-height: 100%;
    background: var(--primary);
  }

*, button, input {
  border: 0;
  background: none;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
}

ul {
  list-style: none;
}

:root {
  --primary: #ffffff;
  --black: #1b1f23;
  --gray: #586069;
  --gray-light: #6a737d;
  --gray-dark: #24292e;
  --orange: #f9826c;
  --logo: #ffffff;
  --header: #24292e;
  --username: #666666;
  --search: rgba(255, 255, 255, 0.13);
  --search-placeholder: hsla(0, 0%, 100%, .75);
  --icon: #6a737d;
  --link: #0366d6;
  --border: #e1e4e8;
  --ticker: rgba(209,213,218, .5);
  --calendar-scale-0: #ebedf0;
  --calendar-scale-1: #9BE9A8;
  --calendar-scale-2: #3FC463;
  --calendar-scale-3: #30A14E;
  --calendar-scale-4: #216E3A;
  --javascript: #f1e05a;
  --typescript: #3178c6;
  --html: #f85149;
  --PHP: #4F5D95;
  --CSS: #563d7c;
  --other-language: #8257e5;
}
 `;
