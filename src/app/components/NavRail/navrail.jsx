import styles from "./navrail.module.css";

const NavigationRail = () => {
  return (

<nav class="navbar">
  <div class="logo">
    <img src="logo.png" alt="Logo" class="rounded-circle" />
  </div>
  <div class="nav-btn">
    <button class="btn btn-agenda">
      <i class="fas fa-calendar-alt"></i>
    </button>
  </div>
  <ul class="nav-list">
    <li>
      <button class="btn btn-home">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </button>
    </li>
    <li>
      <button class="btn btn-favorites">
        <i class="fas fa-heart"></i>
        <span>Favoritos</span>
      </button>
    </li>
    <li>
      <button class="btn btn-search">
        <i class="fas fa-search"></i>
        <span>Pesquisar</span>
      </button>
    </li>
  </ul>
  <div class="profile-icon">
    <i class="fas fa-user-circle" style="font-size: 40px;"></i>
  </div>
</nav>

);
}

export default NavigationRail;