import NavigationRail from '../../components/NavRail2/page';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <NavigationRail />
      <main style={{ flexGrow: 1, padding: '24px' }}>
        <h1>Conteúdo Principal</h1>
        {/* Adicione o conteúdo do seu site aqui */}
      </main>
    </div>
  );
}

