import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './components/context/ThemeProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
   <StrictMode>
     <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </ThemeProvider>
      </QueryClientProvider>
  </StrictMode>,
)