// pages/index.js
"use client"

import CalendarComponent from '../../components/calendario/page';
import NavigationRail from '../../components/NavRail/page';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Page() {
  const theme = useTheme();
  const isAbove600px = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <main style={{ flexGrow: 1, paddingLeft: isAbove600px ? '80px' : '0' }}>
      <NavigationRail style={{ zIndex:"2" }}/>
      <CalendarComponent style={{ zIndex:"1" }} />
    </main>
  );
}
