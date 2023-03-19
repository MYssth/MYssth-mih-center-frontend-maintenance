import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
// components

// ----------------------------------------------------------------------

export default function SimpleLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
