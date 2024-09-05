// pages/index.js
import CalendarComponent from '../../components/calendario/page'
import NavigationRail from '../../components/NavRail/page';

export default function Page() {
  return (
    <div style={{ paddingLeft: '80px' }}>
      <NavigationRail />
      <h1>Agenda Semanal</h1>
      <CalendarComponent />
    </div>
  );
}
