import React from 'react';
import { ThemeProvider, styled } from 'styled-components';
import { lightTheme } from '../utils/Themes';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Dashboard from './Dashboard';
import Workouts from './Workouts';
import Tutorial from '../pages/Tutorial';
import Contact from '../components/Contact';
import Bmi from '../components/Bmi/Bmi';
import Authentication from './Authentication';
import ExerciseDetail from '../components/pages/ExerciseDetail';
import HomePage from './HomePage';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.2s ease;
`;

function MainPage() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={lightTheme}>
      
        <Container>
          {currentUser && <Navbar currentUser={currentUser} />}
          <Routes>
            
            <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/auth" />} />
            <Route path="/workouts" element={currentUser ? <Workouts /> : <Navigate to="/auth" />} />
            <Route path="/tutorials" element={currentUser ? <Tutorial /> : <Navigate to="/auth" />} />
            <Route path="/exercise/:id" element={currentUser ? <ExerciseDetail /> : <Navigate to="/auth" />} />
            <Route path="/bmi" element={currentUser ? <Bmi /> : <Navigate to="/auth" />} />
            <Route path="/contact" element={currentUser ? <Contact /> : <Navigate to="/auth" />} />
            <Route path="/auth" element={!currentUser ? <Authentication /> : <Navigate to="/dashboard" />} />
          </Routes>
        </Container>
      
    </ThemeProvider>
  );
}

export default MainPage;
