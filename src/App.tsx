import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Home } from './pages/Home/Home';
import styles from './App.module.css';

const ProjectDetails = lazy(() =>
  import('./pages/ProjectDetails/ProjectDetails').then((m) => ({
    default: m.ProjectDetails,
  }))
);

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Prathamesh Patekar. Software Engineer.</p>
      </div>
    </footer>
  );
}

function Loading() {
  return <div className={styles.loading}>Loading…</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
