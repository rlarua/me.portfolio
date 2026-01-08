// React 18의 StrictMode 컴포넌트 import
import { StrictMode } from 'react'
// React DOM 클라이언트 루트 생성 함수 import
import { createRoot } from 'react-dom/client'
// 전역 CSS 스타일 import
import './index.css'
// 메인 앱 컴포넌트 import
import App from './App.jsx'

// 루트 요소를 찾아 React 앱 마운트
createRoot(document.getElementById('root')).render(
  // StrictMode: 애플리케이션의 잠재적인 문제를 감지하기 위한 래퍼
  <StrictMode>
    <App />
  </StrictMode>,
)
